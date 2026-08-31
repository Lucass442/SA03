import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";

function App() {
  const jogos = [
    {
      id: 1,
      titulo: "Dead By Daylight",
      descricao: "Um jogo de horror assimétrico onde um assassino tenta caçar e sacrificar sobreviventes.",
      categoria: "Horror",
      nota: "77",
      ano: "2016",
    },
    {
      id: 2,
      titulo: "The Last of Us",
      descricao: "Uma emocionante aventura de sobrevivência em um mundo devastado por uma infecção mortal.",
      categoria: "Ação",
      nota: "95",
      ano: "2013",
    },
    {
      id: 3,
      titulo: "Street Fighter 6",
      descricao: "O mais recente capítulo da lendária franquia de jogos de luta com mecânicas inovadoras.",
      categoria: "Ação",
      nota: "92",
      ano: "2023",
    },
    {
      id: 4,
      titulo: "Hollow Knight",
      descricao: "Forje seu próprio caminho em um vasto reino arruinado de insetos e heróis.",
      categoria: "Aventura",
      nota: "90",
      ano: "2017",
    },
    {
      id: 5,
      titulo: "Dead Cells",
      descricao: "Um roguelike de ação 2D com combate dinâmico e exploração em ambientes procedurais.",
      categoria: "Ação",
      nota: "89",
      ano: "2018",
    },
    {
      id: 6,
      titulo: "Detroit Become Human",
      descricao: "Uma narrativa interativa onde suas escolhas determinam o destino de androides em Detroit.",
      categoria: "Adventure",
      nota: "78",
      ano: "2018",
    },
    {
      id: 7,
      titulo: "The Quarry",
      descricao: "Um jogo de horror narrativo onde todas as suas decisões afetam quem sobrevive a noite.",
      categoria: "Horror",
      nota: "79",
      ano: "2022",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-mono text-zinc-200">
      <Header />

      <main className="flex-1 max-w-6xl w-full mx-auto p-6">
        {/* Painel de Título da Seção */}
        <section className="mb-8 border-l-4 border-cyan-500 pl-4 py-1 bg-zinc-950/80 border-r border-y border-zinc-800">
          <h2 className="text-xl font-black text-white tracking-widest uppercase">
            CATÁLOGO DE JOGOS
          </h2>
          <p className="text-zinc-500 text-xs">
            {jogos.length} REGISTROS ENCONTRADOS
          </p>
        </section>

        {/* Grid Responsivo (1 col no celular, 2 em tablets e 3 em desktops) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jogos.map((jogo) => (
            <GameCard
              key={jogo.id}
              titulo={jogo.titulo}
              descricao={jogo.descricao}
              categoria={jogo.categoria}
              nota={jogo.nota}
              ano={jogo.ano}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;