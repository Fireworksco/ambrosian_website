import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import Breadcrumb from '@/components/Breadcrumb'

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
    <>
      <PageHero image="/project-gallery/9.jpeg">
        <Breadcrumb current="Professional Event Staffing" />
        <Image src="/services_icons/icons-02.png" alt="" width={104} height={104} className="page-icon in-1" style={{ marginTop: 36 }} />
        <h1 className="h-xl page-title in-2">
              Professional Event Staffing
            </h1>
        <p className="page-intro in-3">
              5-Star service excellence with expert bartenders, professional waiters, 
              and well-trained hospitality staff
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
              5-Star Hospitality Excellence
            </h2>
            <div className="panel-copy">
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
          <div className="blk">
            <h2 className="sec-title center rv">
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
                  className="line-card rv"
                >
                  <h3 className="line-card-t">
                    {category.name}
                  </h3>
                  <p className="card-d">
                    {category.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="panel rv">
            <h2 className="panel-title">
              Why Choose Our Staffing Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="item">
                <span className="item-emoji">✓</span>
                <div>
                  <h3 className="item-t">Professional Training</h3>
                  <p className="item-d">Comprehensive training in service excellence and hospitality</p>
                </div>
              </div>
              <div className="item">
                <span className="item-emoji">✓</span>
                <div>
                  <h3 className="item-t">Experience & Expertise</h3>
                  <p className="item-d">Years of experience serving high-profile events</p>
                </div>
              </div>
              <div className="item">
                <span className="item-emoji">✓</span>
                <div>
                  <h3 className="item-t">Professional Appearance</h3>
                  <p className="item-d">Impeccably presented staff in proper attire</p>
                </div>
              </div>
              <div className="item">
                <span className="item-emoji">✓</span>
                <div>
                  <h3 className="item-t">Flexible Staffing</h3>
                  <p className="item-d">Scalable solutions to match your event size</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-box rv">
            <h2 className="cta-box-t">
              Need Professional Event Staff?
            </h2>
            <p className="cta-box-d">
              Contact us to discuss your staffing requirements and experience the difference 
              that 5-star hospitality can make
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
