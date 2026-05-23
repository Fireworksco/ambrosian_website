'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const slides = [
  {
    src: 'https://res.cloudinary.com/drgot7znf/image/upload/v1777143798/IMG-20260425-WA0072_imh6ua.jpg',
    alt: 'Ambrosian Events — Professional Event Management',
  },
  {
    src: 'https://res.cloudinary.com/drgot7znf/image/upload/v1777144901/IMG-20260425-WA0085_byptnj.jpg',
    alt: 'Ambrosian Events — Weddings & Celebrations',
  },
  {
    src: 'https://res.cloudinary.com/drgot7znf/image/upload/v1777215612/9_daer54.jpg',
    alt: 'Ambrosian Events — Premium Catering & Styling',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), [])
  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length)
  const goTo = (i: number) => setCurrent(i)

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '600px', maxHeight: '900px' }}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          aria-hidden={i !== current}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Layered overlay — keeps text readable across all images */}
      <div className="absolute inset-0 bg-ambrosian-dark/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-ambrosian-dark/40 via-transparent to-ambrosian-dark/70" />

      {/* Bottom fade — blends seamlessly into the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-ambrosian-dark to-transparent" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 text-center pt-[clamp(2.5rem,10vh,5rem)]">
        <div className="max-w-4xl mx-auto">
          {/* <p className="text-ambrosian-gold/70 text-xs md:text-sm font-semibold tracking-[0.35em] uppercase mb-4">
            Welcome to
          </p> */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ambrosian-gold mb-5 leading-tight drop-shadow-lg">
            Ambrosian Events & Management
          </h1>
          <div className="w-20 h-[2px] bg-ambrosian-gold mx-auto mb-6 opacity-60" />
          <p className="text-lg sm:text-xl md:text-2xl text-ambrosian-gold/80 mb-5">
            Creating Unforgettable Moments with Professional Excellence
          </p>
          <p className="text-sm sm:text-base md:text-lg text-ambrosian-gold/65 mb-10 max-w-2xl mx-auto leading-relaxed">
            From exquisite catering to stunning decorations, professional staffing to cutting-edge photography —
            we bring your vision to life with unmatched expertise and attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-ambrosian-gold text-ambrosian-dark px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base"
            >
              Get in Touch
            </Link>
            <Link
              href="#services"
              className="border-2 border-ambrosian-gold text-ambrosian-gold px-8 py-4 rounded-lg font-semibold hover:bg-ambrosian-gold/10 transition-colors text-sm sm:text-base"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* Prev arrow */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-ambrosian-gold/40 bg-ambrosian-dark/40 text-ambrosian-gold hover:border-ambrosian-gold hover:bg-ambrosian-gold/15 transition-all duration-200"
      >
        <HiChevronLeft size={22} />
      </button>

      {/* Next arrow */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-ambrosian-gold/40 bg-ambrosian-dark/40 text-ambrosian-gold hover:border-ambrosian-gold hover:bg-ambrosian-gold/15 transition-all duration-200"
      >
        <HiChevronRight size={22} />
      </button>

      {/* Dot navigation */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? '28px' : '8px',
              height: '8px',
              background: i === current ? '#fbcc7b' : 'rgba(251,204,123,0.35)',
            }}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 right-5 md:right-8 z-20 hidden sm:flex flex-col items-center gap-1 text-ambrosian-gold/40">
        <span className="text-[10px] tracking-widest uppercase rotate-90 origin-center translate-y-3">Scroll</span>
        <div className="w-[1px] h-8 bg-ambrosian-gold/30 mt-4" />
      </div>
    </section>
  )
}
