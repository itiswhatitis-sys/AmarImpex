export default function ProcessFlowPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-800 z-10" aria-hidden="true"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 w-full h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 text-center">
            <h1
              className="text-white text-4xl sm:text-5xl md:text-6xl font-medium"
              style={{ fontFamily: "Stolzl, sans-serif" }}
            >
              Process Flow
            </h1>
            <p
              className="mt-4 text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto"
              style={{ fontFamily: "Stolzl, sans-serif", fontWeight: 300 }}
            >
              Our comprehensive manufacturing process ensures high-quality steel products at every stage
            </p>
          </div>
        </div>
      </section>

      {/* Process Flow Diagrams Section */}
      <section
        className="w-full py-16 md:py-24"
        style={{
          background: "linear-gradient(to bottom, #1a1a1a, #333333)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <h2
            className="text-3xl md:text-4xl font-medium text-center mb-12 md:mb-16 text-white"
            style={{ fontFamily: "Stolzl, sans-serif" }}
          >
            Manufacturing Process Flows
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Process Flow 1 */}
            <div className="lg:w-1/2">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h3
                  className="text-xl md:text-2xl font-medium mb-4 text-center text-gray-800"
                  style={{ fontFamily: "Stolzl, sans-serif" }}
                >
                  Process Flow 1
                </h3>
                <div className="flex justify-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/process%20flow%201-vsLuAW8KIASsJnpSrL36a2TfkdhPPQ.png"
                    alt="Steel manufacturing process flow diagram showing steps from hot rolled coil to finished products"
                    className="w-full h-auto max-w-lg"
                  />
                </div>
              </div>
            </div>

            {/* Process Flow 2 */}
            <div className="lg:w-1/2">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h3
                  className="text-xl md:text-2xl font-medium mb-4 text-center text-gray-800"
                  style={{ fontFamily: "Stolzl, sans-serif" }}
                >
                  Process Flow 2
                </h3>
                <div className="flex justify-center">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/process%20flow%202-q8IMn5E3LADVNs67pdnbeIFv5EwfXd.png"
                    alt="Alternative steel manufacturing process flow diagram with twin stan cold reversing mill"
                    className="w-full h-auto max-w-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Process Description */}
          <div className="mt-12 text-gray-300">
            <h3 className="text-2xl font-medium mb-4 text-white" style={{ fontFamily: "Stolzl, sans-serif" }}>
              Our Manufacturing Excellence
            </h3>
            <p className="mb-4" style={{ fontFamily: "Stolzl, sans-serif", fontWeight: 300 }}>
              At Amar Impex, our manufacturing process begins with high-quality hot rolled coil inputs that undergo a
              series of precision operations. Each step in our process is carefully monitored to ensure the highest
              standards of quality and consistency.
            </p>
            <p className="mb-4" style={{ fontFamily: "Stolzl, sans-serif", fontWeight: 300 }}>
              From slitting and pickling to cold reversing, galvanizing, and color coating, our comprehensive process
              allows us to produce a wide range of steel products that meet diverse industry requirements. Our
              state-of-the-art equipment and experienced team ensure that every product that leaves our facility meets
              the most stringent quality standards.
            </p>
            <p style={{ fontFamily: "Stolzl, sans-serif", fontWeight: 300 }}>
              The process flow diagrams above illustrate the journey from raw material to finished products, showcasing
              our capability to produce everything from HR slits and HRPO coils to color coated products, profiles, and
              GC sheets.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <h2
            className="text-3xl md:text-4xl font-medium text-center mb-12 md:mb-16"
            style={{ fontFamily: "Stolzl, sans-serif" }}
          >
            Quality at Every Stage
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quality Control */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2" style={{ fontFamily: "Stolzl, sans-serif" }}>
                Quality Control
              </h3>
              <p
                className="text-sm md:text-base text-gray-600"
                style={{ fontFamily: "Stolzl, sans-serif", fontWeight: 300 }}
              >
                Rigorous testing at every stage ensures our products meet the highest industry standards.
              </p>
            </div>

            {/* Advanced Technology */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2" style={{ fontFamily: "Stolzl, sans-serif" }}>
                Advanced Technology
              </h3>
              <p
                className="text-sm md:text-base text-gray-600"
                style={{ fontFamily: "Stolzl, sans-serif", fontWeight: 300 }}
              >
                State-of-the-art machinery and processes ensure precision and efficiency.
              </p>
            </div>

            {/* Expert Team */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2" style={{ fontFamily: "Stolzl, sans-serif" }}>
                Expert Team
              </h3>
              <p
                className="text-sm md:text-base text-gray-600"
                style={{ fontFamily: "Stolzl, sans-serif", fontWeight: 300 }}
              >
                Our skilled professionals bring decades of industry experience to every project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
