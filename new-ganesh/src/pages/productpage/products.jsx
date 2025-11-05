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
    details: [
    ["Time of Sowing", "October to February (Rabi Season)"],
    ["Sowing Method", "Broadcast or Line Sowing"],
    ["Maturity Days", "First cutting in 55–60 days; subsequent every 25–30 days"],
    ["Crop Type", "Perennial Fodder Crop"],
    ["Plant Type", "Deep-rooted and highly drought-resistant"],
    ["Growth Habit", "Fast growing with dense foliage"],
    ["Protein Content", "18–22% (Excellent Fodder Quality)"],
    ["Soil Requirement", "Well-drained loamy soil with good organic matter"],
    ["Irrigation", "Requires regular irrigation for high yield"],
    ["Pest Resistance", "Tolerant to most common pests and diseases"],
    ["Yield", "80–100 tons/ha green fodder annually under good management"],
    ["Uses", "Ideal for dairy farms and livestock feed"],
    ["CATEGORY", "Fodder Crop Seeds / Lucerne (Alfalfa) Seeds"],
  ],
  },
  {
    name: "Ganesh Rajka Teensali",
    image: PImg7,
    description: "High germination rate and pest resistance.",
    details: [
      ["Time of Sowing", "June to August (Kharif) and February to March (Rabi)"],
      ["Maturity Days", "100–110 Days"],
      ["Crop Type", "High-Yielding Fodder Crop"],
      ["Plant Type", "Tall and Vigorous Growth"],
      ["Stem & Leaves", "Thick stem with broad, lush green leaves"],
      ["Growth Habit", "Fast-growing with excellent regeneration capacity"],
      ["Disease Resistance", "Tolerant to leaf blights and stem rot"],
      ["Irrigation", "Best with regular irrigation; drought-tolerant"],
      ["Nutritional Value", "Rich in protein and fiber; excellent dairy feed"],
      ["Fodder Quality", "Soft, juicy, and highly palatable"],
      ["Yield", "75–90 tons/ha green fodder annually"],
      ["Soil Requirement", "Loamy to clay soils with good drainage"],
      ["Cuttings", "First in 50–55 days, subsequent every 25–30 days"],
      ["CATEGORY", "Fodder Crop Seeds / Teensali Fodder Seeds"],
    ],
  },
  {
    name: "Ganesh Rajka Barmasi",
    image: PImg8,
    description: "High germination rate and pest resistance.",
    details: [
      ["Time of Sowing", "February–April & August–September"],
      ["Maturity Days", "First in 55–60 days; subsequent every 25–30 days"],
      ["Crop Type", "Multi-cut Perennial Fodder Crop"],
      ["Plant Type", "Erect, Dense, and Deep-rooted Growth"],
      ["Growth Habit", "Fast-growing; suitable for round-the-year fodder"],
      ["Fodder Quality", "Highly palatable, soft, and protein-rich"],
      ["Disease Resistance", "Tolerant to leaf spot and stem rot"],
      ["Irrigation", "Moderate irrigation; performs well irrigated"],
      ["Nutritional Value", "18–20% crude protein, high digestible fiber"],
      ["Yield", "80–100 tons/ha green fodder annually"],
      ["Soil Requirement", "Well-drained loamy soil with good organic matter"],
      ["Climatic Adaptability", "Tropical & subtropical regions"],
      ["CATEGORY", "Fodder Crop Seeds / Barmasi Fodder Seeds"],
    ],
  },
  {
    name: "Ganesh Kasni",
    image: PImg3,
    description: "Perfect for high productivity and early harvest.",
    details: [
      ["Time of Sowing", "October to December"],
      ["Maturity Days", "120–130 Days"],
      ["Crop Type", "Fodder and Medicinal Herb Crop"],
      ["Plant Type", "Erect and leafy herb with deep taproot"],
      ["Growth Habit", "Moderate growth with dense foliage"],
      ["Fodder Quality", "Highly palatable, rich in minerals"],
      ["Nutritional Value", "Excellent calcium, phosphorus & protein source"],
      ["Irrigation", "Moderate irrigation; avoid waterlogging"],
      ["Disease Resistance", "Tolerant to most soil-borne diseases"],
      ["Soil Requirement", "Well-drained loamy or sandy loam soil"],
      ["Climatic Requirement", "Cool and dry climate preferred"],
      ["Special Features", "Digestive & medicinal benefits for animals"],
      ["Yield", "25–30 tons/ha green fodder or 8–10 q/ha dried roots"],
      ["CATEGORY", "Fodder Crop Seeds / Medicinal Herb Seeds"],
    ],
  },
  {
    name: "Ganesh Rajka Bajra",
    image: PImg5,
    description: "High germination rate and pest resistance.",
     details: [
      ["Time of Sowing", "June to July (Kharif Season)"],
      ["Maturity Days", "85–95 Days"],
      ["Crop Type", "Dual Purpose – Grain and Fodder"],
      ["Plant Type", "Tall, Erect, and Strong Stemmed"],
      ["Ear Head", "Compact and Long with Bold Grains"],
      ["Grain Color", "Grey to Golden"],
      ["Growth Habit", "Fast-growing; suitable for rainfed or irrigated areas"],
      ["Disease Resistance", "Resistant to Downy Mildew and Rust"],
      ["Irrigation", "Requires minimum water; highly drought-tolerant"],
      ["Nutritional Value", "High protein, iron, and fiber"],
      ["Yield Potential", "25–30 q/ha grain & 350–400 q/ha fodder"],
      ["Soil Requirement", "Sandy loam to loamy soil with good drainage"],
      ["Climatic Requirement", "Thrives in hot, dry conditions"],
      ["CATEGORY", "Cereal Crop Seeds / Hybrid Bajra Seeds"],
    ],
  },
  {
    name: "Barseem",
    image: PImg1,
    description: "High quality hybrid sunflower seeds for better yield.",
    details: [
      ["Time of Sowing", "October to November (Rabi Season)"],
      ["Maturity Days", "First in 50–55 days; subsequent every 25–30 days"],
      ["Crop Type", "Multi-cut Annual Fodder Crop"],
      ["Plant Type", "Erect and leafy with fine stems"],
      ["Growth Habit", "Fast-growing; excellent regeneration"],
      ["Fodder Quality", "18–22% protein, rich in calcium & minerals"],
      ["Irrigation", "Requires regular irrigation; avoid waterlogging"],
      ["Disease Resistance", "Moderately resistant to leaf spot/root rot"],
      ["Soil Requirement", "Loamy to clay loam rich in organic matter"],
      ["Climatic Requirement", "Best in cool, mild climates"],
      ["Nutritional Value", "Highly digestible and nutritious"],
      ["Yield", "80–100 tons/ha with proper care"],
      ["Uses", "For cattle, buffalo, goats, and livestock"],
      ["CATEGORY", "Fodder Crop Seeds / Barseem Fodder Seeds"],
    ],
  },
  {
    name: "Ganesh Jaudo",
    image: PImg2,
    description: "Rich in oil content and disease resistance.",
    details: [
      ["Time of Sowing", "June–August (Kharif) & February–March (Rabi)"],
      ["Maturity Days", "90–100 Days"],
      ["Crop Type", "High-Yielding Fodder Crop"],
      ["Plant Type", "Tall, leafy, and strong stemmed"],
      ["Growth Habit", "Rapid growth; excellent regrowth capacity"],
      ["Fodder Quality", "Juicy, tender, and highly palatable"],
      ["Nutritional Value", "Rich in carbohydrates, fiber, and minerals"],
      ["Irrigation", "Regular irrigation; tolerates short dry spells"],
      ["Disease Resistance", "Tolerant to leaf blight and stem rot"],
      ["Soil Requirement", "Loamy to clay soils with good drainage"],
      ["Climatic Requirement", "Warm and humid conditions"],
      ["Cuttings", "First in 55–60 days, then every 25–30 days"],
      ["Yield", "70–85 tons/ha of green fodder"],
      ["CATEGORY", "Fodder Crop Seeds / Jaudo Fodder Seeds"],
    ],
  },
  {
    name: "Oat Seeds",
    image: PImg4,
    description: "High germination rate and pest resistance.",
    details: [
      ["Time of Sowing", "October to December (Rabi Season)"],
      ["Seed Quantity", "80–100 Kg/Hectare"],
      ["Maturity Days", "110–120 Days"],
      ["Crop Type", "Annual Fodder and Cereal Crop"],
      ["Plant Type", "Erect, leafy with soft stems"],
      ["Growth Habit", "Fast-growing; high tillering ability"],
      ["Fodder Quality", "Soft, juicy, rich green mass"],
      ["Nutritional Value", "High protein, calcium, and fiber"],
      ["Irrigation", "Regular irrigation, esp. tillering/flowering"],
      ["Disease Resistance", "Resistant to leaf blight and rust"],
      ["Soil Requirement", "Loamy soil rich in organic matter"],
      ["Climatic Requirement", "Cool, moist climate best"],
      ["Cuttings", "First in 55–60 days; subsequent every 25–30 days"],
      ["Yield", "80–100 tons/ha green fodder"],
      ["Uses", "For green fodder, silage, and hay"],
      ["CATEGORY", "Fodder Crop Seeds / Oat Fodder Seeds"],
    ],
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
