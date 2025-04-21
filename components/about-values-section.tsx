import { Target, Eye, Zap } from "lucide-react"

export default function AboutValuesSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 text-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-12 lg:space-x-24">
          {/* About Column - Left Aligned */}
          <div className="flex flex-col items-start mb-12 md:mb-0 md:w-5/12">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-medium text-left mb-6 md:mb-8"
              style={{ fontFamily: "Stolzl, sans-serif" }}
            >
              ABOUT AMAR IMPEX
            </h2>

            <p
              className="text-base md:text-lg text-lef text-[24px] font-light "
              style={{
                fontFamily: "Stolzl, sans-serif",
                lineHeight: 1.6,
              }}
            >
              Amar Impex is redefining the roofing and white goods industry with innovative, future-ready solutions.
              Backed by strong leadership and partnerships, we aim to set new standards in quality, technology, and
              customer service across India's growing infrastructure landscape.
            </p>
          </div>

          {/* Right Column with Values, Vision, Mission */}
          <div className="flex flex-col md:w-7/12">
            {/* CREATE VALUES */}
            <div className="flex items-start mb-8">
              <div className="mr-4 ">
                <div className="p-2 rounded-full">
                  <Target className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-medium mb-3" style={{ fontFamily: "Stolzl, sans-serif" }}>
                  CREATE VALUES
                </h3>
                <p
                  className="text-base md:text-lg font-normal text-[#585858]"
                  style={{
                    fontFamily: "Stolzl, sans-serif",
                    fontWeight: 300,
                    lineHeight: 1.6,
                  }}
                >
                  We regularly create value for our clients roofing industry and white goods industry through our
                  innovative explanations and main by sample.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="py-4">
              <img src="/images/divider-line.png" alt="Divider" className="w-full h-auto" />
            </div>

            {/* OUR VISION */}
            <div className="flex items-start mb-8">
              <div className="mr-4">
                <div className="p-2 rounded-full">
                  <Eye className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-medium mb-3" style={{ fontFamily: "Stolzl, sans-serif" }}>
                  OUR VISION
                </h3>
                <p
                  className="text-base md:text-lg font-normal text-[#585858]"
                  style={{
                    fontFamily: "Stolzl, sans-serif",
                    fontWeight: 300,
                    lineHeight: 1.6,
                  }}
                >
                  Our goal is to lead the roofing sector through knowledge, innovation, and operational excellence. By
                  uniting strong processes, people, and partnerships, we aim to raise industry standards in quality and
                  efficiency.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="py-4">
              <img src="/images/divider-line.png" alt="Divider" className="w-full h-auto" />
            </div>

            {/* OUR MISSION */}
            <div className="flex items-start">
              <div className="mr-4 ">
                <div className="p-2 rounded-full">
                  <Zap className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-medium mb-3" style={{ fontFamily: "Stolzl, sans-serif" }}>
                  OUR MISSION
                </h3>
                <p
                  className="text-base md:text-lg font-normal text-[#585858]" 
                  style={{
                    fontFamily: "Stolzl, sans-serif",
                    fontWeight: 300,
                    lineHeight: 1.6,
                  }}
                >
                  Amar Impex delivers future-ready roofing and steel solutions with a focus on innovation,
                  sustainability, and industry advancement—shaping a smarter, more efficient built environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
