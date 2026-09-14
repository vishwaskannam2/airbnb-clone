import { useState } from 'react'
import type { Property } from '../types/property'
import { BookingCard } from './BookingCard'

const amenities = [
  'Kitchen', 'Wifi', 'Dedicated workspace', 'Free parking on premises', 'Pool',
  'TV', 'Air conditioning', 'Hot water', 'Private patio', 'Hair dryer',
  'Iron', 'Essentials'
]
const reviews = [
  ['Cleanliness','4.9'],['Accuracy','4.9'],['Communication','4.9'],['Location','4.8'],['Check-in','4.9'],['Value','4.8']
]
const reviewPassages = [
  ['Akhil', 'September 2026', 'The apartment was spotless and beautifully maintained. The jacuzzi and pool made the stay especially relaxing.'],
  ['Priya', 'August 2026', 'Great location in Candolim. Check-in was easy and the host was quick to respond whenever we needed anything.'],
  ['Daniel', 'July 2026', 'Really comfortable stay with a lovely living room and everything we needed for a short Goa trip.']
]
const nearby = [
  ['Modern coastal apartment', '4.91', '₹4,650 night', 'https://images.unsplash.com/photo-1774095120121-e2fcb529cc2b?auto=format&fm=jpg&q=85&w=900'],
  ['Quiet Candolim retreat', '4.88', '₹5,100 night', 'https://images.unsplash.com/photo-1779741326251-4dbe4ca82c04?auto=format&fm=jpg&q=85&w=900'],
  ['Stylish one-bedroom stay', '4.94', '₹4,300 night', 'https://images.unsplash.com/photo-1760072513376-67a46aab0fd1?auto=format&fm=jpg&q=85&w=900']
]

export function PropertyDetails({ property }: { property: Property }) {
  const [amenitiesOpen, setAmenitiesOpen] = useState(false)
  const [reviewsOpen, setReviewsOpen] = useState(false)
  const [descriptionOpen, setDescriptionOpen] = useState(false)

  return <div className="content-grid">
    <main className="details-column">
      <section className="summary">
        <h2>Entire serviced apartment in {property.location.split(',')[0]}, India</h2>
        <p>{property.guests} guests · {property.bedrooms} bedroom · {property.beds} bed · {property.baths} bathroom</p>
      </section>

      <section className="guest-favourite">
        <div className="favourite-copy"><span className="favourite-mark">✿</span><strong>Guest<br/>favourite</strong></div>
        <p>One of the most loved homes on Airbnb, according to guests</p>
        <div className="favourite-score"><strong>{property.rating}</strong><span>★★★★★</span></div>
        <div className="favourite-reviews"><strong>{property.reviews}</strong><span>Reviews</span></div>
      </section>

      <section className="host-card">
        <div className="host-avatar">M</div>
        <div><h3>Hosted by {property.host} Homes</h3><p>{property.hostYears} years hosting</p></div>
      </section>

      <section className="feature-list">
        <article className="feature"><span className="feature-icon">♨</span><div><strong>Outdoor entertainment</strong><span>The pool and alfresco dining are great for summer trips.</span></div></article>
        <article className="feature"><span className="feature-icon">✣</span><div><strong>Designed for staying cool</strong><span>Beat the heat with the A/C and ceiling fan.</span></div></article>
        <article className="feature"><span className="feature-icon">▣</span><div><strong>Self check-in</strong><span>You can check in with the building staff.</span></div></article>
      </section>

      <section className="description">
        <div className="translated-note">Some info has been automatically translated. <button>Show original</button></div>
        <p>{descriptionOpen
          ? '🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi for the perfect unwind. Enjoy high-speed WiFi, Smart TV, pet-friendly comfort, and stylish interiors. The apartment combines a comfortable living space, private bedroom, kitchen and access to shared community amenities.'
          : '🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi for the perfect unwind. Enjoy high-speed WiFi, Smart TV, pet-friendly comfort, and stylish interiors.'}</p>
        <button className="text-link" onClick={() => setDescriptionOpen(v => !v)}>{descriptionOpen ? 'Show less ←' : 'Show more →'}</button>
      </section>

      <section id="amenities" className="amenities">
        <h2>What this place offers</h2>
        <div className="amenity-grid">
          {amenities.slice(0, 6).map((item, i) => <span key={item}><i className="amenity-icon">{['▣','⌁','▤','▱','○','▤'][i]}</i>{item}</span>)}
        </div>
        <button className="outline-button" onClick={() => setAmenitiesOpen(true)}>Show all 50 amenities</button>
      </section>

      <section id="reviews" className="reviews-section">
        <div className="reviews-heading"><div><h2>★ {property.rating}</h2><p>{property.reviews} reviews</p></div><span className="reviews-heading-stars">★★★★★</span></div>
        <div className="review-grid">{reviews.map(([name,value]) => <article key={name}><strong>{name}</strong><div className="review-bar"><i style={{width:`${Number(value)/5*100}%`}}/></div><span>{value}</span></article>)}</div>
        <div className="review-passages">{reviewPassages.map(([name,date,text]) => <article key={name}><div className="review-person"><span>{name[0]}</span><div><strong>{name}</strong><small>{date}</small></div></div><p>{text}</p></article>)}</div>
        <button className="outline-button" onClick={() => setReviewsOpen(true)}>Show all reviews</button>
      </section>

      <section className="meet-host">
        <h2>Meet your host</h2>
        <div className="host-profile"><div className="host-avatar host-avatar-large">M</div><div><h3>{property.host} Homes</h3><p>Host · {property.hostYears} years hosting</p></div></div>
        <div className="host-stats"><span>★★★★★ <strong>4.9</strong></span><span>38 Reviews</span><span>Identity verified</span></div>
        <p>We're happy to welcome guests to a comfortable stay in Candolim and help make your Goa trip easy and enjoyable.</p>
        <button className="outline-button">Message host</button>
      </section>

      <section id="location" className="lower-section location-section">
        <h2>Where you'll be</h2><p>{property.location}</p>
        <div className="map-placeholder"><span>📍</span><strong>Candolim, Goa</strong><small>Approximate location</small></div>
      </section>

      <section className="things-to-know">
        <h2>Things to know</h2>
        <div className="things-grid">
          <article><h3>House rules</h3><p>Check-in after 2:00 pm</p><p>Checkout before 11:00 am</p><p>2 guests maximum</p><button>Show more</button></article>
          <article><h3>Safety & property</h3><p>Exterior security cameras on property</p><p>Carbon monoxide alarm</p><p>Smoke alarm</p><button>Show more</button></article>
          <article><h3>Cancellation policy</h3><p>Free cancellation before 17 October.</p><p>Review the full policy before booking.</p><button>Show more</button></article>
        </div>
      </section>

      <section className="nearby-stays">
        <h2>More stays nearby</h2>
        <div className="nearby-grid">{nearby.map(([title,rating,price,src]) => <article key={title}><img src={src} alt={title}/><button className="heart-small" aria-label={`Save ${title}`}>♡</button><div><strong>{title}</strong><span>★ {rating}</span><small>{price}</small></div></article>)}</div>
      </section>
    </main>
    <aside className="booking-column"><BookingCard property={property} /></aside>

    {amenitiesOpen && <div className="modal-backdrop" onMouseDown={e => e.currentTarget === e.target && setAmenitiesOpen(false)}>
      <div className="sheet-modal" role="dialog" aria-modal="true" aria-labelledby="amenities-title">
        <button className="modal-close" aria-label="Close amenities" onClick={() => setAmenitiesOpen(false)}>×</button>
        <h2 id="amenities-title">What this place offers</h2>
        <div className="amenities-full">{amenities.map((item, i) => <div key={item}><span className="amenity-icon">{['▣','⌁','▤','▱','○','▤','❄','♨','▱','⌁','♢','✓'][i]}</span>{item}</div>)}</div>
      </div>
    </div>}

    {reviewsOpen && <div className="modal-backdrop" onMouseDown={e => e.currentTarget === e.target && setReviewsOpen(false)}>
      <div className="sheet-modal reviews-modal" role="dialog" aria-modal="true" aria-labelledby="reviews-title">
        <button className="modal-close" aria-label="Close reviews" onClick={() => setReviewsOpen(false)}>×</button>
        <h2 id="reviews-title">★ {property.rating} · {property.reviews} reviews</h2>
        <div className="reviews-full">{reviews.map(([name,value]) => <div className="review-score" key={name}><span>{name}</span><div className="score-bar"><i style={{width:`${Number(value)/5*100}%`}}/></div><strong>{value}</strong></div>)}</div>
        <div className="modal-review-passages">{reviewPassages.map(([name,date,text]) => <article key={name}><strong>{name}</strong><small>{date}</small><p>{text}</p></article>)}</div>
      </div>
    </div>}
  </div>
}
