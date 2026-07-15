const navLinks = [
  { label: 'Sobre Mim', href: '#sobre' },
  { label: 'Trajetória', href: '#trajetoria' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Formação', href: '#formacao' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
]

const socials = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'E-mail', href: 'mailto:gabriel@example.com' },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 mb-16">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="#" className="font-display font-black text-white text-2xl mb-4 block">
              Gabriel<span className="text-accent">.</span>
            </a>
            <p className="text-sm text-neutral-500 leading-relaxed mb-6">
              Estudante de Jornalismo pela UFAL, especializado em cobertura esportiva.
              Construindo uma trajetória com credibilidade, paixão e evolução constante.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs text-neutral-500">Disponível para estágios</span>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-600 mb-5">
              Navegação
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-600 mb-5">
              Contato
            </p>
            <ul className="space-y-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-600 italic">
            "Contando histórias dentro e fora das quatro linhas."
          </p>
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Gabriel Silva · Maceió, AL
          </p>
        </div>
      </div>
    </footer>
  )
}
