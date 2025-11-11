import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import GreenBackground from "./GreenBackground";

export default function EnquiryForm() {
  const location = useLocation();
  const selectedProduct = location.state?.selectedProduct || "";

  // UI state
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ ok: null, msg: "" });

  // EmailJS keys (env with fallbacks so it doesn't crash if unset)
  const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || "service_xxx";
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_yyy";
  const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || "public_zzz";

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ ok: null, msg: "" });

    const formEl = e.currentTarget;
    const form = new FormData(formEl);

    // Honeypot check (bot trap)
    if ((form.get("website") || "").toString().trim().length > 0) {
      setStatus({ ok: true, msg: "Thanks! (spam filtered)" });
      formEl.reset();
      return;
    }

    // Phone validation (exact 10 digits)
    const phone = (form.get("phone") || "").toString().replace(/\D/g, "");
    if (phone.length !== 10) {
      setStatus({ ok: false, msg: "Please enter a valid 10-digit mobile number." });
      return;
    }

    // Build template params expected by your EmailJS template
    const templateParams = {
      from_name: form.get("name"),
      from_email: form.get("email"),
      phone: phone,
      city: form.get("city") || "",
      product: form.get("product") || "",
      subject: "Website Enquiry",
      message: form.get("message"),
      // you can add more fields if your template includes them
    };

    try {
      setLoading(true);
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY });
      setStatus({ ok: true, msg: "Thanks! Your enquiry has been sent." });
      formEl.reset();
    } catch (err) {
      console.error(err);
      setStatus({
        ok: false,
        msg: "Sorry, something went wrong sending your enquiry. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

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
              <h3 className="text-lg font-semibold text-green-700 mb-2">📍 Address</h3>
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

              <h3 className="text-lg font-semibold text-green-700 mb-2">📞 Contact</h3>
              <p className="leading-relaxed">
                Phone:{" "}
                <a href="tel:+919978031353" className="text-green-600 hover:underline">
                  +91 9978031353
                </a>
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

            <form className="space-y-3" onSubmit={handleSubmit}>
              {/* Honeypot (bots will fill this) */}
              <input
                type="text"
                name="website"
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
              />

              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Mobile Number</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Enter your mobile number"
                  inputMode="numeric"
                  pattern="\d{10}"
                  maxLength={10}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
                  }}
                />
                <small className="text-gray-500 text-xs">Enter a 10-digit mobile number</small>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">City</label>
                <input
                  name="city"
                  type="text"
                  placeholder="Enter your city"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              {/* Auto-selected Product Dropdown */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">Select Product</label>
                <select
                  name="product"
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
                <label className="block text-gray-700 font-medium mb-1">Your Query</label>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Type your enquiry here..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all duration-200 disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>

              {status.msg && (
                <p
                  className={`text-center text-sm ${
                    status.ok ? "text-green-700" : "text-red-600"
                  }`}
                >
                  {status.msg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
