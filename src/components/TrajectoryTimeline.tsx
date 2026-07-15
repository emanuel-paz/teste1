const events = [
  {
    year: '2023',
    month: 'Março',
    title: 'Ingresso na UFAL',
    description: 'Início do Bacharelado em Jornalismo na Universidade Federal de Alagoas, com foco em comunicação e produção de conteúdo.',
    type: 'formação',
  },
  {
    year: '2023',
    month: 'Agosto',
    title: 'Liga Acadêmica de Jornalismo',
    description: 'Ingresso na Liga Acadêmica de Comunicação da UFAL, participando de debates, workshops e produção de conteúdo editorial.',
    type: 'projeto',
  },
  {
    year: '2023',
    month: 'Novembro',
    title: 'Primeira Reportagem Publicada',
    description: 'Publicação da primeira reportagem no jornal laboratório da UFAL, cobrindo o cenário do futebol amador alagoano.',
    type: 'conquista',
  },
  {
    year: '2024',
    month: 'Março',
    title: 'Cobertura do Campeonato Alagoano',
    description: 'Cobertura jornalística do Campeonato Alagoano de Futebol 2024, com reportagens textuais e registro fotográfico.',
    type: 'evento',
  },
  {
    year: '2024',
    month: 'Junho',
    title: 'Curso de Sports Journalism',
    description: 'Conclusão do curso online "Sports Journalism" pela Coursera, com foco em narrativa esportiva e cobertura ao vivo.',
    type: 'formação',
  },
  {
    year: '2024',
    month: 'Agosto',
    title: 'Monitoria em Técnica de Entrevista',
    description: 'Monitor voluntário na disciplina de Técnica de Entrevista, auxiliando colegas no desenvolvimento da escuta ativa.',
    type: 'experiência',
  },
  {
    year: '2025',
    month: 'Em breve',
    title: 'Estágio em Redação Esportiva',
    description: 'Meta estabelecida: iniciar estágio em veículo jornalístico especializado em cobertura esportiva regional ou nacional.',
    type: 'futuro',
  },
]

const typeColors: Record<string, string> = {
  formação: 'bg-blue-50 text-blue-700 border-blue-100',
  projeto: 'bg-green-50 text-green-700 border-green-100',
  conquista: 'bg-yellow-50 text-yellow-700 border-yellow-100',
  evento: 'bg-purple-50 text-purple-700 border-purple-100',
  experiência: 'bg-orange-50 text-orange-700 border-orange-100',
  futuro: 'bg-red-50 text-accent border-red-100',
}

export default function TrajectoryTimeline() {
  return (
    <section id="trajetoria" className="py-28 lg:py-36 bg-surface">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">02</span>
          <div className="w-8 h-px bg-accent" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-dim">Trajetória</span>
        </div>

        <h2 className="font-display font-black text-ink text-4xl lg:text-5xl leading-tight mb-4">
          Uma linha do tempo
          <br />
          em construção
        </h2>
        <p className="text-dim text-base mb-16 max-w-lg">
          Cada passo da minha formação, registrado com o rigor de quem
          já pensa como jornalista.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-neutral-200 md:left-1/2" />

          <div className="space-y-10">
            {events.map((event, i) => {
              const isLeft = i % 2 === 0
              return (
                <div
                  key={i}
                  className={`relative flex items-start gap-8 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ml-12 md:ml-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div
                      className={`bg-white border border-neutral-100 p-6 hover:border-accent/20 hover:shadow-sm transition-all duration-300 ${isLeft ? 'md:mr-6' : 'md:ml-6'}`}
                    >
                      <div className={`flex items-start gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-1 border ${typeColors[event.type] || 'bg-gray-50 text-gray-500 border-gray-100'}`}
                        >
                          {event.type}
                        </span>
                        <span className="text-xs text-neutral-400 font-medium pt-1">
                          {event.month} {event.year}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-ink text-lg mb-2">{event.title}</h3>
                      <p className="text-sm text-dim leading-relaxed">{event.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className={`w-3 h-3 rounded-full border-2 ${event.type === 'futuro' ? 'border-accent bg-accent/20' : 'border-ink bg-white'}`} />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
