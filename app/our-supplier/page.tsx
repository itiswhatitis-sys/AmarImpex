"use client"

import { useState, useEffect } from "react"

export default function OurSupplierPage() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

  // Ensure page starts at the top when navigated to
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Function to handle certificate click for mobile view
  const handleCertificateClick = (certificateUrl: string) => {
    setSelectedCertificate(certificateUrl)
  }

  // Function to close the modal
  const closeModal = () => {
    setSelectedCertificate(null)
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full">
            <img
              src="/images/supplier-hero.jpeg"
              alt="Close-up of premium quality roofing tiles against blue sky"
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

        {/* Supplier Logos Banner - Improved responsive centering */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 flex justify-center">
            <div className="bg-white bg-opacity-75 rounded-3xl p-4 sm:p-6 md:p-8 w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-5xl flex items-center justify-center">
              <img
                src="/images/supplier-logos-collection.png"
                alt="Our Suppliers: ACCIL, Bhushan Power & Steel, Jindal, JSW Steel, POSCO, AM/NS INDIA"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Supplier List Section */}
      <section className="w-full  pt-16 pb-0 md:pt-24 md:pb-0 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
          <h2
            className="text-3xl md:text-4xl font-medium text-center mb-10 text-[#000000]"
            style={{ fontFamily: "Stolzl, sans-serif" }}
          >
            OUR MAJOR SUPPLIERS
          </h2>

          <div className="space-y-4 text-center text-[#5E5E5E]">
            <p className="text-base md:text-lg">Asian Colour Coated ISPAT Limited (ACCIL)</p>
            <p className="text-base md:text-lg">Bhushan Power and Steel Limited (BPSL)</p>
            <p className="text-base md:text-lg">JINDAL (India) Limited</p>
            <p className="text-base md:text-lg">JSW Steel Coated Products Limited</p>
            <p className="text-base md:text-lg">JSW Steel Limited</p>
            <p className="text-base md:text-lg">ArcelorMittal Nippon Steel India</p>
            <p className="text-base md:text-lg">POSCO Maharashtra Steel Private Limited (POSCO)</p>
          </div>

          <div className="mt-8 mb-4">
            <img src="/images/divider-line.png" alt="Divider" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="w-full pt-4 pb-12 md:pt-4 md:pb-20  bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-medium text-center mb-8 md:mb-12 text-[#000000]"
            style={{ fontFamily: "Stolzl, sans-serif" }}
          >
            Certificates
          </h2>

          <div className="space-y-12 sm:space-y-16">
            {/* ACCIL Certificate */}
            <div className="flex justify-center">
              <div
                className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl cursor-pointer"
                onClick={() => handleCertificateClick("/images/accil-certificate.jpeg")}
              >
                <div className="relative w-full" style={{ height: "min(60vh, 400px)" }}>
                  <img
                    src="/images/accil-certificate.jpeg"
                    alt="Certificate from Asian Colour Coated ISPAT Ltd. recognizing Amar Impex as an Authorized Distributor for the South Region"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Dividing Line */}
            <div className="py-8">
              <img src="/images/divider-line.png" alt="Divider" className="w-full h-auto" />
            </div>

            {/* BPSL Certificate */}
            <div className="flex justify-center">
              <div
                className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl cursor-pointer"
                onClick={() => handleCertificateClick("/images/bpsl-certificate.png")}
              >
                <div className="relative w-full" style={{ height: "min(60vh, 400px)" }}>
                  <img
                    src="/images/bpsl-certificate.png"
                    alt="Certificate from Bhushan Power & Steel Ltd. certifying Amar Impex as an authorized Dealer for Coated Steel products"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-10 right-0 text-white text-xl font-bold" onClick={closeModal}>
              Close
            </button>
            <img
              src={selectedCertificate || "/placeholder.svg"}
              alt="Certificate full view"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </main>
  )
}
