import React, { useEffect, useRef } from "react";

export default function EnquiryForm() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    let width = canvas.width;
    let height = canvas.height;

    // 🌿 Create moving green circles/rings
    const elements = Array.from({ length: 25 }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      baseR: 25 + Math.random() * 50,
      type: Math.random() > 0.5 ? "circle" : "ring",
      color:
        Math.random() > 0.5
          ? "rgba(46,139,87,0.25)"
          : "rgba(0,100,0,0.35)",
      speed: 0.001 + Math.random() * 0.004,
      offset: i * 2,
      pulseStrength: 0.02 + Math.random() * 0.05,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
    }));

    const draw = () => {
      // 🌈 Gradient background
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
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden m-0 p-0">
      {/* 🌿 Fullscreen animated gradient background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* 🌼 Centered Enquiry Form */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 w-[90%] max-w-5xl backdrop-blur-sm bg-opacity-90">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Map */}
            <div className="w-full md:w-1/2 h-[250px] md:h-[350px] rounded-lg overflow-hidden shadow-md">
              <iframe
                title="New Ganesh Seeds Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.704747023929!2d72.33449657500792!3d23.28742978482165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c233f66754ac1%3A0x77a1cc259c000420!2sNEW%20GANESH%20SEEDS!5e0!3m2!1sen!2sin!4v1730979638741!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Form */}
            <div className="w-full md:w-1/2 bg-gray-50 rounded-lg shadow-inner p-5 md:p-6">
              <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-center text-gray-800">
                Enquiry Form
              </h2>

              <form className="space-y-3">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your mobile number"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">City</label>
                  <input
                    type="text"
                    placeholder="Enter your city"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">Your Query</label>
                  <textarea
                    rows="3"
                    placeholder="Type your enquiry here..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all duration-200"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
    