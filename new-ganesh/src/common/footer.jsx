import { Link } from "react-router-dom";
import logo from "../assets/image/common/Logo.webp";

export default function Footer() {
  const IconWrap = ({ children }) => (
    <span className="inline-flex items-center justify-center p-2 rounded-full border border-white-500 hover:bg-white-700 transition">
      {children}
    </span>
  );

  // Small inline icons for demo
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
    <footer className="relative bg-[#ffffff] text-black pt-20 overflow-hidden">
      {/* Waves */}
      <div className="absolute bottom-0 left-0 w-[200%] h-[38vw] opacity-70 pointer-events-none z-10"
           style={{
             background: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'><path d='M0,40 C300,80 900,0 1200,40 L1200,120 L0,120 Z' fill='%2300a651' fill-opacity='0.9'/></svg>")`,
             backgroundSize: "1200px 600px",
             backgroundRepeat: "repeat-x",
             animation: "waveTop 30s ease-in-out infinite alternate",
           }}
      ></div>
      <div className="absolute bottom-0 left-0 w-[200%] h-[38vw] opacity-50 pointer-events-none z-10"
           style={{
             background: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'><path d='M0,40 C300,80 900,0 1200,40 L1200,120 L0,120 Z' fill='%2300a651' fill-opacity='0.9'/></svg>")`,
             backgroundSize: "1200px 600px",
             backgroundRepeat: "repeat-x",
             animation: "waveTop 30s ease-in-out infinite alternate",
             animationDelay: "-6s",
           }}
      ></div>
      <div className="absolute bottom-0 left-0 w-[200%] h-[38vw] opacity-30 pointer-events-none z-10"
           style={{
             background: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'><path d='M0,40 C300,80 900,0 1200,40 L1200,120 L0,120 Z' fill='%2300a651' fill-opacity='0.9'/></svg>")`,
             backgroundSize: "1200px 600px",
             backgroundRepeat: "repeat-x",
             animation: "waveTop 30s ease-in-out infinite alternate",
             animationDelay: "-12s",
           }}
      ></div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-10 relative z-20">
        {/* Left */}
        <div className="space-y-4">
          <img src={logo} alt="Company Logo" className="h-16 object-contain" />

          <p className="text-black-300 text-sm leading-relaxed">
            The seed company,NEW GANESH SEEDS is pioneer in seed business in
            India, established in 1984. The WASL deals with quality seed
            production and marketing.
          </p>
          <p className="text-black-300 text-sm">
            The company MOTO is <strong>"MORE FOR ALL"</strong>, meaning farmers
            to farmers, seed producing farmers to its end users farmers.
          </p>

          <div className="flex space-x-4 mt-4">
            <Link to="/facebook">
              <IconWrap>
                <IconFB />
              </IconWrap>
            </Link>
            <Link to="/youtube">
              <IconWrap>
                <IconYT />
              </IconWrap>
            </Link>
            <Link to="/whatsapp">
              <IconWrap>
                <IconWA />
              </IconWrap>
            </Link>
          </div>
        </div>

        {/* Middle */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <ul className="space-y-2 text-black-300">
            <li>
              <Link to="/rnd" className="hover:text-amber-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/activities" className="hover:text-amber-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/vision" className="hover:text-amber-400">
                Product
              </Link>
            </li>
            <li>
              <Link to="/directors" className="hover:text-amber-400">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/brochure" className="hover:text-amber-400">
                Download E-Brochure
              </Link>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-black-300 text-sm">
            <li className="flex flex-col gap-2">
              📍{" "}
              <a
                href="https://maps.app.goo.gl/965xX2TCe3P2HXws5"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 "
              >
                Office <br />
                New Ganesh Seeds - 38, Market Yard Rd, Sardar Bagh, Kadi,
                Gujarat 382715
              </a>
              📍{" "}
              <a
                href="https://maps.app.goo.gl/J2engh2i2RqrY9MX9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 "
              >
                Warehouse <br />
                New Ganesh Seeds - near Indian oil petrol pump TIRTH arcade,
                near Thol Road, Kadi, Gujarat 382715
              </a>
            </li>

            <li className="flex flex-col gap-2">
              📞{" "}
              <div className="flex flex-col">
                <a
                  href="tel:+919825062048"
                  className="hover:text-amber-400 "
                >
                  +91 9825062048
                </a>
                <a
                  href="tel:+919925062048"
                  className="hover:text-amber-400 "
                >
                  +91 9925062048
                </a>
                <a
                  href="tel:+919978031353"
                  className="hover:text-amber-400 "
                >
                  +91 9978031353
                </a>
              </div>
            </li>

            <li className="flex items-center gap-2">
              ✉️{" "}
              <a
                href="mailto:newganeshseeds38@gmail.com"
                className="hover:text-amber-400 underline"
              >
                newganeshseeds38@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black-800 mt-10 pt-4 text-center text-black-400 text-sm relative z-20">
        © 2025 Newganeshseeds | All Rights Reserved |
        <Link to="/terms" className="ml-2 hover:text-amber-400">
          Terms of Use
        </Link>{" "}
        |
        <Link to="/privacy" className="ml-2 hover:text-amber-400">
          Privacy Policy
        </Link>
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes waveTop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-1200px);
          }
        }
      `}</style>
    </footer>
  );
}
