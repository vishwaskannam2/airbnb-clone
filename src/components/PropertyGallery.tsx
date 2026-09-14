import type { PropertyImage } from '../types/property'

type Props = { images: PropertyImage[]; onOpenTour: () => void }

export function PropertyGallery({ images, onOpenTour }: Props) {
  const visible = images.slice(0, 5)
  return (
    <section id="photos" className="hero-gallery" aria-label="Property photos">
      <button className="gallery-photo gallery-main" onClick={onOpenTour} aria-label="Open photo tour">
        <img src={visible[0].src} alt={visible[0].alt} />
      </button>
      <div className="gallery-side">
        {visible.slice(1).map((image) => (
          <button className="gallery-photo" key={image.id} onClick={onOpenTour} aria-label="Open photo tour">
            <img src={image.src} alt={image.alt} />
          </button>
        ))}
        <button className="show-all" onClick={onOpenTour} aria-label="Show all photos"><span>▦</span> Show all photos</button>
      </div>
    </section>
  )
}
