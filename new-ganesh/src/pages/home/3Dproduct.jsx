import { motion } from "framer-motion";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

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

export default function ThreeDProducts() {
  return (
    <section className="relative py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* First 3D Model Block */}

        <div className="mt-1">
          <div className="flex flex-col md:flex-row items-start gap-25">
            <div className="relative w-[250px] h-[300px] mx-auto md:mx-0 shadow-2xl rounded-xl bg-white mt-32">
              <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
                <ambientLight intensity={3} />
                <directionalLight position={[5, 5, 5]} />
                <Model
                  rotation={[
                    MODEL_ROTATION.x,
                    MODEL_ROTATION.y,
                    MODEL_ROTATION.z,
                  ]}
                  path="/models/3dmodelRajaka.glb"
                />
                <OrbitControls
                  enableZoom={false}
                  minDistance={4.85}
                  maxDistance={5.15}
                />
              </Canvas>
            </div>
            <div className="flex-1 p-2">
              <div className="inline-block px-6 py-2 rounded-lg  bg-white shadow-md">
                <h3 className="text-2xl font-semibold text-black">
                  Rajka Seed
                </h3>
              </div>
              <p className="text-md text-gray-700 leading-relaxed py-10">
                Rajka Seeds, also known as Lucerne Seeds, are among the finest
                fodder crops cultivated across India, known for their excellent
                germination and consistent performance. They produce dense green
                fodder that enriches soil fertility and provides nutrient-rich
                feed for livestock. High in protein, fiber, and minerals, Rajka
                enhances milk yield and promotes overall animal health. Each
                batch is carefully sourced from trusted farmers and processed to
                maintain purity and freshness.
              </p>
              <p className="text-md text-gray-700 leading-relaxed ">
                Deep-rooted and drought-tolerant, Rajka plants thrive in diverse
                climates while improving soil structure and water retention.
                Ideal for both small-scale and commercial dairy farms, Rajka
                offers multiple cuttings throughout the season for steady fodder
                supply. With <strong>NEW GANESH SEEDS</strong>, every pack of
                Rajka Seeds guarantees reliability, superior quality, and
                sustainable growth — empowering farmers for a greener tomorrow.
              </p>

              <p className="text-green-700 font-semibold mt-3">
                🌿 “Trusted by Farmers, Loved by Nature.”
              </p>
            </div>
          </div>
        </div>

        {/* Second 3D Model Block */}
        <div className="mt-1">
          <div className="flex justify-center mb-1"></div>

          <div className="flex flex-col md:flex-row items-start gap-25">
            <div className="relative w-[250px] h-[300px] mx-auto md:mx-0 shadow-2xl rounded-xl bg-white mt-32">
              <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
                <ambientLight intensity={3} />
                <directionalLight position={[5, 5, 5]} />
                <Model
                  rotation={[
                    MODEL_ROTATION.x,
                    MODEL_ROTATION.y,
                    MODEL_ROTATION.z,
                  ]}
                  path="/models/3dmodelJaudo.glb"
                />
                <OrbitControls
                  enableZoom={false}
                  minDistance={4.85}
                  maxDistance={5.15}
                />
              </Canvas>
            </div>
            <div className="flex-1 p-10">
              <div className="inline-block px-6 py-2 rounded-lg bg-white shadow-md">
                <h3 className="text-2xl font-semibold text-black">
                  Jaudo Seed
                </h3>
              </div>
              <p className="text-md text-gray-700 leading-relaxed py-10">
                Jaudo Bajra Seeds are premium-grade pearl millet seeds valued
                for their strength, resilience, and high yield potential.
                Designed for dry and semi-arid regions, they thrive even in low
                rainfall and poor soil conditions. The crop’s robust root system
                ensures better moisture absorption, while its fast growth
                delivers consistent green fodder for livestock. Rich in
                nutrients and minerals, Jaudo supports both animal and human
                nutrition needs.
              </p>
              <p className="text-md text-gray-700 leading-relaxed">
                Each batch is rigorously cleaned, tested, and packed to preserve
                freshness, purity, and superior germination. With excellent
                drought tolerance and high productivity, Jaudo Bajra remains a
                reliable choice for sustainable agriculture. Farmers across
                India trust <strong>NEW GANESH SEEDS</strong> for consistent
                results, quality assurance, and long-term field performance —
                ensuring growth, stability, and profit with every harvest.
              </p>

              <p className="text-green-700 font-semibold mt-3">
                🌾 “Strong Roots. Steady Growth. Reliable Yields.”
              </p>

            </div>
          </div>
        </div>


        {/* Global "View All Products" Button above Footer */}

        <div className="mt-16 text-center">
          <a
            href="/products"
            className="inline-block px-6 py-3 bg-[#16561A] text-white font-medium rounded-xl shadow-md hover:bg-[#228B22] transition"
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
