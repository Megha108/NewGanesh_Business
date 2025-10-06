import ProductCard from "./productcard";
import ProductModal from "./productmodel";
import { useState } from "react";

const allProducts = [
  {
    name: "Sunflower Seeds",
    category: "Oil Seeds",
    image: "/images/sunflower.jpg",
    description: "High quality hybrid sunflower seeds for better yield.",
    price: 250,
  },
  {
    name: "Groundnut Seeds",
    category: "Oil Seeds",
    image: "/images/groundnut.jpg",
    description: "Rich in oil content and disease resistance.",
    price: 300,
  },
  {
    name: "Maize Seeds",
    category: "Cereal",
    image: "/images/maize.jpg",
    description: "Perfect for high productivity and early harvest.",
    price: 220,
  },
  {
    name: "Cotton Seeds",
    category: "Fiber",
    image: "/images/cotton.jpg",
    description: "High germination rate and pest resistance.",
    price: 280,
  },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = ["All", ...new Set(allProducts.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
        Our Seed Products
      </h1>

      {/* Category Filter */}
      <div className="flex justify-center mb-10 space-x-3 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full border ${
              selectedCategory === cat
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-green-50"
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            {...product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {/* Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default Products;
