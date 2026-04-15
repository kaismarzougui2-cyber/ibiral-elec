import { useEffect, useRef } from 'react'

const POINTS = [
  { label: 'L\'installation électrique et plomberie provisoires' },
  { label: 'Les infrastructures CFO / CFA' },
  { label: 'Les solutions énergétiques de chantier' },
  { label: 'IRVE — Bornes de recharge véhicules électriques' },
  { label: 'Les études techniques et mises en service' },
]

const DIFFERENCES = [
  { icon: '🎯', title: 'Expertise chantier', desc: 'Connaissance des contraintes réelles du BTP et des normes en vigueur.' },
  { icon: '⚡', title: 'Réactivité forte', desc: 'Réponse rapide aux demandes de devis, délais tenus, astreinte disponible.' },
  { icon: '🔒', title: 'Conformité garantie', desc: 'Toutes nos installations respectent la NF C 15-100 et les règles CONSUEL.' },
  { icon: '🤝', title: 'Un seul interlocuteur', desc: 'De l\'étude à la mise en service : vous n\'avez qu\'un seul contact.' },
]

const STATS = [
  { value: '100%', label: 'Conforme NF C 15-100' },
  { value: '24/7', label: 'Astreinte technique' },
  { value: '< 2h', label: 'Intervention d\'urgence' },
  { value: 'IDF', label: 'Île-de-France' },
]

export default function About() {
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
    <>
      {/* ── Qui sommes-nous ── */}
      <section id="about" className="py-20 bg-white" ref={sectionRef}>
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left text */}
          <div className="section-animate">
            <span className="inline-block bg-[#F5A623]/15 border border-[#F5A623]/30 text-[#D4891A]
              font-['Oswald'] text-xs uppercase tracking-[.12em] px-4 py-1.5 rounded-full mb-5">
              À propos
            </span>
            <h2 className="font-['Oswald'] font-bold text-4xl sm:text-5xl text-[#1A2744] mb-3">
              QUI <span className="text-[#F5A623]">SOMMES-NOUS ?</span>
            </h2>
            <p className="text-[#6B7A99] font-semibold text-base mb-6 leading-relaxed">
              IBIRAL ELEC est une entreprise spécialisée dans la mise en place d'alimentations
              électriques temporaires pour le secteur du BTP, basée à Colombes (92).
            </p>
            <p className="text-[#4A5568] text-sm leading-relaxed mb-6">
              Nous intervenons sur l'ensemble de l'Île-de-France pour accompagner les promoteurs,
              entreprises générales et maîtres d'œuvre dans leurs besoins en installations
              provisoires — de l'ouverture de chantier jusqu'à la livraison.
            </p>

            <p className="font-['Oswald'] font-semibold text-[#1A2744] mb-3">Spécialisés dans :</p>
            <ul className="flex flex-col gap-3 mb-8">
              {POINTS.map(({ label }) => (
                <li key={label} className="flex items-start gap-3 text-sm text-[#4A5568]">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded bg-[#1A2744] flex items-center justify-center">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6.5l2.5 2.5 4.5-5" stroke="#F5A623" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {label}
                </li>
              ))}
            </ul>

            <p className="text-[#4A5568] text-sm leading-relaxed border-l-4 border-[#F5A623] pl-4">
              Nous accompagnons les acteurs du BTP avec des solutions{' '}
              <strong className="text-[#1A2744]">fiables</strong>,{' '}
              <strong className="text-[#1A2744]">rapides</strong> et{' '}
              <strong className="text-[#1A2744]">conformes</strong> aux exigences du secteur.
            </p>
          </div>

          {/* Right: difference cards */}
          <div className="section-animate grid grid-cols-1 sm:grid-cols-2 gap-5">
            {DIFFERENCES.map(({ icon, title, desc }) => (
              <div key={title}
                className="p-5 rounded-2xl border border-[#DDE3EE] bg-[#F4F6FA]
                  hover:border-[#F5A623]/50 hover:bg-white hover:shadow-lg
                  transition-all duration-250 group">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-['Oswald'] font-semibold text-[#1A2744] text-base mb-1 group-hover:text-[#D4891A] transition-colors">
                  {title}
                </h3>
                <p className="text-[#6B7A99] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="bg-[#1A2744] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map(({ value, label }) => (
              <div key={value}>
                <p className="font-['Oswald'] font-bold text-[#F5A623] text-4xl sm:text-5xl leading-none mb-2">
                  {value}
                </p>
                <p className="text-white/60 text-sm leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
