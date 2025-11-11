import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/common/Logo.png";
import "./footer.css";

export default function Footer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 480;
    };
    setCanvasSize();

    const bubbles = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 4 + 1,
      dx: (Math.random() - 0.5) * 0.7,
      dy: (Math.random() - 0.5) * 0.7,
    }));

    let mouse = { x: null, y: null };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "#b4ec51");
      gradient.addColorStop(1, "#429321");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach((b) => {
        b.x += b.dx;
        b.y += b.dy;
        if (b.x < 0 || b.x > canvas.width) b.dx *= -1;
        if (b.y < 0 || b.y > canvas.height) b.dy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dist = Math.hypot(mouse.x - b.x, mouse.y - b.y);
          if (dist < 120) {
            const angle = Math.atan2(b.y - mouse.y, b.x - mouse.x);
            const force = (120 - dist) / 120;
            b.x += Math.cos(angle) * force * 3;
            b.y += Math.sin(angle) * force * 3;
          }
        }

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.42)";
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };
    draw();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", setCanvasSize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  const IconWrap = ({ children }) => (
    <span className="inline-flex items-center justify-center p-2 rounded-full border border-black hover:bg-black/10 transition">
      {children}
    </span>
  );

  const IconFB = () => (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0 1 14.3 6h2.2v3h-2.2c-.5 0-1.3.3-1.3 1.4V12H16l-.5 3h-2.5v7A10 10 0 0 0 22 12z" />
    </svg>
  );

  const IconYT = () => (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.4.6A3 3 0 0 0 .5 6.2C0 7.9 0 12 0 12s0 4.1.5 5.8a3 3 0 0 0 2.1 2.1c1.7.6 9.4.6 9.4.6s7.7 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 16.1 24 12 24 12s0-4.1-.5-5.8zM9.6 15.5V8.5L15.9 12l-6.3 3.5z" />
    </svg>
  );

  const IconWA = () => (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M.1 24l1.7-6.1a10.8 10.8 0 1 1 4 4L.1 24zM7 6.6c-.3-.7-.5-.7-.8-.7h-.7c-.3 0-.7.1-1 .5s-1.3 1.2-1.3 3 1.3 3.4 1.5 3.6 2.6 4.2 6.3 5.7c3.1 1.2 3.7 1 4.3 1s2.1-.9 2.4-1.8c.3-.9.3-1.6.2-1.8s-.4-.3-.8-.5-2.4-1.2-2.8-1.3-.6-.2-.8.2-1 1.3-1.3 1.5-.5.2-.9 0c-.4-.2-1.6-.6-3-1.9-1.1-1-1.8-2.2-2-2.6-.2-.4 0-.6.2-.8.2-.2.4-.5.5-.7.2-.2.2-.4.3-.6 0-.2 0-.5-.1-.7-.1-.2-.7-1.6-1-2.3z" />
    </svg>
  );

  return (
    <footer className="relative text-black font-bold overflow-hidden">
      {/* 🌿 Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: "block" }}
      />

<<<<<<< Updated upstream
      {/* 🌿 Footer Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-12">

        {/* ✅ Left Column (Updated Quote) */}
        <div className="flex flex-col justify-between h-full text-left">
          {/* Quote */}
          <p className="text-center whitespace-nowrap">
            <strong className="quote-animation">"For Every Seed, For Every Farmer
            <br />
            — We Grow Together."</strong>
          </p>


          {/* Logo above Social Icons */}
          <img
            src={logo}
            alt="Company Logo"
            className="h-28 sm:h-32 md:h-36 mt-10 object-contain scale-[1.7]"
          />


          {/* Social Icons aligned fully left */}
          <div className="flex justify-start space-x-4 text-black transition-colors text-lg -mt-5 ml-25">
            <Link to="/facebook" className="hover:text-[#FFD700]">
              <IconWrap><IconFB /></IconWrap>
            </Link>
            <Link to="/youtube" className="hover:text-[#FFD700]">
              <IconWrap><IconYT /></IconWrap>
            </Link>
            <Link to="/whatsapp" className="hover:text-[#FFD700]">
              <IconWrap><IconWA /></IconWrap>
            </Link>
          </div>
        </div>

        {/* Middle Column */}
        <div className="text-end sm:text-left ml-25 sm:pl-12 md:pl-20 lg:pl-28">
          <ul className="space-y-4 text-black text-sm font-semibold">
            <li><Link to="/" className="transition-colors hover:text-[#FFD700] text-lg sm:text-1.5xl font-bold mb-4">Home</Link></li>
            <li><Link to="/about" className="transition-colors hover:text-[#FFD700] text-lg sm:text-1.5xl font-bold mb-4">About</Link></li>
            <li><Link to="/products" className="transition-colors hover:text-[#FFD700] text-lg sm:text-1.5xl font-bold mb-4">Products</Link></li>
            <li><Link to="/gallery" className="transition-colors hover:text-[#FFD700] text-lg sm:text-1.5xl font-bold mb-4">Gallery</Link></li>
            <li><Link to="/brochure" className="transition-colors hover:text-[#FFD700] text-lg sm:text-1.5xl font-bold mb-4">E-Brochure</Link></li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-black text-sm font-semibold">
            <li>
              📍 Office<br />
              <a
                href="https://maps.app.goo.gl/965xX2TCe3P2HXws5"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#FFD700]"
              >
                New Ganesh Seeds - 38, Market Yard Rd, Kadi, Gujarat 382715
              </a>
            </li>
            <li>
              📍 Warehouse<br />
              <a
                href="https://maps.app.goo.gl/5nDv3t7NAxy4CbvD6"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#FFD700]"
              >
                Kadi – Thol Rd, near Indian Oil Petrol Pump, TIRTH Arcade, near Thol Road, Kadi, Gujarat 384440
              </a>
            </li>
            <li>
              📞 Contact<br />
              <div className="flex flex-col items-center sm:items-start">
                <a href="tel:+919825062048" className="transition-colors hover:text-[#FFD700]">+91 9825062048</a>
                <a href="tel:+919925062048" className="transition-colors hover:text-[#FFD700]">+91 9925062048</a>
                <a href="tel:+919978031353" className="transition-colors hover:text-[#FFD700]">+91 9978031353</a>
              </div>
            </li>
            <li>
              ✉️ Email<br />
              <a
                href="mailto:newganeshseeds38@gmail.com"
                className="transition-colors hover:text-[#FFD700]"
              >
                newganeshseeds38@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black/40 text-center text-xs sm:text-sm py-4 relative z-10 font-semibold bg-white/20 backdrop-blur-sm hover:text-[#FFD700] transition">
        © 2025 New Ganesh Seeds | All Rights Reserved
      </div>
=======
<<<<<<< HEAD
    {/* 🌿 Footer Content */}
    <div className="relative z-10 container mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-12">
      {/* Left */}
      <div className="space-y-4 text-center sm:text-left">
        <img
          src={logo}
          alt="Company Logo"
          className="h-14 sm:h-16 mx-auto sm:mx-0 object-contain"
        />
        <p className="text-black text-sm leading-relaxed font-semibold">
          The seed company, NEW GANESH SEEDS is pioneer in seed business in
          India, established in 1984. The company deals with quality seed
          production and marketing.
        </p>
        <p className="text-black text-2xl font-semibold mt-5">
         <strong>" Our motto is"MORE FOR ALL" — from farmers to farmers.
      </strong>"  </p>
        <div className="flex justify-center sm:justify-start space-x-4 mt-4 text-black transition-colors">
          <Link to="/facebook" className="hover:text-[#FFD700]">
            <IconWrap><IconFB /></IconWrap>
          </Link>
          <Link to="/youtube" className="hover:text-[#FFD700]">
            <IconWrap><IconYT /></IconWrap>
          </Link>
          <Link to="/whatsapp" className="hover:text-[#FFD700]">
            <IconWrap><IconWA /></IconWrap>
          </Link>
        </div>
      </div>

      {/* Middle */}
      <div className="text-center sm:text-right">
        <h3 className="text-lg sm:text-xl font-bold mb-4">About Us</h3>
        <ul className="space-y-2 text-black text-sm font-semibold">
          <li><Link to="/" className="transition-colors hover:text-[#FFD700]">Home</Link></li>
          <li><Link to="/about" className="transition-colors hover:text-[#FFD700]">About</Link></li>
          <li><Link to="/products" className="transition-colors hover:text-[#FFD700]">Products</Link></li>
          <li><Link to="/gallery" className="transition-colors hover:text-[#FFD700]">Gallery</Link></li>
          <li><Link to="/brochure" className="transition-colors hover:text-[#FFD700]">E-Brochure</Link></li>
        </ul>
=======
      {/* 🌿 Footer Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-12">

        {/* ✅ Left Column (Updated Quote) */}
        <div className="flex flex-col justify-between h-full text-left">
          {/* Quote */}
          <p className="text-center whitespace-nowrap">
            <strong className="quote-animation">"For Every Seed, For Every Farmer</strong>
            <br />
            <strong className="quote-animation delay">— We Grow Together."</strong>
          </p>


          {/* Logo above Social Icons */}
          <img
            src={logo}
            alt="Company Logo"
            className="h-28 sm:h-32 md:h-36 mt-10 object-contain scale-[1.7]"
          />


          {/* Social Icons aligned fully left */}
          <div className="flex justify-start space-x-4 text-black transition-colors text-lg -mt-5 ml-25">
            <Link to="/facebook" className="hover:text-[#FFD700]">
              <IconWrap><IconFB /></IconWrap>
            </Link>
            <Link to="/youtube" className="hover:text-[#FFD700]">
              <IconWrap><IconYT /></IconWrap>
            </Link>
            <Link to="/whatsapp" className="hover:text-[#FFD700]">
              <IconWrap><IconWA /></IconWrap>
            </Link>
          </div>
        </div>

        {/* Middle Column */}
        <div className="text-end sm:text-left ml-25 sm:pl-12 md:pl-20 lg:pl-28">
          <ul className="space-y-4 text-black text-sm font-semibold">
            <li><Link to="/" className="transition-colors hover:text-[#FFD700] text-lg sm:text-1.5xl font-bold mb-4">Home</Link></li>
            <li><Link to="/about" className="transition-colors hover:text-[#FFD700] text-lg sm:text-1.5xl font-bold mb-4">About</Link></li>
            <li><Link to="/products" className="transition-colors hover:text-[#FFD700] text-lg sm:text-1.5xl font-bold mb-4">Products</Link></li>
            <li><Link to="/gallery" className="transition-colors hover:text-[#FFD700] text-lg sm:text-1.5xl font-bold mb-4">Gallery</Link></li>
            <li><Link to="/brochure" className="transition-colors hover:text-[#FFD700] text-lg sm:text-1.5xl font-bold mb-4">E-Brochure</Link></li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-bold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-black text-sm font-semibold">
            <li>
              📍 Office<br />
              <a
                href="https://maps.app.goo.gl/965xX2TCe3P2HXws5"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#FFD700]"
              >
                New Ganesh Seeds - 38, Market Yard Rd, Kadi, Gujarat 382715
              </a>
            </li>
            <li>
              📍 Warehouse<br />
              <a
                href="https://maps.app.goo.gl/5nDv3t7NAxy4CbvD6"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#FFD700]"
              >
                Kadi – Thol Rd, near Indian Oil Petrol Pump, TIRTH Arcade, near Thol Road, Kadi, Gujarat 384440
              </a>
            </li>
            <li>
              📞 Contact<br />
              <div className="flex flex-col items-center sm:items-start">
                <a href="tel:+919825062048" className="transition-colors hover:text-[#FFD700]">+91 9825062048</a>
                <a href="tel:+919925062048" className="transition-colors hover:text-[#FFD700]">+91 9925062048</a>
                <a href="tel:+919978031353" className="transition-colors hover:text-[#FFD700]">+91 9978031353</a>
              </div>
            </li>
            <li>
              ✉️ Email<br />
              <a
                href="mailto:newganeshseeds38@gmail.com"
                className="transition-colors hover:text-[#FFD700]"
              >
                newganeshseeds38@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black/40 text-center text-xs sm:text-sm py-4 relative z-10 font-semibold bg-white/20 backdrop-blur-sm hover:text-[#FFD700] transition">
        © 2025 New Ganesh Seeds | All Rights Reserved
>>>>>>> 0768a6570443d4868a18feefdf7f1d60b89e1796
      </div>
>>>>>>> Stashed changes
    </footer>
  );
}
