'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
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
    <header className="bg-ambrosian-dark border-b border-ambrosian-gold/20 sticky top-0 z-50 transition-all duration-300">
      <nav className="container mx-auto px-4 transition-all duration-300" style={{paddingTop: isScrolled ? '8px' : '16px', paddingBottom: isScrolled ? '8px' : '16px'}}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/ambrosian-final-logo-stroke.png"
              alt="Ambrosian Events & Management Logo"
              width={isScrolled ? 180 : 300}
              height={isScrolled ? 70 : 120}
              className="h-auto hidden md:block transition-all duration-300"
            />
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
