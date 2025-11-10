import React, { useState } from "react";
import "./gallery3D.css";
import Footer from "../../common/footer.jsx";
import Navbar from "../../common/navbar.jsx";

// ✅ Import local images from src/assets/gallery/
import img1 from "../../assets/image/gallery/ganesh11.jpg";
import img2 from "../../assets/image/gallery/ganesh12.jpg";
import img3 from "../../assets/image/gallery/ganesh44.jpg";
import img4 from "../../assets/image/gallery/ganesh9.jpg";
import img5 from "../../assets/image/gallery/ganesh10.jpg";
import img6 from "../../assets/image/gallery/ganesh14.jpg";

export default function Gallery3D() {
  const images = [img1, img2, img3, img4, img5, img6];
  const [hoveredImage, setHoveredImage] = useState(null);
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = (src) => {
    setHoveredImage(src);
    setTimeout(() => setVisible(true), 50);
  };

  const handleMouseLeave = () => {
    setVisible(true);
    setTimeout(() => setHoveredImage(null), 5000);
  };

  return (
    <div className="relative z-10 isolate font-bricolage bg-white min-h-screen">
      <Navbar />

      <div className="min-h-screen flex flex-col items-center overflow-x-hidden pt-24 pb-12">
        <h1 className="font-mono text-[1.3em] tracking-[2em] uppercase mb-12">
          Gallery
        </h1>

        {/* Gallery grid */}
        <div className="gallery-grid flex flex-wrap justify-center gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(src)}
              onMouseLeave={handleMouseLeave}
              className="gallery-item w-[160px] h-[110px] rounded-lg bg-center bg-cover shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: `url(${src})` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Fullscreen view */}
      {hoveredImage && (
        <div
          className={`fullscreen fixed inset-0 flex items-center justify-center z-[1000] bg-black/90 transition-opacity duration-500 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={hoveredImage}
            alt="Full view"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl transition-transform duration-700 scale-100"
          />
        </div>
      )}

      <Footer />
    </div>
  );
}
