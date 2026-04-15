import { useState } from 'react'

const SERVICES_LINKS = [
  'Armoires de comptage',
  'Alimentation grues',
  'Bases vie & cantonnements',
  'Éclairage provisoire',
  'CFO / CFA / IRVE',
  'Dépannage urgent',
]

export default function Footer() {
  const [showMentions, setShowMentions] = useState(false)
  const year = new Date().getFullYear()

  return (
    <>
      {/* ── Main footer ── */}
      <footer className="bg-[#111C35] text-white pt-16 pb-0">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 pb-12 border-b border-white/10">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#F5A623]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#1A2744"/>
                  </svg>
                </span>
                <span className="font-['Oswald'] text-2xl font-bold">
                  <span className="text-white">IBIRAL</span>
                  <span className="text-[#F5A623]"> ELEC</span>
                </span>
              </div>
              <p className="text-white/55 text-sm leading-relaxed mb-4">
                Spécialiste de l'alimentation électrique provisoire de chantier.
                Colombes (92) — Île-de-France.
              </p>
              <div className="flex flex-col gap-2">
                <a href="tel:0743627414"
                  className="flex items-center gap-2 text-white/75 hover:text-[#F5A623] text-sm transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.6 21 3 13.4 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.01L6.6 10.8z"/>
                  </svg>
                  07 43 62 74 14
                </a>
                <a href="tel:0762995917"
                  className="flex items-center gap-2 text-[#F5A623]/80 hover:text-[#F5A623] text-sm transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.6 21 3 13.4 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.01L6.6 10.8z"/>
                  </svg>
                  07 62 99 59 17{' '}
                  <span className="text-[10px] border border-[#F5A623]/40 rounded px-1 py-0.5 text-[#F5A623]">Astreinte</span>
                </a>
                <a href="mailto:ibiralec@gmail.com"
                  className="flex items-center gap-2 text-white/55 hover:text-[#F5A623] text-sm transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  ibiralec@gmail.com
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-['Oswald'] text-sm uppercase tracking-wider text-[#F5A623] mb-4">
                Nos services
              </h4>
              <ul className="flex flex-col gap-2.5">
                {SERVICES_LINKS.map(s => (
                  <li key={s}>
                    <a href="#services"
                      className="text-white/55 hover:text-white text-sm transition-colors flex items-center gap-2">
                      <span className="text-[#F5A623]/60">›</span>
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Infos pratiques */}
            <div>
              <h4 className="font-['Oswald'] text-sm uppercase tracking-wider text-[#F5A623] mb-4">
                Informations pratiques
              </h4>
              <div className="flex flex-col gap-3 text-sm text-white/55">
                <div>
                  <p className="text-white/80 font-medium">Adresse</p>
                  <p>14 Rue de Mantes<br />92700 Colombes</p>
                </div>
                <div>
                  <p className="text-white/80 font-medium">Horaires</p>
                  <p>Lun – Ven : 07:00 – 20:00</p>
                  <p>Sam &amp; Dim : Fermé</p>
                </div>
                <div>
                  <p className="text-white/80 font-medium">Zone d'intervention</p>
                  <p>Île-de-France (75, 92, 93, 94, 77, 78, 91, 95)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3
            text-white/35 text-xs">
            <span>© {year} IBIRAL ELEC — Tous droits réservés</span>
            <button
              onClick={() => setShowMentions(true)}
              className="hover:text-[#F5A623] transition-colors underline underline-offset-2"
            >
              Mentions légales
            </button>
          </div>
        </div>
      </footer>

      {/* ── Mentions légales modal ── */}
      {showMentions && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ background: 'rgba(17,28,53,.85)', backdropFilter: 'blur(6px)' }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowMentions(false) }}
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-[#DDE3EE] px-8 py-5 flex items-center justify-between">
              <h2 className="font-['Oswald'] font-bold text-[#1A2744] text-2xl tracking-wide">
                MENTIONS LÉGALES
              </h2>
              <button
                onClick={() => setShowMentions(false)}
                className="w-9 h-9 rounded-full bg-[#F4F6FA] hover:bg-[#DDE3EE] flex items-center justify-center transition-colors"
                aria-label="Fermer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A2744" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <div className="px-8 py-6 flex flex-col gap-6 text-sm text-[#4A5568] leading-relaxed">

              <Section title="Éditeur du site">
                <Row label="Dénomination sociale" value="SAS IBIRAL ELEC" />
                <Row label="SIRET" value="99954071900013" />
                <Row label="Siège social" value="14 Rue de Mantes, 92700 Colombes, France" />
                <Row label="Activité" value="Électricien — Installation électrique provisoire de chantier" />
                <Row label="Téléphone" value="07 43 62 74 14" />
                <Row label="E-mail" value="ibiralec@gmail.com" />
              </Section>

              <Section title="Directeur de la publication">
                <p>Le directeur de la publication est le représentant légal de la SAS IBIRAL ELEC.</p>
              </Section>

              <Section title="Hébergement">
                <Row label="Hébergeur" value="Vercel Inc." />
                <Row label="Adresse" value="340 Pine Street, Suite 701, San Francisco, CA 94104, USA" />
                <Row label="Site" value="vercel.com" />
              </Section>

              <Section title="Propriété intellectuelle">
                <p>
                  L'ensemble des contenus de ce site (textes, images, éléments graphiques, logo)
                  sont la propriété exclusive de SAS IBIRAL ELEC et sont protégés par les lois
                  françaises et internationales relatives à la propriété intellectuelle.
                  Toute reproduction, même partielle, est strictement interdite sans autorisation
                  écrite préalable.
                </p>
              </Section>

              <Section title="Données personnelles (RGPD)">
                <p>
                  Les informations collectées via le formulaire de contact (nom, e-mail, téléphone)
                  sont utilisées exclusivement pour répondre à votre demande. Elles ne sont ni
                  vendues ni transmises à des tiers. Conformément au Règlement Général sur la
                  Protection des Données (RGPD) et à la loi Informatique &amp; Libertés, vous
                  disposez d'un droit d'accès, de rectification et de suppression de vos données.
                  Pour exercer ces droits, contactez-nous à{' '}
                  <a href="mailto:ibiralec@gmail.com" className="text-[#D4891A] hover:underline">
                    ibiralec@gmail.com
                  </a>.
                </p>
              </Section>

              <Section title="Cookies">
                <p>
                  Ce site n'utilise pas de cookies de traçage ou publicitaires. Seuls des
                  éléments techniques essentiels au bon fonctionnement du site peuvent être
                  enregistrés temporairement dans votre navigateur.
                </p>
              </Section>

              <Section title="Responsabilité">
                <p>
                  SAS IBIRAL ELEC s'efforce de maintenir les informations de ce site à jour.
                  Cependant, elle ne peut être tenue responsable des erreurs ou omissions, ni
                  des dommages directs ou indirects résultant de l'utilisation des informations
                  présentes sur ce site.
                </p>
              </Section>

            </div>
          </div>
        </div>
      )}
    </>
  )
}

function Section({ title, children }) {
  return (
    <div>
      <h3 className="font-['Oswald'] font-semibold text-[#1A2744] text-lg uppercase tracking-wide
        border-l-4 border-[#F5A623] pl-3 mb-3">
        {title}
      </h3>
      <div className="flex flex-col gap-1.5 pl-1">{children}</div>
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex flex-wrap gap-x-2">
      <span className="font-semibold text-[#1A2744] min-w-[180px]">{label} :</span>
      <span>{value}</span>
    </div>
  )
}
