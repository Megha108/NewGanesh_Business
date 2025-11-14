import { motion } from "framer-motion";
import RnDIcon from "../../assets/icon/i1.svg";
import ProductionIcon from "../../assets/icon/i2.svg";
import MarketingIcon from "../../assets/icon/i3.svg";

export default function WhatWeDo() {
  const items = [
    {
      title: "Research and Development",
      description:
        "We invest in continuous innovation to improve seed genetics and productivity. Our R&D team focuses on crop resilience and adaptability. Each variety is tested to ensure top performance in every field.",
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
      description:
        "We follow strict production protocols to maintain superior seed quality. Advanced equipment ensures purity, uniformity, and germination accuracy. Every batch goes through rigorous inspection before packaging.",
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
      description:
        "Our marketing connects farmers directly with reliable seed solutions. We prioritize transparency, education, and long-term partnerships. Through fairs and digital platforms, we reach communities nationwide.",
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
        backgroundImage: "url(/assets/bg/wheat-pattern.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* subtle white overlay */}
      <div className="absolute inset-0 bg-white/80" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-semibold tracking-wide text-center text-gray-900"
        >
          What We Do <span className="align-top md:align-baseline">?</span>
        </motion.h2>

        {/* Items Grid */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16 place-items-center">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="text-center max-w-xs hover:scale-105 transition-transform duration-300"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-md">
                {item.icon}
              </div>
              <h3 className="mt-5 text-lg md:text-xl font-semibold tracking-wide text-gray-700">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed px-2">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
