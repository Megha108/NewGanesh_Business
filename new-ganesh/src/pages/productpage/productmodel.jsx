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
          className="w-full h-64 object-cover rounded-xl"
        />
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-bold text-green-700">
            {product.name}
          </h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-green-600 font-bold text-xl mt-4">
            ₹{product.price}
          </p>
          <button className="mt-5 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
