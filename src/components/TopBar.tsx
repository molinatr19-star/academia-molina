import { wa } from "@/lib/site";

/** Barra de urgência fixa no topo. */
export function TopBar() {
  return (
    <a
      href={wa("Quero treinar Hapkido sem pano no sábado!")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed inset-x-0 top-0 z-50 flex h-9 items-center justify-center bg-blood px-3 text-center text-[11px] font-bold uppercase tracking-wider text-white sm:text-xs"
    >
      🔥 Sábado, 09h às 11h: Hapkido sem pano — Chama no zap
    </a>
  );
}
