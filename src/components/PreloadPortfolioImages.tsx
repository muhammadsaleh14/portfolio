import { portfolioImages } from '../data/portfolio'

/** Prefetch every portfolio image into the browser cache on first paint. */
export function PreloadPortfolioImages() {
  return (
    <div className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0" aria-hidden>
      {portfolioImages.map((src) => (
        <img key={src} src={src} alt="" loading="eager" decoding="async" />
      ))}
    </div>
  )
}

export function preloadPortfolioImages() {
  for (const src of portfolioImages) {
    const image = new Image()
    image.decoding = 'async'
    image.src = src
  }
}
