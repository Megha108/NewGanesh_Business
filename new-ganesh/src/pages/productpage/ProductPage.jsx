import Footer from "../../common/footer.jsx";
import Navbar from "../../common/navbar.jsx";
import Products from "./products";
const AboutUsPage = () => {
  return (
    <>
      {/* All site content sits ABOVE bg in a new stacking context */}
      <div className="relative z-10 isolate font-bricolage">
        <Navbar />
        <div className="relative mt-10">
        <Products />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUsPage;