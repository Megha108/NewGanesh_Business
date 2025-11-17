

import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ added

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  const prevRef = useRef(null);
  const lockedRef = useRef(false);
  const navigate = useNavigate(); // ✅ added

  // --- scroll lock ---
  const lock = () => {
    if (lockedRef.current) return;
    const body = document.body;
    const html = document.documentElement;

    prevRef.current = {
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyWidth: body.style.width,
      y: window.scrollY || window.pageYOffset || 0,
    };

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${prevRef.current.y}px`;
    body.style.width = "100%";
    lockedRef.current = true;
  };

  const unlock = () => {
    if (!lockedRef.current || !prevRef.current) return;
    const body = document.body;
    const html = document.documentElement;
    const { htmlOverflow, bodyOverflow, bodyPosition, bodyTop, bodyWidth, y } =
      prevRef.current;

    const top = body.style.top;
    html.style.overflow = htmlOverflow;
    body.style.overflow = bodyOverflow;
    body.style.position = bodyPosition;
    body.style.top = bodyTop;
    body.style.width = bodyWidth;

    const restoreY = top ? Math.abs(parseInt(top, 10)) : y || 0;
    window.scrollTo(0, restoreY);

    lockedRef.current = false;
    prevRef.current = null;
  };

  useLayoutEffect(() => {
    lock();
    return () => unlock();
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      unlock();
      onClose?.();
    }
  };

  const handleCloseClick = () => {
    unlock();
    onClose?.();
  };

  // --------- SLIDER LOGIC ----------
  const images = useMemo(() => {
    const arr =
      Array.isArray(product.images) && product.images.length
        ? product.images
        : [product.image];

    return Array.from(new Set(arr));
  }, [product]);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = (dir) => {
    setIndex((i) => (i + dir + images.length) % images.length);
  };

  useEffect(() => {
    if (paused || images.length <= 1) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      2500
    );
    return () => clearInterval(id);
  }, [paused, images.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "Escape") handleCloseClick();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="relative w-full max-w-5xl rounded-2xl bg-white shadow-lg">
        <button
          onClick={handleCloseClick}
          className="absolute right-2 top-3 text-xl text-gray-500 transition hover:text-black"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="max-h-[85vh] overflow-y-auto no-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 items-center">
            <div className="flex flex-col items-center text-center">
              <div
                className="relative w-full max-w-sm md:max-w-md aspect-square rounded-xl bg-white"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <img
                  key={images[index]}
                  src={images[index]}
                  alt={`${product.name} - image ${index + 1}`}
                  className="absolute inset-0 h-full w-full object-contain p-6 transition-opacity duration-300"
                />

                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => go(-1)}
                      aria-label="Previous image"
                      className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 text-white w-9 h-9 grid place-items-center"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      onClick={() => go(1)}
                      aria-label="Next image"
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 text-white w-9 h-9 grid place-items-center"
                    >
                      ›
                    </button>
                  </>
                )}

                {images.length > 1 && (
                  <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-2">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        aria-label={`Go to image ${i + 1}`}
                        onClick={() => setIndex(i)}
                        className={`h-2.5 w-2.5 rounded-full transition ${
                          i === index
                            ? "bg-green-700 scale-110"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              <h2 className="mt-4 text-xl sm:text-2xl font-bold text-green-700">
                {product.name}
              </h2>
              <p className="text-gray-600 mt-2 text-sm sm:text-base px-2">
                {product.description}
              </p>

              {/* ✅ Enquire Now with product info */}
              <button
                onClick={() => {
                  handleCloseClick();
                  navigate("/enquire", { state: { selectedProduct: product.name } });
                }}
                className="mt-5 bg-[#16561A] text-white px-6 py-2 rounded-lg hover:bg-[#228B22] transition"
              >
                Enquire Now
              </button>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#16561A] mb-4">
                Product Details
              </h2>

              {/* 🟩 Outer wrapper adds spacing from all 4 sides */}
              <div className="p-2 sm:p-4 md:p-6 overflow-y-auto max-h-[70vh]">
                <div className="grid grid-cols-1 sm:grid-cols-2 border border-[#16561A] rounded-lg overflow-hidden">
                  {product.details.map(([label, value], index) => {
                    const colIndex = index % 2; // 0 = left col, 1 = right col
                    const rowIndex = Math.floor(index / 2); // pair index

                    const isHighlighted =
                      (colIndex === 0 && rowIndex % 2 === 0) ||
                      (colIndex === 1 && rowIndex % 2 === 1);

                    return (
                      <div
                        key={index}
                        className={`p-4 border-b border-[#16561A] sm:border-b-0 sm:border-r ${
                          (index + 1) % 2 === 0 ? "sm:border-r-0" : ""
                        } ${isHighlighted ? "bg-green-50" : "bg-white"}`}
                      >
                        <h3 className="text-[#16561A] font-semibold uppercase text-sm tracking-wide mb-1">
                          {label}
                        </h3>
                        <p className="text-gray-800 text-sm leading-snug">
                          {value}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
