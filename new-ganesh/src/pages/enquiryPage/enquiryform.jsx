import React from "react";
import GreenBackground from "./GreenBackground";

export default function EnquiryForm() {
  return (
    <div className="relative w-full min-h-screen flex justify-center items-center overflow-hidden">
      {/* 🌿 Global animated background */}
      <GreenBackground />

      {/* 🌼 Enquiry Form */}
      <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 md:p-10 w-[90%] max-w-5xl backdrop-blur-sm bg-opacity-90">
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
  );
}
