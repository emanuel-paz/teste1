const infoCards = [
  { icon: '📍', label: 'Localização', value: 'Maceió, AL — Brasil' },
  { icon: '🎓', label: 'Universidade', value: 'UFAL — Jornalismo' },
  { icon: '⚽', label: 'Área de interesse', value: 'Jornalismo Esportivo' },
  { icon: '🌐', label: 'Idiomas', value: 'Português · Inglês (básico)' },
  { icon: '🗓', label: 'Disponibilidade', value: 'Estágios e projetos' },
  { icon: '✅', label: 'Status', value: 'Em formação · 3º período' },
]

export default function About() {
  return (
    <section id="sobre" className="py-28 lg:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">01</span>
          <div className="w-8 h-px bg-accent" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-dim">Sobre Mim</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-16 lg:gap-24 items-start">
          {/* Left: Photo */}
          <div className="relative">
            <div className="bg-neutral-100 overflow-hidden" style={{ aspectRatio: '4/5' }}>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=620&fit=crop&auto=format"
                alt="Gabriel Silva"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Quote bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-ink px-6 py-5">
              <p className="text-white text-sm font-medium leading-snug italic">
                "Contar histórias que vão além do placar — essa é minha missão."
              </p>
            </div>
          </div>

          {/* Right: Text + Cards */}
          <div>
            <h2 className="font-display font-black text-ink text-4xl lg:text-5xl leading-tight mb-8">
              Construindo minha história
              <br />
              <span className="text-accent">no jornalismo esportivo</span>
            </h2>

            <div className="space-y-4 text-base text-dim leading-relaxed mb-10">
              <p>
                Ingressei no curso de Jornalismo da Universidade Federal de Alagoas em 2023
                movido por uma paixão que carrego desde criança: o futebol. Cresci vendo
                partidas e percebendo que por trás de cada gol existia uma história humana
                esperando ser contada.
              </p>
              <p>
                Durante minha formação, tenho me dedicado à cobertura esportiva local,
                participando de eventos, entrevistando atletas e produzindo reportagens
                para o jornal laboratório da faculdade. Cada trabalho é uma oportunidade
                de aprimorar a escrita, a apuração e o olhar jornalístico.
              </p>
              <p>
                Além do futebol, exploro o jornalismo multimídia — fotografia, edição de
                vídeo e podcast — construindo uma base sólida para atuar em redações
                digitais modernas.
              </p>
            </div>

            {/* Info cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {infoCards.map((card) => (
                <div
                  key={card.label}
                  className="bg-surface border border-neutral-100 px-4 py-4 hover:border-accent/30 transition-colors duration-200"
                >
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-1">
                    {card.label}
                  </p>
                  <p className="text-sm font-semibold text-ink">{card.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
