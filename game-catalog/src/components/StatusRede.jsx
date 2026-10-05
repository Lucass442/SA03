import { useState, useEffect } from "react";

function StatusRede() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    function aoFicarOnline() {
      setOnline(true);
    }
    function aoFicarOffline() {
      setOnline(false);
    }

    window.addEventListener("online", aoFicarOnline);
    window.addEventListener("offline", aoFicarOffline);

    return () => {
      window.removeEventListener("online", aoFicarOnline);
      window.removeEventListener("offline", aoFicarOffline);
    };
  }, []);

  if (online) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="bg-amber-950/95 border-b border-amber-500/60 text-amber-300 text-xs sm:text-sm text-center py-2.5 px-4 font-mono font-bold tracking-wider shadow-[0_0_15px_rgba(245,158,11,0.2)] flex items-center justify-center gap-2"
    >
      <span>📡</span>
      <span>MODO OFFLINE ATIVADO — Mostrando os jogos salvos no seu dispositivo.</span>
    </div>
  );
}

export default StatusRede;
