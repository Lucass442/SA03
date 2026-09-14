const prioridadeEstilo = {
  alta: "bg-red-100 text-red-700",
  media: "bg-yellow-100 text-yellow-700",
  baixa: "bg-emerald-100 text-emerald-700",
};

function TaskCard({ titulo, categoria, nota, concluida, onToggle, onRemover }) {
  return (
    <article
      className={`rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow border border-slate-100 bg-white ${
        concluida ? "opacity-60" : ""
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs uppercase tracking-wide text-slate-400 font-semibold">
          {categoria}
        </span>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-700">
          Nota {nota}/5
        </span>
      </div>

      <h2 className="text-lg font-semibold text-slate-800 mb-4">{titulo}</h2>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
          <input
            type="checkbox"
            checked={concluida}
            onChange={onToggle}
            className="w-4 h-4 accent-emerald-700"
          />
          Concluída
        </label>

        <button
          onClick={onRemover}
          className="text-xs text-red-500 hover:text-red-700 font-semibold"
        >
          Remover
        </button>
      </div>
    </article>
  );
}

export default TaskCard;
