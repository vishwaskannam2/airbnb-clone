import type { Property } from '../types/property'

// Standalone full-frame image sources. These are direct Unsplash image URLs;
// no screenshot crops or slices from the reference recording are used.
const IMG = {
  livingA: 'https://images.unsplash.com/photo-1775866914882-9f0d58aa3372?auto=format&fm=jpg&q=85&w=1800',
  livingB: 'https://images.unsplash.com/photo-1774095120121-e2fcb529cc2b?auto=format&fm=jpg&q=85&w=1800',
  poolA: 'https://images.unsplash.com/photo-1779741326251-4dbe4ca82c04?auto=format&fm=jpg&q=85&w=1800',
  bedroomA: 'https://images.unsplash.com/photo-1760072513376-67a46aab0fd1?auto=format&fm=jpg&q=85&w=1800',
  exteriorA: 'https://images.unsplash.com/photo-1778438988721-622590622489?auto=format&fm=jpg&q=85&w=1800',
  exteriorB: 'https://images.unsplash.com/photo-1774211653802-5e75d6646403?auto=format&fm=jpg&q=85&w=1800',
  exteriorC: 'https://images.unsplash.com/photo-1781512436292-f2687f67f605?auto=format&fm=jpg&q=85&w=1800',
  exteriorD: 'https://images.unsplash.com/photo-1785676169183-6ff8312c10ba?auto=format&fm=jpg&q=85&w=1800',
  livingC: 'https://images.unsplash.com/photo-1768904228330-62196a0171d6?auto=format&fm=jpg&q=85&w=1800',
  kitchenA: 'https://images.unsplash.com/photo-1773098587069-a57143b40fcc?auto=format&fm=jpg&q=85&w=1800',
  diningA: 'https://images.unsplash.com/photo-1785535573610-c81a06ddfea7?auto=format&fm=jpg&q=85&w=1800',
  bathroomA: 'https://images.unsplash.com/photo-1785486249963-b7bf5bdbaba3?auto=format&fm=jpg&q=85&w=1800',
  gymA: 'https://images.unsplash.com/photo-1775993167276-743bbcde77e1?auto=format&fm=jpg&q=85&w=1800',
  gymB: 'https://images.unsplash.com/photo-1767531309781-b61fe1edfe86?auto=format&fm=jpg&q=85&w=1800',
  bedroomB: 'https://images.unsplash.com/photo-1780569255700-2a4e5beea779?auto=format&fm=jpg&q=85&w=1800',
}

export const property: Property = {
  title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10',
  location: 'Candolim, Goa, India',
  rating: 4.95,
  reviews: 19,
  guests: 3,
  bedrooms: 1,
  beds: 1,
  baths: 1,
  host: 'Mirashya',
  hostYears: 4,
  price: 4200,
  images: [
    { id: 'hero', src: IMG.livingA, alt: 'Bright luxury apartment living room' },
    { id: 'living', src: IMG.livingB, alt: 'Modern living room with large windows' },
    { id: 'pool', src: IMG.poolA, alt: 'Luxury outdoor swimming pool' },
    { id: 'bedroom', src: IMG.bedroomA, alt: 'Modern luxury bedroom' },
    { id: 'exterior', src: IMG.exteriorA, alt: 'Modern apartment exterior with greenery' },
    { id: 'exterior-b', src: IMG.exteriorB, alt: 'Apartment balconies under blue sky' },
    { id: 'exterior-c', src: IMG.exteriorC, alt: 'Modern apartment building facade' },
    { id: 'exterior-d', src: IMG.exteriorD, alt: 'Contemporary apartment exterior' },
    { id: 'living2', src: IMG.livingC, alt: 'Elegant living room with fireplace and windows' },
    { id: 'kitchen', src: IMG.kitchenA, alt: 'Modern apartment kitchen' },
    { id: 'dining', src: IMG.diningA, alt: 'Modern dining area' },
    { id: 'bathroom', src: IMG.bathroomA, alt: 'Modern bathroom vanity' },
    { id: 'gym', src: IMG.gymA, alt: 'Modern residential gym' },
    { id: 'gym-b', src: IMG.gymB, alt: 'Gym with treadmills and exercise bikes' },
    { id: 'bedroom-b', src: IMG.bedroomB, alt: 'Elegant modern bedroom' },
  ],
}

export { IMG }
