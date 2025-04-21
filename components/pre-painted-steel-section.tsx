export default function PrePaintedSteelSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="space-y-12">
          {/* Components of pre-painted Steel */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-medium text-left mb-8 text-[#000000]"
              style={{ fontFamily: "Stolzl, sans-serif" }}
            >
              Components of pre-painted Steel
            </h2>
            <div className="flex justify-center">
              <img
                src="/images/components-pre-painted-steel.jpeg"
                alt="Diagram showing the layers and components of pre-painted steel including top coat, primer, metallic coating, base metal, and back coat"
                className="w-full max-w-3xl"
              />
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-medium text-left mb-8 text-[#000000]"
              style={{ fontFamily: "Stolzl, sans-serif" }}
            >
              Metal Roofs, Wall Panels & Accessories
            </h2>
            <div className="overflow-x-auto text-[#000000]">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium">Parameters</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium">
                      Pre-Painted Galvanized Steel (PPGI)
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium">
                      Pre-Painted Galvalume Steel (PPGL)
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium">
                      Color Coated Galvanized Steel (CCGI)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Base Metal */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-sm font-medium">Base Metal</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">Cold Rolled Steel</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">Cold Rolled Steel</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">Cold Rolled Steel</td>
                  </tr>

                  {/* BMT Thickness */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-sm font-medium">BMT Thickness</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">0.30 / 0.35 / 0.40 / 0.45 / 0.50 mm</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      0.30 / 0.35 / 0.40 / 0.45 / 0.50 / 0.55 mm
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">0.30 / 0.35 / 0.40 / 0.45 / 0.50 mm</td>
                  </tr>

                  {/* Metallic Coating Specification */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-sm font-medium">
                      Metallic Coating Specification
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      Z120 g/m² (Z120 = 120 g/m² zinc coating)
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">AZ150 g/m² (55% Al-Zn Alloy)</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">Z120</td>
                  </tr>

                  {/* Top Coat Finish */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-sm font-medium">Top Coat Finish</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">Regular Modified Polyester (RMP)</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      Regular Modified Polyester (RMP) Silicon Modified Polyester (SMP) PVDF
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">Regular Modified Polyester (RMP)</td>
                  </tr>

                  {/* Back Coat Finish */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-sm font-medium">Back Coat Finish</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">Alkyd / PE (Polyester)</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">Alkyd / PE (Polyester)</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">Alkyd / PE (Polyester)</td>
                  </tr>

                  {/* Paint Thickness (Top Coat) */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-sm font-medium">Paint Thickness (Top Coat)</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">18-20 μm</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">18-20 μm</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">18-22 μm</td>
                  </tr>

                  {/* Paint Thickness (Back Coat) */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-sm font-medium">
                      Paint Thickness (Back Coat)
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">5-7 μm</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">5-7 μm</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">5-7 μm</td>
                  </tr>

                  {/* Standards */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-sm font-medium">Standards</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">ASTM A755/A755M, JIS G3312, EN 10169</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">ASTM A792/A792M, JIS G3322, EN 10169</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">ASTM A755/A755M, JIS G3312, EN 10169</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
