import { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
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

// WhatsApp contact with a prefilled message, so the visitor only has to send it.
// Two numbers: the Dominican line is the main one, the US line is for US clients.
const WHATSAPP_TEXT =
  'Hola%20Paulino%2C%20quiero%20una%20p%C3%A1gina%20web%20para%20mi%20negocio';
const WHATSAPP_URL_RD = `https://wa.me/18093053316?text=${WHATSAPP_TEXT}`;
const WHATSAPP_URL_US = `https://wa.me/19295915936?text=${WHATSAPP_TEXT}`;
const GITHUB_URL = 'https://github.com/gomezpaulino';

const NAV_LINKS = [
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'El producto', href: '#producto' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Kit físico', href: '#kit' },
  { label: 'Cómo funciona', href: '#proceso' },
];

type Project = {
  name: string;
  tagline: string;
  location: string;
  description: string;
  url: string;
  domain: string;
  /** Accent color used in the stylized browser-frame preview. */
  accent: string;
  accentSoft: string;
  /** Short wordmark shown inside the preview frame. */
  previewTitle: string;
  previewSubtitle: string;
  previewLines: string[];
  /** Label of the decorative call-to-action pill inside the preview. */
  previewCta: string;
};

const PROJECTS: Project[] = [
  {
    name: 'Los Chamos x La Calle',
    tagline: 'Comida venezolana',
    location: 'Veragua, República Dominicana',
    description:
      'Menú en línea con pedidos por WhatsApp y fotos reales de cada plato.',
    url: 'https://los-chamos-x-la-calle.pages.dev',
    domain: 'los-chamos-x-la-calle.pages.dev',
    accent: '#9a3412',
    accentSoft: '#fff7ed',
    previewTitle: 'Los Chamos',
    previewSubtitle: 'x La Calle · Arepas, patacones y más',
    previewLines: ['Arepa Reina Pepiada', 'Patacón Mixto', 'Tequeños'],
    previewCta: 'Ver menú',
  },
  {
    name: 'Grotto Bar Restaurant',
    tagline: 'Bar restaurante',
    location: 'Sosúa, República Dominicana',
    description:
      'Menú QR en español, inglés y francés. El cliente pide desde su mesa y el pedido llega por WhatsApp.',
    url: 'https://grotto-ao8.pages.dev',
    domain: 'grotto-ao8.pages.dev',
    accent: '#0a4a43',
    accentSoft: '#edf6f4',
    previewTitle: 'Grotto',
    previewSubtitle: 'Bar Restaurant · Grand Laguna Beach',
    previewLines: ['Chillo Entero', 'Cuba Sandwich', 'Mojito Clásico'],
    previewCta: 'Ver menú',
  },
  {
    name: 'An Dún Medical Practice',
    tagline: 'Clínica médica',
    location: 'Donegal Town, Irlanda',
    description:
      'Página profesional con servicios, equipo y reservas en línea.',
    url: 'https://www.andunmedical.ie',
    domain: 'www.andunmedical.ie',
    accent: '#2e4633',
    accentSoft: '#f0f4f0',
    previewTitle: 'An Dún',
    previewSubtitle: 'Medical Practice · Donegal Town',
    previewLines: ['General Consultations', "Women's Health", 'Blood Clinic'],
    previewCta: 'Ver servicios',
  },
];

const SERVICES = [
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
];

const PRODUCT_INCLUDES = [
  'La página web con tu menú',
  'Códigos QR por mesa',
  'Menú en varios idiomas',
  'Actualizaciones del menú cuando cambies algo',
  'Reporte semanal de escaneos y pedidos',
];

const KIT_ITEMS = [
  {
    icon: Printer,
    title: 'Piezas impresas en 3D',
    text: 'Servilleteros y stands con tu QR y el número de mesa, en los colores de tu marca.',
  },
  {
    icon: Nfc,
    title: 'Tags NFC',
    text: 'El cliente acerca el teléfono y el menú abre solo, sin escanear ni buscar la cámara.',
  },
  {
    icon: Palette,
    title: 'Hecho para tu marca',
    text: 'Base reutilizable con la placa del QR intercambiable: si cambia tu menú o tu número, se reimprime solo la plaquita.',
  },
];

const PROCESS_STEPS = [
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
    title: 'Tu página en vivo en días',
    text: 'QRs listos para imprimir y poner en las mesas.',
  },
];

function SectionHeading({
  eyebrow,
  title,
  sub,
  dark = false,
}: {
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

/** Stylized browser-frame preview. Typography and color only: never a fake screenshot. */
function ProjectCard({ project }: { project: Project }) {
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
      <div
        className="flex flex-col items-center px-6 py-8 text-center"
        style={{ backgroundColor: project.accentSoft }}
      >
        <p
          className="font-display text-3xl font-semibold"
          style={{ color: project.accent }}
        >
          {project.previewTitle}
        </p>
        <p className="mt-1 text-xs font-medium uppercase tracking-wider text-amber-800/60">
          {project.previewSubtitle}
        </p>
        <ul className="mt-5 w-full max-w-[240px] space-y-2">
          {project.previewLines.map((line) => (
            <li
              key={line}
              className="rounded-lg bg-white/80 px-3 py-2 text-left text-[13px] font-medium text-amber-900/80 shadow-sm"
            >
              {line}
            </li>
          ))}
        </ul>
        <span
          className="mt-5 rounded-full px-4 py-1.5 text-xs font-bold text-white"
          style={{ backgroundColor: project.accent }}
        >
          {project.previewCta}
        </span>
      </div>
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
          Visitar sitio
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          <span className="visually-hidden">(se abre en otra pestaña)</span>
        </a>
      </div>
    </article>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-crema-50 font-body text-amber-900 antialiased">
      <header className="sticky top-0 z-40 border-b border-crema-200 bg-crema-50/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#inicio" className="whitespace-nowrap font-display text-lg font-semibold text-amber-900 sm:text-xl">
            Paulino Gómez
          </a>
          <nav aria-label="Secciones" className="hidden items-center gap-7 text-sm font-semibold text-amber-800/80 md:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-verde-700">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={WHATSAPP_URL_RD}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-verde-700 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-verde-800"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-amber-900 transition-colors hover:bg-crema-200 md:hidden"
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
            aria-label="Secciones"
            className="border-t border-crema-200 bg-crema-50 px-5 py-3 md:hidden"
          >
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-semibold text-amber-900 hover:bg-crema-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </header>

      <main id="inicio">
        {/* Hero */}
        <section aria-labelledby="hero-title" className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:pb-24 sm:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-verde-600">
              Sitios web para restaurantes y negocios
            </p>
            <h1
              id="hero-title"
              className="mt-5 font-display text-5xl font-semibold leading-[1.05] text-balance text-amber-900 sm:text-6xl md:text-7xl"
            >
              Páginas web que{' '}
              <em className="text-verde-700">traen clientes</em>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-amber-800/80">
              Menús digitales con pedidos por WhatsApp, páginas para
              restaurantes, negocios y clínicas. Tus clientes piden desde la
              mesa y los pedidos te llegan a ti, sin apps nuevas ni comisiones
              por pedido.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL_RD}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-verde-700 px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-verde-800 sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Escríbeme por WhatsApp
              </a>
              <a
                href="#trabajos"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-amber-900/15 bg-white px-7 py-3.5 text-base font-bold text-amber-900 transition-colors hover:border-verde-700 hover:text-verde-700 sm:w-auto"
              >
                Ver trabajos
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
            <p className="mt-8 text-sm font-medium text-amber-800/60">
              3 sitios en vivo · República Dominicana y Irlanda
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
              eyebrow="Trabajos recientes"
              title="Sitios reales, en vivo hoy"
              sub="Haz click y míralos. Cada uno se hizo a la medida de su negocio."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {PROJECTS.map((project) => (
                <ProjectCard key={project.name} project={project} />
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
                Menú digital con pedidos por WhatsApp
              </p>
              <h2
                id="producto-title"
                className="mt-3 font-display text-3xl font-semibold leading-tight text-balance sm:text-4xl"
              >
                Tus clientes piden desde la mesa
              </h2>
              <p className="mt-4 text-base leading-relaxed text-crema-200 sm:text-lg">
                Sin descargar nada, sin llamar al mesero para pedir. El pedido
                cae en tu WhatsApp, listo para preparar.
              </p>
            </div>
            <ol className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
              <li className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <QrCode className="h-8 w-8 text-amber-300" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-semibold">
                  1. Escanean el QR
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-crema-200">
                  En la mesa, con la cámara del teléfono. Nada que instalar.
                </p>
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Smartphone className="h-8 w-8 text-amber-300" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-semibold">
                  2. Eligen y piden
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-crema-200">
                  Menú con fotos y precios, en su idioma.
                </p>
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <MessageCircle className="h-8 w-8 text-amber-300" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-semibold">
                  3. Te llega por WhatsApp
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-crema-200">
                  El pedido llega a tu teléfono, con mesa y todo, listo para
                  preparar.
                </p>
              </li>
            </ol>
            <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold">Qué incluye</h3>
              <ul className="mt-4 space-y-3">
                {PRODUCT_INCLUDES.map((item) => (
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
              eyebrow="Servicios"
              title="Qué puedo hacer por tu negocio"
              sub="Cada proyecto se cotiza según tu negocio y tu mercado."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((service) => (
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
              eyebrow="Extra · Kit físico"
              title="Más que una página: piezas que tus clientes pueden tocar"
              sub="Stands y servilleteros impresos en 3D con tu QR, para que el menú esté en cada mesa, no solo en el teléfono."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {KIT_ITEMS.map((item) => (
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
              Disponible bajo pedido. Pregúntame por el kit cuando escribas.
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
              eyebrow="Cómo funciona"
              title="De tu menú a tu página en días"
              sub="Un proceso corto y claro. Sabes qué recibes y cuándo, antes de empezar."
            />
            <ol className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
              {PROCESS_STEPS.map((step) => (
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
              ¿Hablamos de tu página?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-crema-200">
              Escríbeme por WhatsApp al número de tu país y te cotizo según
              tu negocio y tu mercado. Te respondo personalmente.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL_RD}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full flex-col items-center gap-0.5 rounded-2xl bg-white px-8 py-4 font-bold text-verde-800 transition-colors hover:bg-crema-100 sm:w-auto"
              >
                <span className="inline-flex items-center gap-2 text-base">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  WhatsApp · República Dominicana
                </span>
                <span className="text-sm font-semibold text-verde-800/70">
                  +1 (809) 305-3316
                </span>
              </a>
              <a
                href={WHATSAPP_URL_US}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full flex-col items-center gap-0.5 rounded-2xl bg-white px-8 py-4 font-bold text-verde-800 transition-colors hover:bg-crema-100 sm:w-auto"
              >
                <span className="inline-flex items-center gap-2 text-base">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  WhatsApp · Estados Unidos
                </span>
                <span className="text-sm font-semibold text-verde-800/70">
                  +1 (929) 591-5936
                </span>
              </a>
            </div>
            <p className="mt-5 text-sm font-medium text-crema-200/70">
              Sin compromiso.
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
              Sitios web para restaurantes y negocios
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
            <span className="visually-hidden">(se abre en otra pestaña)</span>
          </a>
          <p className="text-sm text-crema-200/70">
            © 2026 Paulino Gómez · República Dominicana — Nueva York
          </p>
        </div>
      </footer>
    </div>
  );
}
