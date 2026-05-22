'use client'

import Image from 'next/image'
import { useState } from 'react'

interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
}

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

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-ambrosian-gold mb-4">
          Wedding Gallery
        </h2>
        <p className="text-lg text-ambrosian-gold/70 max-w-2xl mx-auto">
          Explore our portfolio of stunning events and exceptional services
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="columns-2 md:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="break-inside-avoid overflow-hidden rounded-lg border border-ambrosian-gold/20 hover:border-ambrosian-gold transition-all duration-300 cursor-pointer group"
            onClick={() => setSelectedImage(image.src)}
          >
            <div className="relative overflow-hidden bg-ambrosian-dark/50">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ambrosian-dark via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-end">
                <div className="text-ambrosian-gold p-4 w-full">
                  <p className="text-sm font-semibold">{image.alt}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-ambrosian-gold hover:text-ambrosian-gold/70 transition-colors text-3xl"
            >
              ✕
            </button>
            <Image
              src={selectedImage}
              alt="Gallery"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
