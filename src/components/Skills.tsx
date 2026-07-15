const softSkills = [
  'Comunicação',
  'Escrita criativa',
  'Entrevista',
  'Oratória',
  'Organização',
  'Trabalho em equipe',
  'Curiosidade',
  'Adaptabilidade',
  'Pensamento crítico',
  'Responsabilidade',
]

const hardSkills = [
  { name: 'Redação jornalística', level: 90 },
  { name: 'Pacote Office', level: 88 },
  { name: 'Canva', level: 85 },
  { name: 'WordPress', level: 78 },
  { name: 'Fotografia', level: 74 },
  { name: 'CapCut / Edição de Vídeo', level: 70 },
  { name: 'Adobe Premiere', level: 62 },
  { name: 'Photoshop', level: 55 },
  { name: 'HTML / CSS', level: 50 },
]

export default function Skills() {
  return (
    <section id="habilidades" className="py-28 lg:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">07</span>
          <div className="w-8 h-px bg-accent" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-dim">Habilidades</span>
        </div>

        <h2 className="font-display font-black text-ink text-4xl lg:text-5xl leading-tight mb-16">
          O que trago
          <br />
          para a redação
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Soft skills */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <h3 className="font-display font-bold text-ink text-2xl">Soft Skills</h3>
              <div className="flex-1 h-px bg-neutral-100" />
            </div>
            <p className="text-sm text-dim leading-relaxed mb-8">
              As habilidades que fazem a diferença na sala de redação — e além dela.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm font-semibold text-ink border border-neutral-200 px-4 py-2 hover:border-ink hover:bg-ink hover:text-white transition-colors duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Languages */}
            <div className="mt-10 border-t border-neutral-100 pt-8">
              <h4 className="font-display font-bold text-ink text-lg mb-5">Idiomas</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-semibold text-ink">Português</span>
                    <span className="text-xs text-neutral-400">Nativo</span>
                  </div>
                  <div className="h-1 bg-neutral-100 rounded-full overflow-hidden">
                    <div className="h-full bg-ink rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm font-semibold text-ink">Inglês</span>
                    <span className="text-xs text-neutral-400">Básico — em aprimoramento</span>
                  </div>
                  <div className="h-1 bg-neutral-100 rounded-full overflow-hidden">
                    <div className="h-full bg-ink rounded-full" style={{ width: '35%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hard skills */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <h3 className="font-display font-bold text-ink text-2xl">Hard Skills</h3>
              <div className="flex-1 h-px bg-neutral-100" />
            </div>
            <p className="text-sm text-dim leading-relaxed mb-8">
              Ferramentas e técnicas que já utilizo em meus projetos e produções.
            </p>
            <div className="space-y-5">
              {hardSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-semibold text-ink">{skill.name}</span>
                    <span className="text-xs font-medium text-neutral-400 tabular-nums">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-neutral-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${skill.level}%`,
                        background: skill.level >= 80 ? '#111111' : skill.level >= 60 ? '#444444' : 'rgba(17,17,17,0.3)',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
