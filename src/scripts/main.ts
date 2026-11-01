/**
 * Site-wide interactions. Each feature is a small function that sets itself up
 * on `astro:page-load` (first load + every client-side navigation) and cleans up
 * through a shared AbortSignal before the next page swaps in.
 */

const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = <T extends Element = HTMLElement>(selector: string, root: ParentNode = document) =>
  root.querySelector<T & Element>(selector) as T | null;
const $$ = <T extends Element = HTMLElement>(selector: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll(selector)) as T[];

function announce(message: string) {
  const region = $('[data-announcer]');
  if (region) region.textContent = message;
}

/* ── Theme ──────────────────────────────────────────────────────────────── */
type Theme = 'light' | 'dark';

const currentTheme = (): Theme =>
  document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';

function syncThemeToggles() {
  for (const button of $$('[data-theme-toggle]')) {
    const dark = currentTheme() === 'dark';
    button.setAttribute('aria-pressed', String(dark));
    button.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  }
}

function setTheme(theme: Theme, origin?: { x: number; y: number }) {
  const root = document.documentElement;
  const apply = () => {
    root.dataset.theme = theme;
    syncThemeToggles();
  };
  try {
    localStorage.setItem('theme', theme);
  } catch {
    /* storage unavailable — the choice just won't persist */
  }

  if (reducedMotion()) return apply();

  // Circular reveal from the toggle, where View Transitions are supported.
  if (document.startViewTransition && origin) {
    root.classList.add('theme-vt');
    const transition = document.startViewTransition(apply);
    transition.ready.then(() => {
      const radius = Math.hypot(
        Math.max(origin.x, innerWidth - origin.x),
        Math.max(origin.y, innerHeight - origin.y),
      );
      root.animate(
        {
          clipPath: [
            `circle(0px at ${origin.x}px ${origin.y}px)`,
            `circle(${radius}px at ${origin.x}px ${origin.y}px)`,
          ],
        },
        { duration: 650, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', pseudoElement: '::view-transition-new(root)' },
      );
    });
    transition.finished.finally(() => root.classList.remove('theme-vt'));
    return;
  }

  root.classList.add('theme-fade');
  apply();
  setTimeout(() => root.classList.remove('theme-fade'), 500);
}

function initTheme(signal: AbortSignal) {
  syncThemeToggles();
  for (const button of $$('[data-theme-toggle]')) {
    button.addEventListener(
      'click',
      () => {
        const rect = button.getBoundingClientRect();
        setTheme(currentTheme() === 'dark' ? 'light' : 'dark', {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      },
      { signal },
    );
  }
}

// Follow system changes until the visitor picks a theme themselves.
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
  let saved: string | null = null;
  try {
    saved = localStorage.getItem('theme');
  } catch {}
  if (!saved) {
    document.documentElement.dataset.theme = event.matches ? 'dark' : 'light';
    syncThemeToggles();
  }
});

/* ── Header: hide on scroll down, scrollspy, sliding indicator ─────────── */
function initHeader(signal: AbortSignal) {
  const header = $('#site-header');
  if (!header) return;

  let lastY = scrollY;
  const onScroll = () => {
    const y = scrollY;
    const menuOpen = $('[data-mobile-menu]')?.dataset.open === 'true';
    header.dataset.hidden = String(!menuOpen && y > 160 && y > lastY + 4);
    if (y < lastY - 4 || y < 160) header.dataset.hidden = 'false';
    header.dataset.scrolled = String(y > 24);
    lastY = y;
  };
  onScroll();
  addEventListener('scroll', onScroll, { passive: true, signal });
  // Show the header again when keyboard focus moves into it.
  header.addEventListener('focusin', () => (header.dataset.hidden = 'false'), { signal });

  const list = $('[data-nav-list]');
  const indicator = $('[data-nav-indicator]');
  const moveIndicator = (id: string | null) => {
    const link = id ? $<HTMLAnchorElement>(`[data-nav-list] [data-nav-link="${id}"]`) : null;
    if (!indicator || !list) return;
    if (!link) {
      indicator.style.opacity = '0';
      return;
    }
    indicator.style.opacity = '1';
    indicator.style.width = `${link.offsetWidth}px`;
    indicator.style.translate = `${link.parentElement!.offsetLeft}px 0`;
  };

  const setActive = (id: string | null) => {
    for (const link of $$('[data-nav-link]')) {
      if (link.dataset.navLink === id) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    }
    moveIndicator(id);
  };

  const sections = $$('main section[id]');
  if (sections.length === 0) {
    setActive(null);
    return;
  }

  const visible = new Map<string, number>();
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) visible.set(entry.target.id, entry.intersectionRatio);
      // The section occupying the band around the upper-middle of the viewport wins.
      const active = sections.find((section) => (visible.get(section.id) ?? 0) > 0);
      setActive(active?.id ?? null);
    },
    { rootMargin: '-35% 0px -60% 0px', threshold: [0, 0.01] },
  );
  sections.forEach((section) => observer.observe(section));
  signal.addEventListener('abort', () => observer.disconnect());
  addEventListener('resize', () => moveIndicator($('[data-nav-list] [aria-current="true"]')?.dataset.navLink ?? null), {
    passive: true,
    signal,
  });
}

/* ── Mobile menu ───────────────────────────────────────────────────────── */
function initMobileMenu(signal: AbortSignal) {
  const menu = $('[data-mobile-menu]');
  const toggle = $<HTMLButtonElement>('[data-menu-toggle]');
  if (!menu || !toggle) return;

  const setOpen = (open: boolean, restoreFocus = true) => {
    menu.dataset.open = String(open);
    menu.toggleAttribute('inert', !open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.documentElement.style.overflow = open ? 'hidden' : '';
    if (open) $<HTMLAnchorElement>('a', menu)?.focus({ preventScroll: true });
    else if (restoreFocus && menu.contains(document.activeElement)) toggle.focus();
  };

  setOpen(false, false);
  toggle.addEventListener('click', () => setOpen(menu.dataset.open !== 'true'), { signal });
  for (const link of $$('[data-menu-close]', menu)) {
    link.addEventListener('click', () => setOpen(false, false), { signal });
  }
  addEventListener(
    'keydown',
    (event) => {
      if (event.key === 'Escape' && menu.dataset.open === 'true') setOpen(false);
    },
    { signal },
  );
  matchMedia('(min-width: 64rem)').addEventListener('change', (event) => event.matches && setOpen(false, false), {
    signal,
  });
}

/* ── Scroll reveal ─────────────────────────────────────────────────────── */
function initReveal(signal: AbortSignal) {
  const targets = $$('[data-reveal]:not(.is-visible)');
  if (reducedMotion() || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  targets.forEach((el) => observer.observe(el));
  signal.addEventListener('abort', () => observer.disconnect());
}

/* ── Pointer effects: card spotlight ───────────────────────────────────── */
function initPointerEffects(signal: AbortSignal) {
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches || reducedMotion()) return;

  for (const card of $$('[data-spotlight]')) {
    card.addEventListener(
      'pointermove',
      (event) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
        card.style.setProperty('--my', `${event.clientY - rect.top}px`);
      },
      { signal, passive: true },
    );
  }

}

/* ── Project filter ────────────────────────────────────────────────────── */
function initProjectFilter(signal: AbortSignal) {
  const root = $('[data-project-filter]');
  if (!root) return;
  const buttons = $$<HTMLButtonElement>('[data-filter]', root);
  const cards = $$('[data-project-card]');
  const empty = $('[data-project-empty]');

  const apply = (filter: string) => {
    let shown = 0;
    for (const card of cards) {
      const match = filter === 'all' || card.dataset.category === filter;
      card.hidden = !match;
      if (match) shown++;
      // Featured layout only makes sense when showing everything.
      card.classList.toggle('is-featured', match && filter === 'all' && card.dataset.featured === 'true');
    }
    if (empty) empty.hidden = shown > 0;
    buttons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
    announce(`${shown} project${shown === 1 ? '' : 's'} shown`);
  };

  for (const button of buttons) {
    button.addEventListener(
      'click',
      () => {
        const filter = button.dataset.filter ?? 'all';
        if (!document.startViewTransition || reducedMotion()) return apply(filter);
        cards.forEach((card, index) => (card.style.viewTransitionName = `project-card-${index}`));
        const transition = document.startViewTransition(() => apply(filter));
        transition.finished.finally(() => cards.forEach((card) => (card.style.viewTransitionName = '')));
      },
      { signal },
    );
  }
}

/* ── Copy to clipboard ─────────────────────────────────────────────────── */
function initCopy(signal: AbortSignal) {
  for (const button of $$<HTMLButtonElement>('[data-copy]')) {
    const label = $('[data-copy-label]', button);
    const original = label?.textContent ?? '';
    let timer = 0;
    button.addEventListener(
      'click',
      async () => {
        try {
          await navigator.clipboard.writeText(button.dataset.copy ?? '');
          button.dataset.copied = 'true';
          if (label) label.textContent = 'Copied';
          announce('Email address copied to clipboard');
          clearTimeout(timer);
          timer = window.setTimeout(() => {
            button.dataset.copied = 'false';
            if (label) label.textContent = original;
          }, 2000);
        } catch {
          location.href = `mailto:${button.dataset.copy}`;
        }
      },
      { signal },
    );
  }
}

/* ── Footer: back to top + live year ───────────────────────────────────── */
function initFooter(signal: AbortSignal) {
  $('[data-back-to-top]')?.addEventListener(
    'click',
    () => {
      scrollTo({ top: 0, behavior: reducedMotion() ? 'auto' : 'smooth' });
      $<HTMLAnchorElement>('#site-header a')?.focus({ preventScroll: true });
    },
    { signal },
  );
  $$('[data-year]').forEach((el) => (el.textContent = String(new Date().getFullYear())));
}

/* ── Boot ──────────────────────────────────────────────────────────────── */
let controller: AbortController | undefined;

document.addEventListener('astro:page-load', () => {
  controller?.abort();
  controller = new AbortController();
  const { signal } = controller;

  initTheme(signal);
  initHeader(signal);
  initMobileMenu(signal);
  initReveal(signal);
  initPointerEffects(signal);
  initProjectFilter(signal);
  initCopy(signal);
  initFooter(signal);
});
