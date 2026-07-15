export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16"
      style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(17,17,17,0.025) 79px, rgba(17,17,17,0.025) 80px),
          repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(17,17,17,0.025) 79px, rgba(17,17,17,0.025) 80px)
        `,
      }}
    >
      {/* Large watermark text */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-black text-[22vw] leading-none select-none pointer-events-none"
        style={{ color: 'rgba(17,17,17,0.025)', right: '-2vw' }}
        aria-hidden="true"
      >
        SPORT
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 lg:gap-20 items-center">
          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-6">
              Jornalismo Esportivo
            </p>

            <h1 className="font-display font-black text-ink leading-[0.92] mb-6">
              <span className="block text-[clamp(3.5rem,8vw,7rem)]">Gabriel</span>
              <span className="block text-[clamp(3.5rem,8vw,7rem)]">Silva</span>
            </h1>

            <div className="w-12 h-px bg-accent mb-6" />

            <p className="text-base font-medium text-dim mb-3 tracking-wide">
              Estudante de Jornalismo · Futuro Jornalista Esportivo
            </p>

            <p className="text-base text-neutral-500 leading-relaxed max-w-lg mb-10">
              Acredito que grandes histórias transformam partidas em memórias.
              Estou construindo minha trajetória no jornalismo esportivo por meio
              de reportagens, entrevistas e projetos desenvolvidos durante minha
              formação na UFAL.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 bg-ink text-white font-semibold text-sm px-7 py-3.5 hover:bg-accent transition-colors duration-300"
              >
                Ver Portfólio
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-ink text-ink font-semibold text-sm px-7 py-3.5 hover:bg-ink hover:text-white transition-colors duration-300"
              >
                Baixar Currículo
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v9M3 8l4 4 4-4M1 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div className="flex items-center gap-6 text-xs text-neutral-400 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                Disponível para estágios
              </span>
              <span>UFAL · Maceió, AL</span>
              <span>2023 — presente</span>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Red accent frame element */}
              <div className="absolute -top-3 -right-3 w-full h-full border border-accent z-0" />

              <div className="relative z-10 bg-neutral-200 overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop&auto=format"
                  alt="Gabriel Silva — Jornalista Esportivo"
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Badge card */}
              <div className="absolute -bottom-5 -left-5 bg-white border border-neutral-100 px-5 py-4 z-20 shadow-sm">
                <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-0.5">UFAL</p>
                <p className="text-sm font-bold text-ink">Jornalismo</p>
                <p className="text-xs text-neutral-400">2023 – 2027</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs tracking-widest text-neutral-300 uppercase font-medium">Scroll</span>
        <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
          <path d="M6 1v14M1 10l5 5 5-5" stroke="rgba(17,17,17,0.2)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  )
}
