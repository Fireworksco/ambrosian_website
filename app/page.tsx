import Link from 'next/link'
import Image from 'next/image'
import Gallery from '@/components/Gallery'
import HeroSlider from '@/components/HeroSlider'
import Arrow from '@/components/Arrow'

export default function Home() {
  const services = [
    {
      title: 'Catering & Wedding Cuisine',
      slug: 'catering-wedding-cuisine',
      description: 'Wide variety of delicious food options with qualified & professionally trained chefs',
      icon: '/services_icons/icons-01.png'
    },
    {
      title: 'Professional Event Staffing',
      slug: 'event-staffing',
      description: '5-Star service with expert bartenders, food waiters & well-trained hospitality staff',
      icon: '/services_icons/icons-02.png'
    },
    {
      title: 'Decoration & Event Styling',
      slug: 'decoration-styling',
      description: 'Specialized decoration & creative styling team for stage décor, table setup & themed designs',
      icon: '/services_icons/icons-03.png'
    },
    {
      title: 'SIA Security Services',
      slug: 'security-services',
      description: 'Licensed SIA security personnel for door supervision, crowd control & VIP security',
      icon: '/services_icons/icons-04.png'
    },
    {
      title: 'Marketing & Event Management',
      slug: 'marketing-management',
      description: 'Experienced marketing & event management team to make your event successful',
      icon: '/services_icons/icons-05.png'
    },
    {
      title: 'Photography & Videography',
      slug: 'photography-videography',
      description: 'Professional wedding videography with drone photography & advanced 3D/cinematic shooting',
      icon: '/services_icons/icons-06.png'
    },
  ]

  const Ring = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <circle cx="9" cy="9" r="6.4" fill="none" stroke="#D42938" strokeWidth="2.6" />
    </svg>
  )

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSlider />

      {/* About Ambrosian */}
      <section id="about" style={{ position: 'relative', color: '#FBF7F0', background: '#0D1828', overflow: 'clip' }}>
        <div className="sec-bg bgc plx-bg" aria-hidden="true" style={{ backgroundImage: 'url(/project-gallery/3.jpeg)' }} />
        <div className="shade" aria-hidden="true" style={{ background: 'rgba(13,24,40,.4)' }} />
        <div className="wrap about-in" style={{ position: 'relative', paddingTop: 140, paddingBottom: 120 }}>
          <p className="kicker rv">About Ambrosian</p>
          <h2 className="h-lg" style={{ marginTop: 20, fontSize: 'clamp(30px, 3.6vw, 52px)', color: '#FBF7F0' }}>
            <span className="ln rv-ln"><span>Creating unforgettable</span></span>
            <span className="ln rv-ln"><span>moments with</span></span>
            <span className="ln rv-ln"><span>professional excellence</span></span>
          </h2>
          <div className="rv" style={{ maxWidth: 620, marginTop: 36 }}>
            <div style={{ padding: '34px 38px', background: 'rgba(13,24,40,.82)' }}>
              <p style={{ fontSize: 18, lineHeight: 1.7, fontWeight: 300, color: '#FBF7F0' }}>
                Ambrosian is a London event partner for weddings, cultural festivals, concerts and corporate occasions. Catering, styling, staffing, security, marketing and film sit under one roof — so the team that plans your event is the team that delivers it, down to the final detail.
              </p>
            </div>
            <Link className="btn btn-gold" href="#services">
              Find out more <Arrow />
            </Link>
          </div>
        </div>
        <div style={{ position: 'relative', background: 'rgba(13,24,40,.9)', borderTop: '1px solid rgba(249,200,121,.3)' }}>
          <div className="wrap pillars">
            <div className="pillar rv"><span className="pillar-n">01</span><h3 className="h-md pillar-t">Professional excellence</h3><p className="pillar-d">Highly trained, experienced staff at every post.</p></div>
            <div className="pillar rv"><span className="pillar-n">02</span><h3 className="h-md pillar-t">Premium quality</h3><p className="pillar-d">Five-star service and attention to every detail.</p></div>
            <div className="pillar rv"><span className="pillar-n">03</span><h3 className="h-md pillar-t">Comprehensive solutions</h3><p className="pillar-d">All-in-one services, from planning to execution.</p></div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="sec-pad" style={{ background: '#0D1828' }}>
        <div className="wrap">

          {/* Card 1 — Banglafest & Award UK 2026 */}
          <div className="feat rv">
            <div className="feat-media light">
              <Image
                src="/projects/banglafest-2026.png"
                alt="Banglafest & Award UK 2026"
                fill
                className="object-contain p-6"
                sizes="(max-width: 1080px) 100vw, 50vw"
              />
            </div>
            <div className="feat-body">
              <span className="badge">UPCOMING EVENT</span>
              <h2 className="h-md feat-t">Banglafest & Award UK 2026</h2>
              <p className="feat-meta">Sunday, 19 July 2026 · The Royal Regency, London</p>
              <p className="feat-d">
                A vibrant cultural and entertainment event celebrating community, talent, and achievement. Featuring an exciting evening of live performances, cultural showcases, and a prestigious awards ceremony in a lively and elegant atmosphere.
              </p>
              <ul className="ticks">
                <li>Premium Ground Floor, VIP & General Seating</li>
                <li>Live Performances & Cultural Entertainment</li>
                <li>Prestigious Awards Ceremony</li>
              </ul>
              <div style={{ marginTop: 8 }}>
                <Link href="/projects" className="btn btn-gold">
                  View All Projects <Arrow />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 — Ramadan & Eid Fair 2026 */}
          <div className="feat feat-rev rv">
            <div className="feat-media ph">
              <Image
                src="https://res.cloudinary.com/drgot7znf/image/upload/v1777142781/ade0d540-1103-4a43-96ac-dbe7ac2b126c_wkha9c.jpg"
                alt="Ramadan & Eid Fair 2026"
                fill
                className="object-cover"
                sizes="(max-width: 1080px) 100vw, 50vw"
              />
            </div>
            <div className="feat-body">
              <span className="badge badge-line">RECENT PROJECT</span>
              <h2 className="h-md feat-t">Ramadan & Eid Fair 2026</h2>
              <p className="feat-meta">Sunday, 8 March 2026 · Mayfair Venue, London</p>
              <p className="feat-d">
                A grand celebration of community and culture. We were the official event management and sponsor of this immersive gathering featuring traditional arts, world-class exhibitions, shopping experiences, and authentic food stalls.
              </p>
              <ul className="ticks">
                <li>Premium Shopping Experience</li>
                <li>Iftar Distribution & Food Stalls</li>
                <li>Live Entertainment & Cultural Shows</li>
              </ul>
              <div style={{ marginTop: 8 }}>
                <Link href="/projects" className="btn btn-line">
                  View All Projects <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee (decorative) */}
      <div className="mq" aria-hidden="true">
        <div className="mq-track mq-l">
          {[0, 1].map((k) =>
            services.map((s, i) => (
              <span key={`${k}-${s.slug}`} style={{ display: 'contents' }}>
                <span className={`mq-word${i % 2 ? ' o' : ''}`}>{s.title}</span>
                <Ring />
              </span>
            ))
          )}
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="sec-pad on-light" style={{ position: 'relative', padding: '120px 0 130px', overflow: 'clip' }}>
        <div className="drift" aria-hidden="true" style={{ position: 'absolute', right: -240, top: 60, width: 760, height: 760 }}>
          <svg viewBox="0 0 400 400" fill="none" style={{ display: 'block', width: '100%', height: '100%' }}><circle cx="200" cy="200" r="186" stroke="#F3E9D8" strokeWidth="24" strokeDasharray="1020 150" /></svg>
        </div>
        <div className="drift" aria-hidden="true" style={{ position: 'absolute', left: -280, bottom: -160, width: 640, height: 640 }}>
          <svg viewBox="0 0 400 400" fill="none" style={{ display: 'block', width: '100%', height: '100%' }}><circle cx="200" cy="200" r="186" stroke="#F3E9D8" strokeWidth="24" strokeDasharray="1020 150" /></svg>
        </div>
        <div className="wrap" style={{ position: 'relative' }}>
          <div style={{ textAlign: 'center' }}>
            <h2 className="h-lg" style={{ color: '#0D1828' }}>
              <span className="ln rv-ln"><span>Our Services</span></span>
            </h2>
            <span className="bar grow" aria-hidden="true" />
            <p className="rv" style={{ maxWidth: '40em', margin: '26px auto 0', fontSize: 17, lineHeight: 1.7, color: '#4F5B6D' }}>
              Comprehensive event solutions tailored to your needs
            </p>
          </div>

          <div className="svc-grid">
            {services.map((service) => (
              <div key={service.slug} className="svc rv">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={112}
                  height={112}
                  className="ico ico-dark"
                />
                <div>
                  <Link className="svc-label" href={`/services/${service.slug}`}>
                    {service.title} <Arrow />
                  </Link>
                  <p className="svc-d">{service.description}</p>
                  <Link href={`/services/${service.slug}`} className="more" style={{ marginTop: 18 }}>
                    Learn More <Arrow />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* CTA Section */}
      <section id="contact" style={{ position: 'relative', color: '#FBF7F0', background: '#0D1828', overflow: 'clip' }}>
        <div className="sec-bg bgc plx-bg" aria-hidden="true" style={{ backgroundImage: 'url(/project-gallery/7.jpeg)' }} />
        <div className="shade" aria-hidden="true" style={{ background: 'rgba(13,24,40,.72)' }} />
        <div className="wrap" style={{ position: 'relative', textAlign: 'center', paddingTop: 140, paddingBottom: 140 }}>
          <h2 className="h-lg" style={{ fontSize: 'clamp(32px, 3.8vw, 54px)', color: '#FBF7F0' }}>
            <span className="ln rv-ln"><span>Ready to Create</span></span>
            <span className="ln rv-ln"><span>Your <em className="serif-i" style={{ fontSize: '1.14em' }}>Perfect</em> Event?</span></span>
          </h2>
          <p className="rv" style={{ margin: '28px auto 0', maxWidth: '36em', fontSize: 18, lineHeight: 1.7, fontWeight: 300, color: '#FBF7F0' }}>
            Contact us today to discuss your requirements and let us bring your vision to life
          </p>
          <div className="rv" style={{ marginTop: 40 }}>
            <Link href="/contact" className="btn btn-gold">
              Contact Us Now <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
