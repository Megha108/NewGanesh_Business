import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/image/common/Logo.webp";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-md backdrop-blur border-b border-black/5">
      <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="New Ganesh Seeds Logo" className="h-16 w-19" />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-4 text-slate-800">
          <li>
            <Link
              to="/"
              className={`px-3 py-1 rounded-lg transition ${
                location.pathname === "/"
                  ? "bg-[#228B22] text-white"
                  : "bg-[#16561A] text-white hover:bg-[#228B22]"
              }`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className={`px-3 py-1 rounded-lg transition ${
                location.pathname === "/about"
                  ? "bg-[#228B22] text-white"
                  : "bg-[#16561A] text-white hover:bg-[#228B22]"
              }`}
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              to="/products"
              className={`px-3 py-1 rounded-lg transition ${
                location.pathname === "/products"
                  ? "bg-[#228B22] text-white"
                  : "bg-[#16561A] text-white hover:bg-[#228B22]"
              }`}
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              to="/gallery"
              className={`px-3 py-1 rounded-lg transition ${
                location.pathname === "/gallery"
                  ? "bg-[#228B22] text-white"
                  : "bg-[#16561A] text-white hover:bg-[#228B22]"
              }`}
            >
              Gallery
            </Link>
          </li>
        </ul>

        {/* CTA (desktop) */}
        <Link
          to="/enquire"
          className={`hidden md:inline-block rounded-lg px-4 py-2 text-white font-medium transition ${
            location.pathname === "/enquire"
              ? "bg-[#228B22]"
              : "bg-[#16561A] hover:bg-[#228B22]"
          }`}
        >
          Enquire Now
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 ring-1 ring-slate-300 text-slate-700"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className={`h-5 w-5 ${open ? "hidden" : "block"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            className={`h-5 w-5 ${open ? "block" : "hidden"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-64" : "max-h-0"}`}>
        <div className="px-4 sm:px-6 lg:px-8 pb-4">
          <ul className="flex flex-col gap-3 text-slate-800">
            <li>
              <Link
                to="/"
                className={`block py-2 hover:text-emerald-800 ${
                  location.pathname === "/" ? "text-emerald-800 font-semibold" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className={`block py-2 hover:text-emerald-800 ${
                  location.pathname === "/about" ? "text-emerald-800 font-semibold" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                className={`block py-2 hover:text-emerald-800 ${
                  location.pathname === "/products" ? "text-emerald-800 font-semibold" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/gallery"
                className={`block py-2 hover:text-emerald-800 ${
                  location.pathname === "/gallery" ? "text-emerald-800 font-semibold" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                Gallery
              </Link>
            </li>
          </ul>

          <Link
            to="/enquire"
            className={`mt-3 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-white font-medium transition ${
              location.pathname === "/enquire"
                ? "bg-emerald-800"
                : "bg-emerald-700 hover:bg-emerald-800"
            }`}
            onClick={() => setOpen(false)}
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
