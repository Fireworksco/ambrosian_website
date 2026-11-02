// Full-bleed photo header used at the top of inner pages.
// The nav sits transparently over it and turns solid on scroll.
export default function PageHero({
  image,
  children,
}: {
  image?: string
  children: React.ReactNode
}) {
  return (
    <section className="page-hero">
      {image && (
        <div className="sec-bg bgc plx-bg" aria-hidden="true" style={{ backgroundImage: `url(${image})` }} />
      )}
      <div className="shade" aria-hidden="true" />
      <div className="wrap page-hero-in">{children}</div>
    </section>
  )
}
