import { Routes, Route } from "react-router-dom";
import HomeMain from "./pages/home/main";  
import AboutUsPage from "./pages/aboutUsPage/aboutUs";
import ProductMain from "./pages/productpage/main.jsx";
import SeedTrail from "./common/SeedTrail";
import EnquiryPage from "./pages/enquiryPage/enquiryPage.jsx";
import Enquiryform from "./pages/enquiryPage/enquiryform.jsx";
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
        <Route path="/products" element={<ProductMain />} />
        <Route path="/enquire" element={<EnquiryPage />} />
        <Route path="/enquiryform" element={<EnquiryPage />} />
      </Routes>
    </>
  );
}
