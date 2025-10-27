import React, { useState, useEffect } from "react";
import BG1 from "../../assets/image/home/godownimg1.jpeg";
const Landing = () => {
  const backgrounds = [
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop",
    BG1,
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // change slide every 5 seconds
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <section id="home" className="relative">
      {/* Spacer to offset fixed navbar height */}
      <div className="h-16" />

      {/* Hero */}
      <div className="relative h-screen min-h-[70vh] md:min-h-[85vh] flex items-center overflow-hidden ">
        {/* Background Images with fade transition */}
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}

        {/* Overlays */}
        <div className="absolute inset-0 bg-amber-900/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <h3
              className="text-white font-bold leading-tight
                           text-xl sm:text-2xl md:text-3xl"
            >
              Since 1990
            </h3>
            <h1
              className="text-white font-semibold leading-tight
                           text-4xl sm:text-5xl md:text-6xl"
            >
              NEW GANESH SEEDS
            </h1>
            <h3
              className="text-white font-semibold leading-tight
                           text-xl sm:text-2xl md:text-3xl"
            >
              Trusted Seeds
              <br /> for a Better Tomorrow
            </h3>

            <div className="mt-8">
              <a
            href="/product"
            className="inline-block px-6 py-3 bg-[#16561A] text-white font-medium rounded-xl shadow-md hover:bg-[#228B22] transition"
          >
            Explore Products 
          </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
