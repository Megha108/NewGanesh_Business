import React, { useState } from "react";
import Logo from "../assets/image/common/Logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur border-b border-black/5">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2">
          <img 
            src={Logo} 
            alt="New Ganesh Seeds Logo" 
            className="h-14 w-17"
          />
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8 text-slate-800">
          <li><a href="#home" className="hover:text-emerald-800">Home</a></li>
          <li><a href="#about" className="hover:text-emerald-800">About Us</a></li>
          <li><a href="#products" className="hover:text-emerald-800">Products</a></li>
          <li><a href="#gallery" className="hover:text-emerald-800">Gallery</a></li>
        </ul>

        {/* CTA (desktop) */}
        <a
          href="#enquire"
          className="hidden md:inline-block rounded-lg bg-emerald-700 px-4 py-2 text-white font-medium hover:bg-emerald-800 transition"
        >
          Enquire Now
        </a>

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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            className={`h-5 w-5 ${open ? "block" : "hidden"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 pb-4">
          <ul className="flex flex-col gap-3 text-slate-800">
            <li><a href="#home" className="block py-2 hover:text-emerald-800" onClick={() => setOpen(false)}>Home</a></li>
            <li><a href="#about" className="block py-2 hover:text-emerald-800" onClick={() => setOpen(false)}>About Us</a></li>
            <li><a href="#products" className="block py-2 hover:text-emerald-800" onClick={() => setOpen(false)}>Products</a></li>
            <li><a href="#gallery" className="block py-2 hover:text-emerald-800" onClick={() => setOpen(false)}>Gallery</a></li>
          </ul>

          <a
            href="#enquire"
            className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-emerald-700 px-4 py-2 text-white font-medium hover:bg-emerald-800 transition"
            onClick={() => setOpen(false)}
          >
            Enquire Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
