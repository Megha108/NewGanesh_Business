import Footer from "../../common/footer.jsx";
import Navbar from "../../common/navbar.jsx";

import EnquiryForm from "./enquiryform.jsx";
const EnquiryPage = () => {
  return (
    <div className="relative z-10 isolate font-bricolage">
      <Navbar />
      <div className="relative mt-30 mb-30 overflow-hidden">
        <EnquiryForm />
      </div>
      
      <Footer />
    </div>
  );
};

export default EnquiryPage;
