import React, { useEffect, useRef } from "react";

export default function EnquiryForm() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    let width = canvas.width;
    let height = canvas.height;

    const elements = [
      { x: 80, y: 100, baseR: 40, type: "ring", color: "rgba(46,139,87,0.3)", speed: 0.003, offset: 0, pulseStrength: 0.05 },
      { x: 250, y: 150, baseR: 60, type: "ring", color: "rgba(46,139,87,0.25)", speed: 0.004, offset: 2, pulseStrength: 0.04 },
      { x: width - 80, y: height - 100, baseR: 30, type: "circle", color: "rgba(0,100,0,0.3)", speed: 0.001, offset: 1, pulseStrength: 0.02 },
      { x: 120, y: height - 120, baseR: 55, type: "ring", color: "rgba(46,139,87,0.3)", speed: 0.003, offset: 3, pulseStrength: 0.04 },
      { x: width - 100, y: 200, baseR: 25, type: "circle", color: "rgba(0,100,0,0.4)", speed: 0.002, offset: 0, pulseStrength: 0.03 },

      // 20 more below ↓
      { x: 180, y: 250, baseR: 45, type: "ring", color: "rgba(34,139,34,0.25)", speed: 0.0045, offset: 4, pulseStrength: 0.06 },
      { x: 400, y: 100, baseR: 35, type: "circle", color: "rgba(0,100,0,0.35)", speed: 0.0018, offset: 5, pulseStrength: 0.025 },
      { x: 600, y: 200, baseR: 70, type: "ring", color: "rgba(46,139,87,0.28)", speed: 0.0035, offset: 6, pulseStrength: 0.05 },
      { x: width - 150, y: height - 150, baseR: 40, type: "circle", color: "rgba(0,100,0,0.25)", speed: 0.001, offset: 7, pulseStrength: 0.03 },
      { x: 300, y: height - 200, baseR: 60, type: "ring", color: "rgba(46,139,87,0.32)", speed: 0.004, offset: 8, pulseStrength: 0.05 },

      { x: width / 2, y: 100, baseR: 50, type: "circle", color: "rgba(0,128,0,0.3)", speed: 0.002, offset: 9, pulseStrength: 0.03 },
      { x: 100, y: height / 2, baseR: 40, type: "ring", color: "rgba(46,139,87,0.25)", speed: 0.003, offset: 10, pulseStrength: 0.06 },
      { x: width - 250, y: height / 2 + 100, baseR: 65, type: "ring", color: "rgba(34,139,34,0.35)", speed: 0.005, offset: 11, pulseStrength: 0.05 },
      { x: 220, y: height / 2 - 50, baseR: 30, type: "circle", color: "rgba(0,100,0,0.25)", speed: 0.0015, offset: 12, pulseStrength: 0.02 },
      { x: width - 320, y: 300, baseR: 55, type: "ring", color: "rgba(46,139,87,0.3)", speed: 0.0035, offset: 13, pulseStrength: 0.04 },

      { x: 180, y: 400, baseR: 35, type: "circle", color: "rgba(0,100,0,0.35)", speed: 0.001, offset: 14, pulseStrength: 0.025 },
      { x: width - 500, y: height - 350, baseR: 70, type: "ring", color: "rgba(34,139,34,0.3)", speed: 0.004, offset: 15, pulseStrength: 0.06 },
      { x: 450, y: height - 150, baseR: 25, type: "circle", color: "rgba(0,128,0,0.4)", speed: 0.0012, offset: 16, pulseStrength: 0.02 },
      { x: width - 400, y: 120, baseR: 60, type: "ring", color: "rgba(46,139,87,0.26)", speed: 0.0045, offset: 17, pulseStrength: 0.045 },
      { x: 90, y: height - 250, baseR: 45, type: "circle", color: "rgba(0,100,0,0.28)", speed: 0.002, offset: 18, pulseStrength: 0.03 },

      { x: width - 600, y: height / 3, baseR: 40, type: "ring", color: "rgba(34,139,34,0.3)", speed: 0.005, offset: 19, pulseStrength: 0.05 },
      { x: width / 2 + 200, y: height / 2 - 150, baseR: 55, type: "circle", color: "rgba(0,100,0,0.35)", speed: 0.0018, offset: 20, pulseStrength: 0.025 },
      { x: 220, y: 80, baseR: 25, type: "circle", color: "rgba(0,100,0,0.3)", speed: 0.0015, offset: 21, pulseStrength: 0.02 },
      { x: width - 250, y: 80, baseR: 45, type: "ring", color: "rgba(46,139,87,0.28)", speed: 0.0042, offset: 22, pulseStrength: 0.04 },
      { x: 300, y: height - 300, baseR: 70, type: "ring", color: "rgba(46,139,87,0.25)", speed: 0.0038, offset: 23, pulseStrength: 0.05 },
      { x: width / 2 + 100, y: height - 180, baseR: 30, type: "circle", color: "rgba(0,128,0,0.32)", speed: 0.0013, offset: 24, pulseStrength: 0.025 },
    ];


    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      elements.forEach((el) => {
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
    <div className="flex justify-center items-center py-16 bg-white">
      {/* Outer animated green box */}
      <div className="relative bg-green-200 rounded-2xl shadow-2xl p-10 w-[95%] max-w-7xl overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

        {/* Inner smaller white box */}
        <div className="relative z-10 bg-white rounded-xl shadow-xl p-6 md:p-8 w-[90%] mx-auto">
          {/* Map + Form container */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">

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
