const ProductCard = ({ name, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-80 h-80 object-contain mx-auto transform group-hover:scale-105 transition-transform duration-500 p-5"
        />
      </div>
      <div className="p-5 text-center">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-700">
          {name}
        </h3>
        {/* <p className="mt-2 text-green-600 font-bold text-lg">₹{price}</p> */}
        <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
