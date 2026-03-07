import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="kontakt" className="py-24 px-6 bg-dark">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-amber/70 text-xs font-medium tracking-[0.3em] uppercase mb-3">Napište mi</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Kontakt</h2>
          <p className="text-cream/50 mt-4 max-w-xl mx-auto">
            Máte zájem o svůj nástroj na míru? Rád si popovídám o vašich představách.
            Každý projekt začíná rozhovorem.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          {/* Kontaktní info */}
          <div className="space-y-6">
            {[
              { icon: Mail, label: 'E-mail', value: 'libor@obl-guitars.cz', href: 'mailto:libor@obl-guitars.cz' },
              { icon: Phone, label: 'Telefon', value: '+420 xxx xxx xxx', href: 'tel:+420000000000' },
              { icon: MapPin, label: 'Dílna', value: 'Česká republika', href: undefined },
            ].map(item => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-amber/30 rounded-sm flex items-center justify-center text-amber flex-shrink-0 mt-0.5">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-amber/60 text-xs font-medium tracking-widest uppercase">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-cream hover:text-amber transition-colors font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-cream font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA box */}
          <div className="bg-surface border border-amber/20 rounded-sm p-8">
            <h3 className="font-display text-2xl font-semibold text-cream mb-3">Zahájit projekt</h3>
            <p className="text-cream/60 text-sm leading-relaxed mb-6">
              Napište mi e-mail s popisem své představy — typ kytary, dřeva, hrací styl,
              rozpočet. Odpovím do 48 hodin.
            </p>
            <a
              href="mailto:libor@obl-guitars.cz?subject=Zájem o výrobu kytary"
              className="inline-block w-full bg-amber text-dark font-semibold px-6 py-3 rounded-sm hover:bg-amber/90 transition-colors text-center tracking-wide"
            >
              Napsat e-mail
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
