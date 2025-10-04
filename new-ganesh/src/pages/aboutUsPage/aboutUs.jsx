import Footer from "../../common/footer.jsx";
import Navbar from "../../common/navbar.jsx";
import Title from "./title.jsx";
import WhyUs from "./WhyUs.jsx";
import WhoareWe from "./WhoareWe.jsx";
const AboutUsPage = () => {
  return (
    <>
      {/* All site content sits ABOVE bg in a new stacking context */}
      <div className="relative z-10 isolate font-bricolage">
        <Navbar />
        <Title />
        <WhoareWe />
        <WhyUs />
       
        <Footer />
      </div>
    </>
  );
};

export default AboutUsPage;
