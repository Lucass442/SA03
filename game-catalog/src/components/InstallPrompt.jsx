import { useState, useEffect } from "react";

function InstallPrompt() {
  const [promptEvent, setPromptEvent] = useState(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    console.log("InstallPrompt: aguardando evento beforeinstallprompt...");

    function aoPoderInstalar(evento) {
      console.log("✅ beforeinstallprompt capturado!");
      evento.preventDefault();
      setPromptEvent(evento);
      setVisivel(true);
    }

    window.addEventListener("beforeinstallprompt", aoPoderInstalar);
    return () => window.removeEventListener("beforeinstallprompt", aoPoderInstalar);
  }, []);

  async function instalar() {
    if (!promptEvent) return;
    promptEvent.prompt();
    await promptEvent.userChoice;
    setPromptEvent(null);
    setVisivel(false);
  }

  if (!visivel) return null;

  return (
    <div
      className="bg-zinc-950/95 border-b-2 border-cyan-500 text-zinc-100 px-6 py-3 font-mono shadow-[0_4px_20px_rgba(6,182,212,0.25)] flex items-center justify-between gap-4 flex-wrap"
    >
      <div className="flex items-center gap-3">
        <img
          src="/icons/icon-192.png"
          alt=""
          className="w-9 h-9 rounded-lg border border-cyan-400/60 p-0.5 bg-black"
        />
        <p className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-200">
          Instale o <span className="text-cyan-400 font-bold">Ababa Arcade</span> no seu dispositivo e jogue até offline.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={instalar}
          className="bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-black uppercase tracking-wider px-4 py-2 rounded-lg transition-colors border border-white shadow-[0_0_10px_#06b6d4] focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-zinc-950"
        >
          Instalar App
        </button>
        <button
          onClick={() => setVisivel(false)}
          aria-label="Fechar aviso de instalação"
          className="text-zinc-400 hover:text-white text-base px-2.5 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default InstallPrompt;
