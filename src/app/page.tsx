export default function Home() {
  const whatsappNumber = "5512996337023";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá Mestre Molina! Quero agendar aula experimental`;

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-zinc-900">
        <div className="flex items-center gap-3">
          <img src="/logo_tigre.png" alt="Logo Molina" className="h-12 w-12 rounded-full border-2 border-orange-500 object-cover" />
          <span className="font-black tracking-widest">MOLINA</span>
        </div>
        <a href={whatsappLink} target="_blank" className="rounded-full bg-orange-500 px-6 py-2.5 text-sm font-black text-black">WHATSAPP</a>
      </nav>

      <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <img src="/logo_tigre.png" alt="Tigre Molina" className="h-72 w-72 rounded-full border-4 border-orange-500 shadow-[0_0_60px_rgba(255,122,0,0.5)] object-cover" />
        <h1 className="mt-8 text-5xl md:text-7xl font-black">ACADEMIA <span className="text-orange-500">MOLINA</span></h1>
        <p className="mt-2 tracking-[0.4em] font-bold text-zinc-300">JIU-JITSU & HAPKIDO</p>
        <a href={whatsappLink} target="_blank" className="mt-8 rounded-full bg-orange-500 px-8 py-4 font-black text-black text-lg">AGENDAR AULA GRÁTIS</a>
      </section>

      <section className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-20 items-center border-t border-zinc-900">
        <img src="/Molina_hapkido_espada.jpg" alt="Mestre Eduardo Molina" className="rounded-[2rem] border border-zinc-800 w-full h-[600px] object-cover object-top" />
        <div>
          <span className="text-orange-500 font-bold tracking-widest text-sm">MESTRE</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-black leading-none">EDUARDO<br/>MOLINA</h2>
          <p className="mt-6 text-zinc-400 leading-relaxed text-lg">
            Faixa-preta com décadas de dedicação. No Hapkido, defesa pessoal real com chutes, torções e armas tradicionais. No Jiu-Jitsu, a eficiência da arte suave.
            <br/><br/>
            Aqui formamos lutadores e pessoas com disciplina, respeito e foco. Oss!
          </p>
          <a href={whatsappLink} target="_blank" className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-bold text-black">Treinar com o Mestre</a>
        </div>
      </section>

      <footer className="border-t border-zinc-900 py-10 text-center text-zinc-600 text-sm">Academia Eduardo Molina • Santo André SP • Oss! 🐯</footer>
    </main>
  );
}