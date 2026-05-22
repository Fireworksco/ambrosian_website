import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Professional Event Staffing - Ambrosian Events & Management',
  description: '5-Star professional event staffing services with expert bartenders, food waiters, wine waiters and well-trained hospitality staff',
}

export default function EventStaffing() {
  const features = [
    {
      title: 'Expert Bartenders',
      description: 'Skilled mixologists who craft exceptional cocktails and beverages, ensuring your guests enjoy premium service.',
      icon: '🍸'
    },
    {
      title: 'Food Waiters & Wine Waiters',
      description: 'Professional service staff trained in fine dining etiquette, delivering seamless food and beverage service.',
      icon: '🍷'
    },
    {
      title: 'Well-Trained Hospitality Staff',
      description: 'Courteous and professional team members dedicated to providing exceptional guest experiences.',
      icon: '👔'
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8 text-ambrosian-gold/60">
            <Link href="/" className="hover:text-ambrosian-gold transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/#services" className="hover:text-ambrosian-gold transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-ambrosian-gold">Professional Event Staffing</span>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">👔</div>
            <h1 className="text-4xl md:text-5xl font-bold text-ambrosian-gold mb-6">
              Professional Event Staffing
            </h1>
            <p className="text-xl text-ambrosian-gold/80 max-w-3xl mx-auto">
              5-Star service excellence with expert bartenders, professional waiters, 
              and well-trained hospitality staff
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-ambrosian-gold/5 border border-ambrosian-gold/30 rounded-lg p-6 hover:border-ambrosian-gold transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-ambrosian-gold mb-3">
                  {feature.title}
                </h3>
                <p className="text-ambrosian-gold/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Detailed Description */}
          <div className="bg-ambrosian-gold/5 border border-ambrosian-gold/20 rounded-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-ambrosian-gold mb-6">
              5-Star Hospitality Excellence
            </h2>
            <div className="space-y-4 text-ambrosian-gold/80 leading-relaxed">
              <p>
                At Ambrosian Events & Management, we believe that exceptional service is the cornerstone of any successful event. 
                Our professional event staffing services deliver 5-star hospitality that exceeds expectations.
              </p>
              <p>
                Our team comprises highly trained professionals who bring expertise, elegance, and efficiency to every event. 
                From expert bartenders crafting signature cocktails to attentive food and wine waiters providing seamless service, 
                every team member is dedicated to creating an unforgettable experience for your guests.
              </p>
              <p>
                We carefully select and train our hospitality staff to ensure they embody professionalism, courtesy, and attention to detail. 
                Whether it&apos;s a corporate function, wedding reception, or private celebration, our staff delivers service excellence 
                that leaves a lasting impression.
              </p>
            </div>
          </div>

          {/* Staff Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-ambrosian-gold mb-8 text-center">
              Our Staffing Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Expert Bartenders', desc: 'Professional mixologists and beverage service specialists' },
                { name: 'Food Waiters', desc: 'Trained in fine dining service and presentation' },
                { name: 'Wine Waiters & Sommeliers', desc: 'Knowledgeable in wine service and pairings' },
                { name: 'Event Coordinators', desc: 'On-site management and coordination staff' },
                { name: 'Hospitality Hosts', desc: 'Guest reception and concierge services' },
                { name: 'Support Staff', desc: 'Kitchen support and event logistics team' },
              ].map((category, index) => (
                <div
                  key={index}
                  className="border border-ambrosian-gold/30 rounded-lg p-6 hover:bg-ambrosian-gold/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-ambrosian-gold mb-2">
                    {category.name}
                  </h3>
                  <p className="text-ambrosian-gold/70">
                    {category.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-ambrosian-gold/5 border border-ambrosian-gold/20 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-ambrosian-gold mb-6">
              Why Choose Our Staffing Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-ambrosian-gold mb-1">Professional Training</h3>
                  <p className="text-ambrosian-gold/70 text-sm">Comprehensive training in service excellence and hospitality</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-ambrosian-gold mb-1">Experience & Expertise</h3>
                  <p className="text-ambrosian-gold/70 text-sm">Years of experience serving high-profile events</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-ambrosian-gold mb-1">Professional Appearance</h3>
                  <p className="text-ambrosian-gold/70 text-sm">Impeccably presented staff in proper attire</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-ambrosian-gold mb-1">Flexible Staffing</h3>
                  <p className="text-ambrosian-gold/70 text-sm">Scalable solutions to match your event size</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-ambrosian-gold/5 border border-ambrosian-gold/30 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-ambrosian-gold mb-4">
              Need Professional Event Staff?
            </h2>
            <p className="text-ambrosian-gold/70 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your staffing requirements and experience the difference 
              that 5-star hospitality can make
            </p>
            <Link
              href="/contact"
              className="inline-block bg-ambrosian-gold text-ambrosian-dark px-10 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
