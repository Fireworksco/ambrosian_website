import { Metadata } from 'next'
import { HiMail, HiPhone, HiLocationMarker, HiCalendar } from 'react-icons/hi'
import PageHero from '@/components/PageHero'
import Arrow from '@/components/Arrow'

export const metadata: Metadata = {
  title: 'Contact Us - Ambrosian Events & Management',
  description: 'Get in touch with Ambrosian Events & Management for professional event services in London',
}

export default function Contact() {
  return (
    <>
      {/* Header */}
      <PageHero image="/project-gallery/6.jpeg">
        <h1 className="h-xl page-title in-2" style={{ marginTop: 0 }}>
          Contact Us
        </h1>
        <span className="bar in-2" aria-hidden="true" style={{ marginTop: 24 }} />
        <p className="page-intro in-3">
          Get in touch with us to discuss your event requirements. We&apos;re here to help make your event unforgettable.
        </p>
      </PageHero>

      <div className="page-body">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="flex flex-col gap-10">
              <div className="rv">
                <h2 className="sec-title left">
                  Get In Touch
                </h2>
                <p className="lead" style={{ marginTop: 28 }}>
                  Whether you&apos;re planning a wedding, corporate event, or special celebration, 
                  our team is ready to bring your vision to life with professional excellence.
                </p>
              </div>

              {/* Contact Details */}
              <div className="flex flex-col gap-6 rv">
                <div className="item">
                  <span className="item-emoji"><HiMail size={22} color="#F9C879" /></span>
                  <div>
                    <h3 className="mini" style={{ marginBottom: 6 }}>
                      Email
                    </h3>
                    <a href="mailto:connect@ambrosianuk.com" className="text-lg text-amb-ivory hover:text-amb-gold transition-colors">
                      connect@ambrosianuk.com
                    </a>
                  </div>
                </div>

                <div className="item">
                  <span className="item-emoji"><HiPhone size={22} color="#F9C879" /></span>
                  <div>
                    <h3 className="mini" style={{ marginBottom: 6 }}>
                      Phone
                    </h3>
                    <a href="tel:+447399214262" className="text-lg text-amb-ivory hover:text-amb-gold transition-colors">
                      +44 7424 407743
                    </a>
                  </div>
                </div>

                <div className="item">
                  <span className="item-emoji"><HiLocationMarker size={22} color="#F9C879" /></span>
                  <div>
                    <h3 className="mini" style={{ marginBottom: 6 }}>
                      Address
                    </h3>
                    <p className="text-lg text-amb-ivory">
                      Unit 1, 606 Romford Road<br />
                      E12 5AF<br />
                      London, United Kingdom
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="panel rv" style={{ marginBottom: 0, padding: '36px 40px' }}>
                <h3 className="panel-title" style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 20, flexWrap: 'wrap' }}>
                  <HiCalendar size={24} color="#F9C879" />
                  Business Hours
                </h3>
                <div className="flex flex-col gap-3" style={{ color: '#E5DED2' }}>
                  <div className="flex justify-between gap-4" style={{ borderBottom: '1px solid rgba(249,200,121,.18)', paddingBottom: 12 }}>
                    <span>Monday - Friday:</span>
                    <span className="text-amb-ivory font-medium whitespace-nowrap">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-4" style={{ borderBottom: '1px solid rgba(249,200,121,.18)', paddingBottom: 12 }}>
                    <span>Saturday:</span>
                    <span className="text-amb-ivory font-medium whitespace-nowrap">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Sunday:</span>
                    <span className="text-amb-gold font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rv" style={{ padding: '48px 44px', background: '#172E49', borderTop: '3px solid #F9C879' }}>
              <h2 className="panel-title">
                Send us a Message
              </h2>
              <form className="flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="field-l">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="field"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="field-l">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="field"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="field-l">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="field"
                    placeholder="+44 1234 567890"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="field-l">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="field"
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
                  <label htmlFor="message" className="field-l">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="field resize-none"
                    placeholder="Tell us about your event..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-gold w-full"
                >
                  Send Message <Arrow />
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="rv" style={{ marginTop: 96 }}>
            <h2 className="sec-title left">
              <HiLocationMarker size={30} color="#F9C879" style={{ display: 'inline-block', verticalAlign: '-4px', marginRight: 12 }} />
              Find Us
            </h2>
            <p className="lead" style={{ marginTop: 28, color: '#C2BBAD' }}>
              Visit our office at Unit 1, 606 Romford Road, London E12 5AF
            </p>
            <div className="aspect-video" style={{ marginTop: 32, border: '1px solid rgba(249,200,121,.35)', background: '#172E49', overflow: 'clip' }}>
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
    </>
  )
}
