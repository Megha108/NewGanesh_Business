import { motion } from "framer-motion";
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
    ref.current.rotation.z += 0.01; // Z spin
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

  // Called on any interaction
  const onInteract = () => {
    setShouldReset(false);
    if (resetTimeout.current) clearTimeout(resetTimeout.current);

    // Start reset once after last interaction
    resetTimeout.current = setTimeout(() => {
      setShouldReset(true);
    }, 10); // delay only once
    
  };

  // Smooth X/Y return every frame from any camera angle
  useFrame(() => {
    const ctrls = controlsRef.current;
    if (!ctrls) return;

    if (shouldReset) {
      const speed = 0.03; // adjust for smoothness

      // Smoothly move camera X/Y
      camera.position.x += (initialCameraPos.current.x - camera.position.x) * speed;
      camera.position.y += (initialCameraPos.current.y - camera.position.y) * speed;

      // Smoothly move controls target X/Y
      ctrls.target.x += (initialTarget.current.x - ctrls.target.x) * speed;
      ctrls.target.y += (initialTarget.current.y - ctrls.target.y) * speed;

      ctrls.update();

      // Stop exactly at target when very close
      if (
        Math.abs(camera.position.x - initialCameraPos.current.x) < 0.0001 &&
        Math.abs(camera.position.y - initialCameraPos.current.y) < 0.0001 &&
        Math.abs(ctrls.target.x - initialTarget.current.x) < 0.0001 &&
        Math.abs(ctrls.target.y - initialTarget.current.y) < 0.0001
      ) {
        camera.position.copy(initialCameraPos.current);
        ctrls.target.copy(initialTarget.current);
        ctrls.update();
        setShouldReset(false);
      }
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
        minPolarAngle={0}                  // prevents camera going below horizon
        maxPolarAngle={Math.PI / 2 - 0.01} // prevents fully horizontal view (fix freeze)
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
    <section className="relative py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* First 3D Model Block */}
        <div className="mt-14 flex flex-col md:flex-row items-start gap-30">
          <div className="relative w-[250px] h-[300px] mx-auto md:mx-0 shadow-2xl rounded-xl bg-white mt-32">
            <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
              <ambientLight intensity={3} />
              <directionalLight position={[5, 5, 5]} />
              <ModelWithControls path="/models/3dmodelRajaka.glb" />
            </Canvas>
          </div>
          <div className="flex-1 p-10">
            <div className="inline-block px-6 py-2 rounded-lg bg-white shadow-md">
              <h3 className="text-2xl font-semibold text-black">Rajka Seed</h3>
            </div>
            <p className="text-md text-gray-700 leading-relaxed py-10">
              Rajka Seeds, also known as Lucerne Seeds, are among the finest fodder crops cultivated across India...
            </p>
            <p className="text-green-700 font-semibold mt-3">🌿 “Trusted by Farmers, Loved by Nature.”</p>
          </div>
        </div>

        {/* Second 3D Model Block */}
        <div className="mt-14 flex flex-col md:flex-row items-start gap-30">
          <div className="relative w-[250px] h-[300px] mx-auto md:mx-0 shadow-2xl rounded-xl bg-white mt-32">
            <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
              <ambientLight intensity={3} />
              <directionalLight position={[5, 5, 5]} />
              <ModelWithControls path="/models/3dmodelJaudo.glb" />
            </Canvas>
          </div>
          <div className="flex-1 p-10">
            <div className="inline-block px-6 py-2 rounded-lg bg-white shadow-md">
              <h3 className="text-2xl font-semibold text-black">Jaudo Seed</h3>
            </div>
            <p className="text-md text-gray-700 leading-relaxed py-10">
              Jaudo Bajra Seeds are premium-grade pearl millet seeds...
            </p>
            <p className="text-green-700 font-semibold mt-3">🌾 “Strong Roots. Steady Growth. Reliable Yields.”</p>
          </div>
        </div>

        {/* View All Products Button */}
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
