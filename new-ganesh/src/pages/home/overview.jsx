import { motion } from "framer-motion";
// import bgIllustration from "../../assets/image/common/Logo.png"; // your light background image
import img1 from "../../assets/image/home/l2.jpg"; // replace with your image
import img2 from "../../assets/image/home/l1.jpg"; // replace with your image

const CompanyOverview = () => {
  return (
    <div className="bg-white">
    <section
      id="overview"
      className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 "
    //   style={{
    //     backgroundImage: `url(${bgIllustration})`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundPosition: "bottom right",
    //     backgroundSize: "contain",
    //   }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-40">
        {/* Left side with images */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="relative flex-shrink-0"
        >
          {/* Big Circle */}
          <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-lg">
            <img
              src={img1}
              alt="plant in hands"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Small Circle overlay */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
              src={img2}
              alt="seedlings"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Leaf Decoration */}
          {/* <div className="absolute -left-12 top-12 w-16 h-24">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Leaf_icon.svg/512px-Leaf_icon.svg.png"
              alt="leaf"
              className="w-full h-full object-contain"
            />
          </div> */}
        </motion.div>

        {/* Right side text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl md:text-left text-center"
        >
          <h2 className="text-3xl md:text-5xl mb-6 font-semibold tracking-wide">
            Company Overview
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The seed company, NEW GANESH SEEDS is pioneer in seed
            business in India, established in 1984. The WASL deals with quality
            seed production and marketing.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The company motto is <strong>"MORE FOR ALL"</strong>, ensuring
            farmers benefit directly from quality seeds. WASL is certified by
            DSIR and ISO 9001:2015.
          </p>
          <button className="bg-[#16561A] text-white px-6 py-3 rounded-md shadow hover:bg-[#228B22] transition">
            Discover More →
          </button>
        </motion.div>
      </div>
     </section>
     </div>
  );
};

export default CompanyOverview;
