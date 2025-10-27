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
    image: PImg6,
    description: "High germination rate and pest resistance.",
  },
  {
    name: "Ganesh Rajka Teensali",
    image: PImg7,
    description: "High germination rate and pest resistance.",
  },
  {
    name: "Ganesh Rajka Barmasi",
    image: PImg8,
    description: "High germination rate and pest resistance.",
  },
  {
    name: "Ganesh Kasni",
    image: PImg3,
    description: "Perfect for high productivity and early harvest.",
  },
  {
    name: "Ganesh Rajka Bajra",
    image: PImg5,
    description: "High germination rate and pest resistance.",
  },
  {
    name: "Barseem",
    image: PImg1,
    description: "High quality hybrid sunflower seeds for better yield.",
  },
  {
    name: "Ganesh Jaudo",
    image: PImg2,
    description: "Rich in oil content and disease resistance.",
  },
  {
    name: "Oat Seeds",
    image: PImg4,
    description: "High germination rate and pest resistance.",
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <h1 className="text-[72px] font-semibold text-center text-black mb-16">
        Our Seed Products
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {allProducts.map((product, index) => (
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
