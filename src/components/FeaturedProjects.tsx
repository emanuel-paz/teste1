const projects = [
  {
    number: '01',
    title: 'Jornal Laboratório UFAL — Editoria Esportiva',
    summary:
      'Série de reportagens produzidas para o Jornal Laboratório da UFAL, cobrindo o futebol alagoano ao longo de 2024. Inclui entrevistas com jogadores, técnicos e torcedores, além de análises táticas e perfis humanos.',
    tools: ['Redação jornalística', 'Fotografia', 'Canva', 'WordPress'],
    skills: ['Apuração', 'Narrativa esportiva', 'Edição de texto', 'Diagramação'],
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=700&h=480&fit=crop&auto=format',
    category: 'Jornalismo Impresso/Digital',
  },
  {
    number: '02',
    title: 'Podcast "Quatro Linhas" — Análise de Futebol',
    summary:
      'Projeto de podcast criado como trabalho da disciplina de Rádio e Áudio, com episódios semanais analisando rodadas do Campeonato Alagoano. Roteiro, apresentação e edição desenvolvidos de forma independente.',
    tools: ['Audacity', 'Anchor', 'Roteiro', 'Locução'],
    skills: ['Comunicação oral', 'Curadoria', 'Edição de áudio', 'Análise esportiva'],
    image: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=700&h=480&fit=crop&auto=format',
    category: 'Rádio / Podcast',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="py-28 lg:py-36 bg-surface">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">04</span>
          <div className="w-8 h-px bg-accent" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-dim">Projetos em Destaque</span>
        </div>

        <h2 className="font-display font-black text-ink text-4xl lg:text-5xl leading-tight mb-16">
          Os projetos que
          <br />
          mais me orgulho
        </h2>

        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group grid grid-cols-1 lg:grid-cols-[320px_1fr] bg-white border border-neutral-100 hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="overflow-hidden bg-neutral-200 h-56 lg:h-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-display font-black text-5xl text-neutral-100 leading-none select-none">
                      {project.number}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent border border-accent/30 px-2.5 py-1">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-ink text-2xl leading-snug mb-4">
                    {project.title}
                  </h3>

                  <p className="text-sm text-dim leading-relaxed mb-7">{project.summary}</p>

                  <div className="grid grid-cols-2 gap-6 mb-7">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                        Ferramentas
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tools.map((t) => (
                          <span key={t} className="text-[10px] font-medium bg-surface text-neutral-500 px-2 py-1">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                        Competências
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.skills.map((s) => (
                          <span key={s} className="text-[10px] font-medium bg-surface text-neutral-500 px-2 py-1">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <button className="self-start flex items-center gap-2 text-sm font-semibold text-ink border border-ink px-5 py-2.5 hover:bg-ink hover:text-white transition-colors duration-200">
                  Ver projeto
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
