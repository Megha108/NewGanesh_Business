import React from "react";

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>
        <img
          src={product.image}
          alt={product.name}
          className="w-80 h-80 object-contain mx-auto p-5"
        />
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-bold text-green-700">
            {product.name}
          </h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <button className="mt-5 bg-[#16561A] text-white px-6 py-2 rounded-lg hover:bg-[#228B22] transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
