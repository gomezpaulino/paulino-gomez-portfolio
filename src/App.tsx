import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  ChevronDown,
  Github,
  Languages,
  Menu,
  MessageCircle,
  Nfc,
  Palette,
  Printer,
  QrCode,
  Smartphone,
  UtensilsCrossed,
  X,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Lang = 'es' | 'en';

type Project = {
  name: string;
  tagline: string;
  location: string;
  description: string;
  url: string;
  domain: string;
  /** Real screenshot of the site's homepage, shown inside the browser frame. */
  previewImage: string;
};

type IconItem = {
  icon: LucideIcon;
  title: string;
  text: string;
};

/** Every user-facing string on the page, in both languages. */
type Content = {
  meta: { title: string; description: string };
  skipLink: string;
  /** Screen-reader note on links that open a new tab. */
  newTab: string;
  nav: { label: string; href: string }[];
  /** Accessible name for the section navigation. */
  navLabel: string;
  menu: { open: string; close: string };
  switcher: { toEnglish: string; toSpanish: string; language: string };
  /** URL-encoded prefilled WhatsApp message, in the visitor's language. */
  whatsappText: string;
  hero: {
    eyebrow: string;
    titleA: string;
    titleEm: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust: string;
  };
  work: {
    eyebrow: string;
    title: string;
    sub: string;
    visit: string;
    projects: Project[];
  };
  product: {
    eyebrow: string;
    title: string;
    sub: string;
    steps: IconItem[];
    includesTitle: string;
    includes: string[];
  };
  services: {
    eyebrow: string;
    title: string;
    sub: string;
    items: IconItem[];
  };
  kit: {
    eyebrow: string;
    title: string;
    sub: string;
    items: IconItem[];
    note: string;
  };
  process: {
    eyebrow: string;
    title: string;
    sub: string;
    steps: { num: string; title: string; text: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    title: string;
    sub: string;
    rdLabel: string;
    usLabel: string;
    preferCall: string;
    rdCall: string;
    usCall: string;
    noStrings: string;
  };
  footer: { tagline: string; copyright: string };
  floatingCta: string;
};

const CONTENT: Record<Lang, Content> = {
  es: {
    meta: {
      title: 'Paulino Gómez — Páginas web para restaurantes y negocios',
      description:
        'Menús digitales con pedidos por WhatsApp, páginas para restaurantes, negocios y clínicas. Tus clientes piden desde la mesa y los pedidos te llegan a ti.',
    },
    skipLink: 'Saltar al contenido',
    newTab: '(se abre en otra pestaña)',
    nav: [
      { label: 'Trabajos', href: '#trabajos' },
      { label: 'El producto', href: '#producto' },
      { label: 'Servicios', href: '#servicios' },
      { label: 'Kit físico', href: '#kit' },
      { label: 'Cómo funciona', href: '#proceso' },
      { label: 'Preguntas', href: '#faq' },
    ],
    navLabel: 'Secciones',
    menu: { open: 'Abrir menú', close: 'Cerrar menú' },
    switcher: {
      toEnglish: 'Cambiar a inglés',
      toSpanish: 'Cambiar a español',
      language: 'Idioma',
    },
    whatsappText:
      'Hola%20Paulino%2C%20quiero%20una%20p%C3%A1gina%20web%20para%20mi%20negocio',
    hero: {
      eyebrow: 'Menús QR para restaurantes · RD y Nueva York',
      titleA: 'Tus clientes escanean el QR.',
      titleEm: 'El pedido te cae en WhatsApp.',
      sub: 'Sin apps que descargar y sin comisión por pedido. También hago páginas para negocios y clínicas.',
      ctaPrimary: 'Escríbeme por WhatsApp',
      ctaSecondary: 'Ver trabajos',
      trust: 'En vivo en restaurantes de Sosúa y Veragua · Sirviendo a RD y Nueva York',
    },
    work: {
      eyebrow: 'Trabajos recientes',
      title: 'Sitios reales, en vivo hoy',
      sub: 'Entra y míralos. Cada uno se hizo a la medida de su negocio.',
      visit: 'Visitar sitio',
      projects: [
        {
          name: 'Los Chamos x La Calle',
          tagline: 'Comida venezolana',
          location: 'Veragua, República Dominicana',
          description:
            'Menú en línea con pedidos por WhatsApp y fotos reales de cada plato.',
          url: 'https://los-chamos-x-la-calle.pages.dev',
          domain: 'los-chamos-x-la-calle.pages.dev',
          previewImage: '/img/work-los-chamos.jpg',
        },
        {
          name: 'Grotto Bar Restaurant',
          tagline: 'Bar restaurante',
          location: 'Sosúa, República Dominicana',
          description:
            'Menú QR en español, inglés y francés. El cliente pide desde su mesa y el pedido llega por WhatsApp.',
          url: 'https://grotto-ao8.pages.dev',
          domain: 'grotto-ao8.pages.dev',
          previewImage: '/img/work-grotto.jpg',
        },
        {
          name: 'An Dún Medical Practice',
          tagline: 'Clínica médica',
          location: 'Donegal Town, Irlanda',
          description:
            'Página profesional con servicios, equipo y reservas en línea.',
          url: 'https://www.andunmedical.ie',
          domain: 'www.andunmedical.ie',
          previewImage: '/img/work-andun.jpg',
        },
      ],
    },
    product: {
      eyebrow: 'Menú QR con pedidos por WhatsApp',
      title: 'Tus clientes piden desde la mesa',
      sub: 'Sin llamar al mesero para pedir. El pedido cae en tu WhatsApp, listo para preparar.',
      steps: [
        {
          icon: QrCode,
          title: '1. Escanean el QR',
          text: 'En la mesa, con la cámara del teléfono. Nada que instalar.',
        },
        {
          icon: Smartphone,
          title: '2. Eligen y piden',
          text: 'Menú con fotos y precios, en su idioma.',
        },
        {
          icon: MessageCircle,
          title: '3. Te llega por WhatsApp',
          text: 'El pedido llega a tu teléfono, con mesa y todo, listo para preparar.',
        },
      ],
      includesTitle: 'Qué incluye',
      includes: [
        'La página web con tu menú',
        'Códigos QR por mesa',
        'Menú en varios idiomas',
        'Actualizaciones del menú cuando cambies algo',
        'Reporte semanal de escaneos y pedidos',
      ],
    },
    services: {
      eyebrow: 'Servicios',
      title: 'Qué puedo hacer por tu negocio',
      sub: 'Cada proyecto se cotiza según tu negocio y tu mercado.',
      items: [
        {
          icon: QrCode,
          title: 'Menú digital con pedidos',
          text: 'El cliente pide desde la mesa y el pedido te llega por WhatsApp.',
        },
        {
          icon: UtensilsCrossed,
          title: 'Páginas para restaurantes',
          text: 'Menú, fotos, ubicación y pedidos, todo en un solo lugar.',
        },
        {
          icon: Building2,
          title: 'Páginas para negocios y clínicas',
          text: 'Servicios, equipo, contacto y reservas en línea.',
        },
        {
          icon: Languages,
          title: 'Sitios en varios idiomas',
          text: 'Español, inglés y francés, para que ningún cliente se pierda.',
        },
      ],
    },
    kit: {
      eyebrow: 'Extra · Kit físico',
      title: 'Más que una página: piezas que tus clientes pueden tocar',
      sub: 'Stands y servilleteros impresos en 3D con tu QR, para que el menú esté en cada mesa, no solo en el teléfono.',
      items: [
        {
          icon: Printer,
          title: 'Piezas impresas en 3D',
          text: 'Servilleteros y stands con tu QR y el número de mesa, en los colores de tu marca.',
        },
        {
          icon: Nfc,
          title: 'Tags de toque (NFC)',
          text: 'El cliente acerca el teléfono y el menú abre solo, sin escanear ni buscar la cámara.',
        },
        {
          icon: Palette,
          title: 'Reutilizable y fácil de actualizar',
          text: 'Base reutilizable con la placa del QR intercambiable: si cambia tu menú o tu número, se reimprime solo la plaquita.',
        },
      ],
      note: 'Lo hago por encargo. Pregúntame por el kit cuando escribas.',
    },
    process: {
      eyebrow: 'Cómo funciona',
      title: 'De tu menú a tu página en días',
      sub: 'Un proceso corto y claro. Sabes qué recibes y cuándo, antes de empezar.',
      steps: [
        {
          num: '01',
          title: 'Me cuentas de tu negocio',
          text: 'Una llamada corta: tu menú, tus mesas, tus clientes.',
        },
        {
          num: '02',
          title: 'Diseño y contenido',
          text: 'Armo tu página con tu menú real y tus fotos.',
        },
        {
          num: '03',
          title: 'En vivo, con tus QR listos para imprimir',
          text: 'QRs listos para imprimir y poner en las mesas.',
        },
      ],
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      title: 'Lo que me preguntan antes de empezar',
      items: [
        {
          question: '¿Mis clientes tienen que instalar una aplicación?',
          answer:
            'No. Escanean el QR con la cámara del teléfono y el menú abre en el navegador. Nada que descargar.',
        },
        {
          question: '¿Cuánto tarda en estar lista mi página?',
          answer:
            'En días. Me pasas tu menú, tus fotos y tus precios, y yo armo todo.',
        },
        {
          question: '¿Cuánto cuesta?',
          answer:
            'Cada proyecto se cotiza según tu negocio y tu mercado. Escríbeme por WhatsApp y te cotizo sin compromiso.',
        },
        {
          question: '¿Necesito tener un dominio o una página web ya?',
          answer:
            'No. Tu página queda en línea desde el primer día. Si más adelante quieres tu propio dominio, te lo agrego.',
        },
        {
          question: '¿Qué pasa cuando cambio mi menú o mis precios?',
          answer:
            'Me avisas y lo actualizo. Las actualizaciones del menú están incluidas.',
        },
      ],
    },
    contact: {
      title: '¿Hablamos de tu página?',
      sub: 'Escríbeme por WhatsApp al número de tu país y te cotizo según tu negocio y tu mercado. Te respondo yo mismo.',
      rdLabel: 'WhatsApp · República Dominicana',
      usLabel: 'WhatsApp · Estados Unidos',
      preferCall: '¿Prefieres llamar?',
      rdCall: 'RD +1 (809) 305-3316',
      usCall: 'US +1 (929) 591-5936',
      noStrings: 'Sin compromiso.',
    },
    footer: {
      tagline: 'Sitios web para restaurantes y negocios',
      copyright: '© 2026 Paulino Gómez · República Dominicana — Nueva York',
    },
    floatingCta: 'Escríbeme por WhatsApp',
  },
  en: {
    meta: {
      title: 'Paulino Gómez — Websites for restaurants and businesses',
      description:
        'QR menus where diners order from the table and the order goes straight to your WhatsApp. Also websites for restaurants, businesses and clinics.',
    },
    skipLink: 'Skip to content',
    newTab: '(opens in a new tab)',
    nav: [
      { label: 'Work', href: '#trabajos' },
      { label: 'The product', href: '#producto' },
      { label: 'Services', href: '#servicios' },
      { label: 'Physical kit', href: '#kit' },
      { label: 'How it works', href: '#proceso' },
      { label: 'FAQ', href: '#faq' },
    ],
    navLabel: 'Sections',
    menu: { open: 'Open menu', close: 'Close menu' },
    switcher: {
      toEnglish: 'Switch to English',
      toSpanish: 'Switch to Spanish',
      language: 'Language',
    },
    whatsappText:
      'Hi%20Paulino%2C%20I%20want%20a%20website%20for%20my%20business',
    hero: {
      eyebrow: 'QR menus for restaurants · DR and New York',
      titleA: 'Diners scan the QR.',
      titleEm: 'The order hits your WhatsApp.',
      sub: 'No app to download. No commission on any order. I also build websites for businesses and clinics.',
      ctaPrimary: 'Message me on WhatsApp',
      ctaSecondary: 'See my work',
      trust: 'Live now at restaurants in Sosúa and Veragua · Serving the DR and New York',
    },
    work: {
      eyebrow: 'Recent work',
      title: 'Real sites, live today',
      sub: 'Click through and see for yourself. Each one was made to fit its business.',
      visit: 'Visit site',
      projects: [
        {
          name: 'Los Chamos x La Calle',
          tagline: 'Venezuelan food',
          location: 'Veragua, Dominican Republic',
          description:
            'Online menu with WhatsApp ordering and real photos of every dish.',
          url: 'https://los-chamos-x-la-calle.pages.dev',
          domain: 'los-chamos-x-la-calle.pages.dev',
          previewImage: '/img/work-los-chamos.jpg',
        },
        {
          name: 'Grotto Bar Restaurant',
          tagline: 'Bar & restaurant',
          location: 'Sosúa, Dominican Republic',
          description:
            'QR menu in Spanish, English and French. Customers order from their table and the order arrives on WhatsApp.',
          url: 'https://grotto-ao8.pages.dev',
          domain: 'grotto-ao8.pages.dev',
          previewImage: '/img/work-grotto.jpg',
        },
        {
          name: 'An Dún Medical Practice',
          tagline: 'Medical clinic',
          location: 'Donegal Town, Ireland',
          description:
            'Professional site with services, team and online bookings.',
          url: 'https://www.andunmedical.ie',
          domain: 'www.andunmedical.ie',
          previewImage: '/img/work-andun.jpg',
        },
      ],
    },
    product: {
      eyebrow: 'QR ordering menu',
      title: 'Your customers order from the table',
      sub: 'No waiting for the waiter. The order lands on your WhatsApp, ready to prepare.',
      steps: [
        {
          icon: QrCode,
          title: '1. They scan the QR',
          text: 'At the table, with the phone camera. Nothing to install.',
        },
        {
          icon: Smartphone,
          title: '2. They choose and order',
          text: 'Menu with photos and prices, in their language.',
        },
        {
          icon: MessageCircle,
          title: '3. It lands on your WhatsApp',
          text: 'The order arrives on your phone, table number and all, ready to prepare.',
        },
      ],
      includesTitle: "What's included",
      includes: [
        'The website with your menu',
        'QR codes per table',
        'Menu in several languages',
        'Menu updates whenever you change something',
        'Weekly scan and order report',
      ],
    },
    services: {
      eyebrow: 'Services',
      title: 'What I can do for your business',
      sub: 'Every project is quoted for your business and your market.',
      items: [
        {
          icon: QrCode,
          title: 'QR ordering menu',
          text: 'Customers order from the table and the order comes to you on WhatsApp.',
        },
        {
          icon: UtensilsCrossed,
          title: 'Websites for restaurants',
          text: 'Menu, photos, location and orders, all in one place.',
        },
        {
          icon: Building2,
          title: 'Websites for businesses and clinics',
          text: 'Services, team, contact and online bookings.',
        },
        {
          icon: Languages,
          title: 'Websites in several languages',
          text: 'Spanish, English and French, so no customer is left out.',
        },
      ],
    },
    kit: {
      eyebrow: 'Extra · Physical kit',
      title: 'More than a page: things your customers can actually touch',
      sub: '3D-printed stands and napkin holders with your QR, so the menu is on every table, not just on the phone.',
      items: [
        {
          icon: Printer,
          title: '3D-printed pieces',
          text: 'Napkin holders and stands with your QR and table number, in your brand colors.',
        },
        {
          icon: Nfc,
          title: 'Tap-to-open tags (NFC)',
          text: 'Customers hold their phone close and the menu opens by itself — no scanning, no hunting for the camera.',
        },
        {
          icon: Palette,
          title: 'Reusable, easy to update',
          text: 'Reusable base with a swappable QR plate: if your menu or number changes, only the plate gets reprinted.',
        },
      ],
      note: 'Available on request. Ask me about the kit when you message me.',
    },
    process: {
      eyebrow: 'How it works',
      title: 'From your menu to your page in days',
      sub: 'A short, clear process. You know what you get and when, before we start.',
      steps: [
        {
          num: '01',
          title: 'You tell me about your business',
          text: 'A short call: your menu, your tables, your customers.',
        },
        {
          num: '02',
          title: 'Design and content',
          text: 'I build your page with your real menu and your photos.',
        },
        {
          num: '03',
          title: 'Live, with QR codes ready to print',
          text: 'QRs ready to print and place on the tables.',
        },
      ],
    },
    faq: {
      eyebrow: 'Frequently asked questions',
      title: 'What people ask me before we start',
      items: [
        {
          question: 'Do my customers have to install an app?',
          answer:
            'No. They scan the QR with the phone camera and the menu opens in the browser. Nothing to download.',
        },
        {
          question: 'How long until my page is ready?',
          answer:
            'Days. Send me your menu, your photos and your prices, and I build it all.',
        },
        {
          question: 'How much does it cost?',
          answer:
            "Every project is quoted for your business and your market. Message me on WhatsApp and I'll quote you, no strings attached.",
        },
        {
          question: 'Do I need a domain or a website already?',
          answer:
            "No. Your page is online from day one. If you want your own domain later, we'll add it.",
        },
        {
          question: 'What happens when I change my menu or my prices?',
          answer:
            'You let me know and I update it. Menu updates are included.',
        },
      ],
    },
    contact: {
      title: 'Want to talk about your page?',
      sub: "Message me on WhatsApp at the number for your country and I'll quote you for your business and your market. I answer every message myself.",
      rdLabel: 'WhatsApp · Dominican Republic',
      usLabel: 'WhatsApp · United States',
      preferCall: 'Prefer to call?',
      rdCall: 'DO +1 (809) 305-3316',
      usCall: 'US +1 (929) 591-5936',
      noStrings: 'No strings attached.',
    },
    footer: {
      tagline: 'Websites for restaurants and businesses',
      copyright: '© 2026 Paulino Gómez · Dominican Republic — New York',
    },
    floatingCta: 'Message me on WhatsApp',
  },
};

const GITHUB_URL = 'https://github.com/gomezpaulino';

// Language resolution: an explicit ?lang= link wins, then the visitor's
// saved choice, then the browser language (English browsers get English).
function initialLang(): Lang {
  const param = new URLSearchParams(window.location.search).get('lang');
  if (param === 'en' || param === 'es') return param;
  const stored = window.localStorage.getItem('pg-lang');
  if (stored === 'en' || stored === 'es') return stored;
  return window.navigator.language.toLowerCase().startsWith('en')
    ? 'en'
    : 'es';
}

function SectionHeading({
  id,
  eyebrow,
  title,
  sub,
  dark = false,
}: {
  /** Heading id, matching the section's aria-labelledby. */
  id: string;
  eyebrow: string;
  title: string;
  sub?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p
        className={`text-xs font-bold uppercase tracking-[0.2em] ${
          dark ? 'text-amber-300' : 'text-verde-600'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-3 font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl ${
          dark ? 'text-crema-50' : 'text-amber-900'
        }`}
      >
        {title}
      </h2>
      {sub ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            dark ? 'text-crema-200' : 'text-amber-800/80'
          }`}
        >
          {sub}
        </p>
      ) : null}
    </div>
  );
}

/** Real homepage screenshot inside a browser frame. */
function ProjectCard({
  project,
  visit,
  newTab,
}: {
  project: Project;
  visit: string;
  newTab: string;
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-crema-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="border-b border-crema-200 bg-crema-100 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" aria-hidden="true" />
          <span className="ml-2 truncate rounded-md bg-white px-2.5 py-1 text-[11px] font-medium text-amber-800/70">
            {project.domain}
          </span>
        </div>
      </div>
      <img
        src={project.previewImage}
        alt={`${project.name} homepage`}
        loading="lazy"
        className="aspect-[3/2] w-full border-b border-crema-200 object-cover"
      />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-verde-600">
          {project.tagline} · {project.location}
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-amber-900">
          {project.name}
        </h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-amber-800/80">
          {project.description}
        </p>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-bold text-verde-700 hover:text-verde-800"
        >
          {visit}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          <span className="visually-hidden">{newTab}</span>
        </a>
      </div>
    </article>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>(initialLang);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const c = CONTENT[lang];

  // WhatsApp links carry the prefilled message in the visitor's language.
  // Two numbers: the Dominican line is the main one, the US line is for US clients.
  const whatsappUrlRd = `https://wa.me/18093053316?text=${c.whatsappText}`;
  const whatsappUrlUs = `https://wa.me/19295915936?text=${c.whatsappText}`;

  // Keep the document language, title and description in sync with the
  // visible language, so screen readers and search engines see the same page.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = CONTENT[lang].meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', CONTENT[lang].meta.description);
  }, [lang]);

  const switchLang = (next: Lang) => {
    setLang(next);
    window.localStorage.setItem('pg-lang', next);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', next);
    window.history.replaceState(null, '', url);
  };

  // Closing the menu unmounts the panel, so return focus to the button
  // that opened it; otherwise focus falls to BODY.
  const closeMenu = () => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  // Escape closes the open menu and returns focus to the toggle button.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-crema-50 font-body text-amber-900 antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[100] focus:rounded focus:bg-verde-800 focus:px-4 focus:py-2 focus:text-white"
      >
        {c.skipLink}
      </a>
      <header className="sticky top-0 z-40 border-b border-crema-200 bg-crema-50/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#main" className="whitespace-nowrap font-display text-lg font-semibold text-amber-900 sm:text-xl">
            Paulino Gómez
          </a>
          <nav aria-label={c.navLabel} className="hidden items-center gap-5 text-sm font-semibold text-amber-800/80 lg:flex lg:gap-7">
            {c.nav.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-verde-700">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            {/* Language switcher: header pill on wide screens only. On narrow
                screens it lives inside the hamburger menu, where there is room. */}
            <button
              type="button"
              onClick={() => switchLang(lang === 'es' ? 'en' : 'es')}
              aria-label={lang === 'es' ? c.switcher.toEnglish : c.switcher.toSpanish}
              className="hidden items-center gap-1.5 rounded-full border-2 border-amber-900/15 bg-white px-3 py-2 text-sm font-bold text-amber-900 transition-colors hover:border-verde-700 hover:text-verde-700 lg:inline-flex"
            >
              <Languages className="h-4 w-4" aria-hidden="true" />
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
            <a
              href={whatsappUrlRd}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-verde-700 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-verde-800"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
            <button
              type="button"
              ref={menuButtonRef}
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? c.menu.close : c.menu.open}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-amber-900 transition-colors hover:bg-crema-200 lg:hidden"
            >
              {menuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        {menuOpen ? (
          <nav
            aria-label={c.navLabel}
            className="border-t border-crema-200 bg-crema-50 px-5 py-3 lg:hidden"
          >
            <ul className="flex flex-col">
              {c.nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block rounded-lg px-3 py-3 text-base font-semibold text-amber-900 hover:bg-crema-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex items-center justify-between border-t border-crema-200 px-3 pt-3">
              <span className="text-sm font-semibold text-amber-800/70">
                {c.switcher.language}
              </span>
              <div className="flex gap-2" role="group" aria-label={c.switcher.language}>
                <button
                  type="button"
                  onClick={() => {
                    switchLang('es');
                    closeMenu();
                  }}
                  aria-pressed={lang === 'es'}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                    lang === 'es'
                      ? 'bg-verde-700 text-white'
                      : 'border-2 border-amber-900/15 bg-white text-amber-900 hover:border-verde-700 hover:text-verde-700'
                  }`}
                >
                  ES
                </button>
                <button
                  type="button"
                  onClick={() => {
                    switchLang('en');
                    closeMenu();
                  }}
                  aria-pressed={lang === 'en'}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                    lang === 'en'
                      ? 'bg-verde-700 text-white'
                      : 'border-2 border-amber-900/15 bg-white text-amber-900 hover:border-verde-700 hover:text-verde-700'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </nav>
        ) : null}
      </header>

      <main id="main" tabIndex={-1}>
        {/* Hero */}
        <section aria-labelledby="hero-title" className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:pb-24 sm:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-verde-600">
              {c.hero.eyebrow}
            </p>
            <h1
              id="hero-title"
              className="mt-5 font-display text-5xl font-semibold leading-[1.05] text-balance sm:text-6xl md:text-7xl"
            >
              {c.hero.titleA}{' '}
              <em className="text-verde-700">{c.hero.titleEm}</em>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-amber-800/80">
              {c.hero.sub}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={whatsappUrlRd}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-verde-700 px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-verde-800 sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                {c.hero.ctaPrimary}
              </a>
              <a
                href="#trabajos"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-amber-900/15 bg-white px-7 py-3.5 text-base font-bold text-amber-900 transition-colors hover:border-verde-700 hover:text-verde-700 sm:w-auto"
              >
                {c.hero.ctaSecondary}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
            <p className="mt-8 text-sm font-medium text-amber-800/60">
              {c.hero.trust}
            </p>
          </div>
        </section>

        {/* Work */}
        <section
          id="trabajos"
          aria-labelledby="trabajos-title"
          className="scroll-mt-20 border-y border-crema-200 bg-white py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading
              id="trabajos-title"
              eyebrow={c.work.eyebrow}
              title={c.work.title}
              sub={c.work.sub}
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {c.work.projects.map((project) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  visit={c.work.visit}
                  newTab={c.newTab}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Product: QR ordering */}
        <section
          id="producto"
          aria-labelledby="producto-title"
          className="scroll-mt-20 bg-verde-900 py-16 text-crema-50 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-5">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                {c.product.eyebrow}
              </p>
              <h2
                id="producto-title"
                className="mt-3 font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl"
              >
                {c.product.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-crema-200 sm:text-lg">
                {c.product.sub}
              </p>
            </div>
            <ol className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
              {c.product.steps.map((step) => (
                <li key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <step.icon className="h-8 w-8 text-amber-300" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-crema-200">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
            <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold">{c.product.includesTitle}</h3>
              <ul className="mt-4 space-y-3">
                {c.product.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-crema-200">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          id="servicios"
          aria-labelledby="servicios-title"
          className="scroll-mt-20 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading
              id="servicios-title"
              eyebrow={c.services.eyebrow}
              title={c.services.title}
              sub={c.services.sub}
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {c.services.items.map((service) => (
                <article
                  key={service.title}
                  className="rounded-2xl border border-crema-200 bg-white p-6 shadow-sm"
                >
                  <service.icon className="h-8 w-8 text-verde-700" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-xl font-semibold text-amber-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-amber-800/80">
                    {service.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Physical kit */}
        <section
          id="kit"
          aria-labelledby="kit-title"
          className="scroll-mt-20 border-y border-crema-200 bg-white py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading
              id="kit-title"
              eyebrow={c.kit.eyebrow}
              title={c.kit.title}
              sub={c.kit.sub}
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {c.kit.items.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-crema-200 bg-crema-50 p-6"
                >
                  <item.icon className="h-8 w-8 text-amber-600" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-xl font-semibold text-amber-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-amber-800/80">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-8 text-center text-sm font-medium text-amber-800/60">
              {c.kit.note}
            </p>
          </div>
        </section>

        {/* Process */}
        <section
          id="proceso"
          aria-labelledby="proceso-title"
          className="scroll-mt-20 py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading
              id="proceso-title"
              eyebrow={c.process.eyebrow}
              title={c.process.title}
              sub={c.process.sub}
            />
            <ol className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
              {c.process.steps.map((step) => (
                <li key={step.num} className="rounded-2xl border border-crema-200 bg-white p-6 shadow-sm">
                  <p className="font-display text-4xl font-semibold text-amber-300">
                    {step.num}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold text-amber-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-amber-800/80">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ: native details/summary, accessible without JavaScript. */}
        <section
          id="faq"
          aria-labelledby="faq-title"
          className="scroll-mt-20 border-y border-crema-200 bg-white py-16 sm:py-24"
        >
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading
              id="faq-title"
              eyebrow={c.faq.eyebrow}
              title={c.faq.title}
            />
            <div className="mx-auto mt-12 max-w-3xl space-y-4">
              {c.faq.items.map((faq, index) => (
                <details
                  key={faq.question}
                  open={index === 0}
                  className="group rounded-2xl border border-crema-200 bg-crema-50"
                >
                  <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left [&::-webkit-details-marker]:hidden">
                    <span className="font-display text-lg font-semibold text-amber-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className="h-5 w-5 shrink-0 text-verde-700 transition-transform group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="px-6 pb-5 text-[15px] leading-relaxed text-amber-800/80">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contacto"
          aria-labelledby="contacto-title"
          className="scroll-mt-20 bg-verde-800 py-16 text-crema-50 sm:py-24"
        >
          <div className="mx-auto max-w-2xl px-5 text-center">
            <h2
              id="contacto-title"
              className="font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl"
            >
              {c.contact.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-crema-200">
              {c.contact.sub}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={whatsappUrlRd}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full flex-col items-center gap-0.5 rounded-2xl bg-white px-8 py-4 font-bold text-verde-800 transition-colors hover:bg-crema-100 sm:w-auto"
              >
                <span className="inline-flex items-center gap-2 text-base">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  {c.contact.rdLabel}
                </span>
                <span className="text-sm font-semibold text-verde-800/70">
                  +1 (809) 305-3316
                </span>
              </a>
              <a
                href={whatsappUrlUs}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full flex-col items-center gap-0.5 rounded-2xl bg-white px-8 py-4 font-bold text-verde-800 transition-colors hover:bg-crema-100 sm:w-auto"
              >
                <span className="inline-flex items-center gap-2 text-base">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  {c.contact.usLabel}
                </span>
                <span className="text-sm font-semibold text-verde-800/70">
                  +1 (929) 591-5936
                </span>
              </a>
            </div>
            <p className="mt-5 text-sm text-crema-200">
              {c.contact.preferCall}{' '}
              <a
                href="tel:+18093053316"
                className="whitespace-nowrap font-semibold text-crema-50 underline hover:text-amber-300"
              >
                {c.contact.rdCall}
              </a>
              {' · '}
              <a
                href="tel:+19295915936"
                className="whitespace-nowrap font-semibold text-crema-50 underline hover:text-amber-300"
              >
                {c.contact.usCall}
              </a>
            </p>
            <p className="mt-5 text-sm font-medium text-crema-200/70">
              {c.contact.noStrings}
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-amber-950 py-10 text-crema-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-xl font-semibold text-crema-50">
              Paulino Gómez
            </p>
            <p className="mt-1 text-sm text-crema-200/70">
              {c.footer.tagline}
            </p>
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-crema-200 hover:text-white"
          >
            <Github className="h-5 w-5" aria-hidden="true" />
            GitHub
            <span className="visually-hidden">{c.newTab}</span>
          </a>
          <p className="text-sm text-crema-200/70">
            {c.footer.copyright}
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp button: a way to reach out from anywhere on the page. */}
      <a
        href={whatsappUrlRd}
        target="_blank"
        rel="noreferrer"
        aria-label={c.floatingCta}
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-verde-800 text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" aria-hidden="true" />
      </a>
    </div>
  );
}
