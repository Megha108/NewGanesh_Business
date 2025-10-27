import { motion, useMotionValue, useTransform } from "framer-motion";
import img1 from "../../assets/image/home/l2.webp";
import img2 from "../../assets/image/home/l1.webp";

const CompanyOverview = () => {
  const radius = 39; // orbit radius

  // Motion value for orbit rotation
  const rotate = useMotionValue(0);
  const rotateInverse = useTransform(rotate, (r) => -r); // counter-rotate image

  return (
    <div className="bg-[#F8F7F3]">
      <section
        id="overview"
        className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 "
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

            {/* Orbit wrapper */}
            <motion.div
              className="absolute top-1/2 left-1/2"
              style={{
                width: 0,
                height: 0,
                transformOrigin: "0 0",
                rotate, // parent rotation
              }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            >
              {/* Small circle positioned along X-axis */}
              <div
                className="absolute w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-md"
                style={{ left: radius, top: -80 }}
              >
                {/* Image stays upright */}
                <motion.img
                  src={img2}
                  alt="seedlings"
                  className="w-full h-full object-cover"
                  style={{ rotate: rotateInverse }}
                />
              </div>
            </motion.div>
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
              <b>NEW GANESH SEEDS</b> is a trusted name in the seed industry, serving
              both wholesale and retail customers across India. We specialize in
              providing premium-quality seeds sourced directly from farmers,
              ensuring natural freshness and reliability. Each batch is
              carefully cleaned, processed, and packed in our own facility to
              maintain purity and high germination rates.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our products serve the needs of farmers, traders, and agricultural
              suppliers who value quality and consistency. With years of
              experience and commitment, we continue to promote sustainable
              farming and better yields. At NEW GANESH SEEDS, our motto is
              <b> “Growing Trust, Ensuring Quality.”</b>
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
