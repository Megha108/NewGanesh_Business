import { motion } from "framer-motion";
import p1 from "../../assets/image/home/PSimg1.png";
import p2 from "../../assets/image/home/PSimg2.png";
import p3 from "../../assets/image/home/PSimg3.png";
import p4 from "../../assets/image/home/PSimg4.png";
import p5 from "../../assets/image/home/PSimg5.png";
import p6 from "../../assets/image/home/PSimg6.png";
import p7 from "../../assets/image/home/PSimg7.png";
import p8 from "../../assets/image/home/PSimg8.png";

const PRODUCTS = [
  { src: p2, alt: "Western 007" },
  { src: p1, alt: "Western Sangam" },
  { src: p3, alt: "Western Nirmal" },
  { src: p4, alt: "Western Pratap" },
  { src: p5, alt: "Western Product 5" },
  { src: p6, alt: "Western Product 6" },
  { src: p7, alt: "Western Product 7" },
  { src: p8, alt: "Western Product 8" },
];

export default function ProductsMarquee() {
  const doubled = [...PRODUCTS, ...PRODUCTS]; 

  return (
    <section className="relative py-12 md:py-16">
      {/* Inline CSS for the marquee */}
      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        /* speed: adjust 16s -> slower/faster */
        .marquee-track {
          animation: marqueeScroll 16s linear infinite;
          width: max-content; /* don't shrink */
          will-change: transform;
        }
        /* pause on hover */
        .marquee:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-5xl mb-6 font-semibold tracking-wide text-black">
              <span className="mr-2">“</span>OUR PRODUCTS<span className="ml-2">”</span>
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="marquee relative overflow-hidden rounded-xl">
              {/* edge fades */}
              <div className="pointer-events-none absolute left-0 top-0 h-full w-12 " />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-12 " />

              {/* TRACK */}
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
        </div>
      </div>
    </section>
  );
}
