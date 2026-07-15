const education = [
  {
    type: 'Graduação',
    institution: 'UFAL',
    fullName: 'Universidade Federal de Alagoas',
    course: 'Bacharelado em Jornalismo',
    period: '2023 — 2027',
    status: 'Em andamento',
    description: 'Formação completa em jornalismo, com ênfase em comunicação digital, fotojornalismo e produção audiovisual. Participação ativa em projetos extensionistas e laboratórios de comunicação.',
    highlight: true,
  },
  {
    type: 'Curso Online',
    institution: 'Coursera',
    fullName: 'Coursera — Northwestern University',
    course: 'Sports Journalism',
    period: '2024',
    status: 'Concluído',
    description: 'Curso focado em narrativa esportiva, estrutura de reportagem e cobertura ao vivo de eventos esportivos. Ministrado por jornalistas da ESPN e Sports Illustrated.',
    highlight: false,
  },
  {
    type: 'Curso Livre',
    institution: 'ESPM',
    fullName: 'ESPM Online',
    course: 'Produção de Conteúdo Digital',
    period: '2024',
    status: 'Concluído',
    description: 'Capacitação em produção de conteúdo para plataformas digitais, incluindo escrita para web, SEO editorial e métricas de engajamento.',
    highlight: false,
  },
  {
    type: 'Certificado',
    institution: 'Google',
    fullName: 'Google Ateliê Digital',
    course: 'Fundamentos de Marketing Digital',
    period: '2023',
    status: 'Concluído',
    description: 'Certificação em marketing digital com foco em presença online, análise de dados e estratégia de conteúdo para jornalistas independentes.',
    highlight: false,
  },
]

export default function Education() {
  return (
    <section id="formacao" className="py-28 lg:py-36 bg-surface">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">06</span>
          <div className="w-8 h-px bg-accent" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-dim">Formação</span>
        </div>

        <h2 className="font-display font-black text-ink text-4xl lg:text-5xl leading-tight mb-16">
          Base sólida,
          <br />
          aprendizado contínuo
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {education.map((edu, i) => (
            <div
              key={i}
              className={`relative bg-white p-8 border transition-shadow duration-300 hover:shadow-md ${
                edu.highlight ? 'border-ink' : 'border-neutral-100'
              }`}
            >
              {edu.highlight && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent" />
              )}

              <div className="flex items-start justify-between mb-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 block mb-1">
                    {edu.type}
                  </span>
                  <span
                    className={`font-display font-black text-4xl ${edu.highlight ? 'text-ink' : 'text-neutral-200'}`}
                  >
                    {edu.institution}
                  </span>
                </div>
                <span
                  className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1.5 ${
                    edu.status === 'Em andamento'
                      ? 'bg-green-50 text-green-700'
                      : 'bg-surface text-neutral-400'
                  }`}
                >
                  {edu.status}
                </span>
              </div>

              <p className="text-[10px] font-medium text-neutral-400 uppercase tracking-wider mb-1">
                {edu.fullName}
              </p>
              <h3 className="font-display font-bold text-ink text-xl mb-1">{edu.course}</h3>
              <p className="text-sm text-accent font-medium mb-4">{edu.period}</p>
              <p className="text-sm text-dim leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
