import { Routes, Route } from "react-router-dom";
import HomeMain from "./pages/home/main";  
import AboutUsPage from "./pages/aboutUsPage/aboutUs";
import ProductPage from "./pages/productpage/ProductPage";
import SeedTrail from "./common/SeedTrail";

export default function App() {
  return (
    <>
      {/* 🌱 Global Seed Trail Animation */}
      {/* Placed at top-level so it appears over all pages */}
      <SeedTrail />

      {/* Main Routing */}
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </>
  );
}
