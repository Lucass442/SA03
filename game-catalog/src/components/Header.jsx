import { useState } from "react";
import Relogio from "./Relogio";

function Header() {
  const [mostrarRelogio, setMostrarRelogio] = useState(true);

  return (
    <header className="border-b-2 border-cyan-500 bg-black/90 px-6 py-4 shadow-[0_0_20px_rgba(6,182,212,0.15)] flex justify-between items-center font-mono">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-cyan-500 text-black font-black text-xl flex items-center justify-center border-2 border-white shadow-[0_0_10px_#06b6d4]">
          👾
        </div>
        <div>
          <h1 className="text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-400 uppercase">
            ABABA_ARCADE
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {mostrarRelogio && <Relogio />}
        <button
          onClick={() => setMostrarRelogio(!mostrarRelogio)}
          className="text-xs border border-cyan-500/70 text-cyan-300 hover:border-cyan-400 hover:text-cyan-200 px-3 py-1 rounded-lg transition-colors"
        >
          {mostrarRelogio ? "Esconder relógio" : "Mostrar relógio"}
        </button>
      </div>
    </header>
  );
}

export default Header;