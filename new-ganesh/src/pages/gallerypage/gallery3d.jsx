import React, { useState, useEffect } from "react";
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
  const images = [img1, img2, img3, img4, img5, img6];
  const [currentIndex, setCurrentIndex] = useState(null);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 🧠 Detect mobile once on load
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 🟢 Open (click for mobile, hover for desktop)
  const handleOpen = (index) => {
    setCurrentIndex(index);
    setTimeout(() => setVisible(true), 50);
  };

  const handleMouseEnter = (index) => {
    if (!isMobile) {
      setCurrentIndex(index);
      setTimeout(() => setVisible(true), 50);
    }
  };

  // 🔴 Close fullscreen
  const handleClose = () => {
    setVisible(false);
    setTimeout(() => setCurrentIndex(null), 300);
  };

  // ⬅️ Prev / ➡️ Next
  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // 🖼️ Render image block (for reuse)
  const renderImage = (src, index, extraClasses = "") => (
    <div
      key={index}
      onMouseEnter={() => handleMouseEnter(index)}
      onClick={() => handleOpen(index)}
      className={`cursor-pointer overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-500 ${extraClasses}`}
    >
      <img src={src} alt="gallery" className="w-full h-full object-cover" />
    </div>
  );

  return (
    <div className="relative z-10 isolate font-bricolage bg-white min-h-screen">
      <Navbar />

      <div className="min-h-screen flex flex-col items-center overflow-x-hidden pt-24 pb-12">
        {/* ✅ Title — adjusted for mobile */}
        <h1 className="font-mono uppercase mb-12 text-center text-[1.3em] sm:text-[1.6em] tracking-[0.6em] sm:tracking-[1em]">
          WAREHOUSE
        </h1>

        {/* 🖼️ Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto px-4">
          {/* Left column - tall */}
          {renderImage(images[0], 0, "row-span-2")}
          {/* Middle column - large */}
          {renderImage(images[1], 1, "row-span-2")}
          {/* Right column - stacked */}
          <div className="flex flex-col gap-4">
            {renderImage(images[2], 2)}
            {renderImage(images[3], 3)}
          </div>
        </div>

        {/* 🖼️ Bottom centered image */}
        <div className="mt-8 flex justify-center w-full">
          {renderImage(images[4], 4, "max-w-3xl w-full")}
        </div>
      </div>

      {/* 🔲 Fullscreen viewer */}
      {currentIndex !== null && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-[1000] bg-gradient-to-b from-black/80 via-black/70 to-black/80 backdrop-blur-md transition-opacity duration-500 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleClose}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-8 text-white text-3xl font-light bg-white/10 hover:bg-white/25 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm shadow-lg transition-all"
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
          >
            ×
          </button>

          {/* Prev */}
          <button
            className="absolute left-8 text-white text-5xl font-light bg-white/10 hover:bg-white/25 rounded-full w-16 h-16 flex items-center justify-center backdrop-blur-sm shadow-lg transition-all"
            onClick={handlePrev}
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={images[currentIndex]}
            alt="Full view"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl transition-transform duration-700 scale-100"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            className="absolute right-8 text-white text-5xl font-light bg-white/10 hover:bg-white/25 rounded-full w-16 h-16 flex items-center justify-center backdrop-blur-sm shadow-lg transition-all"
            onClick={handleNext}
          >
            ›
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}
