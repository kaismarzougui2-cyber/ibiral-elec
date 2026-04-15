import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to sectionRef and adds the 'visible'
 * class to every child with the 'section-animate' class.
 * threshold:0 + rootMargin ensures elements already in the viewport on
 * first paint are revealed immediately without needing to scroll.
 */
export function useReveal() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.section-animate')
    if (!elements?.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -30px 0px' }
    )

    elements.forEach((el) => observer.observe(el))

    // Fallback: reveal anything already visible after a short delay
    const timer = setTimeout(() => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight) {
          el.classList.add('visible')
        }
      })
    }, 120)

    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [])

  return sectionRef
}
