export default function ProductsSection() {
  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/images/colored-metal-roofing.png" alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <h2
          className="text-3xl md:text-4xl font-medium text-white mb-8 md:mb-10 text-left"
          style={{ fontFamily: "Stolzl, sans-serif" }}
        >
          OUR PRODUCTS
        </h2>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {/* COLOR COATED STEEL COILS */}
            <div className="bg-[#1E1E1E] rounded-md overflow-hidden w-full max-w-[280px] mx-auto">
              <div className="aspect-square p-3">
                <div className="w-full h-full overflow-hidden">
                  <img
                    src="/images/color-coated-steel-coils.png"
                    alt="Color Coated Steel Coils"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-xs font-medium text-white mb-1" style={{ fontFamily: "Stolzl, sans-serif" }}>
                  COLOR COATED STEEL COILS
                </h3>
                <p
                  className="text-gray-400 text-[10px] leading-relaxed"
                  style={{ fontFamily: "Stolzl, sans-serif", fontWeight: 300 }}
                >
                  Coil coating or colour coated coils is the most advanced of techniques used in the continuous
                  application of an organic coating on to a flat metal substrate in the coil form. We are the leading
                  Manufacturers in Chennai and Warehousing Sheets Manufacturers in Chennai.
                </p>
              </div>
            </div>

            {/* GP/GI COIL */}
            <div className="bg-[#1E1E1E] rounded-md overflow-hidden w-full max-w-[280px] mx-auto">
              <div className="aspect-square p-3">
                <div className="w-full h-full overflow-hidden">
                  <img src="/images/gp-gi-coil.png" alt="GP/GI Coil" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-xs font-medium text-white mb-1" style={{ fontFamily: "Stolzl, sans-serif" }}>
                  GP/GI COIL
                </h3>
                <p
                  className="text-gray-400 text-[10px] leading-relaxed"
                  style={{ fontFamily: "Stolzl, sans-serif", fontWeight: 300 }}
                >
                  GI Coil are mainly used for automobile muffler venting, ventilation, air-conditioning, to use flat
                  sheet and the proof. we are offering a broad collection of GI Coil that are sourced from the reputed
                  vendors.
                </p>
              </div>
            </div>

            {/* BAREGALVALUME STEEL */}
            <div className="bg-[#1E1E1E] rounded-md overflow-hidden w-full max-w-[280px] mx-auto">
              <div className="aspect-square p-3">
                <div className="w-full h-full overflow-hidden">
                  <img
                    src="/images/baregalvalume-steel.png"
                    alt="Baregalvalume Steel"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-xs font-medium text-white mb-1" style={{ fontFamily: "Stolzl, sans-serif" }}>
                  BAREGALVALUME STEEL
                </h3>
                <p
                  className="text-gray-400 text-[10px] leading-relaxed"
                  style={{ fontFamily: "Stolzl, sans-serif", fontWeight: 300 }}
                >
                  Amar Impex is leading supplier of Bare Galvalume Steel Coils and sheets. Galvalume sheets are
                  corrosion resistant. They are widely used where material should not get rust. Applications: Building &
                  Automotive Industry, Solar Industry, etc.
                </p>
              </div>
            </div>

            {/* AMAR FLEXI PROFILE */}
            <div className="bg-[#1E1E1E] rounded-md overflow-hidden w-full max-w-[280px] mx-auto">
              <div className="aspect-square p-3">
                <div className="w-full h-full overflow-hidden">
                  <img
                    src="/images/amar-flexi-profile.png"
                    alt="Amar Flexi Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-xs font-medium text-white mb-1" style={{ fontFamily: "Stolzl, sans-serif" }}>
                  AMAR FLEXI PROFILE
                </h3>
                <p
                  className="text-gray-400 text-[10px] leading-relaxed"
                  style={{ fontFamily: "Stolzl, sans-serif", fontWeight: 300 }}
                >
                  Amar Flexi Profile is trapezoidal in shape and has better stiffness and strength. It is best suited
                  for areas of heavy rainfall. It has Anti Capillary Groove to prevent water leakage in the lapping of
                  sheets.
                </p>
              </div>
            </div>

            {/* AMAR TILE PROFILE */}
            <div className="bg-[#1E1E1E] rounded-md overflow-hidden w-full max-w-[280px] mx-auto">
              <div className="aspect-square p-3">
                <div className="w-full h-full overflow-hidden">
                  <img
                    src="/images/amar-tile-profile.png"
                    alt="Amar Tile Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-xs font-medium text-white mb-1" style={{ fontFamily: "Stolzl, sans-serif" }}>
                  AMAR TILE PROFILE
                </h3>
                <p
                  className="text-gray-400 text-[10px] leading-relaxed"
                  style={{ fontFamily: "Stolzl, sans-serif", fontWeight: 300 }}
                >
                  Amar Tile Profile sheets offer excellent aesthetics without compromising the traditional look. It is
                  lightweight, cost-effective and easy to fix. It has Anti Capillary Groove to prevent water leakage in
                  the lapping of sheets.
                </p>
              </div>
            </div>

            {/* AMAR CORRUGATION PROFILE */}
            <div className="bg-[#1E1E1E] rounded-md overflow-hidden w-full max-w-[280px] mx-auto">
              <div className="aspect-square p-3">
                <div className="w-full h-full overflow-hidden">
                  <img
                    src="/images/amar-corrugation-profile.png"
                    alt="Amar Corrugation Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-xs font-medium text-white mb-1" style={{ fontFamily: "Stolzl, sans-serif" }}>
                  AMAR CORRUGATION PROFILE
                </h3>
                <p
                  className="text-gray-400 text-[10px] leading-relaxed"
                  style={{ fontFamily: "Stolzl, sans-serif", fontWeight: 300 }}
                >
                  Amar Corrugation Profile is a standard wave profile offers cost effective solution for roofing and
                  cladding applications. Color coating improves the aesthetics and metallic coating offers CORROSION and
                  WEATHER protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
