import { useState, useEffect, useRef } from 'react'

const SERVICES_OPTIONS = [
  'Armoire de comptage Tarif Bleu/Jaune/Vert',
  'Alimentation grue de chantier',
  'Base vie & cantonnements',
  'Éclairage provisoire',
  'CFO / CFA / IRVE',
  'Plomberie provisoire de chantier',
  'Dépannage / Urgence',
  'Autre prestation',
]

const CONTACT_INFO = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#F5A623">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.6 21 3 13.4 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.01L6.6 10.8z"/>
      </svg>
    ),
    label: 'Téléphone principal',
    value: '07 43 62 74 14',
    href: 'tel:0743627414',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#F5A623">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.6 21 3 13.4 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.01L6.6 10.8z"/>
      </svg>
    ),
    label: 'Astreinte urgences',
    value: '07 62 99 59 17',
    href: 'tel:0762995917',
    badge: '24h/7j',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'E-mail',
    value: 'ibiralec@gmail.com',
    href: 'mailto:ibiralec@gmail.com',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.8">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Adresse',
    value: '14 Rue de Mantes, 92700 Colombes',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12,6 12,12 16,14"/>
      </svg>
    ),
    label: 'Horaires',
    value: 'Lun – Ven : 07:00 – 20:00',
    sub: 'Samedi & Dimanche : Fermé',
  },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
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
    <section id="contact" className="py-20 bg-[#F4F6FA]" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14 section-animate">
          <span className="inline-block bg-[#F5A623]/15 border border-[#F5A623]/30 text-[#D4891A]
            font-['Oswald'] text-xs uppercase tracking-[.12em] px-4 py-1.5 rounded-full mb-4">
            On est là pour vous
          </span>
          <h2 className="font-['Oswald'] font-bold text-4xl sm:text-5xl text-[#1A2744] mb-4">
            CONTACTEZ-<span className="text-[#F5A623]">NOUS</span>
          </h2>
          <p className="text-[#6B7A99] max-w-xl mx-auto text-base leading-relaxed">
            Demande de devis, renseignements ou urgence chantier — nous répondons rapidement.
          </p>
        </div>

        <div className="grid lg:grid-cols-[380px_1fr] gap-12 items-start">

          {/* Contact info */}
          <div className="section-animate flex flex-col gap-5">
            {CONTACT_INFO.map(({ icon, label, value, href, badge, sub }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#1A2744]/8 border border-[#1A2744]/12
                  flex items-center justify-center">
                  {icon}
                </div>
                <div>
                  <p className="font-['Oswald'] text-xs uppercase tracking-wider text-[#6B7A99] mb-0.5">
                    {label}
                    {badge && (
                      <span className="ml-2 bg-[#F5A623] text-[#1A2744] text-[10px] font-bold px-1.5 py-0.5 rounded-md">
                        {badge}
                      </span>
                    )}
                  </p>
                  {href ? (
                    <a href={href}
                      className="text-[#1A2744] font-semibold hover:text-[#D4891A] transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-[#1A2744] font-semibold">{value}</p>
                  )}
                  {sub && <p className="text-[#6B7A99] text-sm mt-0.5">{sub}</p>}
                </div>
              </div>
            ))}

            {/* Map embed */}
            <div className="mt-2 rounded-xl overflow-hidden border border-[#DDE3EE] h-[200px]">
              <iframe
                title="Localisation IBIRAL ELEC – 14 Rue de Mantes, Colombes"
                src="https://www.openstreetmap.org/export/embed.html?bbox=2.3341%2C48.9163%2C2.3541%2C48.9263&layer=mapnik&marker=48.9213%2C2.3441"
                width="100%" height="200"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

          {/* Form */}
          <div className="section-animate">
            <form
              action="https://formsubmit.co/ibiralec@gmail.com"
              method="POST"
              className="bg-white rounded-2xl border border-[#DDE3EE] shadow-sm p-8 flex flex-col gap-5"
            >
              {/* FormSubmit hidden fields */}
              <input type="hidden" name="_subject" value="Nouvelle demande – IBIRAL ELEC" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://ibiral-elec.vercel.app/?merci=1" />
              {/* Honeypot anti-spam */}
              <input type="text" name="_honey" className="hidden" />

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Nom / Prénom *" name="nom" placeholder="Jean Dupont" required />
                <Field label="Société" name="societe" placeholder="BTP Construction" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="E-mail *" name="email" type="email" placeholder="jean@example.com" required />
                <Field label="Téléphone" name="telephone" type="tel" placeholder="06 00 00 00 00" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-['Oswald'] text-xs uppercase tracking-wider text-[#1A2744]">
                  Type de prestation
                </label>
                <select
                  name="prestation"
                  className="px-4 py-3 border-2 border-[#DDE3EE] rounded-lg text-[#1A2744] text-sm
                    focus:border-[#F5A623] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/20
                    transition-colors appearance-none bg-white"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%231A2744' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                >
                  <option value="">Sélectionnez une prestation…</option>
                  {SERVICES_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-['Oswald'] text-xs uppercase tracking-wider text-[#1A2744]">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Décrivez votre projet, le type de chantier, la puissance souhaitée, les délais…"
                  className="px-4 py-3 border-2 border-[#DDE3EE] rounded-lg text-[#1A2744] text-sm
                    focus:border-[#F5A623] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/20
                    transition-colors resize-y min-h-[120px]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1A2744] hover:bg-[#111C35] text-white
                  font-['Oswald'] font-semibold uppercase tracking-wide text-base
                  py-4 rounded-xl transition-all duration-200
                  hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(26,39,68,.3)]
                  flex items-center justify-center gap-2"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                Envoyer ma demande
              </button>

              <p className="text-center text-[#9BA3B8] text-xs">
                Réponse garantie sous 24h ouvrées. Devis gratuit et sans engagement.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', placeholder, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-['Oswald'] text-xs uppercase tracking-wider text-[#1A2744]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="px-4 py-3 border-2 border-[#DDE3EE] rounded-lg text-[#1A2744] text-sm
          placeholder:text-[#B0B8CC] focus:border-[#F5A623] focus:outline-none
          focus:ring-2 focus:ring-[#F5A623]/20 transition-colors"
      />
    </div>
  )
}
