import { useEffect, useState, type MouseEvent } from 'react'
import type { Property } from '../types/property'

type Props = { property: Property }

export function SectionNav({ property }: Props) {
  const [active, setActive] = useState('photos')

  useEffect(() => {
    const ids = ['photos', 'amenities', 'reviews', 'location']
    const elements = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (!elements.length) return
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      if (visible[0]) setActive(visible[0].target.id)
    }, { rootMargin: '-88px 0px -55% 0px', threshold: [0.05, 0.25, 0.5] })
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const go = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="section-nav" aria-label="Property sections">
      <div className="section-nav-inner">
        <div className="section-nav-links">
          {['photos', 'amenities', 'reviews', 'location'].map(id => (
            <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={go(id)}>
              {id[0].toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
        <div className="section-nav-booking">
          <div>
            <strong>₹28,499</strong><span>for 5 nights</span>
            <small>★ {property.rating} · {property.reviews} reviews</small>
          </div>
          <a className="section-reserve" href="#reserve" onClick={go('reserve')}>Reserve</a>
        </div>
      </div>
    </nav>
  )
}
