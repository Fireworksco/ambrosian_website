'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import PageHero from '@/components/PageHero'
import Arrow from '@/components/Arrow'

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
    <main className="min-h-screen">
      {/* Hero */}
      <PageHero image={musicConcertsImages[0]}>
        <h1 className="h-xl page-title in-2" style={{ marginTop: 0 }}>
          Our Projects
        </h1>
        <span className="bar in-2" aria-hidden="true" style={{ marginTop: 24 }} />
        <p className="page-intro in-3">
          Delivering exceptional events through meticulous planning and visionary
          design. Explore our curated portfolio of cultural celebrations, musical
          experiences, and corporate excellence.
        </p>
      </PageHero>

      {/* Featured Event: Banglafest & Award UK 2026 */}
      <section className="sec-pad" style={{ paddingBottom: 60 }}>
        <div className="wrap">
          <div className="rv" style={{ border: '1px solid rgba(249,200,121,.35)', background: 'rgba(23,46,73,.35)' }}>
            {/* Badge */}
            <div className="flex justify-center" style={{ paddingTop: 40 }}>
              <span className="badge">UPCOMING EVENT</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 p-6 sm:p-10 md:p-14">
              {/* Left: Portrait Video + Poster */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-6 items-start">
                {/* Promo Reel Video — portrait 9:16 */}
                <div className="w-full sm:w-1/2 lg:w-full max-w-xs mx-auto sm:mx-0 lg:mx-auto">
                  <div className="relative w-full aspect-[9/16] overflow-hidden bg-black" style={{ border: '1px solid rgba(249,200,121,.3)' }}>
                    <video
                      controls
                      playsInline
                      className="w-full h-full object-contain"
                    >
                      <source
                        src="https://res.cloudinary.com/di97ipri0/video/upload/v1779516652/WhatsApp_Video_2026-05-22_at_11.16.09_AM_agkllw.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                {/* Poster / Logo */}
                <div className="w-full sm:w-1/2 lg:w-full">
                  <div className="relative w-full aspect-square overflow-hidden bg-amb-ivory">
                    <Image
                      src="/projects/banglafest-2026.png"
                      alt="Banglafest & Award UK 2026 Poster"
                      fill
                      className="object-contain p-6"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* Right: Event Details */}
              <div className="flex flex-col justify-start gap-8">
                <div className="flex flex-col gap-5">
                  <span className="kicker">CULTURAL FESTIVAL & AWARDS</span>
                  <h2 className="h-md feat-t">
                    Banglafest & Award UK 2026
                  </h2>
                  <p className="feat-meta">
                    Sunday, 19 July 2026 · The Royal Regency, London
                  </p>
                  <p className="feat-d">
                    A vibrant cultural and entertainment event celebrating community, talent, and achievement. An exciting evening of live performances, cultural showcases, and a prestigious awards ceremony in a lively and elegant atmosphere.
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="detail">
                    <h3>Date & Time</h3>
                    <p>
                      Sunday, 19th July, 2026
                    </p>
                  </div>

                  <div className="detail">
                    <h3>Venue</h3>
                    <p>The Royal Regency</p>
                    <p className="sub">London, United Kingdom</p>
                  </div>

                  <div className="detail">
                    <h3>Seating Categories</h3>
                    <ul className="ticks" style={{ marginTop: 10 }}>
                      <li>Premium Ground Floor</li>
                      <li>VIP Seating</li>
                      <li>General First Floor</li>
                    </ul>
                  </div>

                  <div className="detail">
                    <h3>Event Highlights</h3>
                    <ul className="ticks" style={{ marginTop: 10 }}>
                      <li>Live Performances & Cultural Entertainment</li>
                      <li>Prestigious Awards Ceremony</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link href="/contact" className="btn btn-gold flex-1">
                    Reserve Your Spot <Arrow />
                  </Link>
                  <Link href="/contact" className="btn btn-line flex-1">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event: Ramadan & Eid Fair 2026 */}
      <section style={{ paddingBottom: 120 }}>
        <div className="wrap">
          <div className="rv" style={{ border: '1px solid rgba(249,200,121,.35)', background: 'rgba(23,46,73,.35)' }}>
            {/* Featured Badge */}
            <div className="flex justify-center" style={{ paddingTop: 40 }}>
              <span className="badge">FEATURED EVENT</span>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 p-6 sm:p-10 md:p-14">
              {/* Left: Video */}
              <div className="flex flex-col gap-6">
                {/* Main Landscape Video */}
                <div className="relative w-full aspect-video overflow-hidden bg-black" style={{ border: '1px solid rgba(249,200,121,.3)' }}>
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

                {/* Landscape Image */}
                <div className="ph relative w-full aspect-video">
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
              <div className="flex flex-col justify-start gap-8">
                <div className="flex flex-col gap-5">
                  <span className="kicker">CULTURAL EVENT</span>
                  <h2 className="h-md feat-t">
                    Ramadan & Eid Fair 2026
                  </h2>
                  <p className="feat-d">
                    Join us for an immersive celebration of community and culture. We are the event management and official sponsor of this grand gathering featuring traditional arts, world-class exhibitions, shopping experiences, and authentic food stalls.
                  </p>
                </div>

                {/* Event Details */}
                <div className="flex flex-col gap-6">
                  <div className="detail">
                    <h3>Date & Time</h3>
                    <p>
                      Sunday, 8th March, 2026 • 11:00 AM Onwards
                    </p>
                  </div>

                  <div className="detail">
                    <h3>Venue</h3>
                    <p>
                      Mayfair Venue
                    </p>
                    <p className="sub">
                      1078-1084 High Road, Chadwell Heath<br />
                      Romford, RM6 9BD, United Kingdom
                    </p>
                  </div>

                  <div className="detail">
                    <h3>Event Features</h3>
                    <ul className="ticks" style={{ marginTop: 10 }}>
                      <li>Premium Shopping Experience</li>
                      <li>Iftar Distribution & Food Stalls</li>
                      <li>Live Entertainment & Cultural Shows</li>
                    </ul>
                  </div>

                  <div className="detail">
                    <h3>Official Partners</h3>
                    <p className="sub">
                      NOK Mart • Malabar Gold & Diamonds • Media Partner: OW
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link href="/contact" className="btn btn-gold flex-1">
                    Reserve Your Spot <Arrow />
                  </Link>
                  <a
                    href="https://ambrosianevents.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-line flex-1"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Concerts & Festivals */}
      <section className="sec-pad" style={{ background: '#172E49' }}>
        <div className="wrap">
          <div style={{ textAlign: 'center' }}>
            <span className="kicker rv">ENTERTAINMENT</span>
            <h2 className="h-lg" style={{ marginTop: 20, color: '#FBF7F0' }}>
              <span className="ln rv-ln"><span>Music Concerts & Festivals</span></span>
            </h2>
            <span className="bar grow" aria-hidden="true" />
            <p className="rv" style={{ maxWidth: '40em', margin: '26px auto 0', fontSize: 17, lineHeight: 1.7, fontWeight: 300, color: '#E5DED2' }}>
              Relive the energy of our past music events. From intimate acoustic sessions to large-scale outdoor festivals, we manage every detail from sound to security.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4" style={{ marginTop: 64 }}>
            {musicConcertsImages.map((image: string, idx: number) => (
              <div key={idx} className="ph rv relative h-[280px] md:h-[380px]">
                <Image
                  src={image}
                  alt={`Music Concert ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center" style={{ paddingTop: 56 }}>
            <Link href="/contact" className="more">
              View Event Details <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* Corporate Excellence Slider */}
      <section className="sec-pad">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Image Slider */}
            <div className="ph rv relative w-full h-[320px] sm:h-[420px] md:h-[520px]">
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
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {corporateImages.map((_: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className="h-[4px] transition-all"
                    style={{
                      width: idx === currentImageIndex ? 36 : 14,
                      background: idx === currentImageIndex ? '#F9C879' : 'rgba(251,247,240,.55)',
                    }}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="flex flex-col justify-center gap-6 rv">
              <span className="kicker">CORPORATE</span>
              <h2 className="h-lg" style={{ color: '#FBF7F0' }}>
                Corporate Excellence
              </h2>
              <span className="bar bar-l" aria-hidden="true" style={{ marginTop: 0 }} />
              <p className="lead">
                Professional, polished, and perfectly executed. We specialize in award ceremonies, gala dinners, and corporate product launches that leave a lasting impression.
              </p>

              {/* CTA */}
              <div style={{ marginTop: 8 }}>
                <Link href="/contact" className="more">
                  View Portfolio <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project List */}
      {projects.length === 0 ? null : (
        <section className="wrap space-y-28" style={{ paddingBottom: 120 }}>
          {projects.map((project: any, index: number) => (
            <article
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 lg:gap-16 items-center`}
            >
              {/* Text */}
              <div className="flex-1 flex flex-col justify-center gap-6">
                <span className="kicker">{project.category}</span>
                <h2 className="h-lg" style={{ color: '#FBF7F0' }}>
                  {project.title}
                </h2>
                <p className="lead max-w-md">
                  {project.description}
                </p>
                <Link href={`/contact`} className="more w-fit">
                  View Details <Arrow />
                </Link>
              </div>

              {/* Image Grid - Asymmetric Layout (1 large + 2 small) */}
              {project.layout === 'asymmetric' && (
                <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-3 h-[280px] sm:h-[320px] md:h-[420px] w-full max-w-[580px]">
                  <div className="ph row-span-2 relative">
                    <Image src={project.images[0]} alt={`${project.title} main`} fill className="object-cover" sizes="(max-width: 640px) 45vw, (max-width: 768px) 40vw, 33vw" />
                  </div>
                  <div className="ph relative">
                    <Image src={project.images[1]} alt={`${project.title} detail 1`} fill className="object-cover" sizes="(max-width: 640px) 45vw, (max-width: 768px) 40vw, 25vw" />
                  </div>
                  <div className="ph relative">
                    <Image src={project.images[2]} alt={`${project.title} detail 2`} fill className="object-cover" sizes="(max-width: 640px) 45vw, (max-width: 768px) 40vw, 25vw" />
                  </div>
                </div>
              )}

              {/* Image Grid - Carousel Layout (4 images horizontal) */}
              {project.layout === 'carousel' && (
                <div className="flex-1 w-full max-w-[600px]">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {project.images.map((image: string, idx: number) => (
                      <div key={idx} className="ph relative h-[140px] sm:h-[160px] md:h-[200px]">
                        <Image src={image} alt={`${project.title} gallery ${idx + 1}`} fill className="object-cover" sizes="(max-width: 640px) 45vw, (max-width: 768px) 22vw, 20vw" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Image Grid - Single Large Layout */}
              {project.layout === 'single' && (
                <div className="flex-1 w-full max-w-[600px]">
                  <div className="ph relative h-[280px] sm:h-[320px] md:h-[400px]">
                    <Image src={project.images[0]} alt={`${project.title} main`} fill className="object-cover" sizes="(max-width: 640px) 90vw, (max-width: 768px) 50vw, 40vw" />
                  </div>
                </div>
              )}
            </article>
          ))}
        </section>
      )}

      {/* CTA */}
      <section style={{ position: 'relative', color: '#FBF7F0', background: '#0D1828', overflow: 'clip' }}>
        <div className="sec-bg bgc plx-bg" aria-hidden="true" style={{ backgroundImage: `url(${corporateImages[2]})` }} />
        <div className="shade" aria-hidden="true" style={{ background: 'rgba(13,24,40,.74)' }} />
        <div className="wrap" style={{ position: 'relative', textAlign: 'center', paddingTop: 130, paddingBottom: 130 }}>
          <h3 className="h-lg" style={{ fontSize: 'clamp(32px, 3.8vw, 54px)', color: '#FBF7F0' }}>
            <span className="ln rv-ln"><span>Ready to Create Your Event?</span></span>
          </h3>
          <span className="bar grow" aria-hidden="true" />
          <p className="rv" style={{ margin: '28px auto 0', maxWidth: '32em', fontSize: 18, lineHeight: 1.7, fontWeight: 300 }}>
            Let Ambrosian turn your vision into an extraordinary experience.
          </p>
          <div className="rv" style={{ marginTop: 40 }}>
            <Link href="/contact" className="btn btn-gold">
              Book a Consultation <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* Wedding Ceremony */}
      <section className="sec-pad">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="flex flex-col justify-center gap-6 rv">
              <span className="kicker">WEDDING</span>
              <h2 className="h-lg" style={{ color: '#FBF7F0' }}>
                Wedding Ceremony
              </h2>
              <span className="bar bar-l" aria-hidden="true" style={{ marginTop: 0 }} />
              <p className="lead">
                Your dream wedding deserves meticulous planning and flawless execution. From intimate ceremonies to grand celebrations, we handle every detail with elegance and precision. Our comprehensive wedding services include decoration, catering, staffing, photography, and complete event management to make your special day unforgettable.
              </p>

              {/* CTA */}
              <div style={{ marginTop: 8 }}>
                <Link href="/contact" className="more">
                  Plan Your Wedding <Arrow />
                </Link>
              </div>
            </div>

            {/* Right: Image Grid */}
            <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[320px] sm:h-[420px] md:h-[520px] w-full rv">
              <div className="ph row-span-2 relative">
                <Image
                  src="/project-gallery/6.jpeg"
                  alt="Wedding Ceremony Main"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 45vw, (max-width: 768px) 40vw, 33vw"
                />
              </div>
              <div className="ph relative">
                <Image
                  src="/project-gallery/7.jpeg"
                  alt="Wedding Ceremony Detail 1"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 45vw, (max-width: 768px) 40vw, 25vw"
                />
              </div>
              <div className="ph relative">
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
        </div>
      </section>
    </main>
  )
}
