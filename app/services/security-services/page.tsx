import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import Breadcrumb from '@/components/Breadcrumb'

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
    <>
      <PageHero image="/project-gallery/8.jpeg">
        <Breadcrumb current="SIA Security Services" />
        <Image src="/services_icons/icons-04.png" alt="" width={104} height={104} className="page-icon in-1" style={{ marginTop: 36 }} />
        <h1 className="h-xl page-title in-2">
              SIA Security Services
            </h1>
        <p className="page-intro in-3">
              Professional licensed security services providing door supervision, crowd control, 
              and VIP protection for your events
            </p>
      </PageHero>

      <div className="page-body">
      <div className="wrap">
        <div className="max-w-5xl mx-auto">

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 blk">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card rv"
              >
                <div className="card-emoji">{feature.icon}</div>
                <h3 className="card-t">
                  {feature.title}
                </h3>
                <p className="card-d">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Detailed Description */}
          <div className="panel rv">
            <h2 className="panel-title">
              Professional Security You Can Trust
            </h2>
            <div className="panel-copy">
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
          <div className="blk">
            <h2 className="sec-title center rv">
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
                  className="line-card rv"
                >
                  <h3 className="line-card-t">
                    {service.name}
                  </h3>
                  <p className="card-d">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="panel rv">
            <h2 className="panel-title">
              Professional Certifications & Training
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="item">
                <span className="item-emoji">✓</span>
                <div>
                  <h3 className="item-t">SIA Licensed</h3>
                  <p className="item-d">All security staff hold valid SIA licenses</p>
                </div>
              </div>
              <div className="item">
                <span className="item-emoji">✓</span>
                <div>
                  <h3 className="item-t">Conflict Management</h3>
                  <p className="item-d">Trained in de-escalation and conflict resolution</p>
                </div>
              </div>
              <div className="item">
                <span className="item-emoji">✓</span>
                <div>
                  <h3 className="item-t">First Aid Certified</h3>
                  <p className="item-d">Emergency first aid and medical response training</p>
                </div>
              </div>
              <div className="item">
                <span className="item-emoji">✓</span>
                <div>
                  <h3 className="item-t">Customer Service</h3>
                  <p className="item-d">Professional and courteous guest interaction</p>
                </div>
              </div>
            </div>
          </div>

          {/* Event Types */}
          <div className="panel rv">
            <h2 className="panel-title">
              Events We Secure
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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
                  className="chip"
                >
                  <p className="chip-t">{eventType}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-box rv">
            <h2 className="cta-box-t">
              Need Professional Event Security?
            </h2>
            <p className="cta-box-d">
              Contact us to discuss your security requirements and ensure your event runs safely and smoothly
            </p>
            <Link
              href="/contact"
              className="btn btn-gold"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
