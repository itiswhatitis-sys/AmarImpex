import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
      <img
        src="/images/home-image.png"
        alt="Steel roof on modern wooden house"
        className="w-full h-full object-cover object-center "
        loading="eager"
        fetchPriority="high"
      />
    </div>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 ">
        <img
            src="/images/final-gradient-for-all.png"
            alt=""
            className="w-full h-full object-cover opacity-95 pointer-events-none"
            style={{ mixBlendMode: "hard-light" }}
            aria-hidden="true"
        />
        </div>
    

      {/* Content - Using absolute positioning with transform for perfect centering */}
      <div className="absolute inset-0 z-20 pt-32 flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="flex flex-col items-start max-w-4xl">
            {/* Responsive heading */}
            <h1 className="font-normal text-left" style={{ fontFamily: "Stolzl, sans-serif", lineHeight: "100%", letterSpacing: "0%" }}>
              <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[72px] block drop-shadow-lg">
              Your Trusted Partner in
              </span>
                <span className="block mt-1 sm:mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[72px] whitespace-nowrap drop-shadow-lg">
                <span className="text-white">
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

            {/* Description text with Figma specifications */}
            <p
              className="mt-4 sm:mt-6 text-sm sm:text-md md:text-lg lg:text-[24px] max-w-2xl drop-shadow-md"
              style={{
              fontFamily: "Stolzl, sans-serif",
              fontWeight: 300,
              lineHeight: "170%",
              color: "#E6E6E6",
              letterSpacing: "0%",
              width: "100%",
              maxWidth: "1007px"
              }}
            >
              Delivering trusted steel solutions <span style={{ fontWeight: 400, color: "white" }}>since 1998</span>, powered by{" "}
              <span style={{ fontWeight: 400, color: "white" }}>Tata Steel, JSW &amp; APL Apollo,</span> with a strong presence
              across South India.
            </p>

            {/* CTA Button with Figma specifications */}
            <Link
              href="/contact-us"
              className=" sm:pt-0 mt-5 sm:mt-6 w-full max-w-[240px] sm:max-w-[300px] h-[42px] sm:h-[66px] flex items-center justify-center rounded-[40px] sm:rounded-[71px] bg-white text-[#242424] hover:bg-opacity-90 transition-all duration-300 shadow-lg text-[14px] sm:text-[24px] font-light px-4 sm:px-[50px] gap-1 sm:gap-[10px]"
              style={{
                fontFamily: "Stolzl, sans-serif",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
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
