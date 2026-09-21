import { useState } from "react";

function TaskForm({ onAdicionar }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("Ação");
  const [nota, setNota] = useState("4");

  function aoEnviar(evento) {
    evento.preventDefault();

    if (titulo.trim() === "" || descricao.trim() === "") return;

    onAdicionar({
      titulo: titulo.trim(),
      descricao: descricao.trim(),
      categoria,
      nota,
    });

    setTitulo("");
    setDescricao("");
    setCategoria("Ação");
    setNota("4");
  }

  return (
    <form
      onSubmit={aoEnviar}
      className="mb-8 border border-cyan-500/40 bg-zinc-950/80 p-5 shadow-[0_0_20px_rgba(6,182,212,0.08)]"
    >
      <div className="mb-4">
        <h3 className="text-lg font-black uppercase tracking-[0.15em] text-cyan-400">
          Adicionar jogo
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label
            htmlFor="campo-titulo"
            className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2"
          >
            Título
          </label>
          <input
            id="campo-titulo"
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Ex: Elden Ring"
            className="w-full border border-zinc-700 bg-black px-3 py-2 text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
          />
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="campo-descricao"
            className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2"
          >
            Descrição
          </label>
          <textarea
            id="campo-descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descreva o jogo..."
            rows="3"
            className="w-full border border-zinc-700 bg-black px-3 py-2 text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 resize-none"
          />
        </div>

        <div>
          <label
            htmlFor="campo-categoria"
            className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2"
          >
            Categoria
          </label>
          <select
            id="campo-categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="w-full border border-zinc-700 bg-black px-3 py-2 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
          >
            <option value="Ação">Ação</option>
            <option value="Aventura">Aventura</option>
            <option value="RPG">RPG</option>
            <option value="Plataforma">Plataforma</option>
            <option value="Horror">Horror</option>
            <option value="Metroidvania">Metroidvania</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="campo-nota"
            className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2"
          >
            Nota
          </label>
          <input
            id="campo-nota"
            type="number"
            min="0"
            max="5"
            step="0.5"
            value={nota}
            onChange={(e) => setNota(e.target.value)}
            className="w-full border border-zinc-700 bg-black px-3 py-2 text-zinc-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
          />
        </div>
      </div>

      <div className="mt-5 flex justify-end">
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-400 text-black font-black px-5 py-2 uppercase tracking-wider transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-black"
        >
          + Adicionar Jogo
        </button>
      </div>
    </form>
  );
}

export default TaskForm;