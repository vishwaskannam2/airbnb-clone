import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { PropertyHeader } from './components/PropertyHeader'
import { PropertyGallery } from './components/PropertyGallery'
import { PropertyDetails } from './components/PropertyDetails'
import { PhotoTour } from './components/PhotoTour'
import { SectionNav } from './components/SectionNav'
import { Lightbox } from './components/Lightbox'
import { property } from './data/property'
import './styles/app.css'

function isPhotoTourRoute() {
  return window.location.hash === '#photo-tour'
}

function App() {
  const [photoTourOpen, setPhotoTourOpen] = useState(isPhotoTourRoute)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  useEffect(() => {
    const syncRoute = () => setPhotoTourOpen(isPhotoTourRoute())
    window.addEventListener('popstate', syncRoute)
    window.addEventListener('hashchange', syncRoute)
    return () => {
      window.removeEventListener('popstate', syncRoute)
      window.removeEventListener('hashchange', syncRoute)
    }
  }, [])

  const openPhotoTour = () => {
    if (!isPhotoTourRoute()) {
      window.history.pushState({ photoTour: true }, '', '#photo-tour')
    }
    setPhotoTourOpen(true)
    window.scrollTo(0, 0)
  }

  const closePhotoTour = () => {
    if (isPhotoTourRoute()) window.history.back()
    else setPhotoTourOpen(false)
  }

  if (photoTourOpen) {
    return (
      <>
        <PhotoTour images={property.images} onClose={closePhotoTour} onOpenImage={setLightboxIndex} />
        {lightboxIndex !== null && (
          <Lightbox images={property.images} index={lightboxIndex} onClose={() => setLightboxIndex(null)} onChange={setLightboxIndex} />
        )}
      </>
    )
  }

  return (
    <>
      <Header />
      <div id="top" className="page">
        <PropertyHeader property={property} />
        <PropertyGallery images={property.images} onOpenTour={openPhotoTour} />
        <SectionNav property={property} />
        <PropertyDetails property={property} />
      </div>
    </>
  )
}

export default App
