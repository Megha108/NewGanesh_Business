import Footer from "../../common/footer.jsx"; 
import Navbar from "../../common/navbar.jsx";
import Title from "./title.jsx";
import WhyUs from "./WhyUs.jsx";
import WhoareWe from "./WhoareWe.jsx";
import AnimatedCounters from "./counter.jsx";
import ImageHover from "./imagehover.jsx";   // <-- Capital I

const AboutUsPage = () => {
  return (
    <>
      <div className="relative z-10 isolate font-bricolage">
        <Navbar />
        <Title />
        <WhoareWe />
        <WhyUs />
        <AnimatedCounters />
        <ImageHover />   {/* <-- Capital I */}
        <Footer />
      </div>
    </>
  );
};

export default AboutUsPage;
