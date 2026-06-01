import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenuLine, RiCloseLine, RiLeafLine } from "react-icons/ri";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About", to: "/about" },
  { label: "Wholesale", to: "/wholesale" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#D4E2D8]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#0A4A2E] to-[#0d6b42] flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg shadow-[#0A4A2E]/20">
              <RiLeafLine className="text-[#C8E63C] text-lg sm:text-xl" />
            </div>
            <div>
              <span className="font-['Playfair_Display'] font-700 text-[#0A4A2E] text-lg sm:text-xl leading-none block">
                Krithiv
              </span>
              <span className="text-[10px] sm:text-[11px] font-500 tracking-[0.15em] text-[#5A6B5F] uppercase leading-none block">
                Enterprise
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`text-sm font-500 tracking-wide transition-all duration-300 relative group ${
                    location.pathname === link.to
                      ? "text-[#0A4A2E]"
                      : "text-[#5A6B5F] hover:text-[#0A4A2E]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#C8E63C] transition-all duration-300 ${
                      location.pathname === link.to ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/wholesale"
              className="px-5 py-2.5 bg-gradient-to-r from-[#0A4A2E] to-[#0d6b42] text-white text-sm font-500 rounded-lg hover:shadow-lg hover:shadow-[#0A4A2E]/30 transition-all duration-300"
            >
              Become a Distributor
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-[#0A4A2E] hover:bg-[#D4E2D8] transition-colors active:scale-95"
          >
            {menuOpen ? <RiCloseLine size={22} /> : <RiMenuLine size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-gradient-to-br from-white to-[#F7F9F4] md:hidden"
          >
            <div className="flex flex-col h-full pt-28 px-6 sm:px-8">
              <ul className="flex flex-col gap-5 sm:gap-6">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      to={link.to}
                      className={`text-3xl sm:text-4xl font-['Playfair_Display'] font-600 transition-colors ${
                        location.pathname === link.to ? "text-[#0A4A2E]" : "text-[#1C2B21]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-10">
                <Link
                  to="/wholesale"
                  className="inline-block w-full text-center px-6 py-4 bg-gradient-to-r from-[#0A4A2E] to-[#0d6b42] text-white font-500 rounded-xl text-lg shadow-lg shadow-[#0A4A2E]/20"
                >
                  Become a Distributor
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
