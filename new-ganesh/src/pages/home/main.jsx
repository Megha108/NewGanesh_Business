import Navbar from "../../common/navbar.jsx";
import Landing from "./landing.jsx";
import CompanyOverview from "./overview.jsx";
import WhatWeDo from "./whatWeDo.jsx";
import ProductsMarquee from "./product.jsx";

const HomeMain = () => {
  return (
    <div className="font-bricolage">
    <Navbar/>
    <Landing />
    <CompanyOverview/>
    <WhatWeDo/>
    <ProductsMarquee/>
    </div>
  );
}
export default HomeMain;
