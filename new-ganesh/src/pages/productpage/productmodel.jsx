import React from "react";

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-5xl rounded-2xl bg-white shadow-lg">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-xl text-gray-500 transition hover:text-black"
        >
          ✕
        </button>

        {/* Modal content */}
        <div className="max-h-[85vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 items-center">
            {/* Left section */}
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

            {/* Right section (Product details) */}
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
