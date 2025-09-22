import Navbar from "../../common/navbar.jsx";
import Landing from "./landing.jsx";
import CompanyOverview from "./overview.jsx";
import WhatWeDo from "./whatWeDo.jsx";
import ProductsMarquee from "./product.jsx";
import Footer from "../../common/footer.jsx";

const HomeMain = () => {
  return (
    <>
      {/* All site content sits ABOVE bg in a new stacking context */}
      <div className="relative z-10 isolate font-bricolage">
        <Navbar />
        <Landing />
        <CompanyOverview />
        <WhatWeDo />
        <ProductsMarquee />
        <Footer />
      </div>
    </>
  );
};

export default HomeMain;
