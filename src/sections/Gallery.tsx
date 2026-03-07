import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const guitars = [
  { id: 1, name: 'Akustická — Smrk/Mahagon', type: 'Akustická', year: '2024' },
  { id: 2, name: 'Klasická — Cedr/Palisandr', type: 'Klasická', year: '2024' },
  { id: 3, name: 'Archtop — Javor/Smrk', type: 'Archtop', year: '2023' },
  { id: 4, name: 'Parlour — Cedr/Mahagon', type: 'Parlour', year: '2023' },
  { id: 5, name: 'Dreadnought — Smrk/Eben', type: 'Akustická', year: '2022' },
  { id: 6, name: 'Fingerstyle — Cedr/Koa', type: 'Fingerstyle', year: '2022' },
]

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="galerie" className="py-24 px-6 bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
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
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-surface border border-amber/10 rounded-sm overflow-hidden hover:border-amber/40 transition-colors duration-300"
            >
              {/* Photo placeholder */}
              <div className="aspect-[3/4] bg-dark/60 flex items-center justify-center">
                <div className="text-center text-amber/20 group-hover:text-amber/40 transition-colors">
                  <div className="text-5xl mb-2">🎸</div>
                  <p className="text-xs tracking-widest uppercase">Foto přijde</p>
                </div>
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
