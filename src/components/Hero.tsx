"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { site, wa } from "@/lib/site";

/** Hero: imagem com overlay escuro + parallax leve + dois estilos de título. */
export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]); // parallax leve
  return (
    <section id="top" className="diag-bottom relative flex min-h-[100svh] items-center overflow-hidden pb-24 pt-36">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <Image src="/fotos/foto-25.jpg" alt="" fill priority sizes="100vw" className="object-cover object-[50%_65%] opacity-50 contrast-110" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-transparent to-ink/60" />

      <div className="mx-auto w-full max-w-7xl px-5">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
          className="text-xs font-light tracking-[0.45em] text-gold sm:text-sm">
          ACADEMIA MOLINA APRESENTA
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-4 text-[clamp(3.5rem,13vw,10rem)] uppercase leading-[0.88]">
          Hapkido que<br /><span className="text-gold">forja guerreiros</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
          className="mt-6 max-w-xl text-lg text-zinc-300 md:text-xl">
          {site.master.dan} de Hapkido, {site.master.experienceYears} anos de tatame. Sem frescura. Sem Nutella. Só tatame.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a href={wa("Quero ser um guerreiro! Quero minha aula experimental.")} target="_blank" rel="noopener noreferrer"
            className="bg-gold px-8 py-5 text-center text-lg font-black uppercase text-black shadow-[0_0_40px_rgba(250,204,21,.35)] transition hover:scale-105">
            Quero ser um guerreiro
          </a>
          <a href="#modalidades" className="border-2 border-white/70 px-8 py-5 text-center text-lg font-bold uppercase transition hover:border-gold hover:text-gold">
            Conhecer o tatame
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-6 text-sm text-zinc-300">
          <span><b className="text-white">{site.master.dan}</b> faixa-preta</span>
          <span><b className="text-white">{site.master.experienceYears} anos</b> de experiência</span>
          <span>Desde <b className="text-white">{site.since}</b> em {site.city}</span>
        </motion.div>
      </div>
    </section>
  );
}
