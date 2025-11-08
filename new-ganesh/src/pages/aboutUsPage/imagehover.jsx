import React from "react"

// your 4 images (change only these)
import img1 from "../../assets/image/aboutus/ganesh47.jpg"
import img2 from "../../assets/image/aboutus/ganesh50.jpg"
import img3 from "../../assets/image/aboutus/ganesh61.jpg"
import img4 from "../../assets/image/aboutus/ganesh71.jpg"

const items = [
  { img: img1, title: "PPD FSP Solutions", desc: "description here" },
  { img: img2, title: "The Biotech Mindset", desc: "description here" },
  { img: img3, title: "Optimized Study Planning", desc: "description here" },
  { img: img4, title: "Insights Hub", desc: "description here" },
]

export default function ImageHover() {
  return (
    <div className="flex w-full h-[50vh] overflow-hidden">
      {items.map((item, i) => (
        <div
          key={i}
          className="group relative flex-1 bg-cover bg-center transition-[flex] duration-500 hover:flex-[5]"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* fixed text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
            <h2 className="font-bold text-xl">{item.title}</h2>
            <p className="opacity-0 group-hover:opacity-100 mt-2 transition-opacity duration-500">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
