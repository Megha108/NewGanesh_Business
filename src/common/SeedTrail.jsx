import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import seedImg from "../assets/SproutingSeed .png";

export default function SeedTrail() {
  const containerRef = useRef(null);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const frameCount = useRef(0);

  // 2x faster trail on mobile
  const isMobile = window.matchMedia("(pointer: coarse)").matches;
  const trailInterval = isMobile ? 0.5 : 2;

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

      gsap.to(seed, {
        duration: 1,
        opacity: 0,
        y: "+=5",
        ease: "power2.out",
        onComplete: () => seed.remove(),
      });
    };

    const handleMove = (clientX, clientY) => {
      const dx = clientX - lastMousePos.current.x;
      const dy = clientY - lastMousePos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 0) {
        frameCount.current++;
        if (frameCount.current % trailInterval === 0) {
          createSeed(
            clientX + Math.random() * 8 - 4,
            clientY + Math.random() * 8 - 4
          );
        }
        lastMousePos.current = { x: clientX, y: clientY };
      }
    };

    const mouseMove = (e) => handleMove(e.clientX, e.clientY);
    const touchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        handleMove(touch.clientX, touch.clientY);
      }
    };

    const touchStart = (e) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        lastMousePos.current = { x: touch.clientX, y: touch.clientY };
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("touchmove", touchMove, { passive: true });
    window.addEventListener("touchstart", touchStart, { passive: true });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("touchmove", touchMove);
      window.removeEventListener("touchstart", touchStart);
    };
  }, [trailInterval]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 overflow-hidden z-[999]"
    />
  );
}
