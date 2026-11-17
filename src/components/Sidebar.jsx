import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [aberto, setAberto] = useState(false);

  const aoEscolherUsuario = () => {
    if (window.matchMedia("(max-width: 600px)").matches) {
      setAberto(false);
    }
  };

  return (
    <aside className={`sidebar ${aberto ? "open" : ""}`}>
      <button
        className="sidebar-toggle"
        onClick={() => setAberto(!aberto)}
        aria-label={aberto ? "Fechar lista de usuários" : "Abrir lista de usuários"}
        aria-expanded={aberto}
      >
        {aberto ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="5" y1="5" x2="19" y2="19" />
            <line x1="19" y1="5" x2="5" y2="19" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="4" cy="6" r="1.8" />
            <circle cx="4" cy="12" r="1.8" />
            <circle cx="4" cy="18" r="1.8" />
            <rect x="8" y="5" width="14" height="2" rx="1" />
            <rect x="8" y="11" width="14" height="2" rx="1" />
            <rect x="8" y="17" width="14" height="2" rx="1" />
          </svg>
        )}
      </button>

      {aberto && (
        <nav className="sidebar-nav">
          <h3>Usuários</h3>
          <ul>
            <li><Link to="/user/1" onClick={aoEscolherUsuario}>Ana Souza</Link></li>
            <li><Link to="/user/2" onClick={aoEscolherUsuario}>Carlos Lima</Link></li>
            <li><Link to="/user/3" onClick={aoEscolherUsuario}>Edivanilson Bezerra</Link></li>
          </ul>
        </nav>
      )}
    </aside>
  );
}