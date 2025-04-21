export default function ColorChartSection() {
  return (
    <section className="w-full py-16 md:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/color-palette-background.png"
          alt="Colorful metal roofing sheets"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Dark overlay image for better text readability */}
      <div className="absolute inset-0 z-5">
        <img src="/images/dark-overlay.png" alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        <h2
          className="text-3xl md:text-4xl font-medium text-white text-left mb-8"
          style={{ fontFamily: "Stolzl, sans-serif",fontWeight : 400 }}
        >
          Colour Chart
        </h2>

        {/* Color chart grid - Matching the reference image layout */}
        <div className="w-full space-y-4">
          {/* First Row - 3 equal columns */}
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-4 h-12 flex items-center pl-4" style={{ backgroundColor: "#4A90E2" }}>
              <span className="text-white text-sm">Sky Blue</span>
            </div>
            <div className="col-span-4 h-12 flex items-center pl-4" style={{ backgroundColor: "#F5F5F0" }}>
              <span className="text-gray-800 text-sm">OFF WHITE</span>
            </div>
            <div className="col-span-4 h-12 flex items-center pl-4" style={{ backgroundColor: "#1A4B8C" }}>
              <span className="text-white text-sm">Royal Blue</span>
            </div>
          </div>

          {/* Second Row - 2 equal columns */}
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-6 h-12 flex items-center pl-4" style={{ backgroundColor: "#C13B3B" }}>
              <span className="text-white text-sm">Brick Red</span>
            </div>
            <div className="col-span-6 h-12 flex items-center pl-4" style={{ backgroundColor: "#1E6E3D" }}>
              <span className="text-white text-sm">Caulfield Green</span>
            </div>
          </div>

          {/* Third Row - 3 columns with different widths */}
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-5 h-12 flex items-center pl-4" style={{ backgroundColor: "#6B7280" }}>
              <span className="text-white text-sm">Pencil Grey</span>
            </div>
            <div className="col-span-5 h-12 flex items-center pl-4" style={{ backgroundColor: "#27AE60" }}>
              <span className="text-white text-sm">Meadow Green</span>
            </div>
            <div className="col-span-2 h-12 flex items-center pl-4" style={{ backgroundColor: "#8E44AD" }}>
              <span className="text-white text-sm">Purple</span>
            </div>
          </div>

          {/* Fourth Row - 3 columns with different widths */}
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-4 h-12 flex items-center pl-4" style={{ backgroundColor: "#16A085" }}>
              <span className="text-white text-sm">Turquoise Blue</span>
            </div>
            <div className="col-span-5 h-12 flex items-center pl-4" style={{ backgroundColor: "#F39C12" }}>
              <span className="text-white text-sm">Orange</span>
            </div>
            <div className="col-span-3 h-12 flex items-center pl-4" style={{ backgroundColor: "#5D3FD3" }}>
              <span className="text-white text-sm">Violet</span>
            </div>
          </div>

          {/* Fifth Row - 2 columns with different widths */}
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-5 h-12 flex items-center pl-4" style={{ backgroundColor: "#6F4E37" }}>
              <span className="text-white text-sm">Coffee Brown</span>
            </div>
            <div className="col-span-7 h-12 flex items-center pl-4" style={{ backgroundColor: "#E8DDAF" }}>
              <span className="text-gray-800 text-sm">Beige</span>
            </div>
          </div>
        </div>

        {/* Removed the disclaimer sentence as requested */}
      </div>
    </section>
  )
}
