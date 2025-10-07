import { Routes, Route } from "react-router-dom";
import HomeMain from "./pages/home/main";  
import AboutUsPage from "./pages/aboutUsPage/aboutUs";
import ProductPage from "./pages/productpage/ProductPage";
export default function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    
  </>
  );
}
