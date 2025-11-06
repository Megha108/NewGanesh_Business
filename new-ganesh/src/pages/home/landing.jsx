import React, { useState, useEffect } from "react";
import BG1 from "../../assets/image/home/godownimg1.jpeg"
import BG2 from "../../assets/image/home/ganesh12.jpg"
import BG3 from "../../assets/image/home/ganesh54.jpg"
import BG4 from "../../assets/image/home/ganesh6.jpg"
import BG5 from "../../assets/image/home/ganesh16.jpg"
import BG6 from "../../assets/image/home/ganesh52.jpg"
import BG7 from "../../assets/image/home/ganesh54.jpg"

const Landing = () => {
  const webImages = [
    BG6,
    BG1,
    BG7,
  ];

  const mobileImages = [
    BG5,
    BG4,
    BG3,
    BG2,
  ];

  const getMobile = () => window.innerWidth < 900;

  const [isMobile, setIsMobile] = useState(getMobile());
  const [backgrounds, setBackgrounds] = useState(
    getMobile() ? mobileImages : webImages
  );
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  // slide interval
  useEffect(() => {
    const id = setInterval(
      () => setCurrent((p) => (p + 1) % backgrounds.length),
      5000
    );
    return () => clearInterval(id);
  }, [backgrounds.length]);

  // watch resize → smooth crossfade
  useEffect(() => {
    const onResize = () => {
      const newMobile = getMobile();
      if (newMobile !== isMobile) {
        setFading(true);
        setTimeout(() => {
          setIsMobile(newMobile);
          setBackgrounds(newMobile ? mobileImages : webImages);
          setCurrent(0);
          setFading(false);
        }, 400); // fade time
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isMobile]);

  return (
    <section className="relative">
      <div className="relative h-screen min-h-[90vh] md:min-h-[70vh] overflow-hidden flex items-center">

        {backgrounds.map((bg, i) => (
          <div
            key={i}
            className={`
              absolute inset-0 transition-opacity duration-300
              ${i === current && !fading ? "opacity-100" : "opacity-0"}
            `}
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}

{/* your overlay and text content here */}

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
    }
    
    export default Landing;