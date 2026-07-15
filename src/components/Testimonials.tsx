const testimonials = [
  {
    name: 'Prof. Dr. Ricardo Andrade',
    role: 'Professor de Técnica de Reportagem',
    institution: 'UFAL',
    quote: null,
    placeholder: true,
  },
  {
    name: 'Ana Luíza Ferreira',
    role: 'Editora-chefe',
    institution: 'Gazeta UFAL — Jornal Laboratório',
    quote: null,
    placeholder: true,
  },
  {
    name: 'Carlos Mendes',
    role: 'Supervisor de Estágio',
    institution: 'Em breve',
    quote: null,
    placeholder: true,
  },
]

export default function Testimonials() {
  return (
    <section className="py-28 lg:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">09</span>
          <div className="w-8 h-px bg-accent" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-dim">Depoimentos</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="font-display font-black text-ink text-4xl lg:text-5xl leading-tight">
            O que dizem
            <br />
            sobre o meu trabalho
          </h2>
          <p className="text-sm text-neutral-400 max-w-xs text-right">
            Espaço reservado para depoimentos de professores, colegas e supervisores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="border border-neutral-100 p-8 bg-white relative overflow-hidden"
            >
              {/* Quote mark */}
              <div
                className="absolute top-4 right-6 font-display font-black text-7xl text-neutral-100 leading-none select-none pointer-events-none"
                aria-hidden="true"
              >
                "
              </div>

              {t.placeholder ? (
                <div className="space-y-3">
                  <div className="h-3 bg-neutral-100 rounded w-full" />
                  <div className="h-3 bg-neutral-100 rounded w-5/6" />
                  <div className="h-3 bg-neutral-100 rounded w-4/6" />
                  <div className="h-3 bg-neutral-100 rounded w-full" />
                  <div className="h-3 bg-neutral-100 rounded w-3/6" />
                  <p className="text-[10px] font-medium text-neutral-300 uppercase tracking-wider mt-4">
                    Em breve
                  </p>
                </div>
              ) : (
                <p className="text-sm text-dim leading-relaxed italic mb-6">{t.quote}</p>
              )}

              <div className="mt-6 pt-5 border-t border-neutral-100">
                <p className="font-display font-bold text-ink text-sm">{t.name}</p>
                <p className="text-xs text-dim">{t.role}</p>
                <p className="text-xs text-neutral-400">{t.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
