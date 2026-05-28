import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

// Pages
const NAV_LINKS = [
  { label: 'Início', to: '/' },
  { label: 'Meu Batismo', to: '/batismo' },
]

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const location = useLocation()

  const isAtiva = (path) => location.pathname === path

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0e0e0e]/80 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link
          to="/"
          className="text-white text-sm tracking-[0.3em] uppercase font-light"
        >
          Antonella
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`text-xs tracking-[0.2em] uppercase transition-colors duration-200
                  ${isAtiva(link.to)
                    ? 'text-white'
                    : 'text-white/50 hover:text-white'
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Abrir menu"
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300
            ${menuAberto ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span className={`block w-6 h-px bg-white transition-all duration-300
            ${menuAberto ? 'opacity-0' : ''}`}
          />
          <span className={`block w-6 h-px bg-white transition-all duration-300
            ${menuAberto ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>

      </nav>

      {menuAberto && (
        <ul className="md:hidden bg-[#0e0e0e] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={() => setMenuAberto(false)}
                className={`text-xs tracking-[0.2em] uppercase transition-colors duration-200
                  ${isAtiva(link.to)
                    ? 'text-white'
                    : 'text-white/50 hover:text-white'
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}

    </header>
  )
}

export default Navbar