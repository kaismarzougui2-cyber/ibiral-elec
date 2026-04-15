import { useEffect, useRef } from 'react'

const AVANTAGES = [
  { icon: '⚡', title: 'Intervention sous 2h', desc: 'Sur toute l\'Île-de-France pour les urgences chantier.' },
  { icon: '📞', title: 'Astreinte 24h/7j', desc: 'Une ligne dédiée toujours disponible : 07 62 99 59 17.' },
  { icon: '🔧', title: 'Techniciens qualifiés', desc: 'Habilitations électriques B2V, BR, BC — NF C 18-510.' },
  { icon: '✅', title: 'Matériel en stock', desc: 'Armoires, câbles, coffrets disponibles immédiatement.' },
]

const DEPANNAGES = [
  'Panne d\'armoire de comptage',
  'Disjoncteur différentiel déclenché',
  'Coupure alimentation grue',
  'Défaut d\'isolement câble',
  'Panne d\'éclairage de sécurité',
  'Surtension ou sous-tension réseau',
  'Remplacement de matériel endommagé',
  'Mise en conformité suite à contrôle',
]

export default function Urgence() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.section-animate').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="urgence" ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #111C35 0%, #1A2744 60%, #1E3057 100%)' }}
    >
      {/* Animated diagonal stripe */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {[...Array(8)].map((_, i) => (
          <div key={i}
            className="absolute h-full w-16 bg-[#F5A623]"
            style={{ left: `${i * 14}%`, transform: 'skewX(-20deg)', transformOrigin: 'top' }}
          />
        ))}
      </div>

      {/* Yellow top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#F5A623]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14 section-animate">
          <span className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/40
            text-red-300 font-['Oswald'] text-xs uppercase tracking-[.12em] px-4 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"/>
            Disponible 24h/7j
          </span>
          <h2 className="text-white font-['Oswald'] font-bold text-4xl sm:text-5xl mb-4">
            URGENCE &amp; <span className="text-[#F5A623]">DÉPANNAGE</span>
          </h2>
          <p className="text-white/65 max-w-xl mx-auto text-base leading-relaxed">
            Un problème électrique bloque votre chantier ? Notre équipe intervient
            rapidement, de jour comme de nuit, pour remettre votre installation en service.
          </p>
        </div>

        {/* Big CTA banner */}
        <div className="section-animate bg-[#F5A623] rounded-2xl px-8 py-7 mb-12
          flex flex-col sm:flex-row items-center justify-between gap-6
          shadow-[0_8px_40px_rgba(245,166,35,.35)]">
          <div>
            <p className="font-['Oswald'] font-bold text-[#1A2744] text-2xl sm:text-3xl leading-tight">
              LIGNE ASTREINTE — URGENCES CHANTIER
            </p>
            <p className="text-[#1A2744]/70 text-sm mt-1">
              Disponible 24h/24 — 7j/7 — Île-de-France
            </p>
          </div>
          <a href="tel:0762995917"
            className="flex-shrink-0 flex items-center gap-3 bg-[#1A2744] hover:bg-[#111C35]
              text-white font-['Oswald'] font-bold text-xl uppercase tracking-wide
              px-8 py-4 rounded-xl transition-all duration-200
              hover:shadow-[0_4px_20px_rgba(0,0,0,.35)] hover:-translate-y-0.5">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.6 21 3 13.4 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.01L6.6 10.8z"/>
            </svg>
            07 62 99 59 17
          </a>
        </div>

        {/* 2-column layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Left: avantages */}
          <div className="section-animate flex flex-col gap-5">
            <h3 className="text-white font-['Oswald'] text-2xl font-semibold mb-1">
              Pourquoi nous faire confiance ?
            </h3>
            {AVANTAGES.map(({ icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#F5A623]/15 border border-[#F5A623]/25
                  flex items-center justify-center text-xl group-hover:bg-[#F5A623]/25 transition-colors">
                  {icon}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{title}</p>
                  <p className="text-white/55 text-sm mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: types de dépannage */}
          <div className="section-animate">
            <h3 className="text-white font-['Oswald'] text-2xl font-semibold mb-5">
              Pannes & Incidents traités
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DEPANNAGES.map(item => (
                <li key={item}
                  className="flex items-center gap-2.5 bg-white/5 border border-white/10
                    rounded-xl px-4 py-3 text-sm text-white/80 hover:border-[#F5A623]/40
                    hover:bg-[#F5A623]/8 hover:text-white transition-all duration-200">
                  <span className="text-[#F5A623] font-bold text-base">›</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-xl">
              <p className="text-white/60 text-sm leading-relaxed">
                <span className="text-[#F5A623] font-semibold">Délai d'intervention :</span>{' '}
                Moins de 2h en Île-de-France pour les urgences bloquantes.
                Devis systématique avant toute intervention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
