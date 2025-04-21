import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/steel-roof-hero.jpeg"
          alt="Steel roof on modern wooden house"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10">
        <img src="/images/hero-gradient-overlay.png" alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>

      {/* Content - Using absolute positioning with transform for perfect centering */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="flex flex-col items-start max-w-4xl">
            {/* Responsive heading */}
            <h1 className="font-medium text-left" style={{ fontFamily: "Stolzl, sans-serif", lineHeight: 1.1 }}>
              <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] block drop-shadow-lg">
              Your Trusted Partner in
              </span>
              <span className="block mt-1 sm:mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[70px]">
              <span className="text-white drop-shadow-lg">
                Premium{" "}
              </span>
              <span
                style={{
                backgroundImage: "linear-gradient(to right, #8B87FF, #E31E25)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
                }}
              >
                Steel Solutions
              </span>
              </span>
            </h1>

            {/* Description text with better responsive sizing */}
            <p
              className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[32px] leading-normal max-w-3xl drop-shadow-md tracking-normal"
              style={{
                fontFamily: "'Stolzl', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontWeight: 100,
                WebkitFontSmoothing: "antialiased",
                color: "#E6E6E6",
                wordSpacing: "normal",
              }}
            >
              Delivering trusted steel solutions <span className="text-white font-bold">since 1998</span>, powered by{" "}
              <span className="text-white font-bold">Tata Steel, JSW &amp; APL Apollo,</span> with a strong presence
              across South India.
            </p>

            {/* CTA Button with reduced margins */}
            <Link
              href="/contact-us"
              className="mt-5 sm:mt-6 px-6 sm:px-8 py-3 bg-white text-[#242424] text-base sm:text-lg md:text-xl font-medium rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg flex items-center"
              style={{ fontFamily: "Stolzl, sans-serif",fontWeight:300 }}
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
