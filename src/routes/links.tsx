import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE, whatsappLink } from "@/config/site";
import logoImg from "@/assets/links-logo.webp";
import oficinaImg from "@/assets/links-oficina.webp";
import fachadaImg from "@/assets/links-fachada.webp";

const FACEBOOK_URL = "https://www.facebook.com/turubiacarservicecwb";
const MAPS_URL = "https://maps.app.goo.gl/hvJZzwbJisxwaJ2v7";
const REVIEWS_URL = "https://g.page/r/CWIZS2qkhfoUEAE/review";
const WA_MESSAGE =
  "Olá! Vim pelo Instagram e gostaria de agendar atendimento na Turubia Car Service.";

const TITLE = "Turubia Car Service | Links oficiais";
const DESC = "Turubia Car Service. Acesse nossos canais, confira os serviços e venha nos visitar.";

export const Route = createFileRoute("/links")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "theme-color", content: "#070a0f" },
      { property: "og:title", content: TITLE },
      {
        property: "og:description",
        content: "Mecânica, cuidado e performance. Tudo em um só lugar.",
      },
      { property: "og:image", content: `${SITE.url}${oficinaImg}` },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.url}/links` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/links` }],
  }),
  component: LinksPage,
});

const css = (oficinaUrl: string, fachadaUrl: string) => `
.tc-page{color-scheme:dark;--blue:#087fee;--electric:#169aff;--txt:#f6f8ff;--muted:#a3b3c8;--line:#2a394e;--bg:#070a0f;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;margin:0;color:var(--txt);background:radial-gradient(ellipse 650px 440px at 50% 3%,#173a5f 0,#0a1221 49%,#06090e 100%);min-height:100dvh;position:relative}
.tc-page::before{content:"";position:fixed;inset:0;pointer-events:none;opacity:.13;background:linear-gradient(115deg,transparent 0 48%,#096cc0 48.08% 48.22%,transparent 48.3%);z-index:-1}
.tc-page *{box-sizing:border-box}
.tc-page .wrap{width:min(100%,520px);margin:0 auto;padding:0 17px 27px;min-height:100dvh}
.tc-page .eyeline{display:flex;justify-content:center;align-items:center;gap:9px;padding:19px 0 15px;letter-spacing:.26em;font-size:9px;font-weight:800;color:#8eabc9}
.tc-page .eyeline i{height:5px;width:5px;background:#129cff;border-radius:50%;box-shadow:0 0 9px #0789ff}
.tc-page .hero{position:relative;overflow:hidden;border-radius:23px;border:1px solid #2e4664;background:#0c1725;box-shadow:0 20px 75px #000b}
.tc-page .photo{position:absolute;inset:0 0 auto;height:245px;background:url('${oficinaUrl}') center /cover no-repeat;filter:saturate(.89) contrast(1.05)}
.tc-page .hero:before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(to bottom, #050b13a1 0%,#06101e8a 26%,#071320ed 54%,#0a1521 100%)}
.tc-page .hero::after{content:"";position:absolute;inset:0;z-index:1;box-shadow:inset 0 0 0 1px #ffffff0a;pointer-events:none}
.tc-page .hero-inner{position:relative;z-index:2;display:flex;align-items:center;flex-direction:column;text-align:center;padding:30px 20px 26px}
.tc-page .status{font-size:9px;font-weight:800;letter-spacing:.2em;color:#9fd0ff;border:1px solid #438cbb8c;background:#001a30a8;padding:9px 13px;border-radius:30px;text-transform:uppercase}
.tc-page .brand{display:block;width:min(100%,343px);height:auto;filter:drop-shadow(0 9px 22px #0009);margin:28px 0 14px}
.tc-page .hero h1{font-size:24px;letter-spacing:-.06em;line-height:1.13;font-weight:850;margin:0 0 10px}
.tc-page .hero p{margin:0;color:#bed0e2;line-height:1.55;font-size:12px;max-width:305px}
.tc-page .miniline{display:flex;gap:6px;align-items:center;margin-top:21px;color:#9fb9cf;letter-spacing:.15em;font-size:9px;font-weight:750;text-transform:uppercase}
.tc-page .miniline span{height:1px;width:23px;background:#238bde}
.tc-page .cta{display:flex;gap:8px;align-items:center;justify-content:center;text-decoration:none;background:linear-gradient(110deg,#0482fa,#0063d0);color:white;font-size:13px;font-weight:850;letter-spacing:.01em;border:1px solid #48aaff;border-radius:13px;padding:15px;margin-top:17px;width:100%;box-shadow:0 13px 28px #006eff25;transition:transform .18s,filter .18s}
.tc-page .cta:hover{transform:translateY(-2px);filter:brightness(1.13)}
.tc-page .cta svg{width:20px;height:20px}
.tc-page .cta.disabled{background:#283547;border-color:#415266;color:#b8c9dd;box-shadow:none;opacity:.67;cursor:not-allowed}
.tc-page .cta.disabled:hover{transform:none;filter:none}
.tc-page .sectionhead{display:flex;gap:12px;align-items:center;margin:25px 3px 13px}
.tc-page .sectionhead b{white-space:nowrap;color:#d5e5f5;font-size:10px;letter-spacing:.21em;text-transform:uppercase}
.tc-page .sectionhead:after{content:"";height:1px;background:linear-gradient(90deg,#366a9a,transparent);flex:1}
.tc-page .links{display:grid;gap:10px}
.tc-page .link{display:flex;align-items:center;gap:13px;text-decoration:none;color:white;padding:12px;border-radius:16px;border:1px solid #2e4058;background:linear-gradient(115deg,#172638 0%,#101923 100%);min-height:77px;box-shadow:0 5px 12px #0004;transition:transform .18s,border-color .18s,background .18s}
.tc-page .link:hover{transform:translateY(-2px);border-color:#329cff;background:#172d47}
.tc-page .link:focus-visible,.tc-page .cta:focus-visible{outline:2px solid #66bbff;outline-offset:3px}
.tc-page .symbol{display:grid;place-items:center;width:51px;height:51px;flex:0 0 51px;border-radius:12px;color:#5bb5ff;border:1px solid #316090;background:linear-gradient(140deg,#193f61,#0a2035)}
.tc-page .symbol svg{width:25px;height:25px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.tc-page .words{flex:1;min-width:0}
.tc-page .words strong{font-size:14px;font-weight:800;display:block;letter-spacing:-.02em}
.tc-page .words small{display:block;margin-top:4px;color:#a9bed1;font-size:10.5px;line-height:1.35}
.tc-page .go{border:1px solid #3c5d78;background:#1a3149;height:28px;width:28px;flex:0 0 28px;display:grid;place-items:center;border-radius:50%;color:#c6e4ff;font-size:19px}
.tc-page .service-card{position:relative;overflow:hidden;border-radius:18px;margin-top:12px;background:linear-gradient(150deg,#11263e 0%,#0d1726 100%);border:1px solid #284563;padding:19px}
.tc-page .service-card:after{content:"";position:absolute;right:-50px;top:-20px;width:180px;height:180px;border-radius:100%;border:20px solid #128aff10}
.tc-page .service-card h2{font-size:15px;margin:0 0 12px;letter-spacing:-.025em}
.tc-page .services{display:flex;flex-wrap:wrap;gap:8px;position:relative;z-index:1}
.tc-page .services span{border:1px solid #294763;border-radius:100px;font-size:10.5px;padding:9px 12px;background:#0a1c30;color:#c6d8ea}
.tc-page .image-card{position:relative;margin-top:13px;overflow:hidden;height:138px;border:1px solid #334e6b;border-radius:18px;background:linear-gradient(90deg,#061220e8,#06122038),url('${fachadaUrl}') center 55%/cover}
.tc-page .image-card div{position:absolute;left:17px;bottom:15px;right:12px;text-shadow:0 2px 7px #000}
.tc-page .image-card b{display:block;font-size:16px;letter-spacing:-.03em}
.tc-page .image-card small{font-size:11px;color:#dfebf6}
.tc-page footer{text-align:center;padding:29px 0 5px;color:#718aa3;font-size:10px;letter-spacing:.04em}
.tc-page footer strong{color:#b0c9e1}
.tc-page footer .brandline{margin-top:7px;color:#4e6984;font-size:9px}
@media(min-width:700px){.tc-page .wrap{padding-top:14px;padding-bottom:40px}}
@media(prefers-reduced-motion:reduce){.tc-page *,.tc-page *::before,.tc-page *::after{transition:none!important;scroll-behavior:auto!important}}
`;

function LinksPage() {
  const wa = whatsappLink(WA_MESSAGE);
  const year = new Date().getFullYear();

  return (
    <div className="tc-page">
      <style>{css(oficinaImg, fachadaImg)}</style>
      <main className="wrap">
        <div className="eyeline">
          <i /> CENTRAL DE CONEXÕES <i />
        </div>

        <header className="hero">
          <div className="photo" role="presentation" />
          <div className="hero-inner">
            <span className="status">MECÂNICA &amp; ESTÉTICA AUTOMOTIVA</span>
            <img
              className="brand"
              src={logoImg}
              alt="Logo Turubia Car Service"
              width={343}
              height={155}
            />
            <h1>Seu carro merece o melhor.</h1>
            <p>Tecnologia, cuidado e confiança em cada detalhe. Encontre nossos canais oficiais.</p>
            <div className="miniline">
              <span /> TURUBIA CAR SERVICE <span />
            </div>
          </div>
        </header>

        {wa ? (
          <a
            className="cta"
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar atendimento pelo WhatsApp"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.4-4.2A8 8 0 1 1 20 11.5Z" />
              <path d="M9 8c0 3 3 6 6 6l1.5-1.5 2 1c-.5 2-2 3-4 2.5C10 15 7 11 7.5 8.5L9 8Z" />
            </svg>
            AGENDAR ATENDIMENTO <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <span className="cta disabled" aria-disabled="true" title="Aguardando o link oficial">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.4-4.2A8 8 0 1 1 20 11.5Z" />
              <path d="M9 8c0 3 3 6 6 6l1.5-1.5 2 1c-.5 2-2 3-4 2.5C10 15 7 11 7.5 8.5L9 8Z" />
            </svg>
            AGENDAR ATENDIMENTO
          </span>
        )}

        <div className="sectionhead">
          <b>Explore nossos canais</b>
        </div>
        <nav className="links" aria-label="Canais da Turubia">
          <a className="link" href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
            <span className="symbol">
              <svg viewBox="0 0 24 24">
                <path d="M14.5 21v-8h3l.5-4h-3.5V7c0-1.2.35-2 2-2H18V1.4A17 17 0 0 0 15.5 1C12 1 10 3.15 10 6.6V9H7v4h3v8" />
              </svg>
            </span>
            <span className="words">
              <strong>Facebook oficial</strong>
              <small>Acompanhe nossa página e atualizações</small>
            </span>
            <span className="go">↗</span>
          </a>

          <a className="link" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
            <span className="symbol">
              <svg viewBox="0 0 24 24">
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx={12} cy={10} r={2.5} />
              </svg>
            </span>
            <span className="words">
              <strong>Como chegar</strong>
              <small>Abra nossa localização no Google Maps</small>
            </span>
            <span className="go">↗</span>
          </a>

          <a className="link" href={REVIEWS_URL} target="_blank" rel="noopener noreferrer">
            <span className="symbol">
              <svg viewBox="0 0 24 24">
                <path d="m12 2 3 6.3 7 .9-5 5 1 7-6-3.3-6 3.3 1-7-5-5 7-.9Z" />
              </svg>
            </span>
            <span className="words">
              <strong>Avalie a Turubia no Google</strong>
              <small>Conte como foi seu atendimento ⭐</small>
            </span>
            <span className="go">↗</span>
          </a>

          <Link className="link" to="/">
            <span className="symbol">
              <svg viewBox="0 0 24 24">
                <circle cx={12} cy={12} r={9} />
                <path d="M3 12h18M12 3c-3 4-3 14 0 18m0-18c3 4 3 14 0 18" />
              </svg>
            </span>
            <span className="words">
              <strong>Site oficial</strong>
              <small>Conheça mais sobre a Turubia</small>
            </span>
            <span className="go">↗</span>
          </Link>
        </nav>

        <div className="sectionhead">
          <b>O que fazemos</b>
        </div>
        <section className="service-card">
          <h2>Soluções para cuidar do seu carro</h2>
          <div className="services">
            <span>Manutenção automotiva</span>
            <span>Troca de óleo e filtros</span>
            <span>Elétrica automotiva</span>
            <span>Estética automotiva</span>
            <span>Diagnóstico</span>
          </div>
        </section>

        <section className="image-card" aria-label="Conheça nossa estrutura">
          <div>
            <b>Conheça a Turubia</b>
            <small>Estrutura preparada para atender você.</small>
          </div>
        </section>

        <footer>
          © {year} <strong>TURUBIA CAR SERVICE</strong>
          <div className="brandline">DESEMPENHO • CONFIANÇA • CUIDADO</div>
        </footer>
      </main>
    </div>
  );
}
