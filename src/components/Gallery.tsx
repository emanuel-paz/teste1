const photos = [
  {
    src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=700&fit=crop&auto=format',
    alt: 'Vista aérea de estádio de futebol',
    caption: 'Campeonato Alagoano 2024',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop&auto=format',
    alt: 'Atletas em pista de atletismo',
    caption: 'Cobertura de atletismo',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop&auto=format',
    alt: 'Jornalista trabalhando na redação',
    caption: 'Jornal laboratório UFAL',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&h=700&fit=crop&auto=format',
    alt: 'Estádio de futebol iluminado',
    caption: 'Semifinal alagoana',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&h=400&fit=crop&auto=format',
    alt: 'Torcida em estádio lotado',
    caption: 'A energia das arquibancadas',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&h=500&fit=crop&auto=format',
    alt: 'Atleta em ação',
    caption: 'Esporte local em foco',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=600&h=400&fit=crop&auto=format',
    alt: 'Microfone e equipamento de áudio',
    caption: 'Podcast Quatro Linhas',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=700&fit=crop&auto=format',
    alt: 'Futebol em ação',
    caption: 'Campeonato alagoano',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop&auto=format',
    alt: 'Caderno de notas jornalístico',
    caption: 'Apuração em campo',
    tall: false,
  },
]

export default function Gallery() {
  return (
    <section className="py-28 lg:py-36 bg-surface">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">08</span>
          <div className="w-8 h-px bg-accent" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-dim">Galeria</span>
        </div>

        <h2 className="font-display font-black text-ink text-4xl lg:text-5xl leading-tight mb-4">
          Imagens que
          <br />
          contam histórias
        </h2>
        <p className="text-dim text-base mb-14 max-w-lg">
          Registros de eventos, coberturas, bastidores e momentos da minha trajetória no jornalismo esportivo.
        </p>

        {/* Masonry grid */}
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridAutoRows: '180px',
          }}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              className="group relative overflow-hidden bg-neutral-200"
              style={{ gridRow: photo.tall ? 'span 2' : 'span 1' }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/50 transition-colors duration-300 flex items-end">
                <p className="text-white text-xs font-semibold px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
