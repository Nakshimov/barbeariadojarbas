import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/* =====================================================================
 * EDITE AQUI — todo o conteúdo da página fica neste objeto.
 * ===================================================================== */
const U = (id: string, w = 1200, h = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const SITE = {
  name: "Barbearia do Jarbas",
  location: "Santa Tereza — Belo Horizonte, MG",
  // Contatos: troque "Adicionar informação" pelos dados reais.
  contact: {
    whatsapp: "", // Ex.: "5531999999999" (DDI + DDD + número). Vazio = desativado.
    phoneLabel: "Adicionar informação",
    address: "Adicionar informação",
    hours: "Adicionar informação",
    whatsappMessage: "Olá! Gostaria de agendar um horário na Barbearia do Jarbas.",
  },
  // Serviços: edite nome, preço e descrição.
  services: [
    { name: "Corte tradicional", price: "R$ 35", desc: "Tesoura e máquina no ponto, do jeito que você gosta de usar no dia a dia." },
    { name: "Degradê", price: "R$ 40", desc: "Transição suave nas laterais, ajustada ao seu formato de cabeça e estilo." },
    { name: "Corte + barba", price: "R$ 60", desc: "O combo para sair renovado: cabelo e barba alinhados numa sentada só." },
    { name: "Barba", price: "R$ 25", desc: "Desenho, aparo e toalha quente para deixar a barba com cara de cuidada." },
    { name: "Acabamento", price: "R$ 15", desc: "Pezinho e contornos em dia entre um corte e outro." },
  ],
  // Depoimentos: substitua por comentários reais com autorização.
  testimonials: [
    { text: "Ambiente tranquilo, conversa boa e saí com o corte exatamente como pedi.", author: "Nome do cliente" },
    { text: "Gosto do atendimento sem pressa. Dá para explicar o que quer e ser ouvido.", author: "Nome do cliente" },
    { text: "Virou meu cantinho de sábado: corto o cabelo e ainda colocamos o papo em dia.", author: "Nome do cliente" },
  ],
  // Imagens ilustrativas (Unsplash). Substitua por fotos reais da barbearia.
  images: {
    hero: { src: U("1503951914875-452162b0f3f1", 1400, 1600), alt: "Imagem ilustrativa: barbeiro finalizando corte de cabelo em cliente sentado na cadeira" },
    about: { src: U("1512690459411-b9245aed614b", 1200, 1400), alt: "Imagem ilustrativa: interior de barbearia com cadeiras clássicas e espelhos" },
    gallery: [
      { src: U("1621605815971-fbc98d665033"), alt: "Imagem ilustrativa: barbeiro aparando a barba de um cliente" },
      { src: U("1585747860715-2ba37e788b70"), alt: "Imagem ilustrativa: corte com máquina nas laterais da cabeça" },
      { src: U("1599351431202-1e0f0137899a"), alt: "Imagem ilustrativa: cliente com barba sendo modelada com navalha" },
      { src: U("1622286342621-4bd786c2447c"), alt: "Imagem ilustrativa: detalhe de degradê recém-finalizado" },
      { src: U("1605497788044-5a32c7078486"), alt: "Imagem ilustrativa: ferramentas de barbeiro organizadas na bancada" },
      { src: U("1622287162716-f311baa1a2b8"), alt: "Imagem ilustrativa: barbeiro trabalhando com tesoura e pente" },
    ],
  },
};
/* ===================================================================== */

const NAV = [
  { id: "inicio", label: "Início" },
  { id: "servicos", label: "Serviços" },
  { id: "sobre", label: "Sobre" },
  { id: "contato", label: "Contato" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Barbearia do Jarbas — Santa Tereza, BH (modelo demonstrativo)" },
      { name: "description", content: "Modelo demonstrativo de site para barbearia de bairro em Santa Tereza, Belo Horizonte. Conteúdo editável." },
      { property: "og:title", content: "Barbearia do Jarbas — modelo demonstrativo" },
      { property: "og:description", content: "Seu estilo, do seu jeito. Modelo de site editável para barbearia de bairro." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Scissors({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
      <path d="M20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12" />
    </svg>
  );
}

const btn = "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-colors";
const btnPrimary = `${btn} bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground`;
const btnGhost = `${btn} border border-foreground/40 text-foreground hover:bg-foreground hover:text-background`;

function SectionTitle({ kicker, title }: { kicker: string; title: ReactNode }) {
  return (
    <div className="mb-10">
      <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-accent">
        <span className="h-0.5 w-8 bg-primary" aria-hidden="true" />{kicker}
      </p>
      <h2 className="text-4xl sm:text-5xl md:text-6xl">{title}</h2>
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const waLink = buildWhatsAppLink(SITE.contact.whatsapp, SITE.contact.whatsappMessage);

  const book = () => {
    setMenuOpen(false);
    if (waLink) { window.open(waLink, "_blank", "noopener,noreferrer"); return; }
    setNotice("");
    document.getElementById("contato")?.scrollIntoView();
    setTimeout(() => setNotice("WhatsApp ainda não configurado: adicione um número real em SITE.contact.whatsapp para ativar o agendamento."), 50);
  };

  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-primary focus:p-3 focus:text-primary-foreground">Pular para o conteúdo</a>
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="stripes h-1" aria-hidden="true" />
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <a href="#inicio" className="flex items-center gap-2 font-display text-xl uppercase tracking-wide">
            <span className="grid size-9 place-items-center rounded-full bg-primary text-primary-foreground"><Scissors className="size-5" /></span>
            {SITE.name}
          </a>
          <nav aria-label="Principal" className="hidden md:block">
            <ul className="flex items-center gap-7 text-sm font-semibold uppercase tracking-wider">
              {NAV.map((n) => <li key={n.id}><a className="hover:text-accent" href={`#${n.id}`}>{n.label}</a></li>)}
            </ul>
          </nav>
          <div className="hidden md:block"><button onClick={book} className={btnPrimary}>Agendar horário</button></div>
          <button
            className="grid min-h-11 min-w-11 place-items-center rounded-sm border border-border md:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="menu-mobile"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="relative block h-3.5 w-5" aria-hidden="true">
              <span className={`absolute left-0 h-0.5 w-5 bg-foreground transition-transform ${menuOpen ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-foreground ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-0.5 w-5 bg-foreground transition-transform ${menuOpen ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
        <nav id="menu-mobile" aria-label="Menu móvel" hidden={!menuOpen} className="border-t border-border md:hidden">
          <ul className="flex flex-col px-4 py-3">
            {NAV.map((n) => (
              <li key={n.id}><a onClick={() => setMenuOpen(false)} className="block py-3 font-display text-2xl uppercase" href={`#${n.id}`}>{n.label}</a></li>
            ))}
            <li className="pt-2"><button onClick={book} className={`${btnPrimary} w-full`}>Agendar horário</button></li>
          </ul>
        </nav>
      </header>

      <main id="conteudo">
        {/* HERO */}
        <section id="inicio" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.1fr_1fr] md:items-center md:py-24">
            <div className="fade-up">
              <p className="mb-5 inline-block border border-primary px-3 py-1 text-xs font-bold tracking-[0.3em] text-accent">SANTA TEREZA • BELO HORIZONTE</p>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl">Seu estilo,<br /><span className="text-primary">do seu jeito.</span></h1>
              <p className="mt-6 max-w-md text-lg text-muted-foreground">Um espaço descontraído de bairro para cuidar do visual sem pressa — senta, conversa e sai do jeito que você gosta.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#servicos" className={btnPrimary}>Ver serviços</a>
                <button onClick={book} className={btnGhost}>Agendar horário</button>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">Esta página é um modelo demonstrativo para personalização.</p>
            </div>
            <figure className="relative fade-up">
              <div className="stripes absolute -right-3 -top-3 h-full w-full rounded-sm opacity-80" aria-hidden="true" />
              <img src={SITE.images.hero.src} alt={SITE.images.hero.alt} className="photo-treat relative aspect-[4/5] w-full rounded-sm object-cover object-center" />
              <figcaption className="relative mt-2 text-xs text-muted-foreground">Imagem ilustrativa</figcaption>
            </figure>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="border-y border-border bg-card py-20">
          <div className="mx-auto max-w-6xl px-4">
            <SectionTitle kicker="Tabela" title="Serviços" />
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SITE.services.map((s) => (
                <li key={s.name} className="group flex flex-col rounded-sm border border-border bg-background p-6 transition-colors hover:border-primary">
                  <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-border pb-4">
                    <h3 className="text-2xl">{s.name}</h3>
                    <span className="font-display text-2xl text-accent">{s.price}</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">{s.desc}</p>
                </li>
              ))}
              <li className="flex items-center gap-3 rounded-sm border border-dashed border-primary/60 p-6 text-sm">
                <Scissors className="size-6 shrink-0 text-accent" />
                <p>Preços e descrições são exemplos editáveis.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center">
            <img src={SITE.images.about.src} alt={SITE.images.about.alt} className="photo-treat aspect-[4/3] w-full rounded-sm object-cover md:aspect-[4/5]" loading="lazy" />
            <div>
              <SectionTitle kicker="A casa" title={<>Cadeira boa,<br />conversa melhor</>} />
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>Aqui o atendimento é próximo: a gente escuta o que você quer, sugere quando faz sentido e respeita o seu estilo.</p>
                <p>É aquele lugar de bairro onde dá para chegar, puxar assunto e sair com o visual em dia — sem formalidade e com cuidado em cada detalhe.</p>
              </div>
            </div>
          </div>
        </section>

        {/* GALERIA */}
        <section id="galeria" aria-labelledby="galeria-titulo" className="border-t border-border py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-10"><h2 id="galeria-titulo" className="text-4xl sm:text-5xl">Galeria</h2>
              <p className="mt-3 text-sm text-muted-foreground">Imagens ilustrativas — substitua por fotos reais da barbearia.</p></div>
            <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {SITE.images.gallery.map((g) => (
                <li key={g.src} className="overflow-hidden rounded-sm">
                  <img src={g.src} alt={g.alt} loading="lazy" className="photo-treat aspect-square w-full object-cover transition-transform duration-500 hover:scale-105" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section id="depoimentos" aria-labelledby="dep-titulo" className="bg-card py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 id="dep-titulo" className="mb-10 text-4xl sm:text-5xl">O que dizem por aqui</h2>
            <ul className="grid gap-4 md:grid-cols-3">
              {SITE.testimonials.map((t, i) => (
                <li key={i} className="flex flex-col rounded-sm border border-border bg-background p-6">
                  <span className="mb-4 self-start rounded-sm bg-secondary px-2 py-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">Exemplo editável</span>
                  <blockquote className="flex-1 text-lg">“{t.text}”</blockquote>
                  <p className="mt-4 text-sm text-muted-foreground">— {t.author}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="py-20">
          <div className="mx-auto max-w-6xl px-4">
            <SectionTitle kicker="Apareça" title="Contato" />
            <div className="grid gap-8 md:grid-cols-2">
              <dl className="space-y-5">
                {[["Localização", SITE.location], ["Telefone / WhatsApp", SITE.contact.phoneLabel], ["Endereço", SITE.contact.address], ["Horário de funcionamento", SITE.contact.hours]].map(([k, v]) => (
                  <div key={k} className="border-b border-border pb-4">
                    <dt className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{k}</dt>
                    <dd className="mt-1 text-lg">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex flex-col gap-4 rounded-sm border border-border bg-card p-6">
                <button onClick={book} className={btnPrimary}>Chamar no WhatsApp</button>
                <p className="text-sm text-muted-foreground">Configure um número real antes de publicar.</p>
                <p role="status" aria-live="polite" className={notice ? "rounded-sm border border-primary bg-background p-3 text-sm" : "sr-only"}>{notice}</p>
                <div className="mt-auto grid min-h-32 place-items-center rounded-sm border border-dashed border-border p-4 text-center text-sm text-muted-foreground">
                  Espaço reservado para o mapa — adicione quando o endereço real estiver configurado.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="stripes h-1.5" aria-hidden="true" />
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:justify-between">
          <div>
            <p className="flex items-center gap-2 font-display text-2xl uppercase"><Scissors className="size-5 text-accent" />{SITE.name}</p>
            <p className="mt-2 text-sm text-muted-foreground">{SITE.location}</p>
          </div>
          <nav aria-label="Rodapé"><ul className="flex flex-wrap gap-5 text-sm font-semibold uppercase tracking-wider">
            {NAV.map((n) => <li key={n.id}><a className="hover:text-accent" href={`#${n.id}`}>{n.label}</a></li>)}
          </ul></nav>
        </div>
        <div className="mx-auto max-w-6xl space-y-1 border-t border-border px-4 py-6 text-xs text-muted-foreground">
          <p>Conteúdo demonstrativo: substitua textos, preços e imagens antes de publicar.</p>
          <p>Modelo de personalização sem vínculo oficial com o estabelecimento. Fotos: Unsplash (ilustrativas).</p>
        </div>
      </footer>
    </>
  );
}
