import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-8xl md:text-9xl font-bold text-ambrosian-gold mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-ambrosian-gold mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-ambrosian-gold/70 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. 
          The page may have been moved or doesn&apos;t exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-ambrosian-gold text-ambrosian-dark px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="border-2 border-ambrosian-gold text-ambrosian-gold px-8 py-4 rounded-lg font-semibold hover:bg-ambrosian-gold/10 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
