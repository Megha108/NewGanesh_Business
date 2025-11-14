import { useEffect, useRef } from "react";

export default function GreenBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const elements = Array.from({ length: 25 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      baseR: 25 + Math.random() * 50,
      type: Math.random() > 0.5 ? "circle" : "ring",
      color: Math.random() > 0.5 ? "rgba(46,139,87,0.25)" : "rgba(0,100,0,0.35)",
      speed: 0.001 + Math.random() * 0.004,
      offset: i * 2,
      pulseStrength: 0.02 + Math.random() * 0.05,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
    }));

    const draw = () => {
      const { width, height } = canvas;
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "#d4f8d4");
      gradient.addColorStop(1, "#b7e3b7");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      elements.forEach((el) => {
        el.x += el.dx;
        el.y += el.dy;
        if (el.x < -100) el.x = width + 100;
        if (el.x > width + 100) el.x = -100;
        if (el.y < -100) el.y = height + 100;
        if (el.y > height + 100) el.y = -100;

        const pulse = Math.sin(Date.now() * el.speed + el.offset);
        const dynamicR = el.baseR * (1 + el.pulseStrength * pulse);

        ctx.beginPath();
        if (el.type === "ring") {
          ctx.lineWidth = 1.5;
          ctx.strokeStyle = el.color;
          ctx.arc(el.x, el.y, dynamicR, 0, Math.PI * 2);
          ctx.stroke();
        } else {
          ctx.fillStyle = el.color;
          ctx.arc(el.x, el.y, dynamicR, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-[-1]"
    />
  );
}
