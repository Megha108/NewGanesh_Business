import Navbar from "../../common/navbar.jsx";
import Landing from "./landing.jsx";
import CompanyOverview from "./overview.jsx";
import WhatWeDo from "./whatWeDo.jsx";
import ProductsMarquee from "./product.jsx";
import ThreeDProducts from "./3Dproduct.jsx"
import Footer from "../../common/footer.jsx";

const HomeMain = () => {
  return (
    <>
      <div className="relative z-10 isolate font-bricolage">
        <Navbar />
        <Landing />
        <CompanyOverview />
        <WhatWeDo />
        <ProductsMarquee />
        <ThreeDProducts/>
        <Footer />
      </div>
    </>
  );
};

export default HomeMain;
