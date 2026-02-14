import ProductCard from "./productcard";
import ProductModal from "./productmodel";
import { useState } from "react";
import PImg1 from "../../assets/image/home/PSimg1.webp";
import img11 from "../../assets/image/product/PImg1.1.webp";
import img12 from "../../assets/image/product/PImg1.2.webp";
import PImg2 from "../../assets/image/home/PSimg2.webp";
import img21 from "../../assets/image/product/PImg2.1.webp";
import img22 from "../../assets/image/product/PImg2.2.webp";
import img23 from "../../assets/image/product/PImg2.3.webp";
import PImg3 from "../../assets/image/home/PSimg3.webp";
import img31 from "../../assets/image/product/PImg3.1.webp";
import img32 from "../../assets/image/product/PImg3.2.webp";
import img33 from "../../assets/image/product/PImg3.3.webp";
import img34 from "../../assets/image/product/PImg3.4.webp";
import PImg4 from "../../assets/image/home/PSimg4.webp";
import img41 from "../../assets/image/product/PImg4.1.webp";
import img42 from "../../assets/image/product/PImg4.2.webp";
import PImg5 from "../../assets/image/home/PSimg5.webp";
import img51 from "../../assets/image/product/PImg5.1.webp";
import img52 from "../../assets/image/product/PImg5.2.webp";
import PImg6 from "../../assets/image/home/PSimg6.webp";
import img61 from "../../assets/image/product/PImg6.1.webp";
import img62 from "../../assets/image/product/PImg6.2.webp";
import img63 from "../../assets/image/product/PImg6.3.webp";
import img64 from "../../assets/image/product/PImg6.4.webp";
import PImg7 from "../../assets/image/home/PSimg7.webp";
import img71 from "../../assets/image/product/PImg7.1.webp";
import img72 from "../../assets/image/product/PImg7.2.webp";
import img73 from "../../assets/image/product/PImg7.3.webp";
import PImg8 from "../../assets/image/home/Psimg8.webp";
import img81 from "../../assets/image/product/PImg8.1.webp";
import img82 from "../../assets/image/product/PImg8.2.webp";


const allProducts = [
  {
    name: "Ganesh Rajka Seeds",
    image: PImg6, // thumbnail for card
    images: [PImg6, img61, img62, img63, img64], // slider images
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
    images: [PImg7, img71, img72, img73, img63, img64],
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
    images: [PImg8, img81, img82, img63, img64],
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
    images: [PImg3, img31, img32, img33, img34],
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
    images: [PImg5, img51, img52],
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
    images: [PImg1, img11, img12],
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
    images: [PImg2, img21, img22, img23],
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
    images: [PImg4, img41, img42],
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

import { LOCALITIES } from "../../data/localities.js";
import { SEO_CONTENT } from "../../data/seoContent.js";

const Products = ({ seoConfig }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter products based on SEO type if provided
  const filteredProducts = seoConfig
    ? allProducts.filter(p => {
      const category = p.details.find(d => d[0] === "CATEGORY")?.[1] || "";
      return category.toLowerCase().includes(seoConfig.type.toLowerCase()) ||
        p.name.toLowerCase().includes(seoConfig.type.toLowerCase());
    })
    : allProducts;

  // Generate dynamic SEO content (200-400 words)
  const generateDynamicContent = () => {
    if (!seoConfig) return null;

    const currentLocality = seoConfig.locality || LOCALITIES[0];
    const otherLocations = LOCALITIES.filter(l => l !== (seoConfig.locality || LOCALITIES[0])).join(", ");
    const type = seoConfig.type;
    const brand1 = "new ganesh seeds";
    const brand2 = "ganesh seeds";
    const brand3 = "ganesh";

    return (
      <div className="mt-16 max-w-4xl mx-auto text-gray-700 space-y-6 leading-relaxed text-lg border-t pt-10 px-5 sm:px-0">
        <p>
          At <strong>{brand1}</strong>, we take pride in being a trusted name for farmers in <strong>{currentLocality}</strong> and across <strong>{otherLocations}</strong>.
          Our commitment to agricultural excellence drives us to provide the finest <strong>{type}</strong> designed for maximum productivity and sustainability.
          Whether you are managing a large-scale commercial farm or a local dairy enterprise, <strong>{brand3}</strong> ensures that our seeds are selected for high germination rates and robust growth.
        </p>
        <p>
          Choosing the right <strong>{type}</strong> is critical for achieving a high return on investment. Our selection process involves rigorous quality checks in <strong>{currentLocality}</strong> to ensure
          that every batch of seeds from <strong>{brand2}</strong> meets the highest industry standards. In regions like <strong>{currentLocality}</strong> and <strong>{LOCALITIES[1]}</strong>,
          where climatic conditions can be challenging, our seeds offer superior resilience against common pests and diseases, ensuring a stable yield for our partners.
        </p>
        <p>
          Why choose <strong>{brand3}</strong>? We don't just sell seeds; we provide a foundation for agricultural success in <strong>{currentLocality}</strong>. Our platform is designed to make it easy for
          farmers to browse and select category-specific seeds like <strong>{type}</strong> that transition perfectly from sowing to harvest.
          The nutritional value of our fodder seeds from <strong>{brand1}</strong> is unmatched, providing essential proteins and minerals that improve the quality of livestock output.
        </p>
        <p>
          As a leader and <strong>agriculture seeds supplier</strong> for <strong>{type}</strong>, we understand the local agricultural landscape of <strong>{currentLocality}</strong> and surrounding areas.
          Our expertise at <strong>{brand2}</strong> allows us to provide tailored recommendations that help you optimize your resources. We invite you to explore our comprehensive range of seeds
          and experience the difference that quality makes. <strong>{brand3}</strong> continues to innovate and expand its offerings to serve the evolving
          needs of the farming community in <strong>{currentLocality}</strong>.
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-10 px-5">
      {/* 🌿 Grass-text heading */}
      <h1 className="grassText text-[40px] sm:text-[50px] lg:text-[60px] leading-tight font-bold text-center mb-12 max-w-4xl px-5">
        {seoConfig ? seoConfig.h1 : "Our Premium Seed Products"}
      </h1>

      <div className="container mx-auto">
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              alt={`${product.name} - Premium ${seoConfig?.type || "Agriculture Seed"} Supplier in Kadi`}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </div>

      {/* Dynamic SEO Content Section */}
      {generateDynamicContent()}

      {/* Internal Linking Section: Browse Categories */}
      <div className="mt-20 w-full max-w-7xl mx-auto border-t pt-10 px-5">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 font-bricolage text-center sm:text-left">Browse Our Categories by Location</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(SEO_CONTENT.buy).map(([key, item]) => (
            <div key={key} className="space-y-3">
              <h3 className="font-bold text-green-800 border-b pb-2">{item.type}</h3>
              <div className="flex flex-wrap gap-2">
                {item.localities.map(loc => (
                  <a
                    key={loc}
                    href={`/buy/${item.slugPrefix}${loc}`}
                    className="px-3 py-1.5 bg-white rounded-lg border border-gray-200 hover:border-green-600 hover:text-green-700 transition-all text-sm shadow-sm"
                  >
                    {loc.charAt(0).toUpperCase() + loc.slice(1)}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
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
