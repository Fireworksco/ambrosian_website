import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Decoration & Event Styling - Ambrosian Events & Management',
  description: 'Specialized decoration and creative styling team for stage décor, table setup, lighting, and themed event designs',
}

export default function DecorationStyling() {
  const features = [
    {
      title: 'Specialized Decoration Team',
      description: 'Creative professionals with expertise in transforming venues into stunning spaces that reflect your vision.',
      icon: '🎨'
    },
    {
      title: 'Creative Styling Services',
      description: 'Innovative design concepts and artistic styling that bring your event theme to life with elegance.',
      icon: '✨'
    },
    {
      title: 'Stage Décor, Table Setup & Lighting',
      description: 'Comprehensive decoration services including stage design, table arrangements, and atmospheric lighting.',
      icon: '💡'
    },
  ]

  return (
    <>
      <PageHero image="/project-gallery/3.jpeg">
        <Breadcrumb current="Decoration & Event Styling" />
        <Image src="/services_icons/icons-03.png" alt="" width={104} height={104} className="page-icon in-1" style={{ marginTop: 36 }} />
        <h1 className="h-xl page-title in-2">
              Decoration & Event Styling
            </h1>
        <p className="page-intro in-3">
              Transform your venue with our specialized decoration and creative styling expertise, 
              from stage décor to lighting design
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
              Creating Stunning Visual Experiences
            </h2>
            <div className="panel-copy">
              <p>
                At Ambrosian Events & Management, we believe that exceptional decoration transforms ordinary spaces 
                into extraordinary experiences. Our specialized decoration and creative styling team brings artistic 
                vision and technical expertise to every project.
              </p>
              <p>
                From intimate gatherings to grand celebrations, our team creates immersive environments that captivate your guests. 
                We handle every aspect of event styling, including stage décor, table setup, lighting design, and themed decorations, 
                ensuring every element harmonizes to create a cohesive and stunning visual experience.
              </p>
              <p>
                Our creative approach combines contemporary trends with timeless elegance, tailored to your unique style and preferences. 
                Whether you envision a classic, modern, or themed design, we bring your vision to life with meticulous attention to detail.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="blk">
            <h2 className="sec-title center rv">
              Our Decoration Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Stage Décor', desc: 'Stunning backdrops and stage designs for ceremonies and presentations' },
                { name: 'Table Setup & Centerpieces', desc: 'Elegant table arrangements and creative centerpiece designs' },
                { name: 'Lighting Design', desc: 'Atmospheric lighting to enhance mood and ambiance' },
                { name: 'Themed Decorations', desc: 'Custom themed designs for any occasion or style' },
                { name: 'Floral Arrangements', desc: 'Professional floral design and installation services' },
                { name: 'Entrance & Venue Dressing', desc: 'Complete venue transformation from entry to exit' },
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

          {/* Style Options */}
          <div className="panel rv">
            <h2 className="panel-title">
              Popular Styling Themes
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                'Classic Elegance',
                'Modern Contemporary',
                'Rustic Charm',
                'Romantic Garden',
                'Glamorous Luxury',
                'Cultural Traditional',
                'Minimalist Chic',
                'Vintage Retro',
              ].map((theme, index) => (
                <div
                  key={index}
                  className="chip"
                >
                  <p className="chip-t">{theme}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="panel rv">
            <h2 className="panel-title">
              Why Choose Our Decoration Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="item">
                <span className="item-emoji">✓</span>
                <div>
                  <h3 className="item-t">Expert Design Team</h3>
                  <p className="item-d">Experienced professionals with creative vision</p>
                </div>
              </div>
              <div className="item">
                <span className="item-emoji">✓</span>
                <div>
                  <h3 className="item-t">Custom Designs</h3>
                  <p className="item-d">Tailored concepts that reflect your unique style</p>
                </div>
              </div>
              <div className="item">
                <span className="item-emoji">✓</span>
                <div>
                  <h3 className="item-t">Quality Materials</h3>
                  <p className="item-d">Premium décor items and professional installations</p>
                </div>
              </div>
              <div className="item">
                <span className="item-emoji">✓</span>
                <div>
                  <h3 className="item-t">Complete Service</h3>
                  <p className="item-d">From concept to installation and removal</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-box rv">
            <h2 className="cta-box-t">
              Ready to Transform Your Venue?
            </h2>
            <p className="cta-box-d">
              Let our creative styling team design a stunning visual experience that exceeds your expectations
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
