export default function OurClientPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full">
            <img
              src="/images/red-roof.png"
              alt="Close-up of premium quality roofing tiles against blue sky"
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/final-gradient-for-all.png"
            alt=""
            className="w-full h-full object-cover opacity-95 pointer-events-none"
            style={{ mixBlendMode: "hard-light" }}
            aria-hidden="true"
          />
        </div>
        
        {/* Text Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 sm:px-8 md:px-24 pt-16 sm:pt-24 md:pt-[186px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-white mb-4 sm:mb-8">
            Trusted by Leading Brands
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white font-light">
            Building lasting <span className="font-medium">partnerships</span> across industries with<br className="hidden sm:block" />
            <span className="font-medium">quality and commitment.</span>
          </p>
        </div>
      </section>
      
      {/* Supplier List Section */}
      <section className="w-full pt-16 pb-16 md:pt-24 md:pb-24 bg-white">
        <div className="flex justify-center max-w-7xl mx-auto px-4 sm:px-6">
          <img
            src="/images/major-supplier.png"
            alt="Our Suppliers: ACCIL, Bhushan Power & Steel, Jindal, JSW Steel, POSCO, AM/NS INDIA"
            className="w-full"
          />
        </div>
      </section>
    </main>
  )
}