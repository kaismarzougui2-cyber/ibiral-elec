import { useEffect } from 'react'
import Header  from './components/Header'
import Hero    from './components/Hero'
import Services from './components/Services'
import Urgence from './components/Urgence'
import About   from './components/About'
import Contact from './components/Contact'
import Footer  from './components/Footer'

// Urgence banner shown at the top (below header)
function UrgenceBanner() {
  return (
    <div className="bg-[#F5A623] text-[#1A2744] py-3 px-4">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-semibold text-center">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
        <span>Dépannage urgent chantier — Astreinte disponible 24h/7j</span>
        <a href="tel:0762995917"
          className="bg-[#1A2744] text-[#F5A623] font-['Oswald'] font-bold text-xs uppercase
            tracking-wide px-3 py-1 rounded-lg hover:bg-[#111C35] transition-colors">
          07 62 99 59 17
        </a>
      </div>
    </div>
  )
}

export default function App() {
  // Handle ?merci=1 redirect from FormSubmit
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('merci') === '1') {
      // Show a toast-style notification
      const toast = document.createElement('div')
      toast.textContent = 'Votre message a bien été envoyé ! Nous vous répondrons sous 24h ouvrées.'
      Object.assign(toast.style, {
        position: 'fixed', bottom: '32px', left: '50%',
        transform: 'translateX(-50%)',
        background: '#1A2744', color: '#fff',
        padding: '14px 28px', borderRadius: '10px',
        boxShadow: '0 8px 32px rgba(0,0,0,.25)',
        fontFamily: 'Inter, sans-serif', fontSize: '14px',
        zIndex: '9999', borderLeft: '4px solid #F5A623',
        maxWidth: '90vw', textAlign: 'center',
      })
      document.body.appendChild(toast)
      setTimeout(() => toast.remove(), 6000)
      window.history.replaceState({}, '', window.location.pathname)
    }
  }, [])

  return (
    <>
      <Header />
      <div className="pt-[70px]">
        <UrgenceBanner />
        <Hero />
        <Services />
        <Urgence />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
