"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { nav, wa } from "@/lib/site";

/** Header fixo: logo + menu + botão WhatsApp dourado. Menu mobile em tela cheia. */
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-9 z-40 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-3" aria-label="Academia Molina - início">
          <Image src="/logo_tigre.png" alt="" width={44} height={44} className="rounded-full border-2 border-gold" />
          <span className="font-display text-xl tracking-wider">MOLINA</span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-zinc-300 transition hover:text-gold">{n.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={wa()} target="_blank" rel="noopener noreferrer"
            className="hidden items-center gap-2 bg-gold px-5 py-2.5 text-sm font-black uppercase text-black transition hover:scale-105 sm:flex">
            <MessageCircle size={16} /> WhatsApp
          </a>
          <button onClick={() => setOpen(!open)} className="p-2 lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-line bg-ink px-5 pb-6 lg:hidden" aria-label="Mobile">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-line py-4 font-display text-2xl uppercase">{n.label}</a>
          ))}
          <a href={wa()} className="mt-5 block bg-gold py-4 text-center font-black uppercase text-black">Chamar no WhatsApp</a>
        </nav>
      )}
    </header>
  );
}
