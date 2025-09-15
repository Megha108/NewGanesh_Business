import Navbar from "../../common/navbar.jsx";
import Landing from "./landing.jsx";
import CompanyOverview from "./overview.jsx";
import WhatWeDo from "./whatWeDo.jsx";
const HomeMain = () => {
  return (
    <div className="font-bricolage">
    <Navbar/>
    <Landing />
    <CompanyOverview/>
    <WhatWeDo/>
    </div>
  );
}
export default HomeMain;
