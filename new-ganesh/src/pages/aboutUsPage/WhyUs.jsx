import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Icons
import CallSignIcon from "../../assets/icon/aboutusIcons/Callsign.svg";
import FastIcon from "../../assets/icon/aboutusIcons/Fast.svg";
import GenuienIcon from "../../assets/icon/aboutusIcons/Shield.svg";
import TeamIcon from "../../assets/icon/aboutusIcons/Team.svg";
import RupeeIcon from "../../assets/icon/aboutusIcons/RupeeSymbol.svg";

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
      icon: "🌱",
      title: "Environmentally Friendly",
      text: "We use environmentally friendly practices such as zero-waste printers for our marketing materials.",
    },
    {
      icon: CallSignIcon,
      title: "Dedicated Support",
      text: "Whether you use our services or not, when you call, we support our customers with full dedication.",
    },
    {
      icon: TeamIcon,
      title: "Professional Team",
      text: "We understand that customer satisfaction starts with dependable service. Our team is committed and reliable.",
    },
    {
      icon: RupeeIcon,
      title: "Reasonable Price",
      text: "We assure our customers that our company maintains reasonable pricing while keeping customer value as our priority.",
    },
    {
      icon: FastIcon,
      title: "Quickly And Efficiently",
      text: "We always work quickly while maintaining high quality — because we know how much you look forward to your garden.",
    },
  ];

  const highlightText =
    "Ganesh Seeds Pvt Ltd is committed to providing farmers and gardeners with the highest quality seeds available, using the latest technology and advanced breeding methods to ensure that our products deliver maximum yields and are well-adapted to local growing conditions.";

  const renderIcon = (icon, alt) => {
    if (typeof icon === "string" && icon.length <= 3 && !icon.includes("/")) {
      return <span className="text-3xl">{icon}</span>;
    }
    return <img src={icon} alt={alt} className="w-8 h-8 object-contain" />;
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-10 my-16 font-bricolage">
      {/* === Top Section === */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Left: Headings */}
        <div className="flex flex-col justify-center text-left">
          <motion.h4
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-gray-600 text-lg tracking-wide mb-2 uppercase"
          >
            BEST SEEDS FOR YOU
          </motion.h4>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-black leading-tight"
          >
            Why Choose Us
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 350 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[3px] bg-black mt-4 mb-6"
          />
        </div>

        {/* Right: Highlight paragraph */}
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-700 italic text-lg leading-relaxed"
        >
          {highlightText}
        </motion.p>
      </div>

      {/* === Icon + Text Grid === */}
      <div className="grid md:grid-cols-3 gap-10 mt-8">
        {contentData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left"
          >
            <div className="flex justify-center items-center min-w-[40px]">
              {renderIcon(item.icon, item.title)}
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
