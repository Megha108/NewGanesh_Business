import React, { useState } from "react";
import "./gallery3d.css";
import Footer from "../../common/footer.jsx";
import Navbar from "../../common/navbar.jsx";

// Images
import img1 from "../../assets/image/gallery/Ganesh11.jpg";
import img2 from "../../assets/image/gallery/Ganesh12.jpg";
import img3 from "../../assets/image/gallery/Ganesh44.jpg";
import img4 from "../../assets/image/gallery/Ganesh9.jpg";
import img5 from "../../assets/image/gallery/Ganesh10.jpg";
import img6 from "../../assets/image/gallery/Ganesh14.jpg";
import img7 from "../../assets/image/gallery/Godown.JPG";
import img9 from "../../assets/image/gallery/IMG_7931.JPG";
import img8 from "../../assets/image/gallery/IMG_7940.JPG";
import img10 from "../../assets/image/gallery/Ganesh21.jpg";
import img11 from "../../assets/image/gallery/Ganesh27.jpg";
import img12 from "../../assets/image/gallery/Ganesh29.jpg";
import img13 from "../../assets/image/gallery/Ganesh32.jpg";
import img14 from "../../assets/image/gallery/Ganesh35.jpg";
import img15 from "../../assets/image/gallery/Ganesh36.jpg";

export default function Gallery3D() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];
  const [currentIndex, setCurrentIndex] = useState(null);
  const [visible, setVisible] = useState(false);

  // Open image on click
  const handleOpen = (index) => {
    setCurrentIndex(index);
    setTimeout(() => setVisible(true), 50);
  };

  // Close fullscreen
  const handleClose = () => {
    setVisible(false);
    setTimeout(() => setCurrentIndex(null), 300);
  };

  // Prev / Next buttons
  const handlePrev = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const renderImage = (src, index, extraClasses = "") => (
    <div
      key={index}
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

        {/* INAUGURATION */}
        <h1 className="font-mono uppercase mb-12 text-center text-[1.3em] sm:text-[1.6em] tracking-[0.6em] sm:tracking-[1em]">
          INAUGURATION
        </h1>

        <div className="w-full max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {renderImage(images[7], 7, "h-48")}
            {renderImage(images[8], 1, "h-48")}
            {renderImage(images[6], 6, "h-48")}
          </div>
        </div>

        {/* WAREHOUSE */}
        <h1 className="font-mono uppercase mb-12 text-center text-[1.3em] sm:text-[1.6em] tracking-[0.6em] sm:tracking-[1em]">
          WAREHOUSE
        </h1>

        <div className="w-full max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {renderImage(images[0], 0, "h-48")}
            {renderImage(images[1], 1, "h-48")}
            {renderImage(images[2], 2, "h-48")}
            {renderImage(images[3], 3, "h-48")}
            {renderImage(images[4], 4, "h-48")}
            {renderImage(images[5], 5, "h-48")}
          </div>
        </div>

        {/* MACHINERY */}
        <h1 className="font-mono uppercase mb-12 text-center text-[1.3em] sm:text-[1.6em] tracking-[0.6em] sm:tracking-[1em]">
          MACHINERY
        </h1>

        <div className="w-full max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {renderImage(images[9], 9, "h-48")}
            {renderImage(images[10], 10, "h-48")}
            {renderImage(images[11], 11, "h-48")}
            {renderImage(images[12], 12, "h-48")}
            {renderImage(images[13], 13, "h-48")}
            {renderImage(images[14], 14, "h-48")}
          </div>
        </div>
      </div>

      {/* Fullscreen Viewer */}
      {currentIndex !== null && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-[1000] bg-black/80 backdrop-blur-md transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
          onClick={handleClose}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-8 text-white text-3xl font-light bg-white/10 hover:bg-white/25 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm shadow-lg transition-all"
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
          ><div className="-mt-2  -ml-1 sm:ml-0">
              ×</div>
          </button>

          {/* Center Arrows */}
          <button
            className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 text-white text-5xl sm:text-5xl font-light bg-white/10 hover:bg-white/25 rounded-full w-16 h-16 sm:w-16 sm:h-16 flex items-center justify-center backdrop-blur-sm shadow-lg transition-all z-50"
            onClick={handlePrev}
          >
            <div className="-mt-2.5 -ml-1 sm:ml-0">‹</div>
          </button>


          <img
            src={images[currentIndex]}
            alt="Full View"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl transition-transform duration-700 scale-100"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 text-white text-5xl font-light bg-white/10 hover:bg-white/25 rounded-full w-16 h-16 flex items-center justify-center backdrop-blur-sm shadow-lg transition-all"
            onClick={handleNext}
          ><div className="-mt-3 sm:-mt-2.75">
              ›</div>
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}
