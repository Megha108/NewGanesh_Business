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
    <section className="relative py-12 md:py-16 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* First 3D Model Block */}
        <div className="mt-16">
          <div className="flex flex-col md:flex-row items-start gap-30">
            <div className="relative w-[250px] h-[300px] mx-auto md:mx-0 shadow-xl rounded-xl bg-white">
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
            <div className="flex-1 p-10">
              <div className="inline-block px-6 py-2 rounded-lg  bg-white shadow-md">
                <h3 className="text-2xl font-semibold text-black">
                  Rajka Seed
                </h3>
              </div>
              <p className="text-base text-gray-700 leading-relaxed py-10">
                Rajka Seeds (Lucerne Seeds) are known for their excellent
                germination and strong growth. They help improve soil fertility
                and provide high-quality fodder for livestock. Sourced directly
                from trusted farmers, these seeds are carefully cleaned and
                packed to ensure purity. Ideal for both commercial and
                small-scale farming, Rajka Seeds promise reliable yield and
                consistent performance.
              </p>
            </div>
          </div>
        </div>

        {/* Second 3D Model Block */}
        <div className="mt-20">
          <div className="flex justify-center mb-6"></div>

          <div className="flex flex-col md:flex-row items-start gap-30">
            <div className="relative w-[250px] h-[300px] mx-auto md:mx-0 shadow-xl rounded-xl bg-white">
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
              <p className="text-base text-gray-700 leading-relaxed py-10">
                Jaudo Bajra Seeds are high-quality pearl millet seeds known for
                their strong growth and resilience. They are ideal for dry and
                semi-dry regions, offering excellent yield even in tough
                conditions. Rich in nutrients, Jaudo Bajra supports both animal
                feed and human consumption needs. Each seed is carefully cleaned
                and packed to maintain purity, freshness, and top performance in
                the field.
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
