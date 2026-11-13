import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUp,
  ArrowUpRight,
  MapPin,
  Mail,
  ExternalLink,
} from "lucide-react";
import logo from "../assets/logo.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Contact Us", path: "/contact" },
];

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.21, 1, 0.36, 1] },
    },
  };

  return (
    <>
      <footer className="relative overflow-hidden bg-[#1E332C] text-white">
        {/* Animated ambient background rings */}
        <div className="pointer-events-none absolute -right-36 -top-36 h-[420px] w-[420px] rounded-full border border-white/[0.06] transition-transform duration-1000 ease-out hover:scale-105" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/[0.05]" />
        <div className="pointer-events-none absolute -left-48 bottom-0 h-96 w-96 rounded-full bg-[#C3D5A5]/[0.02] blur-3xl" />

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          {/* Main Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-8 pt-10 pb-2 sm:gap-10 sm:py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12 lg:py-20"
          >
            {/* Brand Column */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <Link
                to="/"
                aria-label="SAR Renewables Home"
                className="group inline-flex overflow-hidden rounded-md transition-transform duration-300 hover:scale-[1.02]"
              >
                <img
                  src={logo}
                  alt="SAR Renewables Private Limited"
                  className="w-[200px] rounded-sm bg-white p-2.5 sm:w-[225px] shadow-md transition-shadow duration-300 group-hover:shadow-lg"
                />
              </Link>

              <p className="mt-6 max-w-md text-base sm:text-[17px] leading-relaxed text-white/80">
                Building a more sustainable future through clean renewable energy
                solutions designed for a cleaner, greener tomorrow.
              </p>

              <Link
                to="/contact"
                className="group mt-7 inline-flex items-center gap-2.5 border-b border-[#C3D5A5]/50 pb-1.5 text-base sm:text-lg font-semibold text-[#C3D5A5] transition-all duration-300 hover:border-[#C3D5A5] hover:text-white hover:translate-x-1"
              >
                Let's work together
                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            {/* Quick Links Column */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <h3 className="mb-6 text-sm sm:text-[15px] font-bold uppercase tracking-[0.2em] text-[#C3D5A5]">
                Explore
              </h3>

              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="group inline-flex items-center gap-3 text-base sm:text-[17px] text-white/80 transition-all duration-300 hover:translate-x-1.5 hover:text-white"
                    >
                      <span className="h-2 w-2 rounded-full bg-[#91AAA2] transition-all duration-300 group-hover:w-3.5 group-hover:bg-[#C3D5A5]" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Column with Clean Email at the Top */}
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <h3 className="mb-5 text-sm sm:text-[15px] font-bold uppercase tracking-[0.2em] text-[#C3D5A5]">
                Get in Touch
              </h3>

              <div className="space-y-1">
                {/* Clean Email Link (No Box) */}
                <a
                  href="mailto:info@sarrenewables.in"
                  className="group flex items-center gap-3.5 rounded-xl p-2 -ml-2 text-base sm:text-[17px] text-white/80 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
                >
                  <Mail
                    size={21}
                    className="shrink-0 text-[#C3D5A5] transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="font-mono text-white/85 transition-colors group-hover:text-white">
                    info@sarrenewables.in
                  </span>
                </a>

                {/* Address with Google Maps link */}
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Door+No.+86%2F4+Thiyagi+Sivaram+Nagar+Ramanathapuram+Coimbatore+Tamil+Nadu+641045"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3.5 rounded-xl p-2 -ml-2 text-base sm:text-[17px] text-white/80 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
                >
                  <MapPin
                    size={22}
                    className="mt-1 shrink-0 text-[#C3D5A5] transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="flex-1">
                    <p>
                      Door No. 86/4, Thiyagi Sivaram Nagar,
                      <br />
                      Ramanathapuram, Coimbatore,
                      <br />
                      Tamil Nadu 641045, India.
                    </p>
                    <span className="mt-2 hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#C3D5A5] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Open in Maps <ExternalLink size={13} />
                    </span>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Bar */}
          <div className="flex flex-col gap-3 border-t border-white/10 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-6">
            <p className="text-sm leading-6 text-white/60">
              © {new Date().getFullYear()} SAR Renewables Pvt Ltd. All rights
              reserved.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="mailto:info@sarrenewables.in"
                className="group inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-[#C3D5A5]"
              >
                Powering a greener future
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Bottom Corner Back-To-Top Button (Appears on Scroll) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="floating-back-to-top"
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full border border-white/20 bg-[#183D32] text-white shadow-[0_10px_25px_rgba(20,50,35,0.4)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#C3D5A5] hover:bg-[#285644] active:scale-95"
          >
            <ArrowUp size={20} className="transition-transform duration-300 hover:-translate-y-0.5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}