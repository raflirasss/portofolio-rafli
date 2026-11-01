/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT — the only file you need to edit to update the website.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  • Every section of the site reads from the `portfolio` object below.
 *  • Lines marked `TODO` still need your input. Search this file for "TODO".
 *  • Optional fields can be deleted; the UI hides what isn't there.
 *  • Empty arrays (e.g. `certificates: []`) hide the whole section and its nav link.
 *  • Wrap words in *asterisks* in titles to render them in the italic serif accent.
 *
 *  Assets:
 *  • Images live in src/assets/… and are imported below — Astro converts them to
 *    responsive WebP at build time. Replace a photo by overwriting the file with
 *    the same name, or import a new file and update the reference.
 *  • PDFs live in public/documents/… and are linked by path.
 *
 *  See README.md → "Customizing content" for step-by-step examples.
 */
import type { Portfolio } from '../types/portfolio';

import profilePhoto from '../assets/profile/rafli-profile.png';
import graduationPhoto from '../assets/achievements/graduation-2026.jpg';
import nanOceanHomepage from '../assets/projects/nan-ocean-homepage.png';
import bkfInstagramFeed from '../assets/projects/bkf-instagram-feed.png';
import bkfShopeeStore from '../assets/projects/bkf-shopee-store.png';
import arenesiaInstagramFeed from '../assets/projects/arenesia-instagram-feed.png';
import arenesiaFacebookPage from '../assets/projects/arenesia-facebook-page.png';
import arenesiaShopeeStore from '../assets/projects/arenesia-shopee-store.png';
import dicodingAwsPreview from '../assets/certificates/dicoding-aws-cloud-practitioner.png';
import nfDigitalMarketingPreview from '../assets/certificates/nf-academy-digital-marketing.png';
import nfDataSciencePreview from '../assets/certificates/nf-academy-codeless-data-science.png';

export const portfolio: Portfolio = {
  // ───────────────────────────────────────────────────────── Personal info ──
  personal: {
    fullName: 'Teuku Muhammad Rafli Rashadifa',
    shortName: 'Rafli',
    monogram: 'TMRR',
    role: 'Informatics Engineering Graduate · Digital Marketing & Web',
    email: 'rrashadifa@gmail.com',
    whatsapp: '085163138747',
    whatsappCountryCode: '62',
    whatsappMessage: "Hi Rafli, I found your portfolio and I'd like to talk.",
    availability: 'Open to opportunities', // TODO: confirm or remove
    photo: {
      src: profilePhoto,
      alt: 'Portrait of Teuku Muhammad Rafli Rashadifa',
      position: '50% 32%',
    },
    languages: ['Indonesian (Native)', 'English (Intermediate)'],
  },

  // ──────────────────────────────────────────────────────────────────── CV ──
  // To update your CV, overwrite public/documents/cv.pdf with the new file.
  // If the file is missing, every "Download CV" button hides itself.
  cv: {
    path: '/documents/cv.pdf',
    downloadName: 'CV-Teuku-Muhammad-Rafli-Rashadifa.pdf',
  },

  // ────────────────────────────────────────────────────────────────── Hero ──
  hero: {
    eyebrow: 'Portfolio',
    headline: 'Building digital products — and the *stories* that help them grow.',
    intro:
      'Informatics Engineering graduate with hands-on experience in digital marketing, e-commerce, content creation and building websites for real businesses.',
    primaryCta: { label: 'Explore My Work', href: '#projects' },
    secondaryCta: { label: 'Download CV' },
    disciplines: [
      'Web Development',
      'Software Engineering',
      'Digital Marketing',
      'Content Creation',
      'Data Analytics',
    ],
  },

  // ───────────────────────────────────────────────────────────────── About ──
  about: {
    statement:
      'I sit between two worlds — the *logic* of engineering and the *craft* of communication — and I like building things that need both.',
    paragraphs: [
      "I'm an Informatics Engineering graduate from STT Terpadu Nurul Fikri with hands-on experience in digital marketing, e-commerce, marketplace management, content creation and customer service. I'm detail-oriented, adaptable and a fast learner.",
      "I've managed Shopee and Tokopedia catalogs, run marketplace promotions, monitored sales performance and produced feeds, Reels and short-form video. On the technical side, I build websites and explore software projects — from a live company profile website to a YOLO-based computer vision capstone.",
    ],
    facts: [
      { label: 'Discipline', value: 'Informatics Engineering' },
      { label: 'Education', value: 'STT Terpadu Nurul Fikri' },
      { label: 'Focus', value: 'Marketing · E-Commerce · Web' },
      { label: 'Email', value: 'rrashadifa@gmail.com' },
    ],
  },

  // ──────────────────────────────────────────────────────────────── Skills ──
  // From your CV, plus the tools used in your projects (last group).
  // Icons: see src/utils/icons.ts for the available names.
  skills: [
    {
      title: 'Digital Marketing',
      icon: 'megaphone',
      description: 'Promoting products and brands across social and paid channels.',
      skills: [
        'Social Media Marketing',
        'Content Creation',
        'Copywriting',
        'Digital Promotion',
        'Facebook Ads',
        'Google Ads',
      ],
    },
    {
      title: 'E-Commerce',
      icon: 'shop',
      description: 'Running marketplace stores and keeping catalogs accurate.',
      skills: [
        'Shopee',
        'Tokopedia',
        'Product Listing',
        'Catalog Management',
        'Marketplace Administration',
        'Voucher & Free Shipping',
      ],
    },
    {
      title: 'Creative',
      icon: 'palette',
      description: 'Visuals and short-form video for social media.',
      skills: ['Canva', 'CapCut', 'Product Photo Editing', 'Social Media Feed', 'Reels', 'Short-form Video'],
    },
    {
      title: 'Data & Productivity',
      icon: 'chart',
      description: 'Organizing data and reading sales performance.',
      skills: ['Microsoft Excel', 'Google Sheets', 'Sales Analysis', 'Data Management', 'KNIME Analytics Platform'],
    },
    {
      title: 'Web & Software',
      icon: 'code',
      description: 'Tools from my web, app and research projects.',
      skills: ['YOLO', 'Computer Vision'], // TODO: add the languages/frameworks you use
    },
  ],

  // ────────────────────────────────────────────────────────────── Projects ──
  // Add a project = add an object to this array. `slug` must be unique.
  // `palette` colors draw the generated cover when there is no `cover` image.
  projects: [
    {
      slug: 'nan-ocean-services',
      title: 'NAN Ocean Services — Company Profile Website',
      summary:
        'Company profile website for a ship chandler and marine supply company, built for a professional corporate presence and lead generation.',
      description:
        'A company profile website for NAN Ocean Services, a ship chandler and marine supply company. The site presents the business and its services to ship owners, operators and agents, and turns visits into enquiries through quotation requests and WhatsApp contact.',
      category: 'Web Development',
      tags: ['Company Profile', 'Corporate Website', 'Lead Generation'],
      tech: [], // TODO: list the technologies you used (e.g. 'Astro', 'Tailwind CSS')
      status: 'Live',
      // year: '2026', // TODO
      // role: 'Web developer', // TODO
      cover: {
        src: nanOceanHomepage,
        alt: 'Homepage of the NAN Ocean Services website: "Reliable supplies for every vessel, delivered to the quay."',
        position: '0% 50%',
      },
      palette: ['#0ea5e9', '#0b1d3a'],
      featured: true,
      links: {
        live: 'https://nanoceanservices.com/',
      },
      details: [
        {
          heading: 'Overview',
          body: 'A professional online presence for NAN Ocean Services that explains what the company does and makes it easy for potential clients to get in touch.',
        },
        {
          heading: 'What the site covers',
          body: [
            'Ship chandler and marine supply services',
            'Logistics & delivery and service support',
            'Request-a-quotation call to action',
            'Direct WhatsApp contact for enquiries',
          ],
        },
        {
          heading: 'Goals',
          body: ['Professional corporate presence', 'Lead generation'],
        },
      ],
    },
    {
      slug: 'bkf-cafe-supplies',
      title: 'BKF Cafe Supplies — Social Media & Marketplace Content',
      summary:
        'Instagram content and Shopee product visuals for a coffee and cafe supplies brand: business tips for cafe owners, recipe cards, Reels and a consistent product thumbnail system.',
      description:
        'BKF Cafe Supplies sells coffee and cafe ingredients — green beans, coffee beans, Denali syrups and powders, and DRiPP products — to cafe owners through Instagram and its Shopee store. As part of my Marketplace & E-Commerce role at PT Kinawa Argo International, I created content that presents the brand as a support system for cafe businesses, not just a supplier: practical business tips that earn attention, recipes that show the products in use, and store visuals that make the catalog easy to browse.',
      category: 'Marketing & Content',
      tags: ['Social Media Content', 'Instagram', 'Shopee', 'Content Design'],
      tech: ['Instagram', 'Shopee'], // TODO: add the tools you used (e.g. Canva, CapCut)
      company: 'PT Kinawa Argo International',
      year: '2023 — 2024',
      cover: {
        src: bkfInstagramFeed,
        alt: 'BKF Cafe Supplies Instagram feed: maroon-themed posts such as "Pricing Psychology", "1 Bahan 3 Menu" and "Rahasia Menu Cafe Laris?", a recipe card and Reels',
        position: '50% 0%',
      },
      palette: ['#f59e0b', '#7c2d12'],
      details: [
        {
          heading: 'Goal',
          body: 'Give cafe owners a reason to follow BKF and come back to the store beyond product and price — by sharing content that is genuinely useful for running a cafe.', // TODO: adjust if the goal was different
        },
        {
          heading: 'Instagram content',
          body: [
            'Educational carousels on running a cafe — pricing psychology, menu strategy, cash flow and choosing a location ("1 Bahan 3 Menu", "Rahasia Menu Cafe Laris?", "Jangan Mimpi Punya Cafe!").',
            'Recipe cards that turn products into drinks, e.g. a Pandan Bika Ambon Frappe made with DRiPP syrups.',
            'Product-focused visuals for Denali syrups.',
            'Short-form Reels from behind the scenes, such as order packing and shipping.',
          ],
        },
        {
          heading: 'Shopee store visuals',
          body: [
            'A reusable product thumbnail template: product photo, a vertical label with product name and size, and promo badges.',
            'Applied across the catalog — green beans, coffee beans, Denali syrup & powder and DRiPP products — so the store reads as one brand.',
          ],
        },
        {
          heading: 'Visual identity',
          body: 'One maroon palette, bold condensed headlines and the BKF logo on every piece, so a post on Instagram and a product on Shopee are instantly recognisable as the same brand.',
        },
      ],
      gallery: [
        {
          src: bkfInstagramFeed,
          alt: 'Instagram feed of BKF Cafe Supplies with educational carousels, a recipe card, a Denali syrup visual and Reels',
          caption: 'Instagram feed — educational carousels for cafe owners, a DRiPP recipe card, Denali product visual and behind-the-scenes Reels.',
        },
        {
          src: bkfShopeeStore,
          alt: 'BKF Cafe Supplies Shopee store page with product thumbnails for lychee, Denali syrup, green beans, Denali powder, Arenesia palm sugar and a Vietnam drip',
          caption: 'Shopee store — product thumbnails built on one template, with category tabs for Green Beans, DRiPP, Denali Syrup & Powder and Coffee Beans.',
        },
      ],
    },
    {
      slug: 'human-activity-detection',
      title: 'Human Activity Detection & Tracking',
      summary:
        'Capstone research project using YOLO to detect and track human activity in an administrative area.',
      description:
        'An Informatics Engineering capstone / research project that applies YOLO-based computer vision to detect and track human activity within an administrative area.',
      category: 'AI & Research',
      tags: ['Capstone', 'Computer Vision', 'Research'],
      tech: ['YOLO', 'Computer Vision', 'Object Tracking'], // TODO: add language/libraries
      status: 'Research', // TODO: confirm
      palette: ['#20c997', '#1e3a8a'],
      details: [
        {
          heading: 'Overview',
          body: 'A capstone / research project focused on detecting and tracking human activity in an administrative area using the YOLO object detection family.',
        },
        {
          heading: 'Scope',
          body: ['Human detection with YOLO', 'Activity detection', 'Tracking within an administrative area'],
        },
      ],
    },
    {
      slug: 'arenesia',
      title: 'Arenesia — Social Media & Brand Content',
      summary:
        'Educational social media content and brand presence for a liquid palm sugar brand across Instagram, Facebook and Shopee.',
      description:
        'Arenesia is a producer and retail distributor of palm sugar products, known for its triple-filtered liquid palm sugar (Gula Aren Cair) — a product also stocked by BKF Cafe Supplies. As part of my Marketplace & E-Commerce role at PT Kinawa Argo International, I created content for the brand across Instagram, Facebook and Shopee, built around educating customers about palm sugar and building trust in a natural, quality product.',
      category: 'Marketing & Content',
      tags: ['Social Media Content', 'Instagram', 'Facebook', 'Shopee'],
      tech: ['Instagram', 'Facebook', 'Shopee'], // TODO: add the tools you used (e.g. Canva, CapCut)
      company: 'PT Kinawa Argo International',
      year: '2023 — 2024',
      cover: {
        src: arenesiaInstagramFeed,
        alt: 'Arenesia Instagram feed: cream and green posts about palm sugar, such as "Kadar Gula Darah Terjaga dengan Gula Aren" and "Awas!! Gula Aren Palsu!"',
        position: '50% 0%',
      },
      palette: ['#a3e635', '#14532d'],
      links: {
        more: [
          { label: 'Instagram', url: 'https://www.instagram.com/arenesia.id/', platform: 'instagram' },
          { label: 'Facebook', url: 'https://www.facebook.com/arenesia.id/photos/', platform: 'facebook' },
          { label: 'Shopee', url: 'https://shopee.co.id/arenesia#product_list', platform: 'shop' },
        ],
      },
      details: [
        {
          heading: 'Goal',
          body: 'Help customers understand palm sugar — how it is made, how to use and store it, and how to tell real from fake — so they choose a natural, quality product like Arenesia.', // TODO: adjust if the goal was different
        },
        {
          heading: 'Instagram content',
          body: [
            'Educational posts about palm sugar: how it is made from palm sap ("Tahukah Kamu"), how long it keeps and how to store liquid palm sugar.',
            'Posts comparing palm sugar with regular table sugar ("Manis yang Baik adalah Manis yang Sehat", "Kadar Gula Darah Terjaga dengan Gula Aren").',
            'Usage ideas, such as palm sugar in coffee and tea ("Manfaat Ngopi Pakai Gula Aren", "Kopi Campur Gula Aren").',
            'Trust-building content — "Awas!! Gula Aren Palsu!" on how to spot fake palm sugar, with a call to buy from the official store.',
          ],
        },
        {
          heading: 'Facebook page',
          body: 'A cover banner that puts the key selling points up front: triple filtering ("3X Penyaringan"), a clean, quality product and the halal mark.',
        },
        {
          heading: 'Shopee store',
          body: 'A store profile and "About the store" section with a product video, telling the brand story: organic raw materials, a registered trademark and use in hotels, restaurants and cafes.',
        },
        {
          heading: 'Visual identity',
          body: 'A soft cream and green palette, palm leaf elements, consistent logo placement and product packshots — a natural, clean look that matches the product.',
        },
      ],
      gallery: [
        {
          src: arenesiaInstagramFeed,
          alt: 'Instagram feed of Arenesia with educational posts about palm sugar, product packshots and a post about fake palm sugar',
          caption: 'Instagram feed — educational posts about palm sugar, usage ideas and trust-building content, in one cream-and-green style.',
        },
        {
          src: arenesiaFacebookPage,
          alt: 'Arenesia Gula Aren Cair Facebook page with a cover banner reading "3X Penyaringan" and "Arenesia dibuat dengan gula aren terbaik bersih dan berkualitas"',
          caption: 'Facebook page — cover banner highlighting triple filtering, product quality and the halal mark.',
        },
        {
          src: arenesiaShopeeStore,
          alt: 'Arenesia Shopee store page with an "About the store" section, a product video and the brand description',
          caption: 'Shopee store — store profile and "About the store" section with a product video and brand story.',
        },
      ],
    },
  ],

  // ──────────────────────────────────────────────────────────── Experience ──
  // Most recent first. Source: CV.
  experience: [
    {
      role: 'Marketplace & E-Commerce',
      organization: 'PT Kinawa Argo International',
      period: '2023 — 2024',
      location: 'North Jakarta, Indonesia',
      description: 'Ran Shopee and Tokopedia marketplace operations, product catalogs and promotional content.',
      highlights: [
        'Managed Shopee and Tokopedia product listings, including product information, pricing, descriptions, specifications and images.',
        'Maintained and organized dozens to hundreds of product listings to keep catalog information accurate and consistent.',
        'Managed marketplace promotional features such as vouchers and free shipping.',
        'Monitored sales performance and reviewed marketplace data to identify product and sales trends.',
        'Created social media feeds, Reels and short-form video content for product promotion.',
        'Used TikTok content and FYP exposure to support product promotion.',
        'Gained practical familiarity with Facebook Ads and Google Ads.',
      ],
      tags: ['Shopee', 'Tokopedia', 'Content', 'Facebook Ads', 'Google Ads'],
      projects: ['bkf-cafe-supplies', 'arenesia'],
    },
    {
      role: 'Online Customer Service',
      organization: 'Total Buah Kalimalang',
      period: '2021 — 2022',
      location: 'East Jakarta, Indonesia',
      description: 'Handled online orders and customer communication for a fruit retailer.',
      highlights: [
        'Handled approximately 25 customer orders per day through WhatsApp and assisted with product and order inquiries.',
        'Managed customer communication about product availability, orders and delivery.',
        'Coordinated deliveries using Lalamove and GoSend, comparing options by cost and customer requirements.',
        'Created and edited promotional banners for discount campaigns and online sales.',
      ],
      tags: ['Customer Service', 'WhatsApp', 'Order Management'],
    },
  ],

  // ───────────────────────────────────────────────────────────── Education ──
  education: [
    {
      institution: 'STT Terpadu Nurul Fikri',
      degree: 'Bachelor of Informatics Engineering',
      period: 'Feb 2022 — Aug 2026',
      location: 'Depok, Indonesia',
      gpa: '3.59 / 4.00',
      description: 'Capstone research on human activity detection and tracking with YOLO.',
    },
  ],

  // ───────────────────────────────────────────── Achievements & milestones ──
  // Add a milestone = add an object here. Empty array hides the section.
  milestones: [
    {
      title: 'Bachelor of Informatics Engineering',
      organization: 'STT Terpadu Nurul Fikri',
      date: 'August 2026',
      year: '2026',
      image: {
        src: graduationPhoto,
        alt: 'Rafli in graduation cap and gown, holding the STT Terpadu Nurul Fikri diploma folder at the graduation ceremony',
        position: '50% 30%',
      },
      caption: 'Bachelor of Informatics Engineering — STT Terpadu Nurul Fikri, August 2026.',
      description:
        'Graduated after four and a half years of Informatics Engineering studies, closing the chapter with a capstone research project on human activity detection and tracking.',
      facts: [
        { label: 'Degree', value: 'Bachelor of Informatics Engineering' },
        { label: 'Study period', value: 'Feb 2022 — Aug 2026' },
        { label: 'GPA', value: '3.59 / 4.00' },
        { label: 'Campus', value: 'Depok, Indonesia' },
      ],
    },
  ],

  // ────────────────────────────────────────────────────────── Certificates ──
  // Add a certificate = add an object here. Empty array hides the section.
  // Most recent first.
  certificates: [
    {
      title: 'Codeless Data Science',
      issuer: 'NF Academy',
      kind: 'Certified Independent Study (Studi Independen Bersertifikat)',
      date: 'December 31, 2025',
      credentialId: '2079/S-SIB/NFA/XII/2025',
      credentialUrl: 'https://sinufia.nfacademy.id/certificate-verification/402ca19c-4d40-4875-b775-56d1f1ecc83f',
      description:
        '900-hour program (Sep – Dec 2025) on data science with KNIME Analytics Platform — data preparation, aggregation and blending, visualization, machine learning (decision trees, regression, random forest), reporting with BIRT and a team data science project.',
      image: {
        src: nfDataSciencePreview,
        alt: 'NF Academy certificate of Certified Independent Study in Codeless Data Science, awarded to Teuku Muhammad Rafli Rashadifa',
      },
      file: '/documents/certificates/nf-academy-codeless-data-science.pdf',
      tags: ['Data Science', 'KNIME', 'Machine Learning'],
    },
    {
      title: 'Digital Marketing',
      issuer: 'NF Academy',
      kind: 'Certified Independent Study (Studi Independen Bersertifikat)',
      date: 'June 25, 2025',
      credentialId: '0947/S-SIB/NFA/VI/2025',
      credentialUrl: 'https://sinufia.nfacademy.id/certificate-verification/1a73b22a-4b71-468d-82e6-82d29522b5c3',
      description:
        '900-hour program (Feb – Jun 2025) covering market research, consumer behavior, branding, graphic and video content, social media and email marketing, web content, SEO and search ads, e-commerce and marketplaces, and a team marketing project.',
      image: {
        src: nfDigitalMarketingPreview,
        alt: 'NF Academy certificate of Certified Independent Study in Digital Marketing, awarded to Teuku Muhammad Rafli Rashadifa',
      },
      file: '/documents/certificates/nf-academy-digital-marketing.pdf',
      tags: ['Digital Marketing', 'Social Media', 'E-Commerce'],
    },
    {
      title: 'Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)',
      issuer: 'Dicoding',
      kind: 'Course completion certificate',
      date: 'June 21, 2024',
      validUntil: 'June 21, 2027',
      credentialId: '98XWLOD40ZM3',
      credentialUrl: 'https://www.dicoding.com/certificates/98XWLOD40ZM3',
      description:
        'Dicoding Academy class on AWS Cloud fundamentals — services, global infrastructure, security, pricing and the AWS Well-Architected Framework (13 hours).',
      image: {
        src: dicodingAwsPreview,
        alt: 'Dicoding certificate of completion for Cloud Practitioner Essentials (Belajar Dasar AWS Cloud), awarded to Teuku Muhammad Rafli Rashadifa',
      },
      file: '/documents/certificates/dicoding-aws-cloud-practitioner.pdf',
      tags: ['Cloud Computing', 'AWS'],
    },
  ],

  // ──────────────────────────────────────────────────────────────── Socials ──
  // Leave `url` empty ("") to hide a link. Order here = order on the site.
  socials: [
    { platform: 'github', label: 'GitHub', url: '' }, // TODO: 'https://github.com/<your-username>'
    { platform: 'linkedin', label: 'LinkedIn', url: '' }, // TODO: 'https://www.linkedin.com/in/<your-handle>'
    { platform: 'instagram', label: 'Instagram', url: '' }, // TODO (optional)
    { platform: 'tiktok', label: 'TikTok', url: '' }, // TODO (optional)
  ],

  // ───────────────────────────────────────────────────────── Section titles ──
  sections: {
    about: {
      label: 'About',
      title: 'Engineer by training, *communicator* by habit.',
    },
    skills: {
      label: 'Skills',
      title: 'A toolkit across *marketing*, commerce and code.',
      intro: 'Grouped by discipline. No made-up percentages — just the tools and practices I work with.',
    },
    projects: {
      label: 'Projects',
      title: 'Selected *work*.',
      intro: 'A mix of web, software, research and marketing projects. Open any card for the details.',
    },
    experience: {
      label: 'Experience',
      title: 'Where I have been *working*.',
    },
    education: {
      label: 'Education',
      title: 'Learning the *foundations*.',
    },
    milestones: {
      label: 'Achievements & Milestones',
      navLabel: 'Milestones',
      title: 'Moments that *mattered*.',
    },
    certificates: {
      label: 'Certificates',
      title: 'Courses & *credentials*.',
    },
    contact: {
      label: 'Contact',
      title: "Let's build something *worth sharing*.",
      intro:
        'Recruiters, teams and potential clients — I would love to hear about your project, role or idea. The fastest way to reach me is email or WhatsApp.',
      cta: 'Start a conversation',
    },
  },

  // ─────────────────────────────────────────────────────────────────── SEO ──
  seo: {
    siteUrl: 'https://rafliras.vercel.app', // the URL listed on your CV — change if you use another domain
    title: 'Teuku Muhammad Rafli Rashadifa — Portfolio',
    titleSuffix: 'Rafli Rashadifa',
    description:
      'Portfolio of Teuku Muhammad Rafli Rashadifa — Informatics Engineering graduate with experience in digital marketing, e-commerce, content creation and web development.',
    keywords: [
      'Teuku Muhammad Rafli Rashadifa',
      'Rafli Rashadifa',
      'Informatics Engineering',
      'Digital Marketing',
      'E-Commerce',
      'Marketplace Management',
      'Content Creation',
      'Web Development',
      'Portfolio',
    ],
    ogImage: '/og-image.png',
    locale: 'en_US',
    lang: 'en',
  },
};
