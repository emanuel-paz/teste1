import { useState } from 'react'

const categories = [
  'Todos',
  'Reportagens',
  'Entrevistas',
  'Fotografia',
  'Vídeos',
  'Projetos Acadêmicos',
]

const items = [
  {
    id: 1,
    category: 'Reportagens',
    title: 'Futebol Alagoano: A Força do Esporte no Nordeste',
    excerpt:
      'Uma imersão na cultura futebolística de Alagoas, seus clubes históricos e as histórias humanas por trás das arquibancadas.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop&auto=format',
    date: 'Mar 2024',
    tags: ['Futebol', 'Nordeste', 'Cultura'],
  },
  {
    id: 2,
    category: 'Entrevistas',
    title: "Jovens Atletas do CSA Falam Sobre Sonhos e Sacrifícios",
    excerpt:
      'Quatro atletas das categorias de base do Centro Sportivo Alagoano revelam os bastidores de uma vida dedicada ao esporte.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop&auto=format',
    date: 'Jun 2024',
    tags: ['Entrevista', 'CSA', 'Categoria de Base'],
  },
  {
    id: 3,
    category: 'Fotografia',
    title: 'A Energia das Arquibancadas',
    excerpt:
      'Ensaio fotográfico que captura a emoção dos torcedores durante a semifinal do Campeonato Alagoano 2024.',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&h=400&fit=crop&auto=format',
    date: 'Ago 2024',
    tags: ['Fotografia', 'Estádio', 'Torcida'],
  },
  {
    id: 4,
    category: 'Vídeos',
    title: 'Bastidores da Semifinal Alagoana 2024',
    excerpt:
      'Minidocumentário de 8 minutos produzido para a disciplina de Jornalismo Audiovisual, cobrindo os bastidores do jogo.',
    image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&h=400&fit=crop&auto=format',
    date: 'Set 2024',
    tags: ['Vídeo', 'Documentário', 'Bastidores'],
  },
  {
    id: 5,
    category: 'Projetos Acadêmicos',
    title: 'Narrativa Esportiva no Jornalismo Digital',
    excerpt:
      'Trabalho de conclusão de período analisando como veículos digitais como The Athletic transformaram a cobertura esportiva.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop&auto=format',
    date: 'Nov 2024',
    tags: ['Acadêmico', 'Pesquisa', 'Digital'],
  },
  {
    id: 6,
    category: 'Reportagens',
    title: 'O Futsal Feminino Que Maceió Não Conhece',
    excerpt:
      'Reportagem de fôlego sobre o crescimento invisível do futsal feminino nos bairros da capital alagoana.',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&h=400&fit=crop&auto=format',
    date: 'Dez 2024',
    tags: ['Futsal', 'Gênero', 'Esporte Local'],
  },
]

export default function Portfolio() {
  const [active, setActive] = useState('Todos')

  const filtered = active === 'Todos' ? items : items.filter((i) => i.category === active)

  return (
    <section id="portfolio" className="py-28 lg:py-36 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">03</span>
          <div className="w-8 h-px bg-accent" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-dim">Portfólio</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="font-display font-black text-ink text-4xl lg:text-5xl leading-tight">
            Trabalhos e
            <br />
            produções
          </h2>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-xs font-semibold px-4 py-2 border transition-colors duration-200 ${
                  active === cat
                    ? 'bg-ink text-white border-ink'
                    : 'bg-white text-dim border-neutral-200 hover:border-ink hover:text-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="group bg-white border border-neutral-100 hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="overflow-hidden bg-neutral-100" style={{ aspectRatio: '16/10' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                    {item.category}
                  </span>
                  <span className="text-xs text-neutral-400">{item.date}</span>
                </div>

                <h3 className="font-display font-bold text-ink text-lg leading-snug mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-dim leading-relaxed mb-5 flex-1">{item.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium bg-surface text-neutral-500 px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="text-xs font-semibold text-ink hover:text-accent transition-colors duration-200 flex items-center gap-1.5 shrink-0 ml-3">
                    Ler matéria
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1 5h8M5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
