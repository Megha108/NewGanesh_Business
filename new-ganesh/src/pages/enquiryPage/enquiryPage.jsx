import Footer from "../../common/footer.jsx";
import Navbar from "../../common/navbar.jsx";
import Enquiryform from "../enquiryPage/enquiryform.jsx"

const EnquiryPage = () => {
  return (
    <>
      {/* All site content sits ABOVE bg in a new stacking context */}
      <div className="relative z-10 isolate font-bricolage">
        <Navbar />
        <div className="relative mt-20">
        <Enquiryform />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default EnquiryPage;