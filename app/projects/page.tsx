'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const projects: any[] = []

const musicConcertsImages = [
  'https://res.cloudinary.com/drgot7znf/image/upload/v1777143797/IMG-20260425-WA0055_kgwnxv.jpg',
  'https://res.cloudinary.com/drgot7znf/image/upload/v1777143798/IMG-20260425-WA0072_imh6ua.jpg',
  'https://res.cloudinary.com/drgot7znf/image/upload/v1777143798/IMG-20260425-WA0087_udbhiv.jpg',
  'https://res.cloudinary.com/drgot7znf/image/upload/v1777143797/IMG-20260425-WA0081_beutpt.jpg',
]

const corporateImages = [
  'https://res.cloudinary.com/drgot7znf/image/upload/v1777143104/IMG-20260425-WA0084_jawmpx.jpg',
  'https://res.cloudinary.com/drgot7znf/image/upload/v1777143103/IMG-20260425-WA0062_b1q1cm.jpg',
  'https://res.cloudinary.com/drgot7znf/image/upload/v1777144901/IMG-20260425-WA0085_byptnj.jpg',
]

export default function ProjectsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % corporateImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-ambrosian-dark">
      {/* Hero */}
      <section className="container mx-auto px-6 pt-20 pb-12">
        <h1 className="text-5xl md:text-7xl font-bold text-ambrosian-gold mb-6 leading-tight">
          Our Projects
        </h1>
        <p className="text-ambrosian-gold/70 text-lg max-w-xl leading-relaxed">
          Delivering exceptional events through meticulous planning and visionary
          design. Explore our curated portfolio of cultural celebrations, musical
          experiences, and corporate excellence.
        </p>
        <div className="mt-8 h-px w-full bg-ambrosian-gold/20" />
      </section>

      {/* Featured Event: Ramadan & Eid Fair 2026 */}
      <section className="container mx-auto px-6 pb-24">
        <div className="bg-gradient-to-b from-ambrosian-gold/5 to-transparent border border-ambrosian-gold/30 rounded-2xl overflow-hidden">
          {/* Featured Badge */}
          <div className="flex justify-center pt-8">
            <span className="inline-block bg-ambrosian-gold text-ambrosian-dark text-xs font-bold tracking-widest px-4 py-2 rounded-full">
              FEATURED EVENT
            </span>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-8 md:p-12">
            {/* Left: Video */}
            <div className="flex flex-col gap-6">
              {/* Main Landscape Video */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-ambrosian-gold/20">
                <video
                  controls
                  className="w-full h-full object-cover"
                >
                  <source
                    src="https://res.cloudinary.com/drgot7znf/video/upload/v1778356023/eid_festival_final_video_q7xice.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Reels Videos - Vertical Grid */}
              {/* <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden border border-ambrosian-gold/20">
                  <video
                    controls
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="https://res.cloudinary.com/drgot7znf/video/upload/v1777142783/WhatsApp_Video_2026-04-25_at_1.20.16_PM_zcnxpi.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden border border-ambrosian-gold/20">
                  <video
                    controls
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="https://res.cloudinary.com/drgot7znf/video/upload/v1777142784/WhatsApp_Video_2026-04-25_at_1.20.19_PM_gfzvmg.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div> */}

              {/* Landscape Image */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-ambrosian-gold/20">
                <Image
                  src="https://res.cloudinary.com/drgot7znf/image/upload/v1777142781/ade0d540-1103-4a43-96ac-dbe7ac2b126c_wkha9c.jpg"
                  alt="Ramadan & Eid Fair 2026"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right: Event Details */}
            <div className="flex flex-col justify-start gap-6 sm:gap-8">
              <div>
                <span className="inline-block border border-ambrosian-gold/50 text-ambrosian-gold/70 text-xs tracking-widest px-3 py-1 rounded mb-4 sm:mb-6 w-fit">
                  CULTURAL EVENT
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-ambrosian-gold mb-4 leading-tight">
                  Ramadan & Eid Fair 2026
                </h2>
                <p className="text-ambrosian-gold/60 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                  Join us for an immersive celebration of community and culture. We are the event management and official sponsor of this grand gathering featuring traditional arts, world-class exhibitions, shopping experiences, and authentic food stalls.
                </p>
              </div>

              {/* Event Details */}
              <div className="space-y-4 sm:space-y-5">
                <div className="border-l-2 border-ambrosian-gold/40 pl-4 sm:pl-6">
                  <h3 className="text-ambrosian-gold/70 text-xs tracking-widest uppercase mb-1">Date & Time</h3>
                  <p className="text-ambrosian-gold font-semibold text-sm sm:text-base">
                    Sunday, 8th March, 2026 • 11:00 AM Onwards
                  </p>
                </div>

                <div className="border-l-2 border-ambrosian-gold/40 pl-4 sm:pl-6">
                  <h3 className="text-ambrosian-gold/70 text-xs tracking-widest uppercase mb-1">Venue</h3>
                  <p className="text-ambrosian-gold font-semibold text-sm sm:text-base">
                    Mayfair Venue
                  </p>
                  <p className="text-ambrosian-gold/60 text-xs sm:text-sm mt-1">
                    1078-1084 High Road, Chadwell Heath<br />
                    Romford, RM6 9BD, United Kingdom
                  </p>
                </div>

                <div className="border-l-2 border-ambrosian-gold/40 pl-4 sm:pl-6">
                  <h3 className="text-ambrosian-gold/70 text-xs tracking-widest uppercase mb-2 sm:mb-3">Event Features</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2 text-ambrosian-gold/80">
                      <span className="text-ambrosian-gold mt-1">✓</span>
                      <span>Premium Shopping Experience</span>
                    </li>
                    <li className="flex items-start gap-2 text-ambrosian-gold/80">
                      <span className="text-ambrosian-gold mt-1">✓</span>
                      <span>Iftar Distribution & Food Stalls</span>
                    </li>
                    <li className="flex items-start gap-2 text-ambrosian-gold/80">
                      <span className="text-ambrosian-gold mt-1">✓</span>
                      <span>Live Entertainment & Cultural Shows</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-2 border-ambrosian-gold/40 pl-4 sm:pl-6">
                  <h3 className="text-ambrosian-gold/70 text-xs tracking-widest uppercase mb-2">Official Partners</h3>
                  <p className="text-ambrosian-gold/60 text-xs sm:text-sm">
                    NOK Mart • Malabar Gold & Diamonds • Media Partner: OW
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8">
                <Link
                  href="/contact"
                  className="flex-1 bg-ambrosian-gold text-ambrosian-dark px-6 py-3 rounded-lg font-bold text-sm sm:text-base hover:opacity-90 transition-opacity text-center"
                >
                  Reserve Your Spot
                </Link>
                <a
                  href="https://ambrosianevents.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-ambrosian-gold text-ambrosian-gold px-6 py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-ambrosian-gold/10 transition-colors text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Concerts & Festivals */}
      <section className="container mx-auto px-6 pb-24">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block border border-ambrosian-gold/50 text-ambrosian-gold/70 text-xs tracking-widest px-3 py-1 rounded mb-6 w-fit">
            ENTERTAINMENT
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-ambrosian-gold mb-6 leading-tight">
            Music Concerts & Festivals
          </h2>
          <p className="text-ambrosian-gold/60 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Relive the energy of our past music events. From intimate acoustic sessions to large-scale outdoor festivals, we manage every detail from sound to security.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {musicConcertsImages.map((image: string, idx: number) => (
            <div key={idx} className="relative h-[250px] sm:h-[280px] md:h-[320px] rounded-lg overflow-hidden border border-ambrosian-gold/20 hover:border-ambrosian-gold/50 transition-colors">
              <Image
                src={image}
                alt={`Music Concert ${idx + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center pt-12 sm:pt-16">
          <Link
            href="/contact"
            className="flex items-center gap-2 text-ambrosian-gold text-sm tracking-widest font-semibold uppercase hover:opacity-70 transition-opacity group"
          >
            View Event Details
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

      {/* Corporate Excellence Slider */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Image Slider */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden border border-ambrosian-gold/20">
            {/* Images */}
            {corporateImages.map((image: string, idx: number) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={image}
                  alt={`Corporate Event ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>
            ))}

            {/* Slider Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {corporateImages.map((_: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentImageIndex
                      ? 'bg-ambrosian-gold w-6'
                      : 'bg-ambrosian-gold/40 hover:bg-ambrosian-gold/60'
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col justify-center gap-6 sm:gap-8">
            <div>
              <span className="inline-block border border-ambrosian-gold/50 text-ambrosian-gold/70 text-xs tracking-widest px-3 py-1 rounded mb-4 sm:mb-6 w-fit">
                CORPORATE
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-ambrosian-gold mb-4 leading-tight">
                Corporate Excellence
              </h2>
              <p className="text-ambrosian-gold/60 text-sm sm:text-base leading-relaxed">
                Professional, polished, and perfectly executed. We specialize in award ceremonies, gala dinners, and corporate product launches that leave a lasting impression.
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="flex items-center gap-2 text-ambrosian-gold text-sm tracking-widest font-semibold uppercase hover:opacity-70 transition-opacity group w-fit"
            >
              View Portfolio
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Project List */}
      <section className="container mx-auto px-6 pb-24 space-y-28">
        {projects.length === 0 ? null : (
          projects.map((project: any, index: number) => (
            <article
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 lg:gap-16 items-center`}
            >
              {/* Text */}
              <div className="flex-1 flex flex-col justify-center">
                <span className="inline-block border border-ambrosian-gold/50 text-ambrosian-gold/70 text-xs tracking-widest px-3 py-1 rounded mb-6 w-fit">
                  {project.category}
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ambrosian-gold mb-5 leading-tight">
                  {project.title}
                </h2>
                <p className="text-ambrosian-gold/60 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
                  {project.description}
                </p>
                <Link
                  href={`/contact`}
                  className="flex items-center gap-2 text-ambrosian-gold text-xs sm:text-sm tracking-widest font-semibold uppercase hover:opacity-70 transition-opacity group w-fit"
                >
                  View Details
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>

              {/* Image Grid - Asymmetric Layout (1 large + 2 small) */}
              {project.layout === 'asymmetric' && (
                <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3 h-[280px] sm:h-[320px] md:h-[420px] w-full max-w-[480px] sm:max-w-[540px] md:max-w-[580px]">
                  <div className="row-span-2 relative rounded-lg sm:rounded-xl overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={`${project.title} main`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 45vw, (max-width: 768px) 40vw, 33vw"
                    />
                  </div>
                  <div className="relative rounded-lg sm:rounded-xl overflow-hidden">
                    <Image
                      src={project.images[1]}
                      alt={`${project.title} detail 1`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 45vw, (max-width: 768px) 40vw, 25vw"
                    />
                  </div>
                  <div className="relative rounded-lg sm:rounded-xl overflow-hidden">
                    <Image
                      src={project.images[2]}
                      alt={`${project.title} detail 2`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 45vw, (max-width: 768px) 40vw, 25vw"
                    />
                  </div>
                </div>
              )}

              {/* Image Grid - Carousel Layout (4 images horizontal) */}
              {project.layout === 'carousel' && (
                <div className="flex-1 w-full max-w-[480px] sm:max-w-[540px] md:max-w-[600px]">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                    {project.images.map((image: string, idx: number) => (
                      <div key={idx} className="relative h-[140px] sm:h-[160px] md:h-[200px] rounded-lg sm:rounded-xl overflow-hidden">
                        <Image
                          src={image}
                          alt={`${project.title} gallery ${idx + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 45vw, (max-width: 768px) 22vw, 20vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Image Grid - Single Large Layout */}
              {project.layout === 'single' && (
                <div className="flex-1 w-full max-w-[480px] sm:max-w-[540px] md:max-w-[600px]">
                  <div className="relative h-[280px] sm:h-[320px] md:h-[400px] rounded-lg sm:rounded-xl overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={`${project.title} main`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 90vw, (max-width: 768px) 50vw, 40vw"
                    />
                  </div>
                </div>
              )}
            </article>
          ))
        )}
      </section>

      {/* CTA */}
      <section className="border-t border-ambrosian-gold/20 py-20">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-ambrosian-gold mb-4">
            Ready to Create Your Event?
          </h3>
          <p className="text-ambrosian-gold/60 mb-8 max-w-lg mx-auto">
            Let Ambrosian turn your vision into an extraordinary experience.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-ambrosian-gold text-ambrosian-dark px-10 py-4 rounded-lg font-bold tracking-wide hover:opacity-90 transition-opacity"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* Wedding Ceremony */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center gap-6 sm:gap-8">
            <div>
              <span className="inline-block border border-ambrosian-gold/50 text-ambrosian-gold/70 text-xs tracking-widest px-3 py-1 rounded mb-4 sm:mb-6 w-fit">
                WEDDING
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-ambrosian-gold mb-4 leading-tight">
                Wedding Ceremony
              </h2>
              <p className="text-ambrosian-gold/60 text-sm sm:text-base leading-relaxed">
                Your dream wedding deserves meticulous planning and flawless execution. From intimate ceremonies to grand celebrations, we handle every detail with elegance and precision. Our comprehensive wedding services include decoration, catering, staffing, photography, and complete event management to make your special day unforgettable.
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="flex items-center gap-2 text-ambrosian-gold text-sm tracking-widest font-semibold uppercase hover:opacity-70 transition-opacity group w-fit"
            >
              Plan Your Wedding
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Right: Image Grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3 h-[280px] sm:h-[320px] md:h-[420px] w-full">
            <div className="row-span-2 relative rounded-lg sm:rounded-xl overflow-hidden border border-ambrosian-gold/20">
              <Image
                src="/project-gallery/6.jpeg"
                alt="Wedding Ceremony Main"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 45vw, (max-width: 768px) 40vw, 33vw"
              />
            </div>
            <div className="relative rounded-lg sm:rounded-xl overflow-hidden border border-ambrosian-gold/20">
              <Image
                src="/project-gallery/7.jpeg"
                alt="Wedding Ceremony Detail 1"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 45vw, (max-width: 768px) 40vw, 25vw"
              />
            </div>
            <div className="relative rounded-lg sm:rounded-xl overflow-hidden border border-ambrosian-gold/20">
              <Image
                src="/project-gallery/2.jpeg"
                alt="Wedding Ceremony Detail 2"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 45vw, (max-width: 768px) 40vw, 25vw"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

