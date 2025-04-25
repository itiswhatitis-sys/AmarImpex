import { Target, Eye, Zap, Trophy, LucideIcon } from "lucide-react"

import GradientIcon from "./GradientIcon";

// Reusable Gradient Icon Component
// Reusable Gradient Icon Component with TypeScript



export default function AboutValuesSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 text-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-12 lg:space-x-24">
          {/* About Column - Left Aligned */}
          <div className="flex flex-col items-start mb-12 md:mb-0 md:w-5/12">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl text-left mb-6 md:mb-8"
              style={{ fontFamily: "Stolzl, sans-serif",
                      fontWeight: 400
               }}
            >
              ABOUT AMAR IMPEX
            </h2>

            <p
              className=" md:text-lg text-base text-left"
              style={{
                fontFamily: "Stolzl, sans-serif",
                fontWeight: 300,
                lineHeight: 1.6
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
                <GradientIcon Icon={Trophy} className="h-6 w-6" />
                </div>
              </div>
              <div>
              <h3
                      className="text-xl md:text-2xl font-medium mb-3 inline-block"
                      style={{
                        fontFamily: "Stolzl, sans-serif",
                        background: "linear-gradient(to right, #E31E25, #8B87FF)", // starts red, ends bluish
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
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
                <GradientIcon Icon={Eye} className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-medium mb-3 inline-block"
                 style={{ fontFamily: "Stolzl, sans-serif" ,
                        background: "linear-gradient(to right, #E31E25, #8B87FF)", // starts red, ends bluish
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
                 }}>
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
                <GradientIcon Icon={Zap} className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-medium mb-3 inline-block"
                 style={{ fontFamily: "Stolzl, sans-serif" ,
                         background: "linear-gradient(to right, #E31E25, #8B87FF)", // starts red, ends bluish
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
                 }}>
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
