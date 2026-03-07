import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trees, Hammer, Brush, Star } from 'lucide-react'

const steps = [
  {
    icon: Trees,
    title: 'Výběr dřeva',
    desc: 'Vše začíná u materiálu. Vybírám jen ta nejlepší dřeva — sušená minimálně 5 let. Zvuk začíná tady.',
  },
  {
    icon: Hammer,
    title: 'Tvarování a montáž',
    desc: 'Každý díl je ručně tvarován, ohýbán a spojován. Přesnost na desetiny milimetru. Žádné zkratky.',
  },
  {
    icon: Brush,
    title: 'Lakování',
    desc: 'Tenkostěnný nitrolak nebo přírodní olej — podle přání zákazníka. Dřevo musí dýchat.',
  },
  {
    icon: Star,
    title: 'Finální nastavení',
    desc: 'Výška strun, intonace, ořech sedlo — vše doladěno k dokonalosti. Nástroj odchází hotový ke hraní.',
  },
]

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="proces" className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-amber/70 text-xs font-medium tracking-[0.3em] uppercase mb-3">Jak pracuji</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Proces výroby</h2>
          <p className="text-cream/50 mt-4 max-w-xl mx-auto">
            Od prvního kusu dřeva po finální akordy — každý krok je vědomý a záměrný.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full border border-amber/30 flex items-center justify-center text-amber flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <span className="text-amber/40 font-display text-3xl font-bold">0{i + 1}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-cream mb-2">{step.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
