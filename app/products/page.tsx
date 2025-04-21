"use client"

import FlashingSection from "@/components/flashing-section"
import ColorChartSection from "@/components/color-chart-section"
import PrePaintedSteelSection from "@/components/pre-painted-steel-section"
import { useEffect } from "react"

export default function ProductsPage() {
  // Ensure page starts at the top when navigated to
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full">
            <img
              src="/images/products-hero.jpeg"
              alt="Steel manufacturing facility with stacked metal profiles and sheets"
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10">
          <img
            src="/images/hero-gradient-overlay.png"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>

        {/* Content - Positioned at bottom center */}
        <div className="absolute bottom-0 left-0 right-0 z-20 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 pb-16 sm:pb-20">
            <div className="flex flex-col items-start max-w-full sm:max-w-2xl">
              {/* Heading */}
              <h1
                className="text-white text-4xl sm:text-5xl md:text-6xl font-medium mb-4 sm:mb-6 "
                style={{ fontFamily: "Stolzl, sans-serif",fontWeight: 400}}
              >
                Our Products
              </h1>

              {/* Description text with highlighted parts */}
              <p
                className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-3"
                style={{
                  fontFamily: "'Stolzl', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontWeight: 200,
                  WebkitFontSmoothing: "antialiased",
                  lineHeight: 1.6,
                }}
              >
                At Amar Impex, <span className="font-medium">we deliver premium-quality</span> goods crafted for{" "}
                <span className="text-white font-extrabold">reliability, performance, and value.</span> From sourcing to shipment,
                each product reflects our commitment to excellence and global standards.{" "}
                <span className="font-medium">Explore</span> our range designed to meet the evolving needs of industries
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <h2
            className="text-3xl md:text-4xl font-medium text-left mb-12 md:mb-16 text-[#000000]"
            style={{ fontFamily: "Stolzl, sans-serif",fontWeight: 400 }}
          >
            Products
          </h2>

          <div className="space-y-6">
            {/* COLOR COATED STEEL COILS */}
            <div className="bg-[#F2F2F2] rounded-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-[35%] lg:w-[30%] p-4 flex items-center justify-center">
                  <img
                    src="/images/color-coated-steel-coils.png"
                    alt="Color Coated Steel Coils"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="md:w-[65%] lg:w-[70%] p-6 flex items-center">
                <div className="flex flex-col justify-center">
                  <h3 className="text-[#E31E25] text-xl font-medium " style={{ fontFamily: "Stolzl, sans-serif" }}>
                    Color Coated Steel Coils
                  </h3>
                  
                  <p className="text-xs mt-2 md:text-base text-gray-800">
                    Coil coating or colour coated coils is the most advanced of techniques used in the continuous
                    application of an organic coating on to a flat metal substrate in the coil form.
                  </p></div>
                </div>
              </div>
            </div>

            {/* GP/GI COIL */}
            <div className="bg-[#F2F2F2] rounded-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-[35%] lg:w-[30%] p-4 flex items-center justify-center">
                  <img src="/images/gp-gi-coil.png" alt="GP/GI Coil" className="w-full h-auto object-contain" />
                </div>
                <div className="md:w-[65%] lg:w-[70%] p-6 flex items-center">
                <div className="flex flex-col justify-center">
                  <h3 className="text-[#E31E25] text-xl font-medium mb-2" style={{ fontFamily: "Stolzl, sans-serif" }}>
                    GP/GI Coil
                  </h3>
                  <p className="text-sm md:text-base text-gray-800">
                    GI Coil are mainly used for automobile muffler venting, ventilation, air-conditioning, to use flat
                    sheet and the proof. we are offering a broad collection of GI Coil that are sourced from the reputed
                    vendors.
                  </p>
                </div></div>
              </div>
            </div>

            {/* BAREGALVALUME STEEL */}
            <div className="bg-[#F2F2F2] rounded-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-[35%] lg:w-[30%] p-4 flex items-center justify-center">
                  <img
                    src="/images/baregalvalume-steel.png"
                    alt="Baregalvalume Steel"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="md:w-[65%] lg:w-[70%] p-6 flex item-center">
                <div className="flex flex-col justify-center">
                  <h3 className="text-[#E31E25] text-xl font-medium mb-2" style={{ fontFamily: "Stolzl, sans-serif" }}>
                    Bare/Galvalume (BGL) Steel
                  </h3>
                  <p className="text-sm md:text-base text-gray-800">
                    Amar Impex is leading supplier of Bare Galvalume Steel Coils and sheets. Galvalume sheets are
                    corrosion resistant. They are widely used where material should not get rust. Applications: Building
                    & Automotive Industry, Solar Industry, etc.
                  </p>
                </div> </div>
              </div>
            </div>

            {/* AMAR FLEXI PROFILE */}
            <div className="bg-[#F2F2F2] rounded-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-[35%] lg:w-[30%] p-4 flex items-center justify-center">
                  <img
                    src="/images/amar-flexi-profile.png"
                    alt="Amar Flexi Profile"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="md:w-[65%] lg:w-[70%] p-6 flex items-center">
                <div className="flex flex-col justify-center">
                  <h3 className="text-[#E31E25] text-xl font-medium mb-2" style={{ fontFamily: "Stolzl, sans-serif" }}>
                    AMAR FLEXI PROFILE
                  </h3>
                  <p className="text-sm md:text-base text-gray-800">
                    Amar Flexi Profile is trapezoidal in shape and has better stiffness and strength. It is best suited
                    for areas of heavy rainfall. It has Anti Capillary Groove to prevent water leakage in the lapping of
                    sheets.
                  </p>
                </div></div>
              </div>
            </div>

            {/* AMAR TILE PROFILE */}
            <div className="bg-[#F2F2F2] rounded-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-[35%] lg:w-[30%] p-4 flex items-center justify-center">
                  <img
                    src="/images/amar-tile-profile.png"
                    alt="Amar Tile Profile"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="md:w-[65%] lg:w-[70%] p-6 flex items-center">
                <div className="flex flex-col justify-center">
                  <h3 className="text-[#E31E25] text-xl font-medium mb-2" style={{ fontFamily: "Stolzl, sans-serif" }}>
                    AMAR TILE PROFILE
                  </h3>
                  <p className="text-sm md:text-base text-gray-800">
                    Amar Tile Profile sheets offer excellent aesthetics without compromising the traditional look. It is
                    lightweight, cost-effective and easy to fix. It has Anti Capillary Groove to prevent water leakage
                    in the lapping of sheets.
                  </p>
                </div></div>
              </div>
            </div>

            {/* AMAR CORRUGATION PROFILE */}
            <div className="bg-[#F2F2F2] rounded-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-[35%] lg:w-[30%] p-4 flex items-center justify-center">
                  <img
                    src="/images/amar-corrugation-profile.png"
                    alt="Amar Corrugation Profile"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="md:w-[65%] lg:w-[70%] p-6 flex items-center">
                <div className="flex flex-col justify-center">
                  <h3 className="text-[#E31E25] text-xl font-medium mb-2" style={{ fontFamily: "Stolzl, sans-serif" }}>
                    AMAR CORRUGATION PROFILE
                  </h3>
                  <p className="text-sm md:text-base text-gray-800">
                    Amar Corrugation Profile is a standard wave profile offers cost effective solution for roofing and
                    cladding applications. Color coating improves the aesthetics and metallic coating offers CORROSION
                    and WEATHER protection.
                  </p>
                </div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section
        className="w-full py-16 md:py-24"
        style={{
          backgroundColor: "#121212",
          backgroundImage: "linear-gradient(to right, #121212, #1e1e1e)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <h2
            className="text-3xl md:text-4xl font-medium text-white text-left mb-12 md:mb-16"
            style={{ fontFamily: "Stolzl, sans-serif", fontWeight: 400 }}
          >
            Process Flow
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
            {/* Process Flow 1 */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/process%20flow%201-vsLuAW8KIASsJnpSrL36a2TfkdhPPQ.png"
                alt="Steel manufacturing process flow diagram showing steps from hot rolled coil to finished products"
                className="w-full max-w-[500px] h-auto"
              />
            </div>

            {/* Process Flow 2 */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/process%20flow%202-q8IMn5E3LADVNs67pdnbeIFv5EwfXd.png"
                alt="Alternative steel manufacturing process flow diagram with twin stan cold reversing mill"
                className="w-full max-w-[500px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Flashing Section */}
      <FlashingSection />

      {/* Color Chart Section */}
      <ColorChartSection />

      {/* Pre-Painted Steel Section */}
      <PrePaintedSteelSection />
    </main>
  )
}
