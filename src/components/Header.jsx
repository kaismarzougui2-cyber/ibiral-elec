import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#services',  label: 'Services' },
  { href: '#urgence',   label: 'Urgence 24h/7j' },
  { href: '#about',     label: 'Qui sommes-nous' },
  { href: '#contact',   label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300
        bg-[#111C35]/95 backdrop-blur-md border-b border-white/8
        ${scrolled ? 'shadow-[0_4px_24px_rgba(0,0,0,.35)]' : ''}`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[70px]">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#F5A623]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#1A2744"/>
            </svg>
          </span>
          <span className="font-['Oswald'] text-2xl font-bold tracking-wide">
            <span className="text-white">IBIRAL</span>
            <span className="text-[#F5A623]"> ELEC</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-['Oswald'] text-sm uppercase tracking-wide px-4 py-2 rounded-lg
                text-white/80 hover:text-[#F5A623] hover:bg-[#F5A623]/10 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <a
            href="tel:0743627414"
            className="ml-3 flex items-center gap-2 bg-[#F5A623] hover:bg-[#D4891A] text-[#1A2744]
              font-['Oswald'] font-semibold text-sm uppercase tracking-wide px-5 py-2.5 rounded-lg
              transition-all duration-200 hover:-translate-y-px hover:shadow-[0_4px_14px_rgba(245,166,35,.4)]"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.6 21 3 13.4 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.01L6.6 10.8z"/>
            </svg>
            07 43 62 74 14
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 flex flex-col gap-[5px]"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-white rounded transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}/>
          <span className={`block w-6 h-0.5 bg-white rounded transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`}/>
          <span className={`block w-6 h-0.5 bg-white rounded transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}/>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111C35] border-t border-white/8 px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="font-['Oswald'] uppercase tracking-wide px-4 py-3 rounded-lg
                text-white/80 hover:text-[#F5A623] hover:bg-[#F5A623]/10 transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="tel:0743627414"
            onClick={closeMenu}
            className="mt-2 flex justify-center items-center gap-2 bg-[#F5A623] text-[#1A2744]
              font-['Oswald'] font-semibold uppercase tracking-wide px-5 py-3 rounded-lg"
          >
            07 43 62 74 14
          </a>
        </div>
      )}
    </header>
  )
}
