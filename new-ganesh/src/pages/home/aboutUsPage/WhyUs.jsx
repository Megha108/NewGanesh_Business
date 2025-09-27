import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Import SVGs
import CallSignIcon from "../../../assets/icon/aboutusIcons/CallSign.svg";
import FastIcon from "../../../assets/icon/aboutusIcons/Fast.svg";
import GenuienIcon from "../../../assets/icon/aboutusIcons/Shield.svg";
import TeamIcon from "../../../assets/icon/aboutusIcons/Team.svg";
import RupeeIcon from "../../../assets/icon/aboutusIcons/RupeeSymbol.svg";

const WhyUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const contentData = [
    {
      icon: GenuienIcon,
      title: "100% Genuine Product",
      text: "We provide 100% genuine seed products with reliable test results and attractive packing.",
    },
    {
      icon: FastIcon,
      title: "Quickly And Efficiently",
      text: "We always work quickly with great quality, because we know how much you look forward to your garden.",
    },
    {
      icon: CallSignIcon,
      title: "Dedicated Support",
      text: "Whether you use our services or not, when you call, we support our customers the most dedicated way.",
    },
    {
      icon: TeamIcon,
      title: "Professional Team",
      text: "Customer satisfaction starts with dependable service. We have a committed and dedicated team.",
    },
    {
      icon: RupeeIcon,
      title: "Reasonable Price",
      text: "We assure our customers that our company has very reasonable prices. Keeping customers is our priority.",
    },
    {
      icon: "🌱",
      title: "Environmentally Friendly",
      text: "We partner with eco-friendly companies, such as zero waste printers for all our marketing material.",
    },
  ];

  const highlightText =
    "Ganesh Seeds Pvt Ltd is committed to providing farmers and gardeners with the highest quality seeds available, using the latest technology and advanced breeding methods to ensure that our products deliver maximum yields and are well-adapted to local growing conditions.";

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const renderIcon = (icon, alt) => {
    if (typeof icon === "string" && icon.length <= 3 && !icon.includes("/")) {
      return <span className="text-3xl">{icon}</span>;
    }
    return <img src={icon} alt={alt} className="w-8 h-8 object-contain" />;
  };

  return (
    <div className="max-w-[90vw] mx-auto my-10 px-5 font-bricolage">
      {/* Header Section */}
      <div className="grid gap-10 md:gap-16 items-start mb-10 md:mb-5 grid-cols-1 md:grid-cols-2">
        {/* Left Side - Headings */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="text-2xl text-gray-600 mb-2 relative pb-3"
          >
            BEST SEEDS FOR YOU
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-black mb-0 leading-tight tracking-wide"
          >
            Why Choose Us
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 300 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="h-[3px] bg-black mt-5 mx-auto md:mx-0"
          />
        </div>

        {/* Right Side - Highlight Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className={`bg-white rounded-lg flex items-center ${
            isMobile ? "p-2 min-h-[120px]" : "p-4 min-h-[160px]"
          }`}
        >
          <p className="text-base text-gray-700 italic leading-relaxed line-clamp-3">
            {highlightText}
          </p>
        </motion.div>
      </div>

      {/* Content Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-3">
        {contentData.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center text-center md:flex-row md:text-left gap-5"
          >
            <div className="flex justify-center items-center min-w-[40px]">
              {renderIcon(item.icon, item.title)}
            </div>
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="text-2xl font-bold text-black mb-3 leading-snug"
              >
                {item.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-base text-gray-600 leading-relaxed"
              >
                {item.text}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
