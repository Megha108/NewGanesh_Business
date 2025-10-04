import { Routes, Route } from "react-router-dom";
import HomeMain from "./pages/home/main";  
import AboutUsPage from "./pages/aboutUsPage/aboutUs";
export default function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    
  </>
  );
}
