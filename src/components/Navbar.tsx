import { useState, useEffect } from 'react'

const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Trajetória', href: '#trajetoria' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-neutral-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-display font-extrabold text-lg tracking-tight text-ink"
        >
          Gabriel<span className="text-accent">.</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-dim hover:text-ink transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="text-sm font-semibold bg-accent text-white px-5 py-2 hover:bg-red-800 transition-colors duration-200"
          >
            Falar comigo
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
          aria-label="Menu"
        >
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-200 origin-center ${menuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-200 origin-center ${menuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-dim"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-semibold bg-accent text-white px-5 py-2.5 text-center"
          >
            Falar comigo
          </a>
        </div>
      )}
    </nav>
  )
}
