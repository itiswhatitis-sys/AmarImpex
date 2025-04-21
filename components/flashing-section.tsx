export default function FlashingSection() {
  const flashings = [
    {
      name: "Ridge Cap",
      image: "/images/flashing/ridge-cap.png"
    },
    {
      name: "Profile Ridge Cap",
      image: "/images/flashing/profile-ridge-cap.png"
    },
    {
      name: "Notched Ridge Cap",
      image: "/images/flashing/notched-ridge-cap.png"
    },
    {
      name: "Corner Trim",
      image: "/images/flashing/corner-trim.png"
    },
    {
      name: "Barge Cap",
      image: "/images/flashing/barge-cap.png"
    },
    {
      name: "L - Flashing",
      image: "/images/flashing/l-flashing.png"
    },
    {
      name: "Apron | Drip Flashing",
      image: "/images/flashing/apron-drip-flashing.png"
    },
    {
      name: "Hemmed Flashing",
      image: "/images/flashing/hemmed-flashing.png"
    }
  ];
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-medium text-left mb-8 text-[#000000]" style={{ fontFamily: "Stolzl, sans-serif", fontWeight: 400 }}>
          Flashing
        </h2>

        <div className="grid grid-cols-2 gap-4">
      {flashings.map((item, index) => (
        <div key={index} className="flex flex-col items-start">
          <div className="mb-2 w-4/5">
            <img
              src={item.image}
              alt={item.name}
              className="w-full object-contain"
            />
          </div>
          <p className="text-lg font-normal text-black self-start">{item.name}</p>
        </div>
      ))}
    </div>
      </div>
    </section>
  )
}
