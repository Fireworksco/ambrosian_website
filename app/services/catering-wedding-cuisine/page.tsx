import { Metadata } from 'next'
import Link from 'next/link'

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
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8 text-ambrosian-gold/60">
            <Link href="/" className="hover:text-ambrosian-gold transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/#services" className="hover:text-ambrosian-gold transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-ambrosian-gold">Catering & Wedding Cuisine</span>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🍽️</div>
            <h1 className="text-4xl md:text-5xl font-bold text-ambrosian-gold mb-6">
              Catering & Wedding Cuisine
            </h1>
            <p className="text-xl text-ambrosian-gold/80 max-w-3xl mx-auto">
              Elevate your event with our exceptional catering services featuring professionally trained chefs 
              and a wide variety of delicious cuisine options
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
              Why Choose Our Catering Services?
            </h2>
            <div className="space-y-4 text-ambrosian-gold/80 leading-relaxed">
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
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-ambrosian-gold mb-8 text-center">
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
                  className="border border-ambrosian-gold/30 rounded-lg p-6 hover:bg-ambrosian-gold/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-ambrosian-gold mb-2">
                    {category.name}
                  </h3>
                  <p className="text-ambrosian-gold/70">
                    {category.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-ambrosian-gold/5 border border-ambrosian-gold/30 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-ambrosian-gold mb-4">
              Ready to Create a Culinary Experience?
            </h2>
            <p className="text-ambrosian-gold/70 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your catering requirements and let our expert chefs create 
              a memorable dining experience for your guests
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
