import { Github, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { whatsappUrl } from "./data";

export function Footer() {
  return (
    <footer className="relative z-20 mt-8 grid w-full max-w-none grid-cols-1 items-center gap-3 border-t border-white/[.07] px-4 py-4 text-xs text-zinc-600 lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:w-[calc(100%-4rem)] lg:max-w-7xl lg:-translate-x-1/2 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-5 lg:px-0 lg:py-4">
      <p className="hidden whitespace-nowrap sm:block">
        © {new Date().getFullYear()} Rafli Rashadifa.
      </p>
      <div className="flex items-center justify-between gap-3 lg:col-start-3 lg:justify-end">
        <span className="text-[10px] font-medium uppercase tracking-[.17em] text-zinc-600">
          Find me
        </span>
        <div className="flex items-center gap-2">
          <SocialLink label="GitHub" href="https://github.com/raflirasss">
            <Github />
          </SocialLink>
          <SocialLink label="LinkedIn" href="https://www.linkedin.com/in/raflirasss/">
            <Linkedin />
          </SocialLink>
          <SocialLink label="Instagram" href="https://instagram.com/raflirasss">
            <Instagram />
          </SocialLink>
          <SocialLink label="WhatsApp" href={whatsappUrl}>
            <MessageCircle />
          </SocialLink>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-8 w-8 place-items-center rounded-lg border border-white/[.08] text-zinc-500 transition-colors hover:border-blue-300/30 hover:text-blue-200"
    >
      {children}
    </a>
  );
}
