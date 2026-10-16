import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck, Users, Gem, Link2, Target, Eye, Heart, User, Briefcase,
  Phone, Instagram, Globe,
} from "lucide-react";
import logo from "@/assets/elo-logo-hd.png";
import logoHeader from "@/assets/elo-logo-header.png";
import escritorio from "@/assets/elo-escritorio.png.asset.json";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ELO Soluções — Conectando você às melhores oportunidades" },
      { name: "description", content: "Crédito, consórcios, seguros, veículos, imóveis e negócios. A ELO Soluções conecta pessoas, negócios e oportunidades." },
      { property: "og:title", content: "ELO Soluções" },
      { property: "og:description", content: "Conectando você às melhores oportunidades." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const valores = [
  { icon: ShieldCheck, t: "Confiança", d: "Fazemos o certo, sempre." },
  { icon: Users, t: "Respeito", d: "Cada pessoa importa." },
  { icon: Gem, t: "Excelência", d: "Entregamos o nosso melhor." },
  { icon: Link2, t: "Conexão", d: "Relacionamentos geram resultados." },
  { icon: Target, t: "Movimento", d: "Transformamos possibilidades em conquistas." },
];
const bancos = ["Banco Pan", "Aki Capital", "Digio", "Daycoval", "Futuro Previdência", "BMG", "Neo Crédito"];

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-gold/30">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
          <a href="#"><img src={logoHeader} alt="ELO Soluções" className="h-14 w-auto" /></a>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-foreground">
            <a href="#sobre" className="hover:text-gold">Sobre</a>
            <a href="#parceiros" className="hover:text-gold">Parceiros</a>
            <a href="#contato" className="hover:text-gold">Contato</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <img src={hero} alt="Aperto de mãos ao pôr do sol" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
          <p className="text-xs tracking-[0.35em] text-gold uppercase">Pessoas · Negócios · Oportunidades</p>
          <h1 className="sr-only">ELO Soluções</h1>
          <div className="mt-8 inline-block rounded-3xl bg-cream p-6 shadow-soft">
            <img src={logo} alt="Logo ELO Soluções" className="w-64 md:w-80" />
          </div>
                    <a href="#contato" className="mt-10 inline-block rounded-full bg-gold-gradient px-8 py-3 font-semibold text-navy shadow-soft transition hover:scale-105">Fale conosco</a>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <img src={escritorio.url} alt="Escritório da ELO Soluções" className="w-full rounded-3xl shadow-soft" loading="lazy" />
        <div className="space-y-8">
          {[
            { icon: Target, t: "Nossa Missão", d: "Conectar pessoas, negócios e oportunidades por meio de soluções que gerem valor e façam sentido para cada momento." },
            { icon: Eye, t: "Nossa Visão", d: "Ser reconhecida como uma marca de confiança na conexão entre pessoas, negócios e oportunidades." },
            { icon: Heart, t: "Nosso Propósito", d: "Ser o elo de confiança entre pessoas e novas possibilidades." },
          ].map((i) => (
            <div key={i.t} className="flex gap-5">
              <i.icon className="h-10 w-10 shrink-0 text-gold" strokeWidth={1.3} />
              <div>
                <h3 className="text-sm font-semibold tracking-[0.2em] uppercase">{i.t}</h3>
                <p className="mt-1 text-muted-foreground">{i.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy text-navy-foreground py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-xs tracking-[0.35em] uppercase text-gold">Nossos Valores</h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-8">
            {valores.map((v) => (
              <div key={v.t} className="text-center">
                <v.icon className="mx-auto h-12 w-12 text-gold" strokeWidth={1.2} />
                <h3 className="mt-4 font-semibold tracking-widest uppercase text-gold">{v.t}</h3>
                <p className="mt-2 text-sm text-navy-foreground/75">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-xs tracking-[0.35em] uppercase font-semibold">Nosso Jeito de Fazer</h2>
          <p className="mt-6 font-script text-4xl md:text-6xl text-primary leading-snug">Ouvir · Entender · Conectar<br />Solucionar · Acompanhar</p>
          <p className="mt-8 text-lg">Porque para nós, negócio bom é aquele em que todos encontram valor.</p>
          <div className="mt-12 flex justify-center gap-12 md:gap-20">
            {[{ icon: User, t: "Pessoas" }, { icon: Briefcase, t: "Negócios" }, { icon: Target, t: "Oportunidades" }].map((p) => (
              <div key={p.t} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold">
                  <p.icon className="h-7 w-7 text-gold" />
                </div>
                <p className="mt-3 text-xs tracking-[0.25em] uppercase">{p.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="parceiros" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-center text-4xl font-bold">Bancos <span className="text-gold-gradient">Parceiros</span></h2>
        <p className="mt-3 text-center text-muted-foreground">Trabalhamos com as principais instituições do mercado.</p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {bancos.map((b) => (
            <div key={b} className="flex h-32 items-center justify-center rounded-2xl border border-border bg-card p-6 text-center text-lg font-semibold shadow-soft">{b}</div>
          ))}
        </div>
      </section>

      <footer id="contato" className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-script text-5xl text-gold">Mais que soluções.<br />Conexões reais.</p>
          </div>
          <div className="space-y-4">
            <a href="tel:+5547999999999" className="flex items-center gap-3 hover:text-gold"><Phone className="h-5 w-5 text-gold" />(47) 99999-9999</a>
            <a href="https://instagram.com/elosolucoes" className="flex items-center gap-3 hover:text-gold"><Instagram className="h-5 w-5 text-gold" />@elosolucoes</a>
            <a href="https://www.elosolucoes.com.br" className="flex items-center gap-3 hover:text-gold"><Globe className="h-5 w-5 text-gold" />www.elosolucoes.com.br</a>
          </div>
        </div>
        <div className="border-t border-gold/20 py-6 text-center text-sm text-navy-foreground/60">
          © 2026 ELO Soluções · Conectando você às melhores oportunidades.
        </div>
      </footer>
    </div>
  );
}
