import React, { useState } from "react";
import "./gallery3D.css";
import Footer from "../../common/footer.jsx";
import Navbar from "../../common/navbar.jsx";

// ✅ Import local images
import img1 from "../../assets/image/gallery/ganesh11.jpg";
import img2 from "../../assets/image/gallery/ganesh12.jpg";
import img3 from "../../assets/image/gallery/ganesh44.jpg";
import img4 from "../../assets/image/gallery/ganesh9.jpg";
import img5 from "../../assets/image/gallery/ganesh10.jpg";
import img6 from "../../assets/image/gallery/ganesh14.jpg";

export default function Gallery3D() {
  const [activeImg, setActiveImg] = useState(null);

  const images = [img1, img2, img3, img4, img5, img6];
<<<<<<< HEAD
=======
  const [hoveredImage, setHoveredImage] = useState(null);
  const [visible, setVisible] = useState(false);

  // 🟢 Open image on hover
  const handleMouseEnter = (src) => {
    setHoveredImage(src);
    setTimeout(() => setVisible(true), 50);
  };

  // 🔴 Remove the auto-close timer — now closes only on click
  const handleClose = () => {
    setVisible(false);
    setTimeout(() => setHoveredImage(null), 300); // fade-out smoothly
  };
>>>>>>> 0768a6570443d4868a18feefdf7f1d60b89e1796

  return (
    <div className="relative z-10 isolate font-bricolage">
      <Navbar />
      <div className="min-h-screen flex flex-col items-center overflow-x-hidden bg-white">
        <h1 className="font-mono text-[1.3em] tracking-[1em] uppercase mt-16 mb-16 text-[#16561A]">
          Gallery
        </h1>

        {/* Image Grid */}
        <div className="relative flex justify-center items-center flex-wrap gap-8 px-4 mb-16">
          {images.map((src, i) => (
            <div
<<<<<<< HEAD
              key={i}
              className="w-[200px] h-[150px] bg-center bg-cover rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
=======
              key={index}
              onMouseEnter={() => handleMouseEnter(src)}
              className="gallery-item w-[160px] h-[110px] rounded-lg bg-center bg-cover shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
>>>>>>> 0768a6570443d4868a18feefdf7f1d60b89e1796
              style={{ backgroundImage: `url(${src})` }}
              onMouseEnter={() => setActiveImg(src)}
            />
          ))}
        </div>

        {/* Fullscreen Image */}
        {activeImg && (
          <div
            className="fixed inset-0 bg-black/90 flex justify-center items-center z-50"
            onMouseLeave={() => setActiveImg(null)}
          >
            <img
              src={activeImg}
              alt="Full view"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg object-contain"
            />
          </div>
        )}

        <Footer />
      </div>
<<<<<<< HEAD
=======

      {/* Fullscreen view */}
      {hoveredImage && (
        <div
          className={`fullscreen fixed inset-0 flex items-center justify-center z-[1000] bg-black/90 transition-opacity duration-500 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleClose} // 👈 click anywhere closes
        >
          <img
            src={hoveredImage}
            alt="Full view"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl transition-transform duration-700 scale-100"
            onClick={(e) => e.stopPropagation()} // 👈 prevent closing when clicking on image
          />
        </div>
      )}

      <Footer />
>>>>>>> 0768a6570443d4868a18feefdf7f1d60b89e1796
    </div>
  );
}