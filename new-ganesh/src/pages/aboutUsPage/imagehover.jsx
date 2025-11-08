import React from "react"

// your 4 images (change only these)
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
    desc: "Seeds bred for disease-resistance, flavour & longer shelf-life."
  },
  {
    img: img3,
    title: "Oilseed & Grain Excellence",
    desc: "Optimized traits for higher oil content & uniform harvesting."
  },
  {
    img: img4,
    title: "Future-Ready Seed Genetics",
    desc: "Smart biotechnology aligned with modern farming needs."
  },
]

export default function ImageHover() {
  return (
    <div className="flex w-full h-[50vh] overflow-hidden">
      {items.map((item, i) => (
        <div
          key={i}
          className="group relative flex-[1] bg-cover bg-center transition-[flex] duration-300 hover:flex-[4]"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-2">
            <h2 className="font-bold text-[12px] sm:text-sm md:text-xl leading-tight">
              {item.title}
            </h2>

            <p className="opacity-0 group-hover:opacity-100 mt-1 text-[10px] sm:text-xs md:text-base transition-opacity duration-300 leading-tight px-1">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
