import type { Property } from '../types/property'

export function PropertyHeader({ property }: { property: Property }) {
  return (
    <section className="property-header">
      <div className="title-row">
        <h1>{property.title}</h1>
        <div className="title-actions">
          <button aria-label="Share this listing">↗ <span>Share</span></button>
          <button aria-label="Save this listing">♡ <span>Save</span></button>
        </div>
      </div>
    </section>
  )
}
