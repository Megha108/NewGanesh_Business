import { motion, useMotionValue, useTransform } from "framer-motion";
import img1 from "../../assets/image/home/l2.webp";
import img2 from "../../assets/image/home/l1.webp";
import "./CompanyOverviewTitle.css";

const CompanyOverview = () => {
  const radius = 50; // smaller for mobile responsiveness
  const rotate = useMotionValue(0);
  const rotateInverse = useTransform(rotate, (r) => -r);

  return (
    <div className="bg-[#F8F7F3]">
      <section
        id="overview"
        className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-18"
      >
        {/* ✅ Reduced gap on small screens */}
        <div className="flex flex-col md:flex-row items-center md:gap-32 gap-10">
          {/* 🌱 Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative flex-shrink-0"
          >
            {/* ✅ Responsive image sizes */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg mx-auto">
              <img
                src={img1}
                alt="plant in hands"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Orbit animation */}
            <motion.div
              className="absolute top-1/2 left-1/2"
              style={{
                width: 0,
                height: 0,
                transformOrigin: "0 0",
                rotate,
              }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            >
              <div
                className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-md"
                style={{ left: radius, top: -60 }}
              >
                <motion.img
                  src={img2}
                  alt="seedlings"
                  className="w-full h-full object-cover"
                  style={{ rotate: rotateInverse }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* 🌿 Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl md:text-left text-center"
          >
            <h2 className="animatedTitle">Company Overview</h2>

            <p className="text-gray-700 leading-relaxed mb-4 mt-8">
              <b>NEW GANESH SEEDS</b> is a trusted name in the seed industry,
              serving both wholesale and retail customers across India. We
              specialize in providing premium-quality seeds sourced directly
              from farmers, ensuring natural freshness and reliability. Each
              batch is carefully cleaned, processed, and packed in our own
              facility to maintain purity and high germination rates.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Over the years, we have built strong relationships with farming
              communities, helping them access modern agricultural practices
              while preserving traditional values. Our commitment goes beyond
              selling seeds — we educate, guide, and support farmers at every
              stage of cultivation to ensure successful harvests.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              From fodder crops to fiber and vegetable seeds, our products cater
              to diverse agricultural needs. Every variety is tested under real
              farming conditions to guarantee consistent growth and superior
              performance, even in challenging climates.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Our products serve the needs of farmers, traders, and agricultural
              suppliers who value quality and consistency. With years of
              experience and commitment, we continue to promote sustainable
              farming and better yields. At NEW GANESH SEEDS, our motto is{" "}
              <b>“Growing Trust, Ensuring Quality.”</b>
            </p>

            <a
              href="/about"
              className="inline-block px-6 py-3 bg-[#16561A] text-white font-medium rounded-xl shadow-md hover:bg-[#228B22] transition"
            >
              Discover more ➔
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CompanyOverview;
