import React, { useEffect, useRef } from "react";
import "./enquiry.css";

export default function EnquiryForm() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        function resizeCanvas() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }

        resizeCanvas();

        let width = canvas.width;
        let height = canvas.height;

        // 🌿 define elements (those that depend on height/width will be adjusted below)
        let elements = [
            // top-left arcs
            { x: 60, y: 50, baseR: 40, type: "ring", color: "rgba(46,139,87,0.3)", speed: 0.003, offset: 0, pulseStrength: 0.05 },
            { x: 60, y: 50, baseR: 30, type: "ring", color: "rgba(46,139,87,0.2)", speed: 0.003, offset: 1, pulseStrength: 0.05 },
            { x: 60, y: 50, baseR: 20, type: "ring", color: "rgba(46,139,87,0.15)", speed: 0.003, offset: 2, pulseStrength: 0.05 },

            // middle small circles
            { x: 120, y: 140, baseR: 10, type: "ring", color: "rgba(150,150,150,0.25)", speed: 0.006, offset: 1, pulseStrength: 0.05 },
            { x: 250, y: 120, baseR: 12, type: "ring", color: "rgba(150,150,150,0.3)", speed: 0.008, offset: 3, pulseStrength: 0.08 },
            { x: 400, y: 120, baseR: 40, type: "ring", color: "rgba(46,139,87,0.3)", speed: 0.004, offset: 1, pulseStrength: 0.03 },

            // bottom-left rings (visible now)
            { x: 100, y: height - 80, baseR: 60, type: "ring", color: "rgba(46,139,87,0.25)", speed: 0.0035, offset: 2, pulseStrength: 0.03 },
            { x: 100, y: height - 80, baseR: 45, type: "ring", color: "rgba(46,139,87,0.15)", speed: 0.0035, offset: 3, pulseStrength: 0.03 },
            { x: 100, y: height - 80, baseR: 30, type: "ring", color: "rgba(46,139,87,0.1)", speed: 0.0035, offset: 4, pulseStrength: 0.03 },
            //bottom-right ring
            { x: 1000, y: height - 50, baseR: 60, type: "ring", color: "rgba(46,139,87,0.25)", speed: 0.0035, offset: 2, pulseStrength: 0.03 },
            { x: 1000, y: height - 50, baseR: 45, type: "ring", color: "rgba(46,139,87,0.15)", speed: 0.0035, offset: 3, pulseStrength: 0.03 },
            { x: 1000, y: height - 50, baseR: 30, type: "ring", color: "rgba(46,139,87,0.1)", speed: 0.0035, offset: 4, pulseStrength: 0.03 },
//mid ring
            { x: 400, y: height - 300, baseR: 60, type: "ring", color: "rgba(46,139,87,0.25)", speed: 0.0035, offset: 2, pulseStrength: 0.03 },
            { x: 400, y: height - 300, baseR: 45, type: "ring", color: "rgba(46,139,87,0.15)", speed: 0.0035, offset: 3, pulseStrength: 0.03 },
            { x: 400, y: height - 300, baseR: 30, type: "ring", color: "rgba(46,139,87,0.1)", speed: 0.0035, offset: 4, pulseStrength: 0.03 },
 
            // bottom small rings
            { x: 200, y: height - 50, baseR: 8, type: "ring", color: "rgba(150,150,150,0.2)", speed: 0.005, offset: 5, pulseStrength: 0.05 },
            { x: 320, y: height - 40, baseR: 10, type: "ring", color: "rgba(150,150,150,0.2)", speed: 0.006, offset: 2, pulseStrength: 0.05 },

            // 🌿 NEW filled circles (adjusted for visibility)
            { x: 200, y: height - 200, baseR: 35, type: "circle", color: "rgba(0,100,0,0.4)", speed: 0.0015, offset: 0, pulseStrength: 0.02 }, // bottom-left visible
            { x: width - 150, y: height / 2, baseR: 20, type: "circle", color: "rgba(0,100,0,0.35)", speed: 0.002, offset: 2, pulseStrength: 0.03 }, // mid-right
            { x: width / 2, y: 70, baseR: 18, type: "circle", color: "rgba(0,100,0,0.3)", speed: 0.001, offset: 4, pulseStrength: 0.02 }, // top-middle
            { x: 700, y: height - 200, baseR: 100, type: "circle", color: "rgba(0,100,0,0.4)", speed: 0.0015, offset: 0, pulseStrength: 0.02 }, // bottom-left visible
            { x: 1250, y: height - 200, baseR: 35, type: "circle", color: "rgba(0,100,0,0.4)", speed: 0.0015, offset: 0, pulseStrength: 0.02 }, // bottom-right visible
            { x: 1100, y: height - 700, baseR: 100, type: "circle", color: "rgba(0,100,0,0.4)", speed: 0.0015, offset: 0, pulseStrength: 0.02 }, // top-right visible
        ];

        // 🟢 Redraw function
        function draw() {
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
        }

        draw();

        window.addEventListener("resize", () => {
            resizeCanvas();
            width = canvas.width;
            height = canvas.height;

            // 🔁 reposition elements that depend on width/height
            elements = elements.map((el) => {
                if (el.y > height - 100) el.y = height - 80;
                if (el.x > width - 200) el.x = width - 150;
                return el;
            });
        });

        return () => window.removeEventListener("resize", resizeCanvas);
    }, []);

    return (
        <div className="flex justify-center items-center p-10 bg-green-50 min-h-screen">
            <div className="bg-green-200 shadow-xl rounded-2xl p-8 w-full max-w-7xl relative overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full z-0"
                    style={{ display: "block" }}
                />
                <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800 relative z-10">
                    Enquiry Form
                </h2>


                {/* Map + Form section */}
                <div className="flex flex-col lg:flex-row gap-8 items-start relative z-10">
                    {/* Left: Map */}
                    <div className="w-full lg:w-[60%] h-[400px] rounded-xl overflow-hidden shadow-md bg-white">
                        <iframe
                            title="New Ganesh Seeds Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.704747023929!2d72.33449657500792!3d23.28742978482165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c233f66754ac1%3A0x77a1cc259c000420!2sNEW%20GANESH%20SEEDS!5e0!3m2!1sen!2sin!4v1730979638741!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    {/* Right: Form */}
                    <div className="w-full lg:w-[40%] bg-gray-50 rounded-xl shadow-inner p-6">
                        <form className="space-y-5">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Mobile Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Enter your mobile number"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    City
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your city"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Your Query
                                </label>
                                <textarea
                                    rows="5"
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
    );
}
