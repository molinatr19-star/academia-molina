"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MessageCircle, Quote, X, ChevronLeft, ChevronRight } from "lucide-react";
import { faqs, wa } from "@/lib/site";
import { SectionTitle } from "./Section";

/** FAQ em acordeão — derruba as objeções. */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-24">
      <SectionTitle eyebrow="DÚVIDAS" title="Sem desculpa" center />
      <div className="mt-12 divide-y divide-line border-y border-line">
        {faqs.map((f, i) => (
          <div key={f.q}>
            <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}
              className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-semibold hover:text-gold">
              {f.q}
              <ChevronDown className={`shrink-0 transition ${open === i ? "rotate-180 text-gold" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden pb-5 text-zinc-400">{f.a}</motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Pop-up de saída (desktop: mouse sai pelo topo). Aparece uma vez por sessão. */
export function ExitPopup() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const seen = () => { try { return sessionStorage.getItem("exit-popup") === "1"; } catch { return false; } };
    const onLeave = (e: MouseEvent) => {
      if (e.clientY > 0 || seen()) return;
      try { sessionStorage.setItem("exit-popup", "1"); } catch {}
      setShow(true);
    };
    document.addEventListener("mouseout", onLeave);
    return () => document.removeEventListener("mouseout", onLeave);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-5" role="dialog" aria-modal="true" aria-label="Aula experimental">
          <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="relative w-full max-w-md border-2 border-gold bg-card p-8 text-center">
            <button onClick={() => setShow(false)} aria-label="Fechar" className="absolute right-3 top-3 p-2 text-zinc-400 hover:text-white"><X /></button>
            <h3 className="font-display text-4xl uppercase leading-tight">Vai sair sem garantir sua <span className="text-gold">vaga experimental?</span></h3>
            <p className="mt-4 text-zinc-400">Aula experimental grátis. Fale com o Mestre no WhatsApp e agende a sua.</p>
            <a href={wa()} target="_blank" rel="noopener noreferrer" className="mt-6 block bg-blood py-4 font-black uppercase text-white">Agendar aula grátis</a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Botão flutuante do WhatsApp, pulsando. */
export function FloatingWhatsApp() {
  return (
    <a href={wa()} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp"
      className="pulse-ring fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#22c55e] text-white shadow-xl transition hover:scale-110">
      <MessageCircle size={30} fill="currentColor" />
    </a>
  );
}
