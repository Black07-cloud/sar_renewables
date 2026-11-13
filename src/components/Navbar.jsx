import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Phone, MessageCircle } from "lucide-react";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const [previousPathname, setPreviousPathname] = useState(location.pathname);

  if (location.pathname !== previousPathname) {
    setPreviousPathname(location.pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-all duration-300 ${
        scrolled
          ? "border-b border-[#DFE7E1] shadow-[0_8px_30px_rgba(20,50,35,0.06)] py-0"
          : "border-b border-[#E8EFEA] py-1"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className={`mx-auto flex max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14 transition-all duration-300 ${
          scrolled ? "h-[76px]" : "h-[84px]"
        }`}
      >
        {/* Company Logo */}
        <Link
          to="/"
          aria-label="SAR Renewables Home"
          className="group relative z-[60] flex shrink-0 items-center transition-transform duration-300 hover:scale-[1.02] order-1 lg:order-1"
        >
          <img
            src={logo}
            alt="SAR Renewables Private Limited"
            className="h-auto w-[165px] object-contain sm:w-[195px] lg:w-[225px]"
          />
        </Link>

        {/* Desktop Navigation Links (Pill Style) with Increased Font Size */}
        <div className="hidden items-center gap-3 lg:flex xl:gap-4 lg:order-2">
          <div className="flex items-center gap-1.5 rounded-full border border-[#DFE7E1] bg-[#F4F7F2] p-1.5 shadow-xs">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative inline-flex items-center rounded-full px-4.5 py-2 text-[15px] xl:text-base font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-[#183D32] text-white shadow-sm"
                      : "text-[#3B4D44] hover:bg-white hover:text-[#183D32]"
                  }`}
                >
                  {isActive && (
                    <span className="mr-2 h-2 w-2 rounded-full bg-[#C3D5A5] animate-pulse" />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Book Now Action Pill with Increased Font Size */}
          <Link
            to="/contact"
            className="group relative ml-2 inline-flex items-center gap-2.5 rounded-full bg-[#183D32] px-6 py-2.5 text-[15px] xl:text-base font-bold text-white shadow-md shadow-[#183D32]/15 transition-all duration-300 hover:bg-[#285644] hover:shadow-lg hover:shadow-[#183D32]/25 hover:-translate-y-0.5 active:scale-95"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C3D5A5] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C3D5A5]" />
            </span>
            <span>Book Now</span>
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-2xl border border-[#DFE7E1] bg-white text-[#183D32] shadow-sm transition-all duration-200 hover:border-[#183D32] hover:bg-[#F4F7F2] active:scale-95 lg:hidden order-1 lg:order-3"
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={22} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile Navigation Dropdown Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-[#DFE7E1] bg-white shadow-2xl lg:hidden rounded-b-3xl"
          >
            <div className="mx-auto max-w-[1440px] px-6 pb-8 pt-4">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname === link.path;

                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.3 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-base sm:text-[17px] font-semibold transition-all duration-200 ${
                          isActive
                            ? "bg-[#183D32] text-white shadow-sm"
                            : "text-[#3B4D44] hover:bg-[#EEF5F0] hover:text-[#183D32]"
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          {isActive && (
                            <span className="h-2 w-2 rounded-full bg-[#C3D5A5]" />
                          )}
                          {link.name}
                        </span>
                        <ArrowUpRight
                          size={17}
                          className={isActive ? "text-[#C3D5A5]" : "opacity-40"}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile Quick Action Buttons */}
              <div className="mt-6 pt-5 border-t border-[#DFE7E1] grid gap-3">
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2.5 rounded-full bg-[#183D32] px-6 py-3.5 text-base font-bold text-white shadow-md transition-colors hover:bg-[#285644]"
                >
                  <span>Book Now</span>
                  <ArrowUpRight size={17} />
                </Link>

                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center justify-center gap-2 rounded-2xl border border-[#DFE7E1] bg-[#F4F7F2] px-3 py-2.5 text-sm font-semibold text-[#183D32] transition-colors hover:bg-white"
                  >
                    <Phone size={15} className="text-[#426F61]" />
                    <span>Call Us</span>
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-2xl border border-[#DFE7E1] bg-[#F4F7F2] px-3 py-2.5 text-sm font-semibold text-[#183D32] transition-colors hover:bg-white"
                  >
                    <MessageCircle size={15} className="text-[#2D6A4F]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}