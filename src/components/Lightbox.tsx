import { useEffect, useRef } from 'react'
import type { PropertyImage } from '../types/property'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'

type Props = { images: PropertyImage[]; index: number; onClose: () => void; onChange: (index: number) => void }

export function Lightbox({ images, index, onClose, onChange }: Props) {
  useLockBodyScroll(true)
  const closeRef = useRef<HTMLButtonElement>(null)
  const previousFocus = useRef<HTMLElement | null>(null)

  useEffect(() => {
    previousFocus.current = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    return () => previousFocus.current?.focus()
  }, [])

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); onClose() }
      if (event.key === 'Tab') {
        event.preventDefault()
        closeRef.current?.focus()
      }
      if (event.key === 'ArrowRight') { event.preventDefault(); onChange((index + 1) % images.length) }
      if (event.key === 'ArrowLeft') { event.preventDefault(); onChange((index - 1 + images.length) % images.length) }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [images.length, index, onChange, onClose])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onMouseDown={e => { if (e.target === e.currentTarget) onClose() }}>
      <button ref={closeRef} className="lightbox-close" onClick={onClose} aria-label="Close photo viewer">×</button>
      <span className="lightbox-count" aria-live="polite">{index + 1} / {images.length}</span>
      <button className="lightbox-nav lightbox-prev" onClick={() => onChange((index - 1 + images.length) % images.length)} aria-label="Previous photo">‹</button>
      <figure className="lightbox-figure">
        <img className="lightbox-image" src={images[index].src} alt={images[index].alt} />
        <figcaption>{images[index].alt}</figcaption>
      </figure>
      <button className="lightbox-nav lightbox-next" onClick={() => onChange((index + 1) % images.length)} aria-label="Next photo">›</button>
    </div>
  )
}
