export default function FlashingSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-medium text-left mb-8 text-[#000000]" style={{ fontFamily: "Stolzl, sans-serif" }}>
          Flashing
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Ridge Cap */}
          <div className="flex flex-col">
            <div className="mb-2 aspect-[4/3] flex items-center justify-center">
              <img src="/images/flashing/ridge-cap.png" alt="Ridge Cap" className="w-full h-full object-contain" />
            </div>
            <p className="text-center text-sm font-medium">Ridge Cap</p>
          </div>

          {/* Profile Ridge Cap */}
          <div className="flex flex-col">
            <div className="mb-2 aspect-[4/3] flex items-center justify-center">
              <img
                src="/images/flashing/profile-ridge-cap.png"
                alt="Profile Ridge Cap"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-center text-sm font-medium">Profile Ridge Cap</p>
          </div>

          {/* Notched Ridge Cap */}
          <div className="flex flex-col">
            <div className="mb-2 aspect-[4/3] flex items-center justify-center">
              <img
                src="/images/flashing/notched-ridge-cap.png"
                alt="Notched Ridge Cap"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-center text-sm font-medium">Notched Ridge Cap</p>
          </div>

          {/* Corner Trim */}
          <div className="flex flex-col">
            <div className="mb-2 aspect-[4/3] flex items-center justify-center">
              <img src="/images/flashing/corner-trim.png" alt="Corner Trim" className="w-full h-full object-contain" />
            </div>
            <p className="text-center text-sm font-medium">Corner Trim</p>
          </div>

          {/* Barge Cap */}
          <div className="flex flex-col">
            <div className="mb-2 aspect-[4/3] flex items-center justify-center">
              <img src="/images/flashing/barge-cap.png" alt="Barge Cap" className="w-full h-full object-contain" />
            </div>
            <p className="text-center text-sm font-medium">Barge Cap</p>
          </div>

          {/* L-Flashing */}
          <div className="flex flex-col">
            <div className="mb-2 aspect-[4/3] flex items-center justify-center">
              <img src="/images/flashing/l-flashing.png" alt="L-Flashing" className="w-full h-full object-contain" />
            </div>
            <p className="text-center text-sm font-medium">L - Flashing</p>
          </div>

          {/* Apron | Drip Flashing */}
          <div className="flex flex-col">
            <div className="mb-2 aspect-[4/3] flex items-center justify-center">
              <img
                src="/images/flashing/apron-drip-flashing.png"
                alt="Apron | Drip Flashing"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-center text-sm font-medium">Apron | Drip Flashing</p>
          </div>

          {/* Hemmed Flashing */}
          <div className="flex flex-col">
            <div className="mb-2 aspect-[4/3] flex items-center justify-center">
              <img
                src="/images/flashing/hemmed-flashing.png"
                alt="Hemmed Flashing"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-center text-sm font-medium">Hemmed Flashing</p>
          </div>
        </div>
      </div>
    </section>
  )
}
