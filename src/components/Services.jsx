import { useReveal } from '../hooks/useReveal'

const SERVICES = [
  {
    id: 'armoires',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M8 3v18M2 9h6M2 15h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <circle cx="16" cy="10" r="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M14 16h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Armoires de Comptage',
    subtitle: 'Tarif Bleu · Jaune · Vert',
    items: [
      'Armoires Tarif Bleu jusqu\'à 36 kVA (monophasé et triphasé)',
      'Armoires Tarif Jaune de 36 à 250 kVA',
      'Armoires Tarif Vert au-delà de 250 kVA',
      'Coffrets de chantier normalisés NF EN 60439-4',
      'Distribution électrique provisoire multi-départs',
      'Protections différentielles 30 mA et 300 mA',
      'Mise à la terre et liaisons équipotentielles',
      'Raccordement au réseau ENEDIS et mise en service',
    ],
  },
  {
    id: 'alimentation',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Alimentation Grues & Engins',
    subtitle: 'Toutes puissances',
    featured: true,
    items: [
      'Alimentation grues à tour toutes puissances (15 à 132 kW)',
      'Armoires pied de grue conformes NF EN 60204',
      'Alimentation ascenseurs et monte-matériaux de chantier',
      'Alimentation monte-charges et plateformes élévatrices',
      'Alimentation bungalows, cantonnements et baraquements',
      'Colonnes montantes provisoires par niveau',
      'Réseaux d\'étages et distribution horizontale',
      'Câblage aérien sur portiques et câblage souterrain',
    ],
  },
  {
    id: 'bases-vie',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
    title: 'Bases Vie & Cantonnements',
    subtitle: 'Solution clé en main',
    items: [
      'Alimentation électrique complète des bases vie',
      'Raccordement eau potable et réseaux d\'alimentation',
      'Mise en place de points d\'eau et robinets de chantier',
      'Raccordements sanitaires, douches et vestiaires',
      'Évacuation des eaux usées et eaux vannes',
      'Alimentation chauffage et climatisation provisoires',
      'Éclairage intérieur et extérieur des zones vie',
      'Passage de gaines et câbles dans les modules',
    ],
  },
  {
    id: 'eclairage',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Éclairage Provisoire',
    subtitle: 'Sécurité & conformité',
    items: [
      'Éclairage de circulation des voies piétonnes et engins',
      'Éclairage des sous-sols, parkings et espaces confinés',
      'Éclairage des cages d\'escaliers et paliers',
      'Éclairage extérieur et périmétrique de chantier',
      'Blocs de secours (BAES) et éclairage de sécurité',
      'Balisage lumineux et signalisation de chantier',
      'Projecteurs de chantier LED haute puissance',
      'Détecteurs de présence et commandes automatiques',
    ],
  },
  {
    id: 'cfo-cfa',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'CFO / CFA / IRVE',
    subtitle: 'Infrastructures techniques',
    items: [
      'Courants forts (CFO) — distributions HTA/BT, tgbt',
      'Courants faibles (CFA) — réseau data, téléphonie, fibre',
      'IRVE — Bornes de recharge véhicules électriques (P7/T2)',
      'Études techniques, notes de calcul et plans d\'exécution',
      'Mise en service, essais et vérification des installations',
      'Mise en conformité NF C 15-100 et NF C 14-100',
      'Attestations COPREC et dossiers CONSUEL',
      'Réhabilitation électrique de bâtiments existants',
    ],
  },
  {
    id: 'maintenance',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
          stroke="currentColor" strokeWidth="1.6" fill="none"/>
      </svg>
    ),
    title: 'Maintenance & Dépannage',
    subtitle: 'Réactivité maximale',
    items: [
      'Dépannage urgent sur chantier en moins de 2 heures',
      'Vérification et contrôle périodique des installations',
      'Remplacement de matériel défectueux ou hors norme',
      'Mise en conformité après rapport de contrôle',
      'Diagnostic électrique et détection de défaut d\'isolement',
      'Suivi technique hebdomadaire tout au long du chantier',
      'Astreinte technique disponible 7 jours sur 7',
      'Contrat de maintenance préventive et curative',
    ],
  },
]

export default function Services() {
  const sectionRef = useReveal()

  return (
    <section id="services" className="py-20 bg-[#F4F6FA]" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14 section-animate">
          <span className="inline-block bg-[#F5A623]/15 border border-[#F5A623]/30 text-[#D4891A]
            font-['Oswald'] text-xs uppercase tracking-[.12em] px-4 py-1.5 rounded-full mb-4">
            Ce que nous faisons
          </span>
          <h2 className="text-[#1A2744] font-['Oswald'] font-bold text-4xl sm:text-5xl mb-4">
            NOS EXPERTISES <span className="text-[#F5A623]">CHANTIER</span>
          </h2>
          <p className="text-[#6B7A99] max-w-2xl mx-auto text-base leading-relaxed">
            Une offre complète pour l'alimentation électrique provisoire de vos chantiers BTP
            en Île-de-France. Un seul interlocuteur, du dossier technique à la mise en service.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} delay={i * 80} />
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-[#6B7A99] text-sm mt-10 section-animate">
          Toutes nos installations sont réalisées conformément à la norme{' '}
          <strong className="text-[#1A2744]">NF C 15-100</strong> et aux prescriptions{' '}
          <strong className="text-[#1A2744]">COPREC / CONSUEL</strong>.
        </p>
      </div>
    </section>
  )
}

function ServiceCard({ service, delay }) {
  const { icon, title, subtitle, items, featured } = service
  return (
    <div
      className={`section-animate relative rounded-2xl p-7 flex flex-col gap-5 border
        transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-xl
        ${featured
          ? 'bg-[#1A2744] border-[#F5A623]/30 text-white hover:border-[#F5A623]'
          : 'bg-white border-[#DDE3EE] hover:border-[#F5A623]/50 hover:shadow-[#F5A623]/10'
        }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Top accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl
        ${featured ? 'bg-[#F5A623]' : 'bg-[#1A2744] group-hover:bg-[#F5A623] transition-colors duration-300'}`}
      />

      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center
        ${featured ? 'bg-[#F5A623]/20 text-[#F5A623]' : 'bg-[#1A2744]/8 text-[#1A2744] group-hover:bg-[#F5A623]/12 group-hover:text-[#D4891A] transition-all duration-200'}`}>
        {icon}
      </div>

      {/* Title */}
      <div>
        <h3 className={`font-['Oswald'] font-semibold text-xl leading-tight mb-1
          ${featured ? 'text-white' : 'text-[#1A2744]'}`}>
          {title}
        </h3>
        <span className="text-xs font-semibold uppercase tracking-wide text-[#F5A623]">
          {subtitle}
        </span>
      </div>

      {/* Items */}
      <ul className="flex flex-col gap-2.5">
        {items.map(item => (
          <li key={item} className="flex items-start gap-2.5 text-sm">
            <span className={`flex-shrink-0 mt-0.5 w-[18px] h-[18px] rounded flex items-center justify-center text-[10px] font-bold
              ${featured ? 'bg-[#F5A623]/20 text-[#F5A623]' : 'bg-[#1A2744]/8 text-[#1A2744]'}`}>
              ✓
            </span>
            <span className={featured ? 'text-white/80' : 'text-[#4A5568]'}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
