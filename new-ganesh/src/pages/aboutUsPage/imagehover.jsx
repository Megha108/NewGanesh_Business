import React, { useState } from "react"

// images
import img1 from "../../assets/image/aboutus/ganesh41.jpg"
import img2 from "../../assets/image/aboutus/ganesh50.jpg"
import img3 from "../../assets/image/aboutus/ganesh61.jpg"
import img4 from "../../assets/image/aboutus/ganesh39.jpg"

const items = [
  {
    img: img1,
    title: "Premium Hybrid Seeds",
    desc: "High-yield hybrid varieties with stronger germination & performance."
  },
  {
    img: img2,
    title: "Vegetable Crop Solutions",
    desc: "Seeds bred for disease resistance, flavour & longer shelf-life."
  },
  {
    img: img3,
    title: "Oilseed & Grain Excellence",
    desc: "Optimized traits for higher oil content & uniform harvesting."
  },
  {
    img: img4,
    title: "Future-Ready Seed Genetics",
    desc: "Next-gen biotechnology aligned with modern farming needs."
  },
]

export default function ImageHover() {
  const [active, setActive] = useState(null)

  return (
    <div className="flex w-full h-[50vh] overflow-hidden select-none">
      {items.map((item, i) => {
        const isActive = active === i

        return (
          <div
            key={i}
            className="
              group relative bg-cover bg-center 
              transition-[flex] duration-300
              flex-1 hover:flex-[4]
            "
            style={{ backgroundImage: `url(${item.img})` }}
            onClick={() => setActive(isActive ? null : i)}  // tap mobile
          >
            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-2">
              <h2 className="font-bold text-sm sm:text-base md:text-xl leading-tight">
                {item.title}
              </h2>

              <p
                className={`
                  mt-2 text-[10px] sm:text-xs md:text-base leading-tight transition-opacity duration-300
                  ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                `}
              >
                {item.desc}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
