import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";

import p1 from "../../assets/image/home/PSimg1.webp";
import p2 from "../../assets/image/home/PSimg2.webp";
import p3 from "../../assets/image/home/PSimg3.webp";
import p4 from "../../assets/image/home/PSimg4.webp";
import p5 from "../../assets/image/home/PSimg5.webp";
import p6 from "../../assets/image/home/PSimg6.webp";
import p7 from "../../assets/image/home/PSimg7.webp";
import p8 from "../../assets/image/home/PSimg8.webp";

const PRODUCTS = [
  { src: p2, alt: "Western 007" },
  { src: p1, alt: "Western Sangam" },
  { src: p3, alt: "Western Nirmal" },
  { src: p4, alt: "Western Pratap" },
  { src: p5, alt: "Western Product 5" },
  { src: p6, alt: "Western Product 6" },
  { src: p7, alt: "Western Product 7" },
  { src: p8, alt: "Western Product 8" },
];

const MODEL_ROTATION = {
  x: Math.PI / 2,
  y: Math.PI,
  z: Math.PI / 2,
};

function Model({ rotation, path }) {
  const { scene } = useGLTF(path);
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.z += 0.01;
    }
  });

  return <primitive ref={ref} object={scene} scale={2} rotation={rotation} />;
}

export default function ProductsMarquee() {
  const doubled = [...PRODUCTS, ...PRODUCTS];

  return (
    <section className="relative py-12 md:py-16">
      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marqueeScroll 16s linear infinite;
          width: max-content;
          will-change: transform;
        }
        .marquee:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Featured Products Title */}
        <div className="flex justify-center mb-10">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-wide text-black">
            <span className="mr-2">“</span>Featured Products<span className="ml-2">”</span>
          </h2>
        </div>

        {/* Featured Products Marquee */}
        <div className="marquee relative overflow-hidden rounded-xl mb-16">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12" />
          <div className="marquee-track flex gap-10 md:gap-14 items-center">
            {doubled.map((item, idx) => (
              <motion.div key={idx} className="shrink-0" whileHover={{ scale: 1.03 }}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-36 sm:h-44 md:h-56 lg:h-64 w-auto object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* First 3D Model Block */}
        <div className="mt-16">
          <div className="flex justify-center mb-6">
            <div className="inline-block px-6 py-2 rounded-lg border border-black bg-white shadow-md">
              <h3 className="text-2xl font-bold text-black">Lucerne Seed</h3>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="relative w-[250px] h-[300px] mx-auto md:mx-0 shadow-xl rounded-xl bg-white">
              <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
                <ambientLight intensity={3} />
                <directionalLight position={[5, 5, 5]} />
                <Model
                  rotation={[MODEL_ROTATION.x, MODEL_ROTATION.y, MODEL_ROTATION.z]}
                  path="/models/3dmodelRajaka.glb"
                />
                <OrbitControls enableZoom={false} minDistance={4.85} maxDistance={5.15} />
              </Canvas>
            </div>
            <div className="flex-1">
              <p className="text-base text-gray-600 leading-relaxed">
                This model belongs to our Western collection. Designed with precision, it highlights
                modern aesthetics and durability. Perfect for showcasing premium features with an
                elegant 3D presentation.
              </p>
            </div>
          </div>
        </div>

        {/* Second 3D Model Block */}
        <div className="mt-20">
          <div className="flex justify-center mb-6">
            <div className="inline-block px-6 py-2 rounded-lg border border-black bg-white shadow-md">
              <h3 className="text-2xl font-bold text-black">Jaudo Seed</h3>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="relative w-[250px] h-[300px] mx-auto md:mx-0 shadow-xl rounded-xl bg-white">
              <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
                <ambientLight intensity={3} />
                <directionalLight position={[5, 5, 5]} />
                <Model
                  rotation={[MODEL_ROTATION.x, MODEL_ROTATION.y, MODEL_ROTATION.z]}
                  path="/models/3dmodelJaudo.glb"
                />
                <OrbitControls enableZoom={false} minDistance={4.85} maxDistance={5.15} />
              </Canvas>
            </div>
            <div className="flex-1">
              <p className="text-base text-gray-600 leading-relaxed">
                This model is another premium item from our Western collection. It maintains the same
                elegance and detail as our Lucerne model, showcasing top-tier design in a fully
                interactive 3D format.
              </p>
            </div>
          </div>
        </div>

        {/* Global "View All Products" Button above Footer */}
        <div className="mt-16 text-center">
          <a
            href="/products"
            className="inline-block px-6 py-3 bg-green-800 text-white font-medium rounded-xl shadow-md hover:bg-green-700 transition"
          >
            View All Products ➔
          </a>
        </div>

      </div>
    </section>
  );
}

useGLTF.preload("/models/3dmodelRajaka.glb");
useGLTF.preload("/models/3dmodelJaudo.glb");
