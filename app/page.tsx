import Link from 'next/link'
import Image from 'next/image'
import Gallery from '@/components/Gallery'

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-ambrosian-gold mb-6 leading-tight">
            Ambrosian Events & Management
          </h1>
          <p className="text-xl md:text-2xl text-ambrosian-gold/80 mb-8">
            Creating Unforgettable Moments with Professional Excellence
          </p>
          <p className="text-lg text-ambrosian-gold/70 mb-12 max-w-2xl mx-auto">
            From exquisite catering to stunning decorations, professional staffing to cutting-edge photography - 
            we bring your vision to life with unmatched expertise and attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-ambrosian-gold text-ambrosian-dark px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </Link>
            <Link
              href="#services"
              className="border-2 border-ambrosian-gold text-ambrosian-gold px-8 py-4 rounded-lg font-semibold hover:bg-ambrosian-gold/10 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Recent Project */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="bg-gradient-to-r from-ambrosian-gold/10 via-ambrosian-gold/5 to-transparent border border-ambrosian-gold/30 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center p-6 sm:p-8 md:p-12">
            {/* Left: Image */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden border border-ambrosian-gold/20">
              <Image
                src="https://res.cloudinary.com/drgot7znf/image/upload/v1777142781/ade0d540-1103-4a43-96ac-dbe7ac2b126c_wkha9c.jpg"
                alt="Ramadan & Eid Fair 2026"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right: Text Content */}
            <div className="flex flex-col justify-center gap-6 sm:gap-8">
              <div>
                <span className="inline-block bg-ambrosian-gold text-ambrosian-dark text-xs font-bold tracking-widest px-3 py-1 rounded-full mb-4 sm:mb-6">
                  RECENT PROJECT
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ambrosian-gold mb-4 leading-tight">
                  Ramadan & Eid Fair 2026
                </h2>
                <p className="text-ambrosian-gold/70 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                  A grand celebration of community and culture. We are the official event management and sponsor of this immersive gathering featuring traditional arts, world-class exhibitions, shopping experiences, and authentic food stalls. Join us on Sunday, 8th March at Mayfair Venue.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-ambrosian-gold mt-1">✓</span>
                  <span className="text-ambrosian-gold/80 text-sm">Premium Shopping Experience</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-ambrosian-gold mt-1">✓</span>
                  <span className="text-ambrosian-gold/80 text-sm">Iftar Distribution & Food Stalls</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-ambrosian-gold mt-1">✓</span>
                  <span className="text-ambrosian-gold/80 text-sm">Live Entertainment & Cultural Shows</span>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-ambrosian-gold text-ambrosian-dark px-6 py-3 rounded-lg font-bold text-sm sm:text-base hover:opacity-90 transition-opacity w-fit"
              >
                View All Projects →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-ambrosian-gold mb-4">
            Our Services
          </h2>
          <p className="text-lg text-ambrosian-gold/70 max-w-2xl mx-auto">
            Comprehensive event solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="bg-ambrosian-dark border border-ambrosian-gold/30 rounded-lg p-6 hover:border-ambrosian-gold transition-all hover:shadow-lg hover:shadow-ambrosian-gold/20 group"
            >
              <div className="mb-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={84}
                  height={84}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-ambrosian-gold mb-3 group-hover:opacity-80 transition-opacity">
                {service.title}
              </h3>
              <p className="text-ambrosian-gold/70">
                {service.description}
              </p>
              <div className="mt-4 text-ambrosian-gold group-hover:translate-x-2 transition-transform inline-block">
                Learn More →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-ambrosian-gold/5 border border-ambrosian-gold/20 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ambrosian-gold mb-8 text-center">
            Why Choose Ambrosian?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold text-ambrosian-gold mb-2">
                Professional Excellence
              </h3>
              <p className="text-ambrosian-gold/70">
                Highly trained and experienced professionals dedicated to perfection
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-semibold text-ambrosian-gold mb-2">
                Premium Quality
              </h3>
              <p className="text-ambrosian-gold/70">
                5-star service and attention to detail in everything we do
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-ambrosian-gold mb-2">
                Comprehensive Solutions
              </h3>
              <p className="text-ambrosian-gold/70">
                All-in-one event services from planning to execution
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-ambrosian-gold mb-6">
            Ready to Create Your Perfect Event?
          </h2>
          <p className="text-lg text-ambrosian-gold/70 mb-8">
            Contact us today to discuss your requirements and let us bring your vision to life
          </p>
          <Link
            href="/contact"
            className="inline-block bg-ambrosian-gold text-ambrosian-dark px-10 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  )
}
