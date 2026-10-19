import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ShieldCheck, Settings, Handshake, Car, Wrench, Sparkles, Volume2, Zap, Gauge,
  ChevronRight, CheckCircle2, Users, Star, MapPin, Clock, Menu, X, Navigation, HeartHandshake,
} from "lucide-react";
import { SITE, MSG_GERAL, msgServico, whatsappLink } from "@/config/site";
import { WhatsButton, WhatsIcon } from "@/components/WhatsButton";
import logo from "@/assets/logo-turubia.png.asset.json";
import heroImg from "@/assets/hero-car.jpg";
import mecanicaImg from "@/assets/svc-mecanica.jpg";
import esteticaImg from "@/assets/svc-estetica.jpg";
import somImg from "@/assets/svc-som.jpg";
import eletricaImg from "@/assets/svc-eletrica.jpg";
import injecaoImg from "@/assets/svc-injecao.jpg";
import engineImg from "@/assets/engine.jpg";
import oficinaImg from "@/assets/oficina.jpg";

const TITLE = "Turubia Car Service | Oficina Mecânica no Boqueirão em Curitiba";
const DESC =
  "Turubia Car Service no Boqueirão, Curitiba. Mecânica geral, elétrica automotiva, injeção eletrônica, estética automotiva, som e film. Solicite um orçamento.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: SITE.name,
  ...(SITE.url ? { url: SITE.url } : {}),
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    addressCountry: SITE.address.country,
  },
  areaServed: ["Boqueirão", "Curitiba"],
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  }],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE.url || "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE.url || "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

const NAV = [
  { id: "inicio", label: "Início" },
  { id: "servicos", label: "Serviços" },
  { id: "sobre", label: "Sobre Nós" },
  { id: "galeria", label: "Galeria" },
  { id: "avaliacoes", label: "Avaliações" },
  { id: "contato", label: "Contato" },
];

const SERVICES = [
  { name: "Mecânica Geral", icon: Wrench, img: mecanicaImg, alt: "Mecânico realizando reparo no motor — mecânica geral em Curitiba", desc: "Serviços de manutenção preventiva, revisões e reparos mecânicos para cuidar do funcionamento do seu veículo." },
  { name: "Estética Automotiva", icon: Sparkles, img: esteticaImg, alt: "Polimento de pintura — estética automotiva em Curitiba", desc: "Serviços de higienização, polimento e cuidados com a aparência e conservação do seu carro." },
  { name: "Som e Film", icon: Volume2, img: somImg, alt: "Central multimídia e som automotivo instalados no painel", desc: "Instalação de som automotivo, sistemas multimídia e películas para mais conforto e praticidade." },
  { name: "Elétrica Automotiva", icon: Zap, img: eletricaImg, alt: "Eletricista automotivo testando a parte elétrica com multímetro", desc: "Diagnóstico e reparos de sistemas elétricos automotivos com atenção e precisão." },
  { name: "Injeção Eletrônica", icon: Gauge, img: injecaoImg, alt: "Scanner de diagnóstico conectado ao motor — injeção eletrônica", desc: "Diagnóstico e manutenção de sistemas de injeção eletrônica para o funcionamento adequado do motor." },
];

const GALLERY = [
  { img: mecanicaImg, label: "Mecânica" },
  { img: eletricaImg, label: "Elétrica automotiva" },
  { img: esteticaImg, label: "Estética automotiva" },
  { img: injecaoImg, label: "Diagnóstico" },
  { img: heroImg, label: "Cuidados com veículos" },
  { img: somImg, label: "Som e multimídia" },
];

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:bg-primary-glow";
const btnOutline =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-5 py-3 text-sm font-semibold text-ink-foreground transition hover:bg-primary/15";

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Diagnostico />
        <Sobre />
        <Galeria />
        <Avaliacoes />
        <Contato />
      </main>
      <Footer />
      <FloatingWhats />
    </>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-border bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6">
        <a href="#inicio" className="shrink-0" aria-label="Turubia Car Service — início">
          <img src={logo.url} alt="Logo Turubia Car Service" width={64} height={64} className="h-12 w-12 sm:h-16 sm:w-16" />
        </a>
        <nav className="hidden lg:block" aria-label="Principal">
          <ul className="flex gap-8">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="text-sm font-medium text-ink-foreground/85 transition hover:text-primary-glow">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <WhatsButton className={`${btnPrimary} hidden sm:inline-flex`}>
            <WhatsIcon /> Orçamento via WhatsApp
          </WhatsButton>
          <button className="rounded-lg p-2 text-ink-foreground lg:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menu" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-ink-border bg-ink lg:hidden" aria-label="Menu móvel">
          <ul className="flex flex-col px-4 py-3">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-ink-foreground">{n.label}</a>
              </li>
            ))}
            <li className="pt-2">
              <WhatsButton className={`${btnPrimary} w-full`}><WhatsIcon /> Orçamento via WhatsApp</WhatsButton>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  const feats = [
    { icon: ShieldCheck, t: "Atendimento especializado" },
    { icon: Settings, t: "Diagnóstico preciso" },
    { icon: Handshake, t: "Qualidade e confiança" },
    { icon: Car, t: "Seu carro em boas mãos" },
  ];
  return (
    <section id="inicio" className="relative overflow-hidden bg-ink pt-16 text-ink-foreground sm:pt-20">
      <img src={heroImg} alt="Carro preto em oficina mecânica moderna no Boqueirão, Curitiba" width={1600} height={912} className="absolute inset-0 h-full w-full object-cover object-[70%_center] opacity-60 md:opacity-100" fetchPriority="high" />
      <div className="absolute inset-0 bg-hero-fade" />
      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 md:pt-24">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.4em] text-ink-muted">CENTRO AUTOMOTIVO EM CURITIBA</p>
          <h1 className="text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            SEU CARRO MERECE <span className="block text-primary-glow">CUIDADO DE VERDADE.</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-ink-foreground/85">
            Na Turubia Car Service, seu veículo recebe atenção especializada em mecânica geral, elétrica automotiva, injeção eletrônica, estética automotiva, som e instalação de películas. Qualidade, confiança e cuidado em um só lugar.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsButton className={btnPrimary}><WhatsIcon /> Solicitar orçamento</WhatsButton>
            <a href="#servicos" className={btnOutline}>Conhecer nossos serviços <ChevronRight className="h-4 w-4" /></a>
          </div>
        </div>
        <ul className="mt-16 grid grid-cols-2 gap-6 border-t border-ink-border pt-8 md:grid-cols-4">
          {feats.map(({ icon: I, t }) => (
            <li key={t} className="flex items-center gap-3">
              <I className="h-8 w-8 shrink-0 text-primary-glow" aria-hidden />
              <span className="text-sm font-medium">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <p className="eyebrow text-muted-foreground">Nossos serviços</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">Tudo o que seu carro precisa, em um só lugar.</h2>
          </div>
          <p className="text-muted-foreground">Oferecemos soluções automotivas para manutenção, reparos, diagnóstico e cuidados com o seu veículo.</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map(({ name, icon: I, img, alt, desc }) => (
            <article key={name} className="group flex flex-col overflow-hidden rounded-xl bg-card shadow-card transition hover:-translate-y-1">
              <div className="relative">
                <div className="aspect-[16/10] overflow-hidden"><img src={img} alt={alt} width={1024} height={656} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
                <span className="absolute bottom-0 left-4 grid h-10 w-10 translate-y-1/2 place-items-center rounded-lg bg-primary text-primary-foreground shadow-glow">
                  <I className="h-5 w-5" aria-hidden />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5 pt-8">
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{desc}</p>
                <WhatsButton message={msgServico(name)} ariaLabel={`Saiba mais sobre ${name}`} className="mt-5 rounded-lg border border-primary py-2 text-center text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground">
                  Saiba mais
                </WhatsButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Diagnostico() {
  const items = [
    { icon: CheckCircle2, t: "Diagnóstico automotivo" },
    { icon: Users, t: "Atendimento profissional" },
    { icon: Car, t: "Transparência nos serviços" },
    { icon: ShieldCheck, t: "Compromisso com a qualidade" },
  ];
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground" aria-labelledby="diag-title">
      <img src={engineImg} alt="Motor automotivo em destaque" width={1600} height={704} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-50" />
      <div className="absolute inset-0 bg-hero-fade" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1fr_auto] md:items-center">
        <div className="max-w-lg">
          <h2 id="diag-title" className="text-3xl font-extrabold leading-tight sm:text-4xl">
            DIAGNÓSTICO PRECISO <span className="block text-primary-glow">PARA MAIS SEGURANÇA</span>
          </h2>
          <p className="mt-4 text-ink-foreground/85">Um diagnóstico adequado ajuda a identificar possíveis problemas e orientar a manutenção do seu veículo.</p>
          <WhatsButton className={`${btnPrimary} mt-6`}><WhatsIcon /> Falar com a equipe</WhatsButton>
        </div>
        <ul className="grid gap-5 rounded-xl border border-ink-border bg-ink/70 p-6 backdrop-blur md:min-w-72">
          {items.map(({ icon: I, t }) => (
            <li key={t} className="flex items-center gap-3 text-sm font-medium">
              <I className="h-6 w-6 shrink-0 text-primary-glow" aria-hidden /> {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Sobre() {
  const items = [
    { icon: Users, t: "Atendimento personalizado" },
    { icon: Wrench, t: "Serviços automotivos" },
    { icon: ShieldCheck, t: "Compromisso com a qualidade" },
    { icon: HeartHandshake, t: "Cuidado com seu veículo" },
  ];
  return (
    <section id="sobre" className="bg-muted">
      <div className="grid md:grid-cols-2">
        <img src={oficinaImg} alt="Imagem ilustrativa de centro automotivo" width={1200} height={800} loading="lazy" className="h-72 w-full object-cover md:h-full" />
        <div className="px-4 py-16 sm:px-10 lg:px-16">
          <p className="eyebrow text-muted-foreground">Sobre nós</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight">Mais que uma oficina, uma parceria para o seu dia a dia.</h2>
          <p className="mt-5 text-muted-foreground">A Turubia Car Service é um centro automotivo localizado no bairro Boqueirão, em Curitiba/PR. Trabalhamos para oferecer soluções em manutenção mecânica, elétrica automotiva, injeção eletrônica, estética automotiva, som e film, priorizando atendimento profissional, qualidade e confiança.</p>
          <p className="mt-4 text-muted-foreground">Nosso compromisso é cuidar do seu veículo com atenção, responsabilidade e transparência, oferecendo orientação para que você tenha mais tranquilidade no dia a dia.</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {items.map(({ icon: I, t }) => (
              <li key={t} className="flex items-center gap-3 text-sm font-medium"><I className="h-5 w-5 shrink-0 text-primary" aria-hidden /> {t}</li>
            ))}
          </ul>
          <a href="#contato" className={`${btnPrimary} mt-8`}>Entre em contato</a>
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);
  return (
    <section id="galeria" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="eyebrow text-muted-foreground">Galeria</p>
        <h2 className="mt-3 text-3xl font-bold">Cuidado em cada detalhe</h2>
        <p className="mt-2 text-sm text-muted-foreground">Imagens ilustrativas.</p>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {GALLERY.map((g, i) => (
            <button key={g.label} onClick={() => setActive(i)} className="group relative aspect-[4/3] overflow-hidden rounded-xl" aria-label={`Ampliar imagem: ${g.label}`}>
              <img src={g.img} alt={`Imagem ilustrativa — ${g.label}`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-3 text-left text-sm font-semibold text-ink-foreground">{g.label}</span>
            </button>
          ))}
        </div>
      </div>
      {active !== null && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-[60] grid place-items-center bg-ink/90 p-4" onClick={() => setActive(null)}>
          <button className="absolute right-4 top-4 text-ink-foreground" aria-label="Fechar"><X className="h-8 w-8" /></button>
          <img src={GALLERY[active]!.img} alt={`Imagem ilustrativa — ${GALLERY[active]!.label}`} className="max-h-[85vh] max-w-full rounded-xl" />
        </div>
      )}
    </section>
  );
}

function Avaliacoes() {
  return (
    <section id="avaliacoes" className="bg-ink-2 py-20 text-ink-foreground">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <p className="eyebrow justify-center text-ink-muted">O que nossos clientes dizem</p>
        <h2 className="mt-3 text-3xl font-bold">Confiança que gera resultados.</h2>
        <p className="mt-3 text-ink-muted">A opinião dos nossos clientes é importante para nós.</p>
        <div className="mx-auto mt-10 max-w-xl rounded-xl border border-ink-border bg-ink p-8">
          <Star className="mx-auto h-8 w-8 text-primary-glow" aria-hidden />
          <p className="mt-4 text-sm text-ink-foreground/85">Em breve, as avaliações reais dos nossos clientes aparecerão aqui. Já foi atendido por nós? Conte como foi sua experiência.</p>
          {SITE.googleReviewUrl ? (
            <a href={SITE.googleReviewUrl} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} mt-6`}>Avalie-nos no Google</a>
          ) : (
            <span className={`${btnPrimary} mt-6 cursor-not-allowed opacity-60`} aria-disabled="true">Avalie-nos no Google (em breve)</span>
          )}
        </div>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="bg-ink py-20 text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center">
        <div>
          <p className="eyebrow text-ink-muted">Nossa localização</p>
          <h2 className="mt-3 text-3xl font-bold">Venha nos fazer uma visita!</h2>
          <address className="mt-8 space-y-6 not-italic">
            <div className="flex gap-4">
              <MapPin className="h-6 w-6 shrink-0 text-primary-glow" aria-hidden />
              <p><strong className="block">{SITE.name}</strong>{SITE.address.street}<br />{SITE.address.district} — {SITE.address.city}/{SITE.address.state}</p>
            </div>
            <div className="flex gap-4">
              <Clock className="h-6 w-6 shrink-0 text-primary-glow" aria-hidden />
              <ul>{SITE.hours.map((h) => <li key={h.days}>{h.days}: <span className="text-ink-muted">{h.time}</span></li>)}</ul>
            </div>
          </address>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={SITE.mapsRouteUrl} target="_blank" rel="noopener noreferrer" className={btnPrimary}><Navigation className="h-4 w-4" /> Traçar rota no Google Maps</a>
            {whatsappLink() && <WhatsButton className={btnOutline}><WhatsIcon /> Solicitar orçamento pelo WhatsApp</WhatsButton>}
          </div>
          {!whatsappLink() && <p className="mt-4 text-sm text-ink-muted">Atendimento por WhatsApp em breve.</p>}
        </div>
        <iframe title="Mapa da Turubia Car Service no Boqueirão, Curitiba" src={SITE.mapsEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-80 w-full rounded-xl border-0 md:h-[26rem]" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink-border bg-ink pb-24 pt-14 text-ink-foreground md:pb-10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-4">
        <div>
          <img src={logo.url} alt="Logo Turubia Car Service" width={96} height={96} loading="lazy" className="h-24 w-24" />
          <p className="mt-4 text-sm text-ink-muted">Centro automotivo no Boqueirão, Curitiba/PR. Mecânica, elétrica, injeção eletrônica, estética, som e film.</p>
        </div>
        <nav aria-label="Rodapé">
          <h3 className="text-sm font-bold uppercase tracking-widest">Navegação</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-muted">{NAV.map((n) => <li key={n.id}><a href={`#${n.id}`} className="hover:text-primary-glow">{n.label}</a></li>)}</ul>
        </nav>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest">Serviços</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-muted">{SERVICES.map((s) => <li key={s.name}>{s.name}</li>)}</ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest">Contato</h3>
          <p className="mt-4 text-sm text-ink-muted">{SITE.address.street}<br />{SITE.address.district} — {SITE.address.city}/{SITE.address.state}</p>
          <p className="mt-3 text-sm text-ink-muted">Seg. a sex.: 08:00 às 18:00<br />Sáb. e dom.: fechado</p>
          {SITE.social.length > 0 && (
            <ul className="mt-3 flex gap-3 text-sm">{SITE.social.map((s) => <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary-glow">{s.label}</a></li>)}</ul>
          )}
          <WhatsButton message={MSG_GERAL} className={`${btnPrimary} mt-5`}><WhatsIcon /> Fale conosco</WhatsButton>
        </div>
      </div>
      <p className="mt-12 text-center text-xs text-ink-muted">© 2026 Turubia Car Service. Todos os direitos reservados.</p>
    </footer>
  );
}

function FloatingWhats() {
  if (!whatsappLink()) return null;
  return (
    <WhatsButton ariaLabel="Conversar no WhatsApp" className="fixed bottom-4 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow transition hover:scale-105">
      <WhatsIcon className="h-7 w-7" />
    </WhatsButton>
  );
}
