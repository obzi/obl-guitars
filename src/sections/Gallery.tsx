import { motion } from 'framer-motion'

const CDN = 'https://images.unsplash.com'

const guitars = [
  { id: 1, name: 'Akustická — Smrk/Mahagon', type: 'Akustická', year: '2024', photo: `${CDN}/photo-1628887067605-5171efd812e3?auto=format&fit=crop&w=600&q=80` },
  { id: 2, name: 'Klasická — Cedr/Palisandr', type: 'Klasická', year: '2024', photo: `${CDN}/photo-1568821385198-f0c35d781d6a?auto=format&fit=crop&w=600&q=80` },
  { id: 3, name: 'Archtop — Javor/Smrk', type: 'Archtop', year: '2023', photo: `${CDN}/photo-1592448741782-82dbeca860aa?auto=format&fit=crop&w=600&q=80` },
  { id: 4, name: 'Parlour — Cedr/Mahagon', type: 'Parlour', year: '2023', photo: `${CDN}/photo-1583005781194-b2ae9364a311?auto=format&fit=crop&w=600&q=80` },
  { id: 5, name: 'Dreadnought — Smrk/Eben', type: 'Akustická', year: '2022', photo: `${CDN}/photo-1567771736278-1f625771edab?auto=format&fit=crop&w=600&q=80` },
  { id: 6, name: 'Fingerstyle — Cedr/Koa', type: 'Fingerstyle', year: '2022', photo: `${CDN}/photo-1567771736315-133752f63a69?auto=format&fit=crop&w=600&q=80` },
]

export default function Gallery() {
  return (
    <section id="galerie" className="py-24 px-6 bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-amber/70 text-xs font-medium tracking-[0.3em] uppercase mb-3">Moje práce</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Galerie nástrojů</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guitars.map((guitar, i) => (
            <motion.div
              key={guitar.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative bg-surface border border-amber/10 rounded-sm overflow-hidden hover:border-amber/40 transition-colors duration-300"
            >
              {/* Photo — eager loading, no lazy to avoid opacity-0 deadlock */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={guitar.photo}
                  alt={guitar.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-amber/60 text-xs font-medium tracking-wide uppercase">{guitar.type}</span>
                  <span className="text-cream/30 text-xs">{guitar.year}</span>
                </div>
                <p className="text-cream font-medium text-sm">{guitar.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
