import Link from 'next/link'

export default function Breadcrumb({ current }: { current: string }) {
  return (
    <nav className="crumbs in-1" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      <span className="crumb-sep">/</span>
      <Link href="/#services">Services</Link>
      <span className="crumb-sep">/</span>
      <span className="crumb-now">{current}</span>
    </nav>
  )
}
