import Link from 'next/link'
import Arrow from '@/components/Arrow'

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

// The photo strip pans continuously (CSS). It is repeated so the loop is seamless
// on wide screens: the animation moves it by exactly half its width.
const strip = [...slides, ...slides, ...slides, ...slides]

export default function HeroSlider() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <div className="strip">
          {strip.map((slide, i) => (
            <div
              key={i}
              className="bgc"
              role={i < slides.length ? 'img' : undefined}
              aria-label={i < slides.length ? slide.alt : undefined}
              aria-hidden={i < slides.length ? undefined : true}
              style={{ backgroundImage: `url(${slide.src})` }}
            />
          ))}
        </div>
        <div className="shade" style={{ background: 'rgba(13,24,40,.52)' }} />
      </div>

      <div className="wrap hero-out" style={{ position: 'relative' }}>
        <p className="kicker in-1">Full-service event management · London</p>
        <h1 className="h-xl" style={{ marginTop: 26, fontSize: 'clamp(40px, 6vw, 88px)', color: '#FBF7F0' }}>
          <span className="ln in-ln"><span>Modern elegance,</span></span>
          <span className="ln in-ln"><span><em className="serif-i" style={{ fontSize: '1.14em' }}>memorable</em> experiences</span></span>
        </h1>
        <p className="in-2" style={{ maxWidth: '40em', margin: '28px auto 0', fontSize: 19, lineHeight: 1.65, fontWeight: 300, color: '#FBF7F0' }}>
          Weddings, cultural festivals, concerts and corporate events — with catering, styling, staffing, security and film from one dedicated team.{' '}
          <a href="#services" style={{ color: '#F9C879', textUnderlineOffset: 4 }}>Explore our services</a>.
        </p>
        <div className="in-3" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16, marginTop: 42 }}>
          <Link className="btn btn-gold" href="/contact">
            Plan your event <Arrow />
          </Link>
          <Link className="btn btn-line" href="/projects">
            View our work
          </Link>
        </div>
      </div>
    </section>
  )
}
