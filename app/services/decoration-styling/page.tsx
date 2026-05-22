import { Metadata } from 'next'
import Link from 'next/link'

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
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8 text-ambrosian-gold/60">
            <Link href="/" className="hover:text-ambrosian-gold transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/#services" className="hover:text-ambrosian-gold transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-ambrosian-gold">Decoration & Event Styling</span>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🎨</div>
            <h1 className="text-4xl md:text-5xl font-bold text-ambrosian-gold mb-6">
              Decoration & Event Styling
            </h1>
            <p className="text-xl text-ambrosian-gold/80 max-w-3xl mx-auto">
              Transform your venue with our specialized decoration and creative styling expertise, 
              from stage décor to lighting design
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
              Creating Stunning Visual Experiences
            </h2>
            <div className="space-y-4 text-ambrosian-gold/80 leading-relaxed">
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
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-ambrosian-gold mb-8 text-center">
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

          {/* Style Options */}
          <div className="bg-ambrosian-gold/5 border border-ambrosian-gold/20 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-ambrosian-gold mb-6">
              Popular Styling Themes
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                  className="border border-ambrosian-gold/30 rounded-lg p-4 text-center hover:bg-ambrosian-gold/10 transition-colors"
                >
                  <p className="text-ambrosian-gold font-medium">{theme}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-ambrosian-gold/5 border border-ambrosian-gold/20 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-ambrosian-gold mb-6">
              Why Choose Our Decoration Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-ambrosian-gold mb-1">Expert Design Team</h3>
                  <p className="text-ambrosian-gold/70 text-sm">Experienced professionals with creative vision</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-ambrosian-gold mb-1">Custom Designs</h3>
                  <p className="text-ambrosian-gold/70 text-sm">Tailored concepts that reflect your unique style</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-ambrosian-gold mb-1">Quality Materials</h3>
                  <p className="text-ambrosian-gold/70 text-sm">Premium décor items and professional installations</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-ambrosian-gold mb-1">Complete Service</h3>
                  <p className="text-ambrosian-gold/70 text-sm">From concept to installation and removal</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-ambrosian-gold/5 border border-ambrosian-gold/30 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-ambrosian-gold mb-4">
              Ready to Transform Your Venue?
            </h2>
            <p className="text-ambrosian-gold/70 mb-8 max-w-2xl mx-auto">
              Let our creative styling team design a stunning visual experience that exceeds your expectations
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
