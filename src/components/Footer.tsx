export default function Footer() {
  return (
    <footer className="bg-surface border-t border-amber/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-xl font-bold text-gradient">OBL</span>
        <p className="text-cream/40 text-sm text-center">
          © {new Date().getFullYear()} OBL — Libor Obzina. Ruční výroba kytar.
        </p>
        <a href="mailto:libor@obl-guitars.cz" className="text-amber/60 hover:text-amber text-sm transition-colors">
          libor@obl-guitars.cz
        </a>
      </div>
    </footer>
  )
}
