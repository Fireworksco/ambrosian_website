import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import Breadcrumb from '@/components/Breadcrumb'

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
    <>
      <PageHero image="https://res.cloudinary.com/drgot7znf/image/upload/v1777143797/IMG-20260425-WA0055_kgwnxv.jpg">
        <Breadcrumb current="Marketing & Event Management" />
        <Image src="/services_icons/icons-05.png" alt="" width={104} height={104} className="page-icon in-1" style={{ marginTop: 36 }} />
        <h1 className="h-xl page-title in-2">
              Marketing & Event Management
            </h1>
        <p className="page-intro in-3">
              Experienced professionals delivering comprehensive event planning, marketing strategies, 
              and flawless execution
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
              Strategic Planning, Flawless Execution
            </h2>
            <div className="panel-copy">
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
          <div className="blk">
            <h2 className="sec-title center rv">
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

          {/* Event Planning Process */}
          <div className="panel rv">
            <h2 className="panel-title">
              Our Event Planning Process
            </h2>
            <div className="flex flex-col gap-3">
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
                  className="step"
                >
                  <div className="step-n">
                    {phase.step}
                  </div>
                  <div>
                    <h3 className="item-t">{phase.title}</h3>
                    <p className="item-d">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="panel rv">
            <h2 className="panel-title">
              Why Choose Our Management Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="item">
                <span className="item-emoji">✓</span>
                <div>
                  <h3 className="item-t">Experienced Team</h3>
                  <p className="item-d">Years of successful event management expertise</p>
                </div>
              </div>
              <div className="item">
                <span className="item-emoji">✓</span>
                <div>
                  <h3 className="item-t">Comprehensive Approach</h3>
                  <p className="item-d">End-to-end management of all event aspects</p>
                </div>
              </div>
              <div className="item">
                <span className="item-emoji">✓</span>
                <div>
                  <h3 className="item-t">Industry Connections</h3>
                  <p className="item-d">Established relationships with top vendors</p>
                </div>
              </div>
              <div className="item">
                <span className="item-emoji">✓</span>
                <div>
                  <h3 className="item-t">Proven Results</h3>
                  <p className="item-d">Track record of successful events and satisfied clients</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-box rv">
            <h2 className="cta-box-t">
              Ready to Plan Your Next Event?
            </h2>
            <p className="cta-box-d">
              Let our experienced team handle the details while you enjoy a perfectly executed event
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
