export default function SuppliersSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <h2
          className="text-3xl md:text-4xl text-center mb-12 md:mb-16"
          style={{ fontFamily: "Stolzl, sans-serif" ,fontWeight:400}}
        >
          OUR SUPPLIERS
        </h2>

        <div className="flex justify-center">
          <img
            src="/images/supplier-logos.png"
            alt="Our Suppliers: ACCIL, Bhushan Power & Steel, Jindal, JSW Steel, POSCO, AM/NS INDIA"
            className="w-full max-w-5xl"
          />
        </div>
        {/* Divider */}
        <div className="pt-20">
                    <img src="/images/divider-line.png" alt="Divider" className="w-full h-auto" />
         </div>
      
      </div>
    </section>
  )
}
