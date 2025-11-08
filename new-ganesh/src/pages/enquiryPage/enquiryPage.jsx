import Footer from "../../common/footer.jsx";
import Navbar from "../../common/navbar.jsx";
import EnquiryTitle from "./enquiryTitle.jsx";
import EnquiryForm from "./enquiryform.jsx";
const EnquiryPage = () => {
  return (
    <div className="relative z-10 isolate font-bricolage">
      <Navbar />
      <div className="relative mt-15 overflow-hidden">
        
      </div>
      <EnquiryForm />
      <Footer />
    </div>
  );
};

export default EnquiryPage;
