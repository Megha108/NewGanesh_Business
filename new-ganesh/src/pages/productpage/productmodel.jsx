import React, { useLayoutEffect, useRef } from "react";

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  const prevRef = useRef(null);
  const lockedRef = useRef(false);

  // --- scroll lock (works perfectly) ---
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={handleBackdropClick}
    >
      {/* Inline style to hide scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="relative w-full max-w-5xl rounded-2xl bg-white shadow-lg">
        <button
          onClick={handleCloseClick}
          className="absolute right-3 top-3 text-xl text-gray-500 transition hover:text-black"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Hide scrollbar but still allow scrolling */}
        <div className="max-h-[85vh] overflow-y-auto no-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 items-center">
            {/* LEFT: Image + Title + CTA */}
            <div className="flex flex-col items-center text-center">
              <img
                src={product.image}
                alt={product.name}
                className="h-72 w-72 object-contain mb-4"
              />
              <h2 className="text-2xl font-bold text-green-700">
                {product.name}
              </h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <button className="mt-5 bg-[#16561A] text-white px-6 py-2 rounded-lg hover:bg-[#228B22] transition">
                Buy Now
              </button>
            </div>

            {/* RIGHT: Details */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Product Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {product.details?.map(([k, v], i) => (
                  <div key={i}>
                    <p className="text-sm font-semibold uppercase tracking-wide text-green-800">
                      {k}
                    </p>
                    <p className="text-sm text-gray-700 mt-1">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
