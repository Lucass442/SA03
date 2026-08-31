function GameCard({ titulo, descricao, categoria, nota, ano }) {
  // Cores dinâmicas em estilo Neon Cyberpunk
  const coresCategoria = {
    RPG: "border-fuchsia-500 text-fuchsia-400 bg-fuchsia-950/40 shadow-[0_0_8px_rgba(217,70,239,0.3)]",
    Ação: "border-rose-500 text-rose-400 bg-rose-950/40 shadow-[0_0_8px_rgba(244,63,94,0.3)]",
    Aventura: "border-emerald-500 text-emerald-400 bg-emerald-950/40 shadow-[0_0_8px_rgba(16,185,129,0.3)]",
    Plataforma: "border-amber-500 text-amber-400 bg-amber-950/40 shadow-[0_0_8px_rgba(245,158,11,0.3)]",
    Metroidvania: "border-cyan-500 text-cyan-400 bg-cyan-950/40 shadow-[0_0_8px_rgba(6,182,212,0.3)]",
  };

  const estiloTag = coresCategoria[categoria] || "border-zinc-500 text-zinc-400 bg-zinc-900";

  return (
    <article className="relative bg-zinc-950 border-2 border-zinc-800 p-5 hover:border-cyan-400 transition-all duration-200 group flex flex-col justify-between font-mono hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:-translate-y-1">
      {/* Detalhe estético no canto do card */}
      <div className="absolute top-0 right-0 w-3 h-3 bg-cyan-500"></div>

      <div>
        {/* Cabeçalho do Card */}
        <div className="flex justify-between items-center mb-4">
          <span className={`text-[10px] font-bold px-2 py-0.5 border uppercase tracking-wider ${estiloTag}`}>
            {categoria}
          </span>
          <span className="text-xs font-bold text-amber-400 bg-black px-2 py-1 border border-amber-500/40">
            ★ {nota}
          </span>
        </div>

        {/* Conteúdo */}
        <h2 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors uppercase tracking-wide">
          {titulo}
        </h2>
        
        <p className="text-[11px] text-zinc-500 mb-3 uppercase">
          RELEASE_YEAR: <span className="text-zinc-300">{ano}</span>
        </p>

        <p className="text-zinc-400 text-xs leading-relaxed border-t border-zinc-800/80 pt-3">
          {descricao}
        </p>
      </div>
    </article>
  );
}

export default GameCard;