import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import Breadcrumb from '@/components/Breadcrumb'

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
    <>
      <PageHero image="/project-gallery/11.jpeg">
        <Breadcrumb current="Photography & Videography" />
        <Image src="/services_icons/icons-06.png" alt="" width={104} height={104} className="page-icon in-1" style={{ marginTop: 36 }} />
        <h1 className="h-xl page-title in-2">
              Photography & Videography
            </h1>
        <p className="page-intro in-3">
              Professional wedding and event photography with drone shooting, 3D/cinematic techniques, 
              and expert storytelling
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
              Capturing Your Moments with Cinematic Excellence
            </h2>
            <div className="panel-copy">
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
          <div className="blk">
            <h2 className="sec-title center rv">
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

          {/* Equipment & Technology */}
          <div className="panel rv">
            <h2 className="panel-title">
              Professional Equipment & Technology
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="item">
                <span className="item-emoji">✓</span>
                <div>
                  <h3 className="item-t">4K & 8K Cameras</h3>
                  <p className="item-d">Ultra-high definition video capture</p>
                </div>
              </div>
              <div className="item">
                <span className="item-emoji">✓</span>
                <div>
                  <h3 className="item-t">Professional Drones</h3>
                  <p className="item-d">Licensed drone operators for aerial cinematography</p>
                </div>
              </div>
              <div className="item">
                <span className="item-emoji">✓</span>
                <div>
                  <h3 className="item-t">Cinema Lenses</h3>
                  <p className="item-d">Professional-grade optics for stunning visuals</p>
                </div>
              </div>
              <div className="item">
                <span className="item-emoji">✓</span>
                <div>
                  <h3 className="item-t">3D Technology</h3>
                  <p className="item-d">Advanced 3D shooting capabilities</p>
                </div>
              </div>
              <div className="item">
                <span className="item-emoji">✓</span>
                <div>
                  <h3 className="item-t">Stabilization Systems</h3>
                  <p className="item-d">Gimbals and steadicams for smooth footage</p>
                </div>
              </div>
              <div className="item">
                <span className="item-emoji">✓</span>
                <div>
                  <h3 className="item-t">Professional Audio</h3>
                  <p className="item-d">Crystal clear sound recording equipment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Shooting Styles */}
          <div className="panel rv">
            <h2 className="panel-title">
              Videography Styles
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
                  className="chip"
                >
                  <p className="chip-t">{style}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Packages */}
          <div className="panel rv">
            <h2 className="panel-title">
              What&apos;s Included
            </h2>
            <div className="flex flex-col gap-3">
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
                <div key={index} className="check">
                  <span className="check-mark">✓</span>
                  <p className="card-d">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-box rv">
            <h2 className="cta-box-t">
              Ready to Capture Your Special Moments?
            </h2>
            <p className="cta-box-d">
              Contact us to discuss your photography and videography needs and create lasting memories
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
