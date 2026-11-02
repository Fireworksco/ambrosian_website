import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Catering & Wedding Cuisine - Ambrosian Events & Management',
  description: 'Professional catering services with qualified chefs offering a wide variety of delicious food options for weddings and events',
}

export default function CateringWeddingCuisine() {
  const features = [
    {
      title: 'Wide Variety of Delicious Food Options',
      description: 'From traditional to contemporary cuisines, we offer diverse menu options tailored to your preferences and dietary requirements.',
      icon: '🍽️'
    },
    {
      title: 'Qualified & Professionally Trained Chefs',
      description: 'Our expert chefs bring years of experience and passion to create culinary masterpieces that delight your guests.',
      icon: '👨‍🍳'
    },
    {
      title: 'Specialized Wedding Catering Services',
      description: 'Dedicated wedding catering expertise to make your special day unforgettable with exquisite cuisine and presentation.',
      icon: '💍'
    },
  ]

  return (
    <>
      <PageHero image="/project-gallery/7.jpeg">
        <Breadcrumb current="Catering & Wedding Cuisine" />
        <Image src="/services_icons/icons-01.png" alt="" width={104} height={104} className="page-icon in-1" style={{ marginTop: 36 }} />
        <h1 className="h-xl page-title in-2">
              Catering & Wedding Cuisine
            </h1>
        <p className="page-intro in-3">
              Elevate your event with our exceptional catering services featuring professionally trained chefs 
              and a wide variety of delicious cuisine options
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
              Why Choose Our Catering Services?
            </h2>
            <div className="panel-copy">
              <p>
                At Ambrosian Events & Management, we understand that exceptional food is at the heart of every memorable event. 
                Our catering services combine culinary artistry with professional excellence to deliver an unforgettable dining experience.
              </p>
              <p>
                Our team of qualified and professionally trained chefs brings passion and expertise to every dish. 
                With extensive experience in diverse cuisines and dietary requirements, we create customized menus 
                that perfectly match your vision and preferences.
              </p>
              <p>
                Whether you&apos;re planning an intimate gathering or a grand celebration, our specialized wedding catering 
                services ensure that every detail is perfected. From elegant presentation to exquisite flavors, 
                we make your special day truly exceptional.
              </p>
            </div>
          </div>

          {/* Menu Categories */}
          <div className="blk">
            <h2 className="sec-title center rv">
              Our Menu Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Traditional Cuisine', desc: 'Classic dishes prepared with authentic recipes' },
                { name: 'Contemporary Fusion', desc: 'Modern culinary creations with innovative flavors' },
                { name: 'Vegetarian & Vegan', desc: 'Plant-based options that delight all palates' },
                { name: 'Dietary Accommodations', desc: 'Gluten-free, allergen-free, and special requirements' },
                { name: 'Wedding Packages', desc: 'Comprehensive catering solutions for your special day' },
                { name: 'Corporate Events', desc: 'Professional catering for business functions' },
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

          {/* CTA Section */}
          <div className="cta-box rv">
            <h2 className="cta-box-t">
              Ready to Create a Culinary Experience?
            </h2>
            <p className="cta-box-d">
              Contact us today to discuss your catering requirements and let our expert chefs create 
              a memorable dining experience for your guests
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
