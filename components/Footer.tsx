import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'Catering & Wedding Cuisine', slug: 'catering-wedding-cuisine' },
    { name: 'Professional Event Staffing', slug: 'event-staffing' },
    { name: 'Decoration & Event Styling', slug: 'decoration-styling' },
    { name: 'SIA Security Services', slug: 'security-services' },
    { name: 'Marketing & Event Management', slug: 'marketing-management' },
    { name: 'Photography & Videography', slug: 'photography-videography' },
  ]

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          {/* Company Info */}
          <div className="foot-brand">
            <Image
              src="/ambrosian-final-logo-stroke.png"
              alt="Ambrosian Events & Management Logo"
              width={300}
              height={120}
              style={{ width: 220, height: 'auto' }}
            />
            <p style={{ marginTop: 24, maxWidth: '22em', fontSize: 15, lineHeight: 1.7 }}>
              Professional event management and catering services in London
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Our Services">
            <h4 className="foot-h">Our Services</h4>
            <ul className="foot-list">
              {services.slice(0, 4).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h4 className="foot-h">Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: 15 }}>
              <div>
                <p className="mini" style={{ marginBottom: 4 }}>Email</p>
                <div className="foot-list">
                  <a href="mailto:connect@ambrosianuk.com">connect@ambrosianuk.com</a>
                </div>
              </div>
              <div>
                <p className="mini" style={{ marginBottom: 4 }}>Phone</p>
                <div className="foot-list">
                  <a href="tel:+447424407743">+44 7424 407743</a>
                </div>
              </div>
              <div>
                <p className="mini" style={{ marginBottom: 4 }}>Address</p>
                <p style={{ lineHeight: 1.6 }}>
                  Unit 1, 606 Romford Road<br />
                  E12 5AF<br />
                  London, United Kingdom
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px 24px', marginTop: 72, paddingTop: 24, borderTop: '1px solid rgba(194,187,173,.2)', fontSize: 13 }}>
          <p>&copy; {currentYear} Ambrosian Events & Management. All rights reserved.</p>
          <a
            className="foot-top"
            href="#"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, minHeight: 44, textDecoration: 'none', fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', fontSize: 12, color: '#C2BBAD' }}
          >
            Back to top
            <svg width="10" height="14" viewBox="0 0 10 14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M5 13V1.5M1 5.5l4-4 4 4" /></svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
