import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import HomeMain from "./pages/home/main";
import AboutUsPage from "./pages/aboutUsPage/main.jsx";
import ProductMain from "./pages/productpage/main.jsx";
import SeedTrail from "./common/SeedTrail";
import EnquiryPage from "./pages/enquiryPage/enquiryPage.jsx";
import GalleryPage from "./pages/gallerypage/GalleryPage.jsx";
import ScrollToTop from "./common/ScrollToTop.jsx"; // 👈 Import scroll helper

export default function App() {
  // 👇 Handle manual refresh scroll reset
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <>
      {/* 🌱 Global floating animation */}
      <SeedTrail />

      {/* 👇 Scroll to top on route change */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/products" element={<ProductMain />} />
        <Route path="/enquire" element={<EnquiryPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </>
  );
}
