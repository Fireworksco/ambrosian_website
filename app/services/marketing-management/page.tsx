import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Marketing & Event Management - Ambrosian Events & Management',
  description: 'Experienced marketing and event management team delivering comprehensive planning and execution services',
}

export default function MarketingManagement() {
  const features = [
    {
      title: 'Experienced Management Team',
      description: 'Seasoned professionals with extensive expertise in planning and executing successful events of all scales.',
      icon: '📊'
    },
    {
      title: 'Strategic Marketing',
      description: 'Comprehensive marketing strategies to promote your event and maximize attendance and engagement.',
      icon: '📈'
    },
    {
      title: 'End-to-End Event Management',
      description: 'Complete event coordination from initial concept through planning, execution, and post-event follow-up.',
      icon: '🎯'
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
            <span className="text-ambrosian-gold">Marketing & Event Management</span>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">📊</div>
            <h1 className="text-4xl md:text-5xl font-bold text-ambrosian-gold mb-6">
              Marketing & Event Management
            </h1>
            <p className="text-xl text-ambrosian-gold/80 max-w-3xl mx-auto">
              Experienced professionals delivering comprehensive event planning, marketing strategies, 
              and flawless execution
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
              Strategic Planning, Flawless Execution
            </h2>
            <div className="space-y-4 text-ambrosian-gold/80 leading-relaxed">
              <p>
                At Ambrosian Events & Management, our experienced team combines strategic marketing expertise with 
                meticulous event management to deliver exceptional results. We understand that successful events 
                require careful planning, effective promotion, and seamless execution.
              </p>
              <p>
                Our comprehensive approach covers every aspect of event management, from initial concept development 
                and budget planning to vendor coordination, logistics management, and on-site supervision. We work 
                closely with you to understand your objectives and create customized solutions that exceed expectations.
              </p>
              <p>
                With proven marketing strategies and industry connections, we ensure your event reaches the right audience 
                and achieves maximum impact. Our team handles all the details, allowing you to focus on enjoying your event 
                while we manage the complexities behind the scenes.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-ambrosian-gold mb-8 text-center">
              Our Management Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Event Concept Development', desc: 'Creative planning and theme development for memorable events' },
                { name: 'Marketing Strategy', desc: 'Comprehensive promotional campaigns and audience engagement' },
                { name: 'Budget Management', desc: 'Financial planning and cost optimization strategies' },
                { name: 'Vendor Coordination', desc: 'Selection and management of all service providers' },
                { name: 'Logistics Planning', desc: 'Detailed timeline and operational coordination' },
                { name: 'On-Site Management', desc: 'Professional supervision and real-time problem solving' },
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

          {/* Event Planning Process */}
          <div className="bg-ambrosian-gold/5 border border-ambrosian-gold/20 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-ambrosian-gold mb-6">
              Our Event Planning Process
            </h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Consultation', desc: 'Understanding your vision, objectives, and requirements' },
                { step: '2', title: 'Planning', desc: 'Developing comprehensive strategy, timeline, and budget' },
                { step: '3', title: 'Marketing', desc: 'Creating and executing promotional campaigns' },
                { step: '4', title: 'Coordination', desc: 'Managing all vendors, logistics, and details' },
                { step: '5', title: 'Execution', desc: 'On-site management and real-time coordination' },
                { step: '6', title: 'Follow-up', desc: 'Post-event analysis and reporting' },
              ].map((phase, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 border border-ambrosian-gold/30 rounded-lg p-4 hover:bg-ambrosian-gold/10 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-ambrosian-gold text-ambrosian-dark rounded-full flex items-center justify-center font-bold">
                    {phase.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-ambrosian-gold mb-1">{phase.title}</h3>
                    <p className="text-ambrosian-gold/70 text-sm">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-ambrosian-gold/5 border border-ambrosian-gold/20 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-ambrosian-gold mb-6">
              Why Choose Our Management Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-ambrosian-gold mb-1">Experienced Team</h3>
                  <p className="text-ambrosian-gold/70 text-sm">Years of successful event management expertise</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-ambrosian-gold mb-1">Comprehensive Approach</h3>
                  <p className="text-ambrosian-gold/70 text-sm">End-to-end management of all event aspects</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-ambrosian-gold mb-1">Industry Connections</h3>
                  <p className="text-ambrosian-gold/70 text-sm">Established relationships with top vendors</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-ambrosian-gold mb-1">Proven Results</h3>
                  <p className="text-ambrosian-gold/70 text-sm">Track record of successful events and satisfied clients</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-ambrosian-gold/5 border border-ambrosian-gold/30 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-ambrosian-gold mb-4">
              Ready to Plan Your Next Event?
            </h2>
            <p className="text-ambrosian-gold/70 mb-8 max-w-2xl mx-auto">
              Let our experienced team handle the details while you enjoy a perfectly executed event
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
