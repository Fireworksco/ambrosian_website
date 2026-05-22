import { Metadata } from 'next'
import { HiMail, HiPhone, HiLocationMarker, HiCalendar } from 'react-icons/hi'

export const metadata: Metadata = {
  title: 'Contact Us - Ambrosian Events & Management',
  description: 'Get in touch with Ambrosian Events & Management for professional event services in London',
}

export default function Contact() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-ambrosian-gold mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-ambrosian-gold/70 max-w-2xl mx-auto">
              Get in touch with us to discuss your event requirements. We&apos;re here to help make your event unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-ambrosian-gold mb-6">
                  Get In Touch
                </h2>
                <p className="text-ambrosian-gold/70 mb-8">
                  Whether you&apos;re planning a wedding, corporate event, or special celebration, 
                  our team is ready to bring your vision to life with professional excellence.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <HiMail size={28} color="#fbcc7b" className="flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-ambrosian-gold mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:connect@ambrosianuk.com"
                      className="text-ambrosian-gold/80 hover:text-ambrosian-gold transition-colors"
                    >
                      connect@ambrosianuk.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <HiPhone size={28} color="#fbcc7b" className="flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-ambrosian-gold mb-2">
                      Phone
                    </h3>
                    <a
                      href="tel:+447399214262"
                      className="text-ambrosian-gold/80 hover:text-ambrosian-gold transition-colors"
                    >
                      +44 7424 407743
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <HiLocationMarker size={28} color="#fbcc7b" className="flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-ambrosian-gold mb-2">
                      Address
                    </h3>
                    <p className="text-ambrosian-gold/80">
                      Unit 1, 606 Romford Road<br />
                      E12 5AF<br />
                      London, United Kingdom
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-ambrosian-gold/5 border border-ambrosian-gold/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-ambrosian-gold mb-4 flex items-center gap-2">
                  <HiCalendar size={24} color="#fbcc7b" />
                  Business Hours
                </h3>
                <div className="space-y-2 text-ambrosian-gold/80">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-ambrosian-gold/5 border border-ambrosian-gold/30 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-ambrosian-gold mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-ambrosian-gold mb-2 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-ambrosian-dark border border-ambrosian-gold/30 rounded-lg text-ambrosian-gold focus:outline-none focus:border-ambrosian-gold transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-ambrosian-gold mb-2 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-ambrosian-dark border border-ambrosian-gold/30 rounded-lg text-ambrosian-gold focus:outline-none focus:border-ambrosian-gold transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-ambrosian-gold mb-2 font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-ambrosian-dark border border-ambrosian-gold/30 rounded-lg text-ambrosian-gold focus:outline-none focus:border-ambrosian-gold transition-colors"
                    placeholder="+44 1234 567890"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-ambrosian-gold mb-2 font-medium">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-ambrosian-dark border border-ambrosian-gold/30 rounded-lg text-ambrosian-gold focus:outline-none focus:border-ambrosian-gold transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="catering">Catering & Wedding Cuisine</option>
                    <option value="staffing">Professional Event Staffing</option>
                    <option value="decoration">Decoration & Event Styling</option>
                    <option value="security">SIA Security Services</option>
                    <option value="marketing">Marketing & Event Management</option>
                    <option value="photography">Photography & Videography</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-ambrosian-gold mb-2 font-medium">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-ambrosian-dark border border-ambrosian-gold/30 rounded-lg text-ambrosian-gold focus:outline-none focus:border-ambrosian-gold transition-colors resize-none"
                    placeholder="Tell us about your event..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-ambrosian-gold text-ambrosian-dark px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <div className="bg-ambrosian-gold/5 border border-ambrosian-gold/20 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-ambrosian-gold mb-4 flex items-center gap-2">
                <HiLocationMarker size={28} color="#fbcc7b" />
                Find Us
              </h2>
              <p className="text-ambrosian-gold/70 mb-6">
                Visit our office at Unit 1, 606 Romford Road, London E12 5AF
              </p>
              <div className="aspect-video bg-ambrosian-dark/50 border border-ambrosian-gold/30 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1655.7545009428802!2d0.0523956994179586!3d51.55304091713742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a656b842ffff%3A0xf610f2885760015!2s1%20Romford%20Rd%2C%20London%20E12%205AW%2C%20UK!5e0!3m2!1sen!2sbd!4v1770359076888!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ambrosian Events & Management Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
