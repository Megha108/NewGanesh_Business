import React, { useState, useEffect } from "react";
import BG1 from "../../assets/image/home/godownimg1.jpeg";
import BG2 from "../../assets/image/home/ganesh12.jpg";
import BG3 from "../../assets/image/home/ganesh54.jpg";
import BG4 from "../../assets/image/home/ganesh6.jpg";
import BG5 from "../../assets/image/home/ganesh16.jpg";
import BG6 from "../../assets/image/home/ganesh52.jpg";
import BG7 from "../../assets/image/home/ganesh54.jpg";
import BG8 from "../../assets/image/home/grase.png";

import "./Landing.css";

const Landing = () => {
  const webImages = [BG7, BG1, BG6];
  const mobileImages = [BG5, BG4, BG3, BG2];

  const getMobile = () => window.innerWidth < 900;
  const [isMobile, setIsMobile] = useState(getMobile());
  const [backgrounds, setBackgrounds] = useState(
    getMobile() ? mobileImages : webImages
  );
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((p) => (p + 1) % backgrounds.length),
      5000
    );
    return () => clearInterval(id);
  }, [backgrounds.length]);

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
        }, 600);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isMobile]);

  return (
    <section className="relative">
      <div className="relative h-screen min-h-[90vh] overflow-hidden flex items-center">
        {/* Background Slideshow */}
        {backgrounds.map((bg, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === current && !fading ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        {/* Hero Section */}
        <div className="relative w-full flex justify-start pl-10 md:pl-20">
          <div className="max-w-xl">
            <h3 className="text-sm tracking-[0.25em] uppercase opacity-75 text-white">
              SINCE 1990
            </h3>

            <h1
              className="text-4xl md:text-6xl leading-tight mt-3 grassText"
              data-text="NEW GANESH SEEDS"
            >
              NEW GANESH SEEDS
            </h1>

            <p className="mt-4 text-lg opacity-90 leading-relaxed text-white">
              Trusted Seeds for a Better Tomorrow
            </p>

            <a
              href="/product"
              className="inline-block mt-8 px-6 py-3 bg-white text-black font-medium rounded-xl shadow-md hover:bg-gray-100 transition"
            >
              Explore Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
