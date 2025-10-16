import { motion } from "framer-motion";
import RnDIcon from "../../assets/icon/i1.svg";
import ProductionIcon from "../../assets/icon/i2.svg";
import MarketingIcon from "../../assets/icon/i3.svg";

export default function WhatWeDo() {
  const items = [
    {
      title: "Research and Development",
      icon: (
        <img
          src={RnDIcon}
          alt="Research and Development"
          className="h-20 w-20 object-contain"
        />
      ),
    },
    {
      title: "Production and Processing",
      icon: (
        <img
          src={ProductionIcon}
          alt="Production and Processing"
          className="h-20 w-20 object-contain"
        />
      ),
    },
    {
      title: "Marketing",
      icon: (
        <img
          src={MarketingIcon}
          alt="Marketing"
          className="h-20 w-20 object-contain"
        />
      ),
    },
  ];

  return (
    <section
      id="what-we-do"
      className="relative"
      style={{
        backgroundImage: "url(/assets/bg/wheat-pattern.png)", // replace with your file
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* subtle wash so text pops over bg */}
      <div className="absolute inset-0 bg-white" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-semibold tracking-wide text-center"
        >
          What We Do <span className="align-top md:align-baseline">?</span>
        </motion.h2>

        {/* 3 columns */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16 place-items-center">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="text-center"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white">
                {item.icon}
              </div>
              <h3 className="mt-4 text-lg md:text-xl font-semibold tracking-wide text-gray-700">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
