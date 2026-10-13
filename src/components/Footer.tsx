import { MessageCircle } from "lucide-react";
import { site, wa } from "@/lib/site";

/** Ícone do Instagram inline (lucide removeu ícones de marca). */
const Instagram = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink px-5 py-14">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
        <div>
          <p className="font-display text-3xl tracking-wider">ACADEMIA <span className="text-gold">MOLINA</span></p>
          <p className="mt-2 text-sm text-zinc-500">Hapkido • Defesa Pessoal • {site.city}-{site.state}</p>
        </div>
        <div className="flex gap-4">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="border border-line p-3 hover:border-gold hover:text-gold"><Instagram /></a>
          <a href={wa()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="border border-line p-3 hover:border-gold hover:text-gold"><MessageCircle /></a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-line pt-6 text-xs text-zinc-600">© {site.since}–2026 Academia Molina. Todos os direitos reservados. Oss! 🐯</p>
    </footer>
  );
}
