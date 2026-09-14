import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskCard from "./components/TaskCard";
import TaskForm from "./components/TaskForm";

const JOGOS_INICIAIS = [
  {
    id: 1,
    titulo: "Dead By Daylight",
    descricao:
      "Um jogo de horror assimétrico onde um assassino tenta caçar e sacrificar sobreviventes.",
    categoria: "Horror",
    nota: "4.2",
    concluida: false,
  },
  {
    id: 2,
    titulo: "The Last of Us",
    descricao:
      "Uma emocionante aventura de sobrevivência em um mundo devastado por uma infecção mortal.",
    categoria: "Ação",
    nota: "4.8",
    concluida: false,
  },
  {
    id: 3,
    titulo: "Street Fighter 6",
    descricao:
      "O mais recente capítulo da lendária franquia de jogos de luta com mecânicas inovadoras.",
    categoria: "Ação",
    nota: "4.6",
    concluida: false,
  },
  {
    id: 4,
    titulo: "Hollow Knight",
    descricao:
      "Forje seu próprio caminho em um vasto reino arruinado de insetos e heróis.",
    categoria: "Metroidvania",
    nota: "4.5",
    concluida: false,
  },
  {
    id: 5,
    titulo: "Dead Cells",
    descricao:
      "Um roguelike de ação 2D com combate dinâmico e exploração em ambientes procedurais.",
    categoria: "Ação",
    nota: "4.4",
    concluida: false,
  },
  {
    id: 6,
    titulo: "Detroit Become Human",
    descricao:
      "Uma narrativa interativa onde suas escolhas determinam o destino de androides em Detroit.",
    categoria: "Aventura",
    nota: "3.9",
    concluida: false,
  },
  {
    id: 7,
    titulo: "The Quarry",
    descricao:
      "Um jogo de horror narrativo onde todas as suas decisões afetam quem sobrevive a noite.",
    categoria: "Horror",
    nota: "3.8",
    concluida: false,
  },
];

const FILTROS = [
  { valor: "todas", rotulo: "Todas" },
  { valor: "pendentes", rotulo: "Pendentes" },
  { valor: "concluidas", rotulo: "Concluídas" },
];

const normalizarNota = (valor) => {
  const numero = Number(valor);

  if (Number.isNaN(numero)) return "0";
  if (numero <= 5) return numero.toString();

  return (numero / 20).toFixed(1);
};

function App() {
  const [jogos, setJogos] = useState(() => {
    const salvos = localStorage.getItem("devlife-jogos");
    const dados = salvos ? JSON.parse(salvos) : JOGOS_INICIAIS;

    return dados.map((jogo) => ({
      ...jogo,
      nota: normalizarNota(jogo.nota),
    }));
  });
  const [filtro, setFiltro] = useState("todas");

  useEffect(() => {
    localStorage.setItem("devlife-jogos", JSON.stringify(jogos));
  }, [jogos]);

  const jogosFiltrados = jogos.filter((jogo) => {
    if (filtro === "pendentes") return !jogo.concluida;
    if (filtro === "concluidas") return jogo.concluida;
    return true;
  });

  function alternarConcluida(id) {
    setJogos((atual) =>
      atual.map((jogo) =>
        jogo.id === id ? { ...jogo, concluida: !jogo.concluida } : jogo
      )
    );
  }

  function removerTarefa(id) {
    setJogos((atual) => atual.filter((jogo) => jogo.id !== id));
  }

  function adicionarJogo(novoJogo) {
    setJogos((atual) => [
      {
        ...novoJogo,
        id: Date.now(),
        nota: normalizarNota(novoJogo.nota || "0"),
        concluida: false,
      },
      ...atual,
    ]);
  }

  return (
    <div className="min-h-screen flex flex-col font-mono text-zinc-200 bg-[#070b14]">
      <Header />

      <main className="flex-1 max-w-6xl w-full mx-auto p-6">
        <section className="mb-8 border-l-4 border-cyan-500 pl-4 py-1 bg-zinc-950/80 border-r border-y border-zinc-800">
          <h2 className="text-xl font-black text-white tracking-widest uppercase">
            CATÁLOGO DE JOGOS
          </h2>
          <p className="text-zinc-500 text-xs">
            {jogos.length} REGISTROS ENCONTRADOS
          </p>
        </section>

        <div className="mb-6 flex gap-2 flex-wrap">
          {FILTROS.map((opcao) => (
            <button
              key={opcao.valor}
              onClick={() => setFiltro(opcao.valor)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                filtro === opcao.valor
                  ? "bg-cyan-500 text-black"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
            >
              {opcao.rotulo}
            </button>
          ))}
        </div>

        <TaskForm onAdicionar={adicionarJogo} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jogosFiltrados.map((jogo) => (
            <TaskCard
              key={jogo.id}
              titulo={jogo.titulo}
              categoria={jogo.categoria}
              nota={jogo.nota}
              concluida={jogo.concluida}
              onToggle={() => alternarConcluida(jogo.id)}
              onRemover={() => removerTarefa(jogo.id)}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;