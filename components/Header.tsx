'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const scrolledRef = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      if (!scrolledRef.current && y > 150) {
        scrolledRef.current = true
        setIsScrolled(true)
      } else if (scrolledRef.current && y < 30) {
        scrolledRef.current = false
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    { name: 'Catering & Wedding Cuisine', slug: 'catering-wedding-cuisine' },
    { name: 'Professional Event Staffing', slug: 'event-staffing' },
    { name: 'Decoration & Event Styling', slug: 'decoration-styling' },
    { name: 'SIA Security Services', slug: 'security-services' },
    { name: 'Marketing & Event Management', slug: 'marketing-management' },
    { name: 'Photography & Videography', slug: 'photography-videography' },
  ]

  return (
    <header className="bg-ambrosian-dark border-b border-ambrosian-gold/20 sticky top-0 z-50">
      <nav className="container mx-auto px-4" style={{ paddingTop: isScrolled ? '4px' : '20px', paddingBottom: isScrolled ? '4px' : '20px' }}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <div
              className="hidden md:block overflow-hidden"
              style={{ height: isScrolled ? '52px' : '120px' }}
            >
              <Image
                src="/ambrosian-final-logo-stroke.png"
                alt="Ambrosian Events & Management Logo"
                width={300}
                height={120}
                className="transition-transform duration-200"
                style={{
                  width: '300px',
                  height: '120px',
                  transform: isScrolled ? 'scale(0.43)' : 'scale(1)',
                  transformOrigin: 'left top',
                  willChange: 'transform',
                }}
              />
            </div>
            <Image
              src="/ambrosian-final-logo-stroke.png"
              alt="Ambrosian Events & Management Logo"
              width={120}
              height={50}
              className="h-auto md:hidden transition-all duration-300"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiX size={24} color="#fbcc7b" />
            ) : (
              <HiMenu size={24} color="#fbcc7b" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-ambrosian-gold hover:opacity-80 transition-opacity">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-ambrosian-gold hover:opacity-80 transition-opacity">
                Services
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-ambrosian-dark border border-ambrosian-gold/30 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block px-4 py-3 text-ambrosian-gold hover:bg-ambrosian-gold/10 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/projects" className="text-ambrosian-gold hover:opacity-80 transition-opacity">
              Projects
            </Link>

            <Link href="/contact" className="text-ambrosian-gold hover:opacity-80 transition-opacity">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link
              href="/"
              className="block py-2 text-ambrosian-gold hover:opacity-80 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            <div className="py-2">
              <p className="font-semibold text-ambrosian-gold mb-2">Services</p>
              <div className="pl-4 space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block py-1 text-ambrosian-gold/90 hover:opacity-80 transition-opacity text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/projects"
              className="block py-2 text-ambrosian-gold hover:opacity-80 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className="block py-2 text-ambrosian-gold hover:opacity-80 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
