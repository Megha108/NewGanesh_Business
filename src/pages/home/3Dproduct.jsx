import { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const MODEL_ROTATION = {
  x: Math.PI / 2,
  y: Math.PI,
  z: Math.PI / 2,
};

// ---------------- Model (Z spin only) ----------------
function Model({ path }) {
  const { scene } = useGLTF(path);
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.z += 0.01;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={2}
      rotation={[MODEL_ROTATION.x, MODEL_ROTATION.y, MODEL_ROTATION.z]}
    />
  );
}

// ---------------- Controls + Camera Reset Wrapper ----------------
function ModelWithControls({ path }) {
  const controlsRef = useRef();
  const { camera } = useThree();

  const initialCameraPos = useRef(camera.position.clone());
  const initialTarget = useRef(new THREE.Vector3(0, 0, 0));
  const [shouldReset, setShouldReset] = useState(false);
  const resetTimeout = useRef();

  const onInteract = () => {
    setShouldReset(false);
    if (resetTimeout.current) clearTimeout(resetTimeout.current);
    resetTimeout.current = setTimeout(() => setShouldReset(true), 10);
  };

  useFrame(() => {
    const ctrls = controlsRef.current;
    if (!ctrls) return;
    if (shouldReset) {
      const speed = 0.03;
      camera.position.x += (initialCameraPos.current.x - camera.position.x) * speed;
      camera.position.y += (initialCameraPos.current.y - camera.position.y) * speed;
      ctrls.target.x += (initialTarget.current.x - ctrls.target.x) * speed;
      ctrls.target.y += (initialTarget.current.y - ctrls.target.y) * speed;
      ctrls.update();
    }
  });

  return (
    <>
      <Model path={path} />
      <OrbitControls
        ref={controlsRef}
        enableZoom={false}
        minDistance={4.85}
        maxDistance={5.15}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2 - 0.01}
        onStart={onInteract}
        onChange={onInteract}
        onEnd={onInteract}
      />
    </>
  );
}

// ---------------- Main Component ----------------
export default function ThreeDProducts() {
  return (
    <section className="relative py-10 md:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* First 3D Model Block — Rajka */}
        <div className="-mt-16 flex flex-col md:flex-row items-start gap-24">
          <div className="relative w-[250px] h-[300px] mx-auto md:mx-0 shadow-2xl rounded-xl bg-white mt-14">
            <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
              <ambientLight intensity={3} />
              <directionalLight position={[5, 5, 5]} />
              <ModelWithControls path="/models/3dmodelRajaka.glb" />
            </Canvas>
          </div>

          <div className="flex-1 p-10">
            <div className="inline-block px-6 py-2 rounded-lg bg-white shadow-md">
              <h3 className="text-2xl font-semibold text-black -mt-10">Rajka Seed</h3>
            </div>
            <p className="text-md text-gray-700 leading-relaxed py-6">
              Rajka Seeds, also known as Lucerne Seeds, are among the finest
              fodder crops cultivated across India, known for their excellent
              germination and consistent performance. They produce dense green
              fodder that enriches soil fertility and provides nutrient-rich
              feed for livestock. High in protein, fiber, and minerals, Rajka
              enhances milk yield and promotes overall animal health. Each
              batch is carefully sourced from trusted farmers and processed to
              maintain purity and freshness.
            </p>
            <p className="text-md text-gray-700 leading-relaxed">
              Deep-rooted and drought-tolerant, Rajka plants thrive in diverse
              climates while improving soil structure and water retention.
              Ideal for both small-scale and commercial dairy farms, Rajka
              offers multiple cuttings throughout the season for steady fodder
              supply. With <strong>NEW GANESH SEEDS</strong>, every pack of
              Rajka Seeds guarantees reliability, superior quality, and
              sustainable growth — empowering farmers for a greener tomorrow.
            </p>
            <p className="text-green-700 font-semibold mt-1">
              🌿 “Trusted by Farmers, Loved by Nature.”
            </p>
          </div>
        </div>

        {/* Second 3D Model Block — Jaudo */}
        <div className="-mt-5 flex flex-col md:flex-row items-start gap-24">
          <div className="relative w-[250px] h-[300px] mx-auto md:mx-0 shadow-2xl rounded-xl bg-white mt-14">
            <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
              <ambientLight intensity={3} />
              <directionalLight position={[5, 5, 5]} />
              <ModelWithControls path="/models/3dmodelJaudo.glb" />
            </Canvas>
          </div>

          <div className="flex-1 p-10">
            <div className="inline-block px-6 py-2 rounded-lg bg-white shadow-md">
              <h3 className="text-2xl font-semibold text-black -mt-10">Jaudo Seed</h3>
            </div>
            <p className="text-md text-gray-700 leading-relaxed py-6">
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
            <p className="text-green-700 font-semibold mt-1">
              🌾 “Strong Roots. Steady Growth. Reliable Yields.”
            </p>
          </div>
        </div>

        {/* Third 3D Model Block — Kansi */}
        <div className="-mt-5 flex flex-col md:flex-row items-start gap-24">
          <div className="relative w-[250px] h-[300px] mx-auto md:mx-0 shadow-2xl rounded-xl bg-white mt-14">
            <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
              <ambientLight intensity={3} />
              <directionalLight position={[5, 5, 5]} />
              <ModelWithControls path="/models/3dmodelKansi.glb" />
            </Canvas>
          </div>

          <div className="flex-1 p-10">
            <div className="inline-block px-6 py-2 rounded-lg bg-white shadow-md">
              <h3 className="text-2xl font-semibold text-black -mt-10">Kasni Seed</h3>
            </div>
            <p className="text-md text-gray-700 leading-relaxed py-6">
              Kasni Seeds are widely recognized for their adaptability,
              resilience, and rich green fodder output. Perfect for mixed
              farming systems, they are known to enhance soil fertility while
              offering excellent digestibility for livestock. The crop grows
              vigorously even under challenging weather, ensuring steady
              fodder supply year-round.
            </p>
            <p className="text-md text-gray-700 leading-relaxed">
              Cultivated with precision and care, each lot of Kasni Seeds from
              <strong> NEW GANESH SEEDS </strong> undergoes strict quality
              control for purity, germination rate, and vitality. Their quick
              regrowth cycle makes them an economical and sustainable fodder
              option for farmers looking to maximize productivity and soil
              health.
            </p>
            <p className="text-green-700 font-semibold mt-1">
              🌱 “Healthy Soil. Healthy Feed. Prosperous Farms.”
            </p>
          </div>
        </div>

        {/* View All Products Button */}
        <div className="mt-6 text-center">
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
useGLTF.preload("/models/3dmodelKansi.glb");
