import React, { useState } from "react";

// images
import img1 from "../../assets/image/product/PImg1.1.webp";
import img2 from "../../assets/image/product/PImg2.2.webp";
import img3 from "../../assets/image/product/PImg3.4.webp";
import img4 from "../../assets/image/product/PImg6.3.webp";

const items = [
  {
    img: img1,
    title: "Germination",
    desc: "Seeds ensuring excellent germination rates for a strong start to your crops.",
  },
  {
    img: img2,
    title: "Strong Crop Growth",
    desc: "Vigorous plant development with enhanced disease resistance and resilience.",
  },
  {
    img: img3,
    title: "Higher Yields",
    desc: "Superior Seed Quality for maximum productivity and efficiency.",
  },
  {
    img: img4,
    title: "Farmer Trusted",
    desc: "Preferred by farmers for consistent performance and dependable results.",
  },
];

export default function ImageHover() {
  const [active, setActive] = useState(null);

  const isMobile = window.matchMedia("(pointer: coarse)").matches;

  const handleTap = (i) => {
    if (isMobile) {
      setActive(active === i ? null : i);
    }
  };

  return (
    <div className="flex w-full h-[50vh] overflow-hidden select-none">
      {items.map((item, i) => {
        const isActive = active === i;

        return (
          <div
            key={i}
            onClick={() => handleTap(i)}
            className={`
              group relative bg-cover bg-center cursor-pointer
              transition-[flex-grow] duration-300 ease-out 
              
              ${isMobile 
                ? isActive 
                  ? "flex-[4]" 
                  : "flex-[1]"
                : "flex-1 hover:flex-[4]"
              }
            `}
            style={{ backgroundImage: `url(${item.img})` }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />

            {/* Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-2 pointer-events-none">
              <h2 className="font-bold text-sm sm:text-base md:text-xl leading-tight">
                {item.title}
              </h2>

              <p
                className={`mt-2 text-[10px] sm:text-xs md:text-base leading-tight transition-opacity duration-300
                  ${isMobile 
                    ? isActive 
                      ? "opacity-100"
                      : "opacity-0"
                    : "opacity-0 group-hover:opacity-100"
                  }
                `}
              >
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
