'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
}

// Reel sizes (px) — alternate tall and wide frames like the design's photo reel
const frames = [
  { w: 360, h: 460 },
  { w: 560, h: 400 },
  { w: 380, h: 460 },
  { w: 340, h: 400 },
  { w: 520, h: 460 },
  { w: 360, h: 400 },
]

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages: GalleryImage[] = [
    { src: 'https://res.cloudinary.com/drgot7znf/image/upload/v1777215613/2_go0jnm.jpg', alt: 'Event Gallery 1', width: 400, height: 500 },
    { src: 'https://res.cloudinary.com/drgot7znf/image/upload/v1777215613/3_kbzhoz.jpg', alt: 'Event Gallery 2', width: 400, height: 300 },
    { src: 'https://res.cloudinary.com/drgot7znf/image/upload/v1777215612/6_ga3ybp.jpg', alt: 'Event Gallery 4', width: 400, height: 300 },
    { src: 'https://res.cloudinary.com/drgot7znf/image/upload/v1777215612/7_jotncl.jpg', alt: 'Event Gallery 5', width: 400, height: 400 },
    { src: 'https://res.cloudinary.com/drgot7znf/image/upload/v1777215612/9_daer54.jpg', alt: 'Event Gallery 7', width: 400, height: 300 },
    { src: 'https://res.cloudinary.com/drgot7znf/image/upload/v1777215612/10_v2bcxy.jpg', alt: 'Event Gallery 8', width: 400, height: 400 },
  ]

  useEffect(() => {
    if (!selectedImage) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelectedImage(null)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [selectedImage])

  return (
    <section className="sec-pad" style={{ background: '#172E49', color: '#FBF7F0', padding: '120px 0 128px', overflow: 'clip' }}>
      <div className="wrap" style={{ textAlign: 'center' }}>
        <h2 className="h-lg" style={{ color: '#FBF7F0' }}>
          <span className="ln rv-ln"><span>Wedding Gallery</span></span>
        </h2>
        <span className="bar grow" aria-hidden="true" />
        <p className="rv" style={{ maxWidth: '40em', margin: '26px auto 0', fontSize: 17, lineHeight: 1.7, fontWeight: 300, color: '#E5DED2' }}>
          Explore our portfolio of stunning events and exceptional services
        </p>
      </div>

      <div className="film" style={{ marginTop: 64 }}>
        <div className="film-track">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              type="button"
              className="reel"
              style={{ width: frames[index].w, height: frames[index].h }}
              onClick={() => setSelectedImage(image.src)}
              aria-label={image.alt}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                sizes="560px"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)} role="dialog" aria-modal="true" aria-label="Gallery">
          <button
            onClick={() => setSelectedImage(null)}
            className="burger lightbox-close"
            style={{ display: 'inline-flex' }}
            aria-label="Close"
            autoFocus
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M2 2l12 12M14 2L2 14" />
            </svg>
          </button>
          <div style={{ position: 'relative', maxWidth: 1100, width: '100%' }} onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Gallery"
              width={1200}
              height={800}
              style={{ width: '100%', height: 'auto', maxHeight: '85vh', objectFit: 'contain' }}
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
