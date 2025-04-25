"use client"

import { useEffect } from "react"

export default function AboutUsPage() {
  // Ensure page starts at the top when navigated to
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full">
            <img
              src="/images/about-hero.jpeg"
              alt="Wooden house with quality roofing"
              className="w-full h-full object-cover object-center"
              style={{ objectPosition: "center 30%" }}
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10">
          <img
            src="/images/hero-gradient-overlay.png"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 z-20 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 pb-16 sm:pb-20">
            <div className="flex flex-col items-start max-w-full sm:max-w-3xl ">
              {/* Heading */}
              <h1
                className="text-white text-4xl sm:text-5xl md:text-6xl font-medium mb-2 sm:mb-3"
                style={{ fontFamily: "Stolzl, sans-serif", fontWeight:400 }}
              >
                About Us
              </h1>

              {/* Description text */}
              <p
                className="text-white text-sm sm:text-base md:text-lg leading-relaxed "
                style={{
                  fontFamily: "'Stolzl', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontWeight: 300,
                  WebkitFontSmoothing: "antialiased",
                  lineHeight: 1.5,
                }}
              >
                AMAR IMPEX, established in 1998 and headquartered in Chennai with branches in
                <span className="text-white font-normal"> Coimbatore </span>
                and
                <span className="text-white font-extrabold"> Vizag</span>, is a quality-driven organization
                <span className="font-medium">
                  {" "}
                  specializing in the supply, trade, and custom conversion of Color Coated Steel Coils and GP Coils{" "}
                </span>
                through its in-house manufacturing facility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Amar Impex Apart Section */}
      <section className="w-full py-16 md:py-24 bg-white text-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-normal text-left mb-16" style={{ fontFamily: "Stolzl, sans-serif", fontWeight:400}}>
            What sets Amar Impex Apart
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16">
            {/* Quality Commitment */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" className="w-full h-full">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E31E25" />
                  <stop offset="100%" stopColor="#8B87FF" />
                </linearGradient>
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
              </div>
              <h3 className=" text-xl font-normal mb-2 inline-block " 
              style={{ fontFamily: "Stolzl, sans-serif" ,
                background: "linear-gradient(to right, #E31E25, #8B87FF)", // starts red, ends bluish
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
               }}>
                Quality Commitment
              </h3>
              <p
                className="text-sm md:text-base max-w-xs "
                style={{ fontFamily: "Stolzl, sans-serif", fontWeight: 300, lineHeight: 1.6 }}
              >
                Our products reflect a strong dedication to quality, meeting and often exceeding industry standards.
              </p>
            </div>

            {/* Innovative Solutions */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" className="w-full h-full">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E31E25" />
                  <stop offset="100%" stopColor="#8B87FF" />
                </linearGradient>
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
              </div>
              <h3 className="text-xl font-normal mb-2" 
              style={{ fontFamily: "Stolzl, sans-serif",
                        background: "linear-gradient(to right, #E31E25, #8B87FF)", // starts red, ends bluish
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
               }}>
                Innovative Solutions
              </h3>
              <p
                className="text-sm md:text-base max-w-xs"
                style={{ fontFamily: "Stolzl, sans-serif", fontWeight: 300, lineHeight: 1.6 }}
              >
                We actively pursue forward-thinking approaches to deliver effective, future-ready solutions.
              </p>
            </div>

            {/* Expertise & Experience */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" className="w-full h-full">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E31E25" />
                  <stop offset="100%" stopColor="#8B87FF" />
                </linearGradient>
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
              </div>
              <h3 className="text-xl font-normal mb-2" 
              style={{ fontFamily: "Stolzl, sans-serif",
                        background: "linear-gradient(to right, #E31E25, #8B87FF)", // starts red, ends bluish
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
               }}>
                Expertise & Experience
              </h3>
              <p
                className="text-sm md:text-base max-w-xs"
                style={{ fontFamily: "Stolzl, sans-serif", fontWeight: 300, lineHeight: 1.6 }}
              >
                With 25+ years in the industry, our deep knowledge and proven track record place us among the most
                trusted names.
              </p>
            </div>

            {/* Strong Presence */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" className="w-full h-full">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E31E25" />
                  <stop offset="100%" stopColor="#8B87FF" />
                </linearGradient>
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
              </div>
              <h3 className="text-xl font-normal mb-2"
               style={{ fontFamily: "Stolzl, sans-serif",
                        background: "linear-gradient(to right, #E31E25, #8B87FF)", // starts red, ends bluish
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
                }}>
                Strong Presence
              </h3>
              <p
                className="text-sm md:text-base max-w-xs"
                style={{ fontFamily: "Stolzl, sans-serif", fontWeight: 300, lineHeight: 1.6 }}
              >
                With branches in Chennai, Coimbatore, and Salem, we ensure prompt service and reliable support across
                the country.
              </p>
            </div>
          </div>

          {/* Read More Button */}
          <div className="flex justify-center mt-12">
            <button
              className="px-8 py-2 border border-gray-300 rounded-full text-sm font-light hover:bg-gray-50 transition-colors text-[#5E5E5E]"
              style={{ fontFamily: "Stolzl, sans-serif" }}
            >
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section - IMPROVED RESPONSIVE DESIGN */}
      <section className="w-full bg-[#333333] text-white relative overflow-hidden py-12 md:py-0">
        <div className="absolute top-0 bottom-0 left-0 right-0 z-0 hidden md:block">
          {/* Diagonal divider - only visible on medium screens and up */}
          <div
            className="absolute top-0 bottom-0 left-1/2 w-1 bg-white z-10 transform -translate-x-1/2 rotate-12 origin-center"
            style={{ width: "2px" }}
          ></div>
        </div>

        {/* Horizontal divider - only visible on mobile */}
        <div className="relative z-10 max-w-xs mx-auto md:hidden">
          <div className="h-px w-full bg-white opacity-50 my-8"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Vision */}
            <div className="p-6 sm:p-8 md:p-12 lg:p-16">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 sm:mb-6 text-center md:text-left"
                style={{ fontFamily: "Stolzl, sans-serif" ,fontWeight: 400}}
              >
                Our Vision
              </h2>
              <p
                className="text-sm md:text-base lg:text-lg text-center md:text-left"
                style={{ fontFamily: "Stolzl, sans-serif", fontWeight: 300, lineHeight: 1.6 }}
              >
                To be the knowledge leader in the roofing industry by synergising the best-in-class processes,
                practices, people and partnerships
              </p>
            </div>

            {/* Mission */}
            <div className="p-6 sm:p-8 md:p-12 lg:p-16">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 sm:mb-6 text-center md:text-left"
                style={{ fontFamily: "Stolzl, sans-serif",fontWeight: 400 }}
              >
                Our Mission
              </h2>
              <p
                className="text-sm md:text-base lg:text-lg text-center md:text-left"
                style={{ fontFamily: "Stolzl, sans-serif", fontWeight: 300, lineHeight: 1.6 }}
              >
                To consistently deliver innovative and future-ready roofing and steel construction solution through
                enterprise, excellent and empowerment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-16 md:py-24 bg-white text-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl font-medium text-left mb-16" style={{ fontFamily: "Stolzl, sans-serif",fontWeight: 400 }}>
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {/* Customer-Centric Service */}
            <div className="flex flex-col items-center md:items-start">
              <div className="w-16 h-16 mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" className="w-full h-full">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E31E25" />
                  <stop offset="100%" stopColor="#8B87FF" />
                </linearGradient>
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
              </div>
              <h3
                className="text-xl font-normal mb-3 text-center md:text-left"
                style={{ fontFamily: "Stolzl, sans-serif" ,
                         background: "linear-gradient(to right, #E31E25, #8B87FF)", // starts red, ends bluish
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
                 }}
              >
                Customer-Centric Service
              </h3>
              <p
                className="text-sm md:text-base text-center md:text-left"
                style={{ fontFamily: "Stolzl, sans-serif", fontWeight: 300, lineHeight: 1.6 }}
              >
                Our clients are the core of our business. We strive to set new benchmarks in service excellence and
                customer satisfaction.
              </p>
            </div>

            {/* Creating Value */}
            <div className="flex flex-col items-center md:items-start">
              <div className="w-16 h-16 mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" className="w-full h-full">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E31E25" />
                  <stop offset="100%" stopColor="#8B87FF" />
                </linearGradient>
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
              </div>
              <h3
                className="text-xl font-normal mb-3 text-center md:text-left"
                style={{ fontFamily: "Stolzl, sans-serif" ,
                        background: "linear-gradient(to right, #E31E25, #8B87FF)", // starts red, ends bluish
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
                }}
              >
                Creating Value
              </h3>
              <p
                className="text-sm md:text-base text-center md:text-left"
                style={{ fontFamily: "Stolzl, sans-serif", fontWeight: 300, lineHeight: 1.6 }}
              >
                We consistently deliver value to the roofing and white goods industries through innovative solutions,
                supported by real-world samples and results.
              </p>
            </div>

            {/* Keeping Our Promises */}
            <div className="flex flex-col items-center md:items-start">
              <div className="w-16 h-16 mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" className="w-full h-full">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E31E25" />
                  <stop offset="100%" stopColor="#8B87FF" />
                </linearGradient>
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
              />
            </svg>
              </div>
              <h3
                className="text-xl font-normal mb-3 text-center md:text-left"
                style={{ fontFamily: "Stolzl, sans-serif" 
                  ,background: "linear-gradient(to right, #E31E25, #8B87FF)", // starts red, ends bluish
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                 }}
              >
                Keeping Our Promises
              </h3>
              <p
                className="text-sm md:text-base text-center md:text-left"
                style={{ fontFamily: "Stolzl, sans-serif", fontWeight: 300, lineHeight: 1.6 }}
              >
                We stand by every commitment we make, ensuring trust and reliability in every interaction.
              </p>
            </div>

            {/* Living Our Values */}
            <div className="flex flex-col items-center md:items-start">
              <div className="w-16 h-16 mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="url(#gradient)" className="w-full h-full">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E31E25" />
                  <stop offset="100%" stopColor="#8B87FF" />
                </linearGradient>
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
              </div>
              <h3
                className="text-xl font-normal mb-3 text-center md:text-left"
                style={{ fontFamily: "Stolzl, sans-serif",
                       background: "linear-gradient(to right, #E31E25, #8B87FF)", // starts red, ends bluish
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
                 }}
              >
                Living Our Values
              </h3>
              <p
                className="text-sm md:text-base text-center md:text-left"
                style={{ fontFamily: "Stolzl, sans-serif", fontWeight: 300, lineHeight: 1.6 }}
              >
                We operate with integrity—upholding trust, honesty, dedication, accountability, teamwork, knowledge,
                quality, and a strong desire to excel.
              </p>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="pt-20">
                    <img src="/images/divider-line.png" alt="Divider" className="max-w-5xl mx-auto h-auto" />
         </div>
      </section>

     

      {/* Our Purpose Section - Simplified implementation */}
      <section className="w-full pb-20 md-pb-25 bg-white text-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <h2
          className="text-3xl md:text-4xl font-medium text-left mb-12 md:mb-16"
          style={{ fontFamily: "Stolzl, sans-serif",fontWeight: 400 }}
        >
          Our Purpose
        </h2>

        <div className="max-w-3xl mx-auto md:mx-0 relative">
          <ul className="relative list-none pl-0 border-l-2 border-gray-300 space-y-10">
            {[
              "Always stay a step ahead—better than the best.",
              "Drive product innovation with cutting-edge technology.",
              "Be transparent and dependable in everything we do.",
              "Build long-term, trusted partnerships with our clients.",
              "Stay focused on our vision with clarity and determination.",
            ].map((text, index) => (
              <li className="relative pl-8" key={index}>
                {/* Dot on the line */}
                <span className="absolute left-[-7px] top-1 w-3 h-3 bg-gray-300 rounded-full"></span>
                <span
                  className="text-base md:text-lg"
                  style={{
                    fontFamily: "Stolzl, sans-serif",
                    fontWeight: 300,
                    lineHeight: 1.6,
                  }}
                >
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    </main>
  )
}
