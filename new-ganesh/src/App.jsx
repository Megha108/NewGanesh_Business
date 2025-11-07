import { Routes, Route } from "react-router-dom";
import HomeMain from "./pages/home/main";
import AboutUsPage from "./pages/aboutUsPage/aboutUs";
import ProductMain from "./pages/productpage/main.jsx";
import SeedTrail from "./common/SeedTrail";
import EnquiryPage from "./pages/enquiryPage/enquiryPage.jsx";

export default function App() {
  return (
    <>
      {/* 🌱 Global floating animation */}
      <SeedTrail />

      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/products" element={<ProductMain />} />
        <Route path="/enquire" element={<EnquiryPage />} />
      </Routes>
    </>
  );
}
