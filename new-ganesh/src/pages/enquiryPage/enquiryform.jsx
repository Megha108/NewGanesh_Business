import { useEffect, useRef } from "react";
import "./enquiry.css";

export default function HeroBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const bubbles = Array.from({ length: 120 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 4 + 1,
      dx: (Math.random() - 0.5) * 0.7,
      dy: (Math.random() - 0.5) * 0.7,
    }));

    let mouse = { x: width / 2, y: height / 2 };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // 🌿 soft gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#b4ec51");
      gradient.addColorStop(1, "#429321");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 🫧 draw floating bubbles
      bubbles.forEach((b) => {
        b.x += b.dx;
        b.y += b.dy;

        if (b.x < 0 || b.x > width) b.dx *= -1;
        if (b.y < 0 || b.y > height) b.dy *= -1;

        // mouse repel
        const dist = Math.hypot(mouse.x - b.x, mouse.y - b.y);
        if (dist < 120) {
          const angle = Math.atan2(b.y - mouse.y, b.x - mouse.x);
          b.x += Math.cos(angle) * 2;
          b.y += Math.sin(angle) * 2;
        }

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();

    // 🖱️ track mouse movement
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // handle resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* 🟩 Canvas gradient + bubbles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* 🌊 Static White Wave at Bottom */}
      <div className="absolute bottom-0 w-full overflow-hidden">
        <svg
          className="w-full h-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(255,255,255,1)"
            d="M0,224L48,208C96,192,192,160,288,138.7C384,117,480,107,576,133.3C672,160,768,224,864,245.3C960,267,1056,245,1152,213.3C1248,181,1344,139,1392,117.3L1440,96V320H0Z"
          ></path>
        </svg>
      </div>

      {/* 🌿 Foreground Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-6xl font-extrabold drop-shadow-lg">Welcome</h1>
        <p className="mt-4 text-2xl opacity-90">
          Soft green gradient with floating bubbles
        </p>
      </div>
    </div>
  );
}
