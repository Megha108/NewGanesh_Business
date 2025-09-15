import { Routes, Route } from "react-router-dom";
import HomeMain from "./pages/home/main";  

export default function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<HomeMain />} />
      </Routes>
    
  </>
  );
}
