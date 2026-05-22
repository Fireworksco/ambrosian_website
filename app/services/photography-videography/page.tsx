import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Photography & Videography - Ambrosian Events & Management',
  description: 'Professional wedding photography and videography with drone shooting, 3D/cinematic techniques, and expert team',
}

export default function PhotographyVideography() {
  const features = [
    {
      title: 'Professional Wedding Videography Team',
      description: 'Expert videographers specializing in capturing your special moments with cinematic quality and storytelling excellence.',
      icon: '🎥'
    },
    {
      title: 'Drone Photography & Videography',
      description: 'Stunning aerial perspectives and sweeping shots that add dramatic impact to your event coverage.',
      icon: '📸'
    },
    {
      title: 'Advanced 3D / Cinematic Wedding Shooting',
      description: 'Cutting-edge 3D and cinematic techniques creating immersive, Hollywood-style event films.',
      icon: '🎬'
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
            <span className="text-ambrosian-gold">Photography & Videography</span>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">📸</div>
            <h1 className="text-4xl md:text-5xl font-bold text-ambrosian-gold mb-6">
              Photography & Videography
            </h1>
            <p className="text-xl text-ambrosian-gold/80 max-w-3xl mx-auto">
              Professional wedding and event photography with drone shooting, 3D/cinematic techniques, 
              and expert storytelling
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
              Capturing Your Moments with Cinematic Excellence
            </h2>
            <div className="space-y-4 text-ambrosian-gold/80 leading-relaxed">
              <p>
                At Ambrosian Events & Management, we believe that every moment deserves to be captured with artistry 
                and precision. Our professional wedding videography team combines technical expertise with creative 
                vision to create stunning visual memories that last a lifetime.
              </p>
              <p>
                We utilize the latest technology and techniques, including drone photography for breathtaking aerial shots, 
                advanced 3D capabilities for immersive experiences, and cinematic shooting styles that transform your 
                event into a Hollywood-quality production. Our team knows how to capture the emotion, beauty, and 
                significance of every moment.
              </p>
              <p>
                From intimate details to grand celebrations, we provide comprehensive coverage that tells your unique story. 
                Our unobtrusive approach ensures natural, candid moments while our experienced eye catches every important detail, 
                creating a complete and beautiful record of your special day.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-ambrosian-gold mb-8 text-center">
              Our Photography & Videography Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Wedding Videography', desc: 'Complete wedding day coverage with cinematic storytelling' },
                { name: 'Drone Photography', desc: 'Stunning aerial shots and sweeping venue perspectives' },
                { name: '3D / Cinematic Shooting', desc: 'Advanced 3D and cinematic techniques for immersive films' },
                { name: 'Event Photography', desc: 'Professional photography for all types of events' },
                { name: 'Highlight Reels', desc: 'Creative edited highlights perfect for social sharing' },
                { name: 'Post-Production', desc: 'Professional editing, color grading, and enhancement' },
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

          {/* Equipment & Technology */}
          <div className="bg-ambrosian-gold/5 border border-ambrosian-gold/20 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-ambrosian-gold mb-6">
              Professional Equipment & Technology
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-ambrosian-gold mb-1">4K & 8K Cameras</h3>
                  <p className="text-ambrosian-gold/70 text-sm">Ultra-high definition video capture</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-ambrosian-gold mb-1">Professional Drones</h3>
                  <p className="text-ambrosian-gold/70 text-sm">Licensed drone operators for aerial cinematography</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-ambrosian-gold mb-1">Cinema Lenses</h3>
                  <p className="text-ambrosian-gold/70 text-sm">Professional-grade optics for stunning visuals</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-ambrosian-gold mb-1">3D Technology</h3>
                  <p className="text-ambrosian-gold/70 text-sm">Advanced 3D shooting capabilities</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-ambrosian-gold mb-1">Stabilization Systems</h3>
                  <p className="text-ambrosian-gold/70 text-sm">Gimbals and steadicams for smooth footage</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h3 className="font-semibold text-ambrosian-gold mb-1">Professional Audio</h3>
                  <p className="text-ambrosian-gold/70 text-sm">Crystal clear sound recording equipment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Shooting Styles */}
          <div className="bg-ambrosian-gold/5 border border-ambrosian-gold/20 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-ambrosian-gold mb-6">
              Videography Styles
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Cinematic',
                'Documentary',
                'Artistic',
                'Traditional',
                'Storytelling',
                'Candid',
                'Aerial',
                'Time-lapse',
              ].map((style, index) => (
                <div
                  key={index}
                  className="border border-ambrosian-gold/30 rounded-lg p-4 text-center hover:bg-ambrosian-gold/10 transition-colors"
                >
                  <p className="text-ambrosian-gold font-medium">{style}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Packages */}
          <div className="bg-ambrosian-gold/5 border border-ambrosian-gold/20 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-ambrosian-gold mb-6">
              What&apos;s Included
            </h2>
            <div className="space-y-3">
              {[
                'Full day coverage by professional team',
                'Multiple camera angles and perspectives',
                'Drone aerial footage of venue and surroundings',
                'Cinematic highlights reel',
                'Full ceremony and reception coverage',
                'Professional editing and color grading',
                'High-resolution digital delivery',
                'Online gallery for easy sharing',
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-ambrosian-gold text-xl">✓</span>
                  <p className="text-ambrosian-gold/80">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-ambrosian-gold/5 border border-ambrosian-gold/30 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-ambrosian-gold mb-4">
              Ready to Capture Your Special Moments?
            </h2>
            <p className="text-ambrosian-gold/70 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your photography and videography needs and create lasting memories
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
