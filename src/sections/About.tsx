import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="o-mne" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Foto placeholder */}
          <div className="relative">
            <div className="aspect-[3/4] bg-dark rounded-sm overflow-hidden border border-amber/20">
              <div className="w-full h-full flex items-center justify-center text-amber/30">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎸</div>
                  <p className="text-sm font-medium tracking-wide">Foto přijde</p>
                </div>
              </div>
            </div>
            {/* Dekorativní rámeček */}
            <div className="absolute -top-3 -left-3 w-full h-full border border-amber/30 rounded-sm -z-10" />
          </div>

          {/* Text */}
          <div>
            <p className="text-amber/70 text-xs font-medium tracking-[0.3em] uppercase mb-3">
              O mistrovi
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
              Libor Obzina
            </h2>
            <div className="space-y-4 text-cream/70 leading-relaxed">
              <p>
                Kytary vyrábím přes dvacet let. Začínal jsem jako samouk, fascinovaný tím, jak kus dřeva
                může promluvit hudbou. Postupem času se z koníčku stalo řemeslo — a z řemesla vášeň.
              </p>
              <p>
                Každý nástroj, který opustí mou dílnu, je navržen a vytvořen podle přání zákazníka.
                Věřím, že kytara musí sedět hráči jako rukavice — zvukově, vizuálně i fyzicky.
              </p>
              <p>
                Pracuji výhradně s prověřenými dřevy: smrk, cedr, mahagon, eben. Žádná kompromisní
                materiálová řešení. Jen to nejlepší.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-amber/20">
              {[
                { num: '20+', label: 'Let zkušeností' },
                { num: '150+', label: 'Hotových kytar' },
                { num: '100%', label: 'Ruční práce' },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl font-bold text-amber">{stat.num}</div>
                  <div className="text-cream/50 text-xs mt-1 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
