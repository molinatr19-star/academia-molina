import { Reveal } from "./Reveal";

/** Cabeçalho padrão de seção: etiqueta dourada + título gigante. */
export function SectionTitle({ eyebrow, title, sub, center }: { eyebrow: string; title: string; sub?: string; center?: boolean }) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      <span className="text-sm font-bold tracking-[0.3em] text-gold">{eyebrow}</span>
      <h2 className="font-display mt-3 text-5xl uppercase leading-[0.95] md:text-7xl">{title}</h2>
      {sub && <p className={`mt-4 max-w-2xl text-lg text-zinc-400 ${center ? "mx-auto" : ""}`}>{sub}</p>}
    </Reveal>
  );
}
