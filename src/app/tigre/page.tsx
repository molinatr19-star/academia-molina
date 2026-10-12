export default function TigrePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <a href="/" className="absolute top-6 left-6 rounded-full bg-black px-6 py-2 text-white font-bold">← VOLTAR</a>

      <img
        src="/logo_tigre_garras.png"
        alt="Tigre Molina Garras"
        className="w-[90vw] max-w-[600px] h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
      />

      <h1 className="mt-10 text-4xl font-black text-center">
        EDUARDO MOLINA<br/>
        <span className="text-orange-500">JIU-JITSU & HAPKIDO</span>
      </h1>

      <p className="mt-4 text-zinc-500 text-center">Logo oficial com garras - versão 2026</p>

      <div className="mt-8 flex gap-4">
        <a href="/" className="rounded-full bg-black px-8 py-3 font-black text-white">VER NO SITE</a>
        <a href="/logo_tigre_garras.png" download className="rounded-full border-2 border-black px-8 py-3 font-bold">BAIXAR LOGO</a>
      </div>
    </main>
  );
}