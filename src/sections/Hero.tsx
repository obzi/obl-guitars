import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background photo */}
      <img
        src="https://images.unsplash.com/photo-1695727036766-4d06ac90d7f3?auto=format&fit=crop&w=1800&q=70"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/80 to-dark/95" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-amber/70 text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Ruční výroba kytar
          </p>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-4">
            <span className="text-gradient">OBL</span>
          </h1>
          <p className="font-display text-xl md:text-2xl text-cream/70 mb-2">
            Libor Obzina
          </p>
          <p className="text-cream/50 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Každá kytara je jedinečné dílo — stvořené s láskou, precizností a respektem k materiálu.
            Více než dvacet let zkušeností vložených do každého detailu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#kontakt"
              className="bg-amber text-dark font-semibold px-8 py-3 rounded-sm hover:bg-amber/90 transition-colors tracking-wide"
            >
              Objednat nástroj
            </a>
            <a
              href="#galerie"
              className="border border-amber/50 text-amber px-8 py-3 rounded-sm hover:bg-amber/10 transition-colors tracking-wide"
            >
              Prohlédnout galerii
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-amber/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}
