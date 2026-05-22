import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SIA Security Services - Ambrosian Events & Management',
  description: 'Licensed SIA security personnel providing door supervision, crowd control, and VIP security services for events',
}

export default function SecurityServices() {
  const features = [
    {
      title: 'Licensed SIA Security Personnel',
      description: 'Fully licensed and certified security professionals trained to the highest industry standards.',
      icon: '🛡️'
    },
    {
      title: 'Door Supervision',
      description: 'Professional door staff managing guest entry, verification, and access control with discretion.',
      icon: '🚪'
    },
    {
      title: 'Crowd Control & VIP Security',
      description: 'Expert crowd management and specialized VIP protection services for high-profile events.',
      icon: '👥'
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
            <span className="text-ambrosian-gold">SIA Security Services</span>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🛡️</div>
            <h1 className="text-4xl md:text-5xl font-bold text-ambrosian-gold mb-6">
              SIA Security Services
            </h1>
            <p className="text-xl text-ambrosian-gold/80 max-w-3xl mx-auto">
              Professional licensed security services providing door supervision, crowd control, 
              and VIP protection for your events
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
              Professional Security You Can Trust
            </h2>
            <div className="space-y-4 text-ambrosian-gold/80 leading-relaxed">
              <p>
                At Ambrosian Events & Management, we understand that safety and security are paramount to the success 
                of any event. Our SIA-licensed security personnel provide professional, discrete, and effective 
                security services that give you peace of mind.
              </p>
              <p>
                All our security staff hold valid SIA (Security Industry Authority) licenses and undergo rigorous training 
                in conflict management, first aid, and customer service. They combine firm security protocols with 
                a professional demeanor, ensuring your guests feel safe and welcomed.
              </p>
              <p>
                Whether you need door supervision for controlled entry, crowd management for large gatherings, or 
                specialized VIP security for high-profile guests, our team delivers reliable protection tailored to 
                your event&apos;s specific requirements.
              </p>
            </div>
          </div>

          {/* Security Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-ambrosian-gold mb-8 text-center">
              Our Security Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Door Supervision', desc: 'Professional entry management and guest verification' },
                { name: 'Crowd Control', desc: 'Expert management of large gatherings and event flow' },
                { name: 'VIP Security', desc: 'Close protection services for high-profile guests' },
                { name: 'Event Security Planning', desc: 'Risk assessment and comprehensive security strategies' },
                { name: 'Access Control', desc: 'Secure area management and restricted access monitoring' },
                { name: 'Emergency Response', desc: 'Trained personnel for swift incident response' },
              ].map((service, index) => (
                <div
                  key={index}
                  className="border border-ambrosian-gold/30 rounded-lg p-6 hover:bg-ambrosian-gold/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-ambrosian-gold mb-2">
                    {service.name}
                  </h3>
                  <p className="text-ambrosian-gold/70">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-ambrosian-gold/5 border border-ambrosian-gold/20 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-ambrosian-gold mb-6">
              Professional Certifications & Training
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-ambrosian-gold mb-1">SIA Licensed</h3>
                  <p className="text-ambrosian-gold/70 text-sm">All security staff hold valid SIA licenses</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-ambrosian-gold mb-1">Conflict Management</h3>
                  <p className="text-ambrosian-gold/70 text-sm">Trained in de-escalation and conflict resolution</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-ambrosian-gold mb-1">First Aid Certified</h3>
                  <p className="text-ambrosian-gold/70 text-sm">Emergency first aid and medical response training</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-ambrosian-gold mb-1">Customer Service</h3>
                  <p className="text-ambrosian-gold/70 text-sm">Professional and courteous guest interaction</p>
                </div>
              </div>
            </div>
          </div>

          {/* Event Types */}
          <div className="bg-ambrosian-gold/5 border border-ambrosian-gold/20 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-ambrosian-gold mb-6">
              Events We Secure
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Weddings',
                'Corporate Events',
                'Private Parties',
                'Concerts & Shows',
                'Product Launches',
                'Galas & Awards',
                'Conferences',
                'VIP Functions',
                'Charity Events',
              ].map((eventType, index) => (
                <div
                  key={index}
                  className="border border-ambrosian-gold/30 rounded-lg p-4 text-center hover:bg-ambrosian-gold/10 transition-colors"
                >
                  <p className="text-ambrosian-gold font-medium">{eventType}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-ambrosian-gold/5 border border-ambrosian-gold/30 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-ambrosian-gold mb-4">
              Need Professional Event Security?
            </h2>
            <p className="text-ambrosian-gold/70 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your security requirements and ensure your event runs safely and smoothly
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
