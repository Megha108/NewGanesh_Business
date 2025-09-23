// src/pages/home/globalJarallaxBg.jsx
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { jarallax } from "jarallax";
import "jarallax/dist/jarallax.css";
import bg from "../../assets/image/home/bgimg.jpeg";

export default function GlobalJarallaxBg() {
  const elRef = useRef(null);

  useEffect(() => {
    if (elRef.current) {
      jarallax(elRef.current, {
        // Positive = bg moves slower than content (classic parallax)
        // (Use 0.2–0.6; avoid negative here)
        speed: 0.35,
      });
    }
    return () => {
      if (elRef.current) jarallax(elRef.current, "destroy");
    };
  }, []);

  // Render the fixed background directly under <body> so it’s isolated
  return createPortal(
    <div
      ref={elRef}
      className="jarallax fixed inset-0 z-0 pointer-events-none"
      style={{ isolation: "isolate" }}
    >
      {/* jarallax wants an inner .jarallax-img */}
      <img className="jarallax-img" src={bg} alt="" />
      {/* optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30" />
    </div>,
    document.body
  );
}
