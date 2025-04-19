// Custom image loader to optimize image loading
export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) {
  // For local images, use a simple optimization strategy
  if (src.startsWith("/")) {
    return src
  }

  // For external images, you could implement a CDN or optimization service
  return src
}

// Function to preload critical images
export function preloadCriticalImages() {
  const criticalImages = [
    "/images/steel-roof-hero.jpeg",
    "/images/about-hero.jpeg",
    "/images/products-hero.jpeg",
    "/images/supplier-hero.jpeg",
    "/images/amar-apex-logo.png",
  ]

  criticalImages.forEach((src) => {
    const link = document.createElement("link")
    link.rel = "preload"
    link.as = "image"
    link.href = src
    document.head.appendChild(link)
  })
}
