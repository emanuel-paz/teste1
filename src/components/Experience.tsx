const experiences = [
  {
    period: '2024 — presente',
    title: 'Monitor Voluntário — Técnica de Entrevista',
    org: 'UFAL · Faculdade de Comunicação',
    type: 'Monitoria',
    description:
      'Auxílio a estudantes do 1º período nas disciplinas práticas de entrevista jornalística, com foco em escuta ativa, elaboração de pautas e condução de perguntas.',
  },
  {
    period: '2024',
    title: 'Repórter — Jornal Laboratório Gazeta UFAL',
    org: 'UFAL · Laboratório de Jornalismo',
    type: 'Jornalismo',
    description:
      'Produção de reportagens para a editoria de esportes do jornal laboratório da UFAL. Cobertura do Campeonato Alagoano de Futebol com texto, foto e edição.',
  },
  {
    period: '2023 — 2024',
    title: 'Membro — Liga Acadêmica de Comunicação',
    org: 'UFAL',
    type: 'Organização',
    description:
      'Participação ativa em debates, eventos acadêmicos e produção de conteúdo digital para as redes sociais da Liga, com foco em jornalismo esportivo e comunicação digital.',
  },
  {
    period: '2024',
    title: 'Cobertura — Campeonato Alagoano 2024',
    org: 'Trabalho independente',
    type: 'Cobertura',
    description:
      'Cobertura jornalística presencial das semifinais e final do Campeonato Alagoano de Futebol, com produção de texto, fotografia e narrativa nas redes sociais.',
  },
  {
    period: '2023',
    title: 'Voluntário — Semana de Comunicação UFAL',
    org: 'UFAL · Faculdade de Comunicação',
    type: 'Evento',
    description:
      'Organização e mediação de painéis sobre jornalismo digital e comunicação esportiva durante a Semana Acadêmica de Comunicação da UFAL.',
  },
]

const typeColors: Record<string, string> = {
  Monitoria: 'text-blue-600 bg-blue-50',
  Jornalismo: 'text-accent bg-red-50',
  Organização: 'text-green-600 bg-green-50',
  Cobertura: 'text-purple-600 bg-purple-50',
  Evento: 'text-orange-600 bg-orange-50',
}

export default function Experience() {
  return (
    <section id="experiencia" className="py-28 lg:py-36 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">05</span>
          <div className="w-8 h-px bg-accent" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-dim">Experiência</span>
        </div>

        <h2 className="font-display font-black text-ink text-4xl lg:text-5xl leading-tight mb-16">
          Onde aprendi
          <br />
          na prática
        </h2>

        {/* Vertical timeline */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-150 ml-[7px]" style={{ background: 'rgba(17,17,17,0.08)' }} />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-10">
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-ink bg-white" />

                <div className="group hover:translate-x-1 transition-transform duration-200">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs text-neutral-400 font-medium">{exp.period}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 ${typeColors[exp.type] || 'text-gray-600 bg-gray-50'}`}>
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-ink text-lg leading-snug mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-medium text-accent mb-3">{exp.org}</p>
                  <p className="text-sm text-dim leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
