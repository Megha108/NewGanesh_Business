import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import seedImg from "../assets/SproutingSeed .png";

export default function SeedTrail() {
  const containerRef = useRef(null);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const frameCount = useRef(0);
  const trailInterval = 2; // frames between spawns when moving

  useEffect(() => {
    const createSeed = (x, y) => {
      const seed = document.createElement("img");
      seed.src = seedImg;
      seed.alt = "";
      seed.className =
        "absolute w-5 h-5 opacity-100 pointer-events-none select-none";
      seed.style.left = `${x - 10}px`;
      seed.style.top = `${y - 10}px`;
      seed.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
      seed.style.zIndex = 9999;
      containerRef.current.appendChild(seed);

      // Fade out after 1 second
      gsap.to(seed, {
        duration: 1,
        opacity: 0,
        y: "+=5",
        ease: "power2.out",
        onComplete: () => seed.remove(),
      });
    };

    const handleMove = (e) => {
      const dx = e.clientX - lastMousePos.current.x;
      const dy = e.clientY - lastMousePos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Only spawn seed if mouse actually moved
      if (distance > 0) {
        frameCount.current++;
        if (frameCount.current % trailInterval === 0) {
          createSeed(
            e.clientX + Math.random() * 8 - 4,
            e.clientY + Math.random() * 8 - 4
          );
        }
        lastMousePos.current = { x: e.clientX, y: e.clientY };
      }
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 overflow-hidden z-[999]"
    />
  );
}
