import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async"; // ✅ updated

import HomeMain from "./pages/home/main";
import AboutUsPage from "./pages/aboutUsPage/main.jsx";
import ProductMain from "./pages/productpage/main.jsx";
import SeedTrail from "./common/SeedTrail";
import EnquiryPage from "./pages/enquiryPage/enquiryPage.jsx";
import Gallerypage from "./pages/gallerypage/gallerypage.jsx";

import ScrollToTop from "./common/ScrollToTop.jsx"; // 👈 Import scroll helper

export default function App() {
  // 👇 Handle manual refresh scroll reset
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <HelmetProvider>   {/* ✅ required wrapper for react-helmet-async */}
      <>
        {/* 🌱 SEO TAGS */}
        <Helmet>
          <title>New Ganesh Seeds | Best Quality Agriculture Seeds Supplier</title>
          <meta
            name="description"
            content="Ganesh Rajka Seeds offers high-quality seeds including Rajka Teensali, Rajka Barmasi, Kasni, Bajra, Barseem, Jaudo, and Oat Seeds."
          />
          <meta
            name="keywords"
            content="Rajka Seeds, Rajka Teensali, Rajka Barmasi, Kasni Seeds, Bajra Seeds, Barseem, Jaudo, Oat Seeds, agriculture seeds supplier"
          />
        </Helmet>

        {/* 🌱 Global floating animation */}
        <SeedTrail />

        {/* 👇 Scroll to top on route change */}
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/products" element={<ProductMain />} />
          <Route path="/enquire" element={<EnquiryPage />} />
          <Route path="/gallery" element={<Gallerypage />} />
        </Routes>
      </>
    </HelmetProvider>
  );
}
