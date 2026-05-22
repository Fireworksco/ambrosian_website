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
    <footer className="bg-ambrosian-dark border-t border-ambrosian-gold/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/ambrosian-final-logo-stroke.png"
              alt="Ambrosian Events & Management Logo"
              width={300}
              height={120}
              className="mb-4 h-auto"
            />
            <p className="text-ambrosian-gold/80 text-sm">
              Professional event management and catering services in London
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-ambrosian-gold mb-4">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.slice(0, 4).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-ambrosian-gold/80 hover:text-ambrosian-gold transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-ambrosian-gold mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-ambrosian-gold/60 mb-1">Email</p>
                <a
                  href="mailto:connect@ambrosianuk.com"
                  className="text-ambrosian-gold/80 hover:text-ambrosian-gold transition-colors"
                >
                  connect@ambrosianuk.com
                </a>
              </div>
              <div>
                <p className="text-ambrosian-gold/60 mb-1">Phone</p>
                <a
                  href="tel:+447424407743"
                  className="text-ambrosian-gold/80 hover:text-ambrosian-gold transition-colors"
                >
                  +44 7424 407743
                </a>
              </div>
              <div>
                <p className="text-ambrosian-gold/60 mb-1">Address</p>
                <p className="text-ambrosian-gold/80">
                  Unit 1, 606 Romford Road<br />
                  E12 5AF<br />
                  London, United Kingdom
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-ambrosian-gold/20 mt-8 pt-8 text-center">
          <p className="text-ambrosian-gold/60 text-sm">
            &copy; {currentYear} Ambrosian Events & Management. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
