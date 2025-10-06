import { Routes, Route } from "react-router-dom";
import HomeMain from "./pages/home/main";  
import AboutUsPage from "./pages/aboutUsPage/aboutUs";
import Products from "./pages/productpage/products";
export default function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/productpage" element={<Products />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    
  </>
  );
}
