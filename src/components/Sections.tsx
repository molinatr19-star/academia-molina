import Image from "next/image";
import { Check, Crown, MapPin, Shield, Flame, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./Section";
import { gallery, modalities, plans, schedule, weekDays, site, wa } from "@/lib/site";

/** SOBRE + seção "dor" com classe. */
export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-7xl px-5 py-24">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionTitle eyebrow="SOBRE A ACADEMIA" title="Você não precisa de mais uma academia." />
          <Reveal delay={0.1}>
            <p className="font-display mt-4 text-4xl uppercase text-gold md:text-5xl">Você precisa de disciplina.</p>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              A Academia Molina nasceu em {site.since} com uma ideia simples: formar pessoas, não só lutadores. Aqui o respeito vem antes da técnica,
              e a técnica vem antes do ego. Entre para o time que não aceita fracos — mas que acolhe quem está disposto a evoluir.
            </p>
          </Reveal>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {[
            { i: Shield, t: "Respeito", d: "Hierarquia e cuidado com o parceiro de treino." },
            { i: Flame, t: "Disciplina", d: "Constância vence talento. Todo dia, todo tatame." },
            { i: Users, t: "Família", d: "Do iniciante ao faixa-preta. Todo mundo sua igual aqui." },
          ].map((v, k) => (
            <Reveal key={v.t} delay={k * 0.08}>
              <div className="flex gap-4 border-l-4 border-blood bg-card p-6">
                <v.i className="shrink-0 text-gold" />
                <div><h3 className="font-display text-2xl uppercase">{v.t}</h3><p className="mt-1 text-sm text-zinc-400">{v.d}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** MODALIDADES: cards premium com hover agressivo. */
export function Modalities() {
  return (
    <section id="modalidades" className="bg-coal py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle eyebrow="MODALIDADES" title="Escolha sua arma" sub="Do iniciante ao faixa-preta. Todo mundo sua igual aqui." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modalities.map((m, k) => (
            <Reveal key={m.title} delay={k * 0.07}>
              <article className="group relative h-[26rem] overflow-hidden border-2 border-line bg-card transition duration-300 hover:-translate-y-3 hover:border-blood hover:shadow-[0_25px_50px_-12px_rgba(220,38,38,.55)]">
                <Image src={m.img} alt={m.title} fill sizes="(max-width:1024px) 50vw, 25vw"
                  className={`object-cover ${m.pos} opacity-60 grayscale transition duration-500 group-hover:scale-110 group-hover:opacity-80`} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="text-xs font-bold tracking-widest text-gold">{m.tag.toUpperCase()}</span>
                  <h3 className="font-display mt-1 text-4xl uppercase transition group-hover:text-gold">{m.title}</h3>
                  <p className="mt-2 text-sm text-zinc-300">{m.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** MESTRE: foto P&B à esquerda, história à direita. */
export function Master() {
  return (
    <section id="mestre" className="mx-auto max-w-7xl px-5 py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden border-2 border-line">
            <Image src="/Molina_hapkido_espada.jpg" alt="Mestre Eduardo Molina" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover object-top grayscale contrast-125" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent" />
            <div className="absolute bottom-0 left-0 h-2 w-1/2 bg-gold" />
          </div>
        </Reveal>
        <div>
          <SectionTitle eyebrow="O MESTRE" title="Eduardo Molina" />
          <Reveal delay={0.1}>
            <p className="mt-6 border-l-4 border-gold pl-5 font-display text-3xl uppercase leading-tight md:text-4xl">
              Faixa preta não se compra. Se conquista. <span className="text-gold">Há {site.master.experienceYears} anos no tatame.</span>
            </p>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              Faixa-preta {site.master.dan} há {site.master.blackBeltYears} anos, com {site.master.experienceYears} anos de experiência. No Hapkido, defesa pessoal real: chutes, torções, projeções e armas tradicionais.
              Aqui formamos lutadores e pessoas com disciplina, respeito e foco.
            </p>
            <ul className="mt-6 space-y-3">
              {[`Faixa-preta ${site.master.dan} de Hapkido — Confederação Brasileira de Hapkido`, "Linhagem Bum Moo Kwan", "Formador de alunos e faixas-pretas"].map((t) => (
                <li key={t} className="flex items-center gap-3"><Crown size={18} className="text-gold" /> {t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** HORÁRIOS: tabela limpa. */
export function Schedule() {
  return (
    <section id="horarios" className="bg-coal py-24">
      <div className="mx-auto max-w-5xl px-5">
        <SectionTitle eyebrow="HORÁRIOS" title="Hora de aparecer" center />
        <Reveal delay={0.1}>
          <div className="mt-12 overflow-x-auto border border-line">
            <table className="w-full min-w-[560px] text-center">
              <thead>
                <tr className="bg-card">
                  <th className="p-4 text-left text-xs tracking-widest text-gold">HORA</th>
                  {weekDays.map((d) => <th key={d} className="p-4 font-display text-xl">{d}</th>)}
                </tr>
              </thead>
              <tbody>
                {schedule.map((r) => (
                  <tr key={r.time} className="border-t border-line">
                    <td className="p-4 text-left font-display text-xl text-gold">{r.time}</td>
                    {r.days.map((d, i) => (
                      <td key={i} className="p-4 text-sm">{d ? <span className="bg-card px-2 py-1 font-semibold">{d}</span> : <span className="text-zinc-700">—</span>}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-sm text-zinc-500">Turmas com número limitado de alunos para manter a qualidade do tatame.</p>
        </Reveal>
      </div>
    </section>
  );
}

/** PLANOS: comparativo claro com psicologia agressiva. */
export function Plans() {
  return (
    <section id="planos" className="mx-auto max-w-7xl px-5 py-24">
      <SectionTitle eyebrow="PLANOS" title="Seu compromisso" center />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((p, k) => (
          <Reveal key={p.name} delay={k * 0.08} className="flex">
            <div className={`relative flex w-full flex-col p-6 ${p.featured ? "border-2 border-gold bg-card lg:shadow-[0_0_60px_rgba(250,204,21,.18)]" : "border border-line bg-coal"}`}>
              {p.featured && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold px-4 py-1 text-xs font-black tracking-widest text-black">{p.badge}</span>}
              <h3 className="font-display text-3xl uppercase">{p.name}</h3>
              {p.sub && <p className="text-sm text-zinc-500">{p.sub}</p>}
              <p className="mt-6"><span className="font-display text-5xl">R$ {p.price}</span><span className="text-zinc-400">{p.per}</span></p>
              {p.save && <p className="mt-2 inline-block self-start bg-blood px-2 py-1 text-xs font-bold uppercase">{p.save}</p>}
              {p.total && <p className="mt-2 text-xs text-zinc-500">{p.total}</p>}
              <p className="mt-3 text-sm text-zinc-400">{p.note}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.perks.map((x) => <li key={x} className="flex gap-3 text-sm"><Check size={18} className="shrink-0 text-gold" />{x}</li>)}
              </ul>
              <a href={wa(`Quero o plano ${p.name}!`)} target="_blank" rel="noopener noreferrer"
                className={`mt-8 py-4 text-center font-black uppercase transition hover:scale-[1.03] ${p.featured ? "bg-gold text-black" : "bg-blood text-white"}`}>
                Quero esse plano
              </a>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-10 text-center text-zinc-400">Investimento menor que seu iFood do fim de semana. Turma Kids: R$ 120 por mês.</p>
    </section>
  );
}

/** LOCALIZAÇÃO + Google Maps. */
export function Location() {
  const q = encodeURIComponent(site.mapsQuery);
  return (
    <section id="contato" className="bg-coal py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2">
        <div>
          <SectionTitle eyebrow="LOCALIZAÇÃO" title="Venha ao tatame" />
          <Reveal delay={0.1}>
            <p className="mt-6 flex items-center gap-3 text-lg"><MapPin className="text-gold" /> {site.address}</p>
            <a href={wa()} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block bg-gold px-8 py-4 font-black uppercase text-black transition hover:scale-105">Agendar aula experimental grátis</a>
          </Reveal>
        </div>
        <iframe title="Mapa da Academia Molina" loading="lazy" className="h-80 w-full border-2 border-line grayscale invert-[.9] contrast-90 lg:h-full"
          src={`https://www.google.com/maps?q=${q}&output=embed`} />
      </div>
    </section>
  );
}

/** GALERIA: fotos reais da academia e das cerimônias de graduação. */
export function Gallery() {
  return (
    <section id="galeria" className="mx-auto max-w-7xl px-5 py-24">
      <SectionTitle eyebrow="ESTRUTURA E GRADUAÇÕES" title="Tatame de verdade" sub="Dojo, turma e cerimônias de faixa-preta. Sem banco de imagem." />
      <div className="mt-14 grid auto-rows-[14rem] grid-cols-2 gap-3 md:auto-rows-[17rem] md:grid-cols-4">
        {gallery.map((g, k) => (
          <Reveal key={g.src} delay={(k % 4) * 0.05} className={g.wide ? "col-span-2" : ""}>
            <div className="group relative h-full overflow-hidden border border-line">
              <Image src={g.src} alt={g.alt} fill sizes={g.wide ? "(max-width:768px) 100vw, 50vw" : "(max-width:768px) 50vw, 25vw"}
                className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
