import { useEffect } from 'react'
import type { PropertyImage } from '../types/property'
import { IMG } from '../data/property'

type PhotoTourProps = { images: PropertyImage[]; onClose: () => void; onOpenImage: (index: number) => void }
type TourSectionData = { title: string; description?: string; files: string[]; imageIndexes: number[]; compact?: boolean }

const sections: TourSectionData[] = [
  {
    title: 'Gym',
    description: 'Air conditioning · Gym · Exercise equipment · Ceiling fan',
    files: [IMG.gymA, IMG.gymB],
    imageIndexes: [12, 13],
    compact: true,
  },
  {
    title: 'Exterior',
    files: [IMG.exteriorA, IMG.exteriorB, IMG.exteriorC, IMG.exteriorD],
    imageIndexes: [4, 5, 6, 7],
  },
  {
    title: 'Living room 2',
    description: 'Sofa · Air conditioning · Ceiling fan · TV',
    files: [IMG.livingA, IMG.livingB, IMG.livingC, IMG.diningA],
    imageIndexes: [0, 1, 8, 10],
  },
  {
    title: 'Bedroom',
    description: 'Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi',
    files: [IMG.bedroomA, IMG.bedroomB, IMG.bedroomA, IMG.bedroomB],
    imageIndexes: [3, 14, 3, 14],
  },
  {
    title: 'Living room',
    description: 'Sofa · Air conditioning · Ceiling fan · TV',
    files: [IMG.livingC, IMG.livingA, IMG.livingB, IMG.kitchenA],
    imageIndexes: [8, 0, 1, 9],
  },
  {
    title: 'More photos',
    description: 'Additional photos of the stay',
    files: [IMG.poolA, IMG.kitchenA, IMG.bathroomA, IMG.diningA],
    imageIndexes: [2, 9, 11, 10],
  },
]

export function PhotoTour({ images, onClose, onOpenImage }: PhotoTourProps) {
  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previous }
  }, [])

  return <div className="photo-tour" role="dialog" aria-modal="true" aria-label="Photo tour">
    <header className="tour-header">
      <button className="tour-back" onClick={onClose} aria-label="Back to listing">‹</button>
      <strong>Photo tour</strong>
      <div className="tour-actions">
        <button aria-label="Share photo tour">↗</button>
        <button aria-label="Save photo tour">♡</button>
      </div>
    </header>
    <main className="tour-content">
      {sections.map(s => <TourSection key={s.title} {...s} images={images} onOpenImage={onOpenImage} />)}
    </main>
  </div>
}

function TourSection({ title, description, files, imageIndexes, images, compact }: {
  title: string; description?: string; files: string[]; imageIndexes: number[]; images: PropertyImage[]; compact?: boolean; onOpenImage: (index: number) => void
}) {
  return <section className={`tour-section${compact ? ' tour-section-compact' : ''}`}>
    <div className="tour-copy">
      {description && <p className="tour-description">{description}</p>}
      <h2>{title}</h2>
    </div>
    <div className={`tour-media${compact ? ' tour-media-compact' : ''}`}>
      {files.map((src, position) => {
        const imageIndex = imageIndexes[position]
        return <button
          type="button"
          className={`tour-photo tour-photo-${position}`}
          key={`${title}-${position}`}
          onClick={() => onOpenImage(imageIndex)}
          aria-label={`Open ${title} photo ${position + 1}`}
        >
          <img src={src} alt={images[imageIndex]?.alt ?? `${title} photo ${position + 1}`} />
        </button>
      })}
    </div>
  </section>
}
