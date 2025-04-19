import Hero from "@/components/hero"
import AboutValuesSection from "@/components/about-values-section"
import ProductsSection from "@/components/products-section"
import SuppliersSection from "@/components/suppliers-section"
import PortfolioSection from "@/components/portfolio-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <AboutValuesSection />
      <ProductsSection />
      <SuppliersSection />

      {/* Divider line between Suppliers and Portfolio */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-4">
        <img src="/images/divider-line.png" alt="Divider" className="w-full h-auto" />
      </div>

      <PortfolioSection />
    </main>
  )
}
