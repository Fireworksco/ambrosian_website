import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="shade" aria-hidden="true" />
      <div className="wrap page-hero-in">
        <div className="max-w-2xl mx-auto">
          <h1 className="h-xl in-1" style={{ fontSize: 'clamp(96px, 14vw, 180px)', color: '#F9C879' }}>
            404
          </h1>
          <h2 className="h-lg in-2" style={{ marginTop: 12, color: '#FBF7F0' }}>
            Page Not Found
          </h2>
          <span className="bar in-2" aria-hidden="true" />
          <p className="page-intro in-3">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. 
            The page may have been moved or doesn&apos;t exist.
          </p>
          <div className="in-4" style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginTop: 42 }}>
            <Link href="/" className="btn btn-gold">
              Back to Home
            </Link>
            <Link href="/contact" className="btn btn-line">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
