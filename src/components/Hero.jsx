export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-[70px]"
      style={{
        background: 'linear-gradient(135deg, #111C35 0%, #1A2744 45%, #243560 100%)',
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect x='1' y='1' width='78' height='78' rx='6' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
        }}
      />
      {/* Radial glow */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 55% 65% at 65% 55%, rgba(245,166,35,.07) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left: text */}
        <div>
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-[#F5A623]/15 border border-[#F5A623]/35
            text-[#F5A623] font-['Oswald'] text-xs uppercase tracking-[.12em]
            px-4 py-1.5 rounded-full mb-6">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            Spécialiste BTP – Île-de-France
          </span>

          <h1 className="text-white font-['Oswald'] font-bold leading-[1.1]
            text-4xl sm:text-5xl lg:text-6xl mb-5">
            ALIMENTER<br />
            <span className="text-[#F5A623]">VOS CHANTIERS,</span><br />
            C'EST NOTRE MÉTIER
            <span className="text-[#F5A623]"> ⚡</span>
          </h1>

          <p className="text-white/70 text-lg mb-3 leading-relaxed">
            Installation électrique &amp; plomberie provisoires de chantier.<br />
            <strong className="text-white/90">CFO / CFA / IRVE</strong> — Armoires de comptage Tarif Bleu, Jaune &amp; Vert.
          </p>
          <p className="text-white/60 text-sm mb-8">
            Colombes (92) · Interventions en Île-de-France
          </p>

          {/* Phone numbers */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="tel:0743627414"
              className="flex items-center gap-2 text-white font-semibold text-base hover:text-[#F5A623] transition-colors">
              <PhoneIcon />
              <span>07 43 62 74 14</span>
              <span className="text-white/40 text-xs ml-1">(Principal)</span>
            </a>
            <a href="tel:0762995917"
              className="flex items-center gap-2 text-white/80 font-semibold text-base hover:text-[#F5A623] transition-colors">
              <PhoneIcon />
              <span>07 62 99 59 17</span>
              <span className="text-[#F5A623] text-xs ml-1 font-['Oswald'] uppercase tracking-wide">(Astreinte)</span>
            </a>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a href="#contact"
              className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#D4891A] text-[#1A2744]
                font-['Oswald'] font-semibold uppercase tracking-wide text-base
                px-7 py-3.5 rounded-lg transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(245,166,35,.4)]">
              Demander un devis gratuit
            </a>
            <a href="#services"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white/70
                text-white font-['Oswald'] uppercase tracking-wide text-base
                px-7 py-3.5 rounded-lg transition-all duration-200 hover:bg-white/5">
              Nos services
            </a>
          </div>
        </div>

        {/* Right: info cards */}
        <div className="hidden lg:flex flex-col gap-4">
          {[
            { icon: '🏗', title: 'Armoires de comptage', desc: 'Tarif Bleu · Tarif Jaune · Tarif Vert — installation clé en main.' },
            { icon: '🏚', title: 'Bases vie & Bungalows', desc: 'Alimentation complète, raccordements eau et électricité.' },
            { icon: '🏗', title: 'Alimentation grues', desc: 'Armoires pied de grue, ascenseurs et monte-charges de chantier.' },
            { icon: '⚡', title: 'IRVE – Bornes de recharge', desc: 'Infrastructure de recharge pour véhicules électriques sur site.' },
          ].map(({ icon, title, desc }) => (
            <div key={title}
              className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4
                hover:border-[#F5A623]/40 hover:bg-[#F5A623]/5 transition-all duration-200 group">
              <span className="text-2xl mt-0.5">{icon}</span>
              <div>
                <p className="font-['Oswald'] text-white font-semibold text-base group-hover:text-[#F5A623] transition-colors">
                  {title}
                </p>
                <p className="text-white/55 text-sm mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1">
        <span className="text-white/30 text-xs uppercase tracking-widest font-['Oswald']">Découvrir</span>
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
          <span className="w-1 h-1.5 bg-[#F5A623] rounded-full animate-bounce"/>
        </div>
      </div>
    </section>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.6 21 3 13.4 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.01L6.6 10.8z"/>
    </svg>
  )
}
