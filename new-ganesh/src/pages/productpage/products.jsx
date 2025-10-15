import ProductCard from "./productcard";
import ProductModal from "./productmodel";
import { useState } from "react";
import PImg1 from "../../assets/image/home/PSimg1.webp";
import PImg2 from "../../assets/image/home/PSimg2.webp";
import PImg3 from "../../assets/image/home/PSimg3.webp";
import PImg4 from "../../assets/image/home/PSimg4.webp";
import PImg5 from "../../assets/image/home/PSimg5.webp";
import PImg6 from "../../assets/image/home/PSimg6.webp";
import PImg7 from "../../assets/image/home/PSimg7.webp";
import PImg8 from "../../assets/image/home/PSimg8.webp";


const allProducts = [
  {
    name: "Ganesh Rajka Seeds",
    category: "Fiber",
    image: PImg6,
    description: "High germination rate and pest resistance.",
  },
  {
    name: "Ganesh Rajka Teensali",
    category: "Fiber",
    image: PImg7,
    description: "High germination rate and pest resistance.",
  },
  {
    name: "Ganesh Rajka Barmasi",
    category: "Fiber",
    image: PImg8,
    description: "High germination rate and pest resistance.",
  },
  {
    name: "Ganesh Kasni",
    category: "Cereal",
    image: PImg3,
    description: "Perfect for high productivity and early harvest.",
  },
  {
    name: "Ganesh Rajka Bajra",
    category: "Fiber",
    image: PImg5,
    description: "High germination rate and pest resistance.",
  },
  {
    name: "Barseem",
    category: "Oil Seeds",
    image: PImg1,
    description: "High quality hybrid sunflower seeds for better yield.",
  },
  {
    name: "Ganesh Jaudo",
    category: "Oil Seeds",
    image: PImg2,
    description: "Rich in oil content and disease resistance.",
  },
  {
    name: "Oat Seeds",
    category: "Fiber",
    image: PImg4,
    description: "High germination rate and pest resistance.",
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
