import { motion } from "framer-motion";
import { useRef } from "react";

import p1 from "../../assets/image/home/PSimg1.webp";
import p2 from "../../assets/image/home/PSimg2.webp";
import p3 from "../../assets/image/home/PSimg3.webp";
import p4 from "../../assets/image/home/PSimg4.webp";
import p5 from "../../assets/image/home/PSimg5.webp";
import p6 from "../../assets/image/home/PSimg6.webp";
import p7 from "../../assets/image/home/PSimg7.webp";
import p8 from "../../assets/image/home/PSimg8.webp";

const PRODUCTS = [
  { src: p2, alt: "Ganesh Rajka" },
  { src: p1, alt: "Ganesh Barmasi" },
  { src: p3, alt: "Ganesh Teensali" },
  { src: p4, alt: "Barseem Seeds" },
  { src: p5, alt: "Rajka Bajra" },
  { src: p6, alt: "Kasni seeds" },
  { src: p7, alt: "Jaudo Seeds" },
  { src: p8, alt: "Oat Seeds" },
];

export default function ProductsMarquee() {
  const doubled = [...PRODUCTS, ...PRODUCTS];

  return (
    <section className="relative py-12 md:py-16 bg-[#F8F7F3]">
      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marqueeScroll 16s linear infinite;
          width: max-content;
          will-change: transform;
        }
        .marquee:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Featured Products Title */}
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-wide text-black mb-4">
            <span className="mr-2">“</span>Featured Products<span className="ml-2">”</span>
          </h2>

          {/* Description */}
          <p className="max-w-3xl text-gray-600 text-base sm:text-lg leading-relaxed">
            "Unveiling a superior selection of hybrid seeds, crafted with cutting-edge innovation
            to boost agricultural productivity, fulfill market demands, and address the challenges
            posed by dynamic environmental changes.
          </p>
        </div>

        {/* Featured Products Marquee */}
        <div className="marquee relative overflow-hidden rounded-xl mb-16">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12" />
          <div className="marquee-track flex gap-10 md:gap-14 items-center">
            {doubled.map((item, idx) => (
              <motion.div key={idx} className="shrink-0" whileHover={{ scale: 1.03 }}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-36 sm:h-44 md:h-56 lg:h-64 w-auto object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
