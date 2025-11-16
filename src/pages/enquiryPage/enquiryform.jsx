import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import GreenBackground from "./GreenBackground";
import SentEmailAnimation from "../../assets/MailSentAnimation.mp4";

export default function EnquiryForm() {
  const location = useLocation();
  const selectedProduct = location.state?.selectedProduct || "";
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ ok: null, msg: "" });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState(selectedProduct);
  const dropdownRef = useRef(null);

  const products = [
    "Ganesh Rajka Seeds",
    "Ganesh Rajka Teensali",
    "Ganesh Rajka Barmasi",
    "Ganesh Kasni",
    "Ganesh Rajka Bajra",
    "Barseem",
    "Ganesh Jaudo",
    "Oat Seeds",
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ ok: null, msg: "" });

    const form = new FormData(e.currentTarget);

    // Honeypot
    if ((form.get("website") || "").trim() !== "") {
      setStatus({ ok: true, msg: "Thanks!" });
      return;
    }

    // Phone validation
    const phone = form.get("phone").replace(/\D/g, "");
    if (phone.length !== 10) {
      setStatus({ ok: false, msg: "Enter a valid 10-digit mobile number." });
      return;
    }

    const data = {
      name: form.get("name"),
      email: form.get("email"),
      phone: phone,
      city: form.get("city"),
      product: selected,
      message: form.get("message"),
    };

    try {
      setLoading(true);

      // 🔥 Send to backend server
      const res = await fetch("https://newganeshseeds.onrender.com/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setStatus({ ok: true, msg: "Your enquiry has been sent successfully!" });
        e.target.reset();
        setSelected("");
      } else {
        setStatus({ ok: false, msg: "Failed to send enquiry. Try again later." });
      }
    } catch (error) {
      console.error(error);
      setStatus({
        ok: false,
        msg: "Server error! Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative w-full min-h-screen flex justify-center items-center overflow-hidden">
      <GreenBackground />

      <div className="relative z-10 bg-white rounded-2xl p-8 md:p-10 w-[90%] max-w-5xl backdrop-blur-sm bg-opacity-90">
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* LEFT SIDE DETAILS */}
          <div className="w-full md:w-1/2 h-auto rounded-lg overflow-hidden flex flex-col mt-10">
            <div className="h-[250px] md:h-[350px]">
                <iframe
                  title="New Ganesh Seeds Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.780344453985!2d72.33449627510016!3d23.287429778989022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c233f66754ac1%3A0x77a1cc259c000420!2sNEW%20GANESH%20SEEDS!5e0!3m2!1sen!2sin!4v1763248116367!5m2!1sen!2sin"
                  width="100%"
                  height="125%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

            <div className="p-4 md:p-5 mt-20 text-gray-700 text-sm md:text-base">
              <h3 className="text-lg font-semibold text-green-700 mb-2">📍 Address</h3>
              <a
                href="https://maps.app.goo.gl/5nDv3t7NAxy4CbvD6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500"
              >
                Kadi – Thol Rd, near Indian Oil Petrol Pump...
              </a>

              <h3 className="text-lg font-semibold text-green-700 mb-2 mt-4">📞 Contact</h3>
              <p>
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

          {/* RIGHT SIDE FORM */}
          <div className="w-full md:w-1/2 rounded-lg p-5 md:p-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-center">
              Enquiry Form
            </h2>

            <form className="space-y-3" onSubmit={handleSubmit}>
              <input type="text" name="website" className="hidden" />

              <div>
                <label>Name</label>
                <input
                  name="name"
                  type="text"
                  className="w-full border rounded-lg px-4 py-2"
                  required
                />
              </div>

              <div>
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  className="w-full border rounded-lg px-4 py-2"
                  required
                />
              </div>

              <div>
                <label>Mobile Number</label>
                <input
                  name="phone"
                  type="text"
                  maxLength={10}
                  className="w-full border rounded-lg px-4 py-2"
                  required
                />
              </div>

              <div>
                <label>City</label>
                <input
                  name="city"
                  type="text"
                  className="w-full border rounded-lg px-4 py-2"
                  required
                />
              </div>

              <div className="relative" ref={dropdownRef}>
                <label>Select Product</label>
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="w-full border rounded-lg px-4 py-2 flex justify-between"
                >
                  {selected || "Select Product"}
                  <span>&#9662;</span>
                </button>

                {dropdownOpen && (
                  <ul className="absolute w-full bg-white border rounded-lg max-h-32 overflow-y-auto shadow-lg">
                    {products.map((p, idx) => (
                      <li
                        key={idx}
                        onClick={() => {
                          setSelected(p);
                          setDropdownOpen(false);
                        }}
                        className="px-4 py-2 hover:bg-green-100 cursor-pointer"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                <label>Your Query</label>
                <textarea
                  name="message"
                  className="w-full border rounded-lg px-4 py-2"
                  rows="3"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-green-600 text-white w-full py-2 rounded-lg hover:bg-green-700"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* POPUP */}
      {status.msg && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-transparent">
          <div className="bg-white rounded-2xl p-8 max-w-sm text-center border-2 border-green-600">
            
            <p className={`mb-4 ${status.ok ? "text-green-700" : "text-red-600"}`}>
              {status.msg}
            </p>

            {status.ok && (
              <video
                src={SentEmailAnimation}
                autoPlay
                muted
                loop
                className="w-40 h-40 mx-auto"
              />
            )}

            <button
              onClick={() => setStatus({ ok: null, msg: "" })}
              className="bg-green-600 text-white px-6 py-2 mt-4 rounded-lg"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
