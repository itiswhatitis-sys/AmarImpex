export default function PortfolioSection() {
  return (
    <section className="w-full pt-5 md:pt-7 pb-20 md:pb-22 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <h2
          className="text-3xl md:text-4xl text-left mb-12 md:mb-16 text-[#000000]"
          style={{ fontFamily: "Stolzl, sans-serif",fontWeight:400 }}
        >
          PORTFOLIO
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* GC Sheet */}
          <div className="flex items-center justify-center">
            <img src="/images/gc-sheet.png" alt="GC Sheet" className="w-full h-auto" />
          </div>

          {/* Eave Gutter */}
          <div className="flex items-center justify-center">
            <img src="/images/eave-gutter.png" alt="Eave Gutter" className="w-full h-auto" />
          </div>

          {/* Barge Cap */}
          <div className="flex items-center justify-center">
            <img src="/images/barge-cap.png" alt="Barge Cap" className="w-full h-auto" />
          </div>

          {/* Fly Ridge */}
          <div className="flex items-center justify-center">
            <img src="/images/fly-ridge.png" alt="Fly Ridge" className="w-full h-auto" />
          </div>

          {/* MS Pipes */}
          <div className="flex items-center justify-center">
            <img src="/images/ms-pipes.png" alt="MS Pipes" className="w-full h-auto" />
          </div>

          {/* Crimp Sheets */}
          <div className="flex items-center justify-center">
            <img src="/images/crimp-sheets.png" alt="Crimp Sheets" className="w-full h-auto" />
          </div>

          {/* Down Pipe */}
          <div className="flex items-center justify-center">
            <img src="/images/down-pipe.png" alt="Down Pipe" className="w-full h-auto" />
          </div>

          {/* L Flash */}
          <div className="flex items-center justify-center">
            <img src="/images/l-flash.png" alt="L Flash" className="w-full h-auto" />
          </div>

          {/* Louver */}
          <div className="flex items-center justify-center">
            <img src="/images/louver.png" alt="Louver" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
