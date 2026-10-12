export default function MestrePage() {
  const whatsappNumber = "5512996337023"; // coloca seu numero aqui
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá Mestre Molina! Vi sua página e quero treinar Hapkido`;

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-zinc-900">
        <a href="/" className="flex items-center gap-3">
          <img src="/logo_tigre.png" alt="Logo" className="h-10 w-10 rounded-full border-2 border-orange-500" />
          <span className="font-black tracking-widest text-sm">MOLINA</span>
        </a>
        <a href="/" className="text-sm text-zinc-400 hover:text-white">← VOLTAR</a>
      </nav>

      <section className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 px-0 md:px-6 py-0 md:py-16 items-center">

        {/* FOTO GRANDONA */}
        <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden md:rounded-[2rem] border-b md:border border-zinc-800">
          <img
            src="/Molina_hapkido_espada.jpg"
            alt="Mestre Eduardo Molina"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden" />
        </div>

        {/* TEXTO */}
        <div className="px-6 py-10 md:py-0">
          <span className="text-orange-500 font-black tracking-[0.3em] text-sm">MESTRE</span>
          <h1 className="mt-2 text-5xl md:text-6xl font-black leading-[0.9]">
            EDUARDO<br/>MOLINA
          </h1>

          <div className="mt-8 space-y-4 text-zinc-300 text-lg leading-relaxed">
            <p>
              Faixa-preta com <span className="text-white font-bold">décadas de dedicação</span>.
              No Hapkido, defesa pessoal real com chutes, torções e armas tradicionais.
            </p>
            <p>
              No Jiu-Jitsu, a eficiência da arte suave. Controle, finalizações e estratégia.
            </p>
            <p className="text-white font-bold border-l-4 border-orange-500 pl-4">
              Aqui formamos lutadores e pessoas com disciplina, respeito e foco. Oss!
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4">
            <a href={whatsappLink} target="_blank" className="rounded-full bg-orange-500 px-8 py-4 text-center font-black text-black text-lg hover:bg-orange-400">
              TREINAR COM O MESTRE
            </a>
            <div className="flex gap-3">
              <div className="flex-1 rounded-2xl bg-zinc-900 border border-zinc-800 p-4 text-center">
                <p className="text-2xl font-black text-orange-500">20+</p>
                <p className="text-xs text-zinc-500 tracking-widest">ANOS DE TATAME</p>
              </div>
              <div className="flex-1 rounded-2xl bg-zinc-900 border border-zinc-800 p-4 text-center">
                <p className="text-2xl font-black text-orange-500">2</p>
                <p className="text-xs text-zinc-500 tracking-widest">ARTES MARCIAIS</p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}