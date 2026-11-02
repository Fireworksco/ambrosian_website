'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

const services = [
  { name: 'Catering & Wedding Cuisine', slug: 'catering-wedding-cuisine' },
  { name: 'Professional Event Staffing', slug: 'event-staffing' },
  { name: 'Decoration & Event Styling', slug: 'decoration-styling' },
  { name: 'SIA Security Services', slug: 'security-services' },
  { name: 'Marketing & Event Management', slug: 'marketing-management' },
  { name: 'Photography & Videography', slug: 'photography-videography' },
]

const Caret = () => (
  <svg className="caret" width="9" height="6" viewBox="0 0 9 6" fill="currentColor" aria-hidden="true">
    <path d="M0 0h9L4.5 6z" />
  </svg>
)

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const openBtn = useRef<HTMLButtonElement>(null)
  const pathname = usePathname() || '/'

  const close = () => setIsMenuOpen(false)

  // Lock page scroll while the full-screen menu is open; close on Escape
  useEffect(() => {
    if (!isMenuOpen) return
    document.documentElement.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
        openBtn.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.documentElement.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [isMenuOpen])

  const active = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header className="nav">
        <div className="wrap nav-row">
          <Link href="/" className="brand" aria-label="Ambrosian Events & Management Logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="brand-mark" src="/brand/mark-gold.png" alt="" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="brand-word" src="/brand/wordmark-gold.png" alt="Ambrosian Events & Management Logo" />
          </Link>

          <nav className="nav-links" aria-label="Main">
            <Link href="/" className={`nl${active('/') ? ' is-active' : ''}`}>
              Home
            </Link>
            <div className="dd">
              <Link href="/#services" className={`nl${active('/services') ? ' is-active' : ''}`} aria-haspopup="true">
                Services <Caret />
              </Link>
              <ul className="dd-menu">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`}>{service.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/projects" className={`nl${active('/projects') ? ' is-active' : ''}`}>
              Projects
            </Link>
            <Link href="/contact" className={`nl${active('/contact') ? ' is-active' : ''}`}>
              Contact
            </Link>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Link className="btn btn-gold nav-cta" href="/contact" style={{ minHeight: 50, padding: '0 24px', fontSize: 14 }}>
              Get in Touch
            </Link>
            <button
              ref={openBtn}
              className="burger"
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M0 1h20M0 7h20M0 13h20" />
              </svg>
            </button>
          </div>
        </div>
        <div className="progress" aria-hidden="true" />
      </header>

      {isMenuOpen && (
        <div className="menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 48 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/wordmark-gold.png" alt="Ambrosian Events & Management Logo" style={{ height: 22, width: 'auto' }} />
            <button className="burger" type="button" aria-label="Toggle menu" onClick={close} style={{ display: 'inline-flex' }} autoFocus>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M2 2l12 12M14 2L2 14" />
              </svg>
            </button>
          </div>
          <nav aria-label="Mobile" style={{ display: 'flex', flexDirection: 'column', marginTop: 48 }}>
            <Link className="menu-link" href="/" onClick={close}><small>01</small>Home</Link>
            <p className="menu-link"><small>02</small>Services</p>
            <div className="menu-sub">
              {services.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} onClick={close}>
                  {service.name}
                </Link>
              ))}
            </div>
            <Link className="menu-link" href="/projects" onClick={close}><small>03</small>Projects</Link>
            <Link className="menu-link" href="/contact" onClick={close}><small>04</small>Contact</Link>
          </nav>
          <div style={{ marginTop: 'auto', paddingTop: 40, display: 'flex', flexDirection: 'column', gap: 18 }}>
            <Link className="btn btn-gold" href="/contact" onClick={close}>Get in Touch</Link>
            <a href="mailto:connect@ambrosianuk.com" style={{ fontSize: 16, color: '#F9C879', textDecoration: 'none' }}>connect@ambrosianuk.com</a>
            <a href="tel:+447424407743" style={{ fontSize: 16, color: '#F9C879', textDecoration: 'none' }}>+44 7424 407743</a>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
