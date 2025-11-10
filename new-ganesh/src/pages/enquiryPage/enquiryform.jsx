import React from "react";
import { useLocation } from "react-router-dom"; // ✅ added
import GreenBackground from "./GreenBackground";

export default function EnquiryForm() {
  const location = useLocation();
  const selectedProduct = location.state?.selectedProduct || ""; // ✅ get product name

  return (
    <div className="relative w-full min-h-screen flex justify-center items-center overflow-hidden">
      {/* 🌿 Global animated background */}
      <GreenBackground />

      {/* 🌼 Enquiry Form */}
      <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 md:p-10 w-[90%] max-w-5xl backdrop-blur-sm bg-opacity-90">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Map + Contact Details */}
          <div className="w-full md:w-1/2 h-auto rounded-lg overflow-hidden shadow-lg flex flex-col">
            <div className="h-[250px] md:h-[350px]">
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

            <div className="p-4 md:p-5 mt-3 text-gray-700 text-sm md:text-base">
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                📍 Address
              </h3>
              <ul>
                <a
                  href="https://maps.app.goo.gl/5nDv3t7NAxy4CbvD6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#FFD700]"
                >
                  Kadi – Thol Rd, near Indian Oil Petrol Pump, TIRTH Arcade,
                  near Thol Road, Kadi, Gujarat 384440
                </a>
              </ul>

              <h3 className="text-lg font-semibold text-green-700 mb-2">
                📞 Contact
              </h3>
              <p className="leading-relaxed">
                Phone:{" "}
                <a
                  href="tel:+919978031353"
                  className="text-green-600 hover:underline"
                >
                  +91 9978031353
                </a>{" "}
                <br />
                Email:{" "}
                <a
                  href="mailto:newganeshseeds38@gmail.com"
                  className="text-green-600 hover:underline"
                >
                  newganeshseeds38@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="w-full md:w-1/2 rounded-lg shadow-lg p-5 md:p-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-center text-gray-800">
              Enquiry Form
            </h2>

            <form className="space-y-3">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                  onInput={(e) => {
                    e.target.value = e.target.value
                      .replace(/[^0-9]/g, "")
                      .slice(0, 10);
                  }}
                />
                <small className="text-gray-500 text-xs">
                  Enter a 10-digit mobile number
                </small>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  City
                </label>
                <input
                  type="text"
                  placeholder="Enter your city"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              {/* ✅ Auto-selected Product Dropdown */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Select Product
                </label>
                <select
                  defaultValue={selectedProduct}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">-- Select a Product --</option>
                  <option>Ganesh Rajka Seeds</option>
                  <option>Ganesh Rajka Teensali</option>
                  <option>Ganesh Rajka Barmasi</option>
                  <option>Ganesh Kasni</option>
                  <option>Ganesh Rajka Bajra</option>
                  <option>Barseem</option>
                  <option>Ganesh Jaudo</option>
                  <option>Oat Seeds</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Your Query
                </label>
                <textarea
                  rows="3"
                  placeholder="Type your enquiry here..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
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
