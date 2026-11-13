import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Reveal, { RevealLine } from "../components/Reveal";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Rotate3d,
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";

import rooftopImg from "../assets/products/Rooftop-resized-1.jpg";
import groundMountedImg from "../assets/products/Groundmounted-resized-1.jpg";
import rescoImg from "../assets/products/RESCO-resized-1.jpg";
import utilityScaleImg from "../assets/products/Utility-scale-resized-1.jpg";
import carportImg from "../assets/products/Carport-resized-1.jpg";
import turnkeyImg from "../assets/products/Turnkey-resized-1.jpg";

import iconService1 from "../assets/products/icon-service-1.svg";
import iconService2 from "../assets/products/icon-service-2.svg";
import iconService3 from "../assets/products/icon-service-3.svg";
import iconService4 from "../assets/products/icon-service-4.svg";
import iconService5 from "../assets/products/icon-service-5.svg";
import iconService6 from "../assets/products/icon-service-6.svg";

const PRODUCT_CATEGORIES = [
  "All Products",
  "Rooftop Solar",
  "Ground-Mounted",
  "RESCO Models",
  "Utility Scale",
  "Solar Carports",
  "Turnkey EPC",
];

const PRODUCTS = [
  {
    id: "rooftop-solar",
    name: "Rooftop Solar Projects (C&I)",
    category: "Rooftop Solar",
    description:
      "We implement rooftop solar systems tailored for Commercial & Industrial (C&I) clients, reducing electricity costs and carbon footprint.",
    image: rooftopImg,
    iconSvg: iconService1,
    highlights: [
      "Engineered for Commercial & Industrial rooftops",
      "High-yield solar photovoltaic panels with peak efficiency",
      "Drastic reduction in monthly commercial power bills",
      "Rapid return on investment with clean carbon offsets",
    ],
  },
  {
    id: "ground-mounted-solar",
    name: "Ground-Mounted Solar Projects",
    category: "Ground-Mounted",
    description:
      "We design and execute ground-mounted solar plants, ideal for clients with available land and higher energy demand.",
    image: groundMountedImg,
    iconSvg: iconService2,
    highlights: [
      "Ideal for clients with available land parcels",
      "Optimized tilt angles for maximum solar irradiance",
      "Scalable megawatt configurations for intensive energy demand",
      "Robust ground piling and corrosion-resistant structures",
    ],
  },
  {
    id: "resco-models",
    name: "RESCO Models",
    category: "RESCO Models",
    description:
      "We offer RESCO-based solar solutions, making solar adoption easier and zero-capex for businesses.",
    image: rescoImg,
    iconSvg: iconService3,
    highlights: [
      "Zero upfront capital expenditure (Zero Capex / OPEX model)",
      "Immediate electricity cost reduction from day one",
      "Full long-term maintenance and performance guarantee",
      "Hassle-free power purchase agreements (PPA)",
    ],
  },
  {
    id: "utility-scale-solar",
    name: "Utility-Scale Solar Projects",
    category: "Utility Scale",
    description:
      "We design and execute utility-scale solar projects in India, delivering clean power at scale.",
    image: utilityScaleImg,
    iconSvg: iconService4,
    highlights: [
      "Multi-megawatt scale power generation capabilities",
      "Grid-synchronized transmission and SCADA monitoring",
      "Advanced bifacial modules and tracking technologies",
      "High-yield solar farm execution under national regulatory standards",
    ],
  },
  {
    id: "solar-carport-epc",
    name: "Solar Carport EPC",
    category: "Solar Carports",
    description:
      "We develop innovative solar carport solutions that combine utility with sustainability.",
    image: carportImg,
    iconSvg: iconService5,
    highlights: [
      "Dual benefit: premium vehicle shading and clean energy generation",
      "Transforms underutilized parking areas into energy assets",
      "Seamless integration with EV charging stations",
      "Architecturally engineered steel structures with water management",
    ],
  },
  {
    id: "turnkey-solutions",
    name: "Turnkey Solutions",
    category: "Turnkey EPC",
    description:
      "We offer complete turnkey EPC solar solutions, ensuring seamless execution from concept to commissioning.",
    image: turnkeyImg,
    iconSvg: iconService6,
    highlights: [
      "Complete concept-to-commissioning execution by certified engineers",
      "Government statutory liaison, net-metering & grid clearances",
      "Tier-1 certified components with stringent QA/QC protocols",
      "Dedicated testing, synchronization and scheduled O&M support",
    ],
  },
];

const eyebrow =
  "mb-4 text-xs font-bold uppercase tracking-[0.17em] text-[#648477]";

const buttonBase =
  "inline-flex min-h-[52px] items-center justify-center gap-3 border border-transparent px-6 text-sm font-bold transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#648477]";

const getCardTransform = (diff, isMobile) => {
  const xOffset = isMobile ? 95 : 210;
  const farOffset = isMobile ? 175 : 390;

  if (diff === 0) {
    return {
      x: 0,
      z: 60,
      rotateY: 0,
      scale: 1,
      opacity: 1,
      zIndex: 40,
    };
  }
  if (diff === -1) {
    return {
      x: -xOffset,
      z: -40,
      rotateY: 34,
      scale: 0.85,
      opacity: 0.82,
      zIndex: 30,
    };
  }
  if (diff === 1) {
    return {
      x: xOffset,
      z: -40,
      rotateY: -34,
      scale: 0.85,
      opacity: 0.82,
      zIndex: 30,
    };
  }
  if (diff === -2) {
    return {
      x: -farOffset,
      z: -120,
      rotateY: 48,
      scale: 0.7,
      opacity: 0.5,
      zIndex: 20,
    };
  }
  if (diff === 2) {
    return {
      x: farOffset,
      z: -120,
      rotateY: -48,
      scale: 0.7,
      opacity: 0.5,
      zIndex: 20,
    };
  }
  return {
    x: diff > 0 ? farOffset * 1.3 : -farOffset * 1.3,
    z: -260,
    rotateY: diff > 0 ? -60 : 60,
    scale: 0.5,
    opacity: 0,
    zIndex: 10,
  };
};

export default function Products() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortOrder, setSortOrder] = useState("featured");
  const [activeCoverflowIndex, setActiveCoverflowIndex] = useState(0);
  const [viewMode, setViewMode] = useState("coverflow"); // "coverflow" | "grid"
  const [isMobile, setIsMobile] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return PRODUCTS.filter((product) => {
      const matchesCategory =
        activeCategory === "All Products" ||
        product.category === activeCategory;

      const matchesSearch =
        !query ||
        `${product.name} ${product.category} ${product.description}`
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesSearch;
    }).sort((a, b) =>
      sortOrder === "name" ? a.name.localeCompare(b.name) : 0,
    );
  }, [activeCategory, searchTerm, sortOrder]);

  // Keep active index in bounds when category/search changes
  useEffect(() => {
    if (activeCoverflowIndex >= filteredProducts.length && filteredProducts.length > 0) {
      setActiveCoverflowIndex(0);
    }
  }, [filteredProducts.length, activeCoverflowIndex]);

  const activeProduct = useMemo(() => {
    return filteredProducts[activeCoverflowIndex] || filteredProducts[0] || null;
  }, [filteredProducts, activeCoverflowIndex]);

  const handlePrev = () => {
    if (!filteredProducts.length) return;
    setActiveCoverflowIndex((prev) =>
      prev === 0 ? filteredProducts.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    if (!filteredProducts.length) return;
    setActiveCoverflowIndex((prev) =>
      prev === filteredProducts.length - 1 ? 0 : prev + 1
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [filteredProducts.length]);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const diffX = e.changedTouches[0].clientX - touchStartX;
    if (diffX > 45) {
      handlePrev();
    } else if (diffX < -45) {
      handleNext();
    }
    setTouchStartX(null);
  };

  const openEnquiry = (product) => {
    const params = new URLSearchParams({
      product: product?.name || "",
      subject: "Product enquiry",
    });

    navigate(`/contact?${params.toString()}`);
  };

  return (
    <main className="overflow-clip bg-[#FAFBF8] font-sans text-[#172720]">
      {/* HERO SECTION */}
      <section className="relative isolate flex h-screen min-h-[560px] max-h-[1080px] flex-col justify-between overflow-hidden bg-[#183D32] text-white pt-[82px]">
        <div
          className="absolute inset-0 -z-10 animate-[productsHeroReveal_1.2s_ease_both] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2200&q=90')",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0c231b]/95 via-[#122f24]/75 to-[#122f24]/20" />

        <div className="my-auto mx-auto w-[calc(100%-2rem)] max-w-[1200px] py-4 sm:w-[calc(100%-3rem)]">
          <motion.p
            className={`${eyebrow} text-[#C3D5A5] mb-3.5 sm:mb-4`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            SAR RENEWABLES · PRODUCT RANGE
          </motion.p>

          <h1 className="max-w-4xl font-sans text-4xl font-medium leading-[1.04] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-[66px] xl:text-[74px]">
            <RevealLine delay={0.2}>Reliable Products.</RevealLine>
            <RevealLine
              delay={0.34}
              className="font-serif italic text-[#C3D5A5]"
            >
              Smarter Energy.
            </RevealLine>
          </h1>

          <motion.p
            className="mt-4 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-white/85 sm:mt-5"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
          >
            Explore solar energy components and solutions selected around your
            project requirements, performance goals, and site conditions.
          </motion.p>

          <motion.button
            type="button"
            className={`${buttonBase} mt-6 sm:mt-7 bg-[#C3D5A5] text-[#183D32] hover:bg-[#d5e2bf] px-6 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm min-h-[46px] cursor-pointer`}
            onClick={() => {
              document.getElementById("product-catalogue")?.scrollIntoView({ behavior: "smooth" });
            }}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            Explore Products
            <ArrowRight size={17} />
          </motion.button>
        </div>

        <div className="w-full border-t border-white/20 bg-[#0c231b]/40 backdrop-blur-sm">
          <div className="mx-auto flex w-[calc(100%-2rem)] max-w-[1200px] justify-between gap-4 py-3 sm:w-[calc(100%-3rem)] text-[0.65rem] font-bold tracking-[0.15em] text-white/70">
            <span>ENERGY FOR WHAT&apos;S NEXT</span>
            <span>01 — PRODUCT CATALOGUE</span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="relative flex min-h-[380px] flex-col justify-center px-4 py-12 sm:px-6 lg:h-[460px] lg:py-8">
        <Reveal className="mx-auto grid w-full max-w-[1200px] gap-6 sm:gap-12 lg:grid-cols-[1.1fr_0.7fr] lg:items-end">
          <div>
            <p className={eyebrow}>OUR PRODUCT RANGE</p>

            <h2 className="font-sans text-4xl font-medium leading-tight tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              <RevealLine delay={0.2}>The right components</RevealLine>
              <RevealLine
                delay={0.34}
                className="font-serif italic text-[#648477]"
              >
                make a difference.
              </RevealLine>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-[#68766F]">
            Every project has different energy needs. Explore the categories
            below, then speak with our team to identify options suitable for
            your site and system design.
          </p>
        </Reveal>
      </section>

      {/* PRODUCT CATALOGUE — UNIFIED SINGLE-FRAME 3D SHOWROOM */}
      <section
        className="scroll-mt-6 relative overflow-hidden bg-[#F4F7F2] py-8 sm:py-12 border-t border-[#DFE7E1]"
        id="product-catalogue"
      >
        {/* Soft Ambient Radial Light */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(195,213,165,0.35),transparent_70%)]" />
        <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[650px] rounded-full bg-[#2F5B49]/[0.03] blur-[90px]" />

        <div className="relative z-10 mx-auto w-[calc(100%-2rem)] max-w-[1200px] sm:w-[calc(100%-3rem)]">
          {/* Section Header */}
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2F5B49] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2F5B49]" />
                </span>
                <p className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-[#2F5B49]">
                  OUR PRODUCT RANGE
                </p>
              </div>
              <h2 className="mt-1 font-sans text-2xl font-medium tracking-[-0.04em] sm:text-3xl lg:text-4xl text-[#172720]">
                <RevealLine delay={0.2}>Complete Solar Range.</RevealLine>
                <RevealLine
                  delay={0.34}
                  className="font-serif italic text-[#2F5B49]"
                >
                  Engineered for scale.
                </RevealLine>
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#DFE7E1] bg-white px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider text-[#24523F] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#2F5B49] animate-pulse" />
                {String(filteredProducts.length).padStart(2, "0")} Solutions Available
              </span>
            </div>
          </div>

          {/* CONTROLS BAR (Clean light styling matching site aesthetic) */}
          <div className="mb-6 flex flex-col gap-3 border-b border-[#DFE7E1] pb-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Category Filter Pills */}
            <div
              className="flex flex-wrap items-center gap-1.5 sm:gap-2"
              role="group"
              aria-label="Filter products by category"
            >
              {PRODUCT_CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={isActive}
                    className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-[#2F5B49] text-white shadow-sm scale-[1.02]"
                        : "border border-[#DFE7E1] bg-white text-[#4A5D53] hover:border-[#2F5B49]/50 hover:bg-[#FAFBF8] hover:text-[#172720]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Search and Layout Toolbar */}
            <div className="flex flex-wrap items-center gap-2.5">
              <label className="relative flex min-h-[38px] items-center gap-2 rounded-full border border-[#DFE7E1] bg-white px-3.5 text-[#556960] shadow-sm transition-all duration-300 focus-within:border-[#2F5B49] focus-within:ring-1 focus-within:ring-[#2F5B49] sm:w-[240px]">
                <Search
                  size={14}
                  className="text-[#2F5B49]"
                  aria-hidden="true"
                />
                <span className="sr-only">Search products</span>
                <input
                  className="min-w-0 flex-1 border-0 bg-transparent text-xs sm:text-[13px] text-[#172720] outline-none placeholder:text-[#83978C]"
                  type="search"
                  placeholder="Search solutions..."
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm("")}
                    className="text-xs text-[#83978C] hover:text-[#172720]"
                  >
                    Clear
                  </button>
                )}
              </label>

              {/* View Mode Toggle: 3D Coverflow vs Grid */}
              <div className="flex items-center gap-1 rounded-full border border-[#DFE7E1] bg-white p-1 shadow-sm">
                <button
                  type="button"
                  onClick={() => setViewMode("coverflow")}
                  aria-label="3D Coverflow View"
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                    viewMode === "coverflow"
                      ? "bg-[#2F5B49] text-white font-bold shadow-xs"
                      : "text-[#556960] hover:text-[#172720]"
                  }`}
                >
                  <Rotate3d size={13} />
                  <span>3D Coverflow</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  aria-label="Grid View"
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                    viewMode === "grid"
                      ? "bg-[#2F5B49] text-white font-bold shadow-xs"
                      : "text-[#556960] hover:text-[#172720]"
                  }`}
                >
                  <LayoutGrid size={13} />
                  <span>Grid</span>
                </button>
              </div>
            </div>
          </div>

          {/* 3D COVERFLOW SHOWCASE OR CLASSIC GRID — ONE FRAME LAYOUT */}
          {filteredProducts.length ? (
            viewMode === "coverflow" ? (
              <div
                className="relative w-full"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {/* 3D PERSPECTIVE TRACK WITH MIRROR FLOOR REFLECTIONS */}
                <div
                  className="relative flex items-center justify-center h-[210px] sm:h-[240px] lg:h-[260px] w-full"
                  style={{
                    perspective: "1000px",
                    perspectiveOrigin: "50% 48%",
                  }}
                >
                  {/* Previous Button */}
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous product"
                    className="absolute left-1 sm:left-3 lg:left-6 top-1/2 -translate-y-1/2 z-50 grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full border border-[#DFE7E1] bg-white/95 text-[#172720] shadow-md transition-all duration-300 hover:scale-110 hover:border-[#2F5B49] hover:bg-[#2F5B49] hover:text-white active:scale-95"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  {/* Next Button */}
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next product"
                    className="absolute right-1 sm:right-3 lg:right-6 top-1/2 -translate-y-1/2 z-50 grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full border border-[#DFE7E1] bg-white/95 text-[#172720] shadow-md transition-all duration-300 hover:scale-110 hover:border-[#2F5B49] hover:bg-[#2F5B49] hover:text-white active:scale-95"
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Render 3D Cards */}
                  {filteredProducts.map((product, index) => {
                    let diff = index - activeCoverflowIndex;
                    const total = filteredProducts.length;
                    if (diff > total / 2) diff -= total;
                    if (diff < -total / 2) diff += total;

                    const isCenter = diff === 0;
                    const isVisible = Math.abs(diff) <= 2;
                    const transform = getCardTransform(diff, isMobile);

                    if (!isVisible) return null;

                    return (
                      <motion.div
                        key={product.id}
                        onClick={() => {
                          if (isCenter) {
                            setSelectedProduct(product);
                          } else {
                            setActiveCoverflowIndex(index);
                          }
                        }}
                        animate={{
                          x: transform.x,
                          z: transform.z,
                          rotateY: transform.rotateY,
                          scale: transform.scale,
                          opacity: transform.opacity,
                        }}
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{
                          zIndex: transform.zIndex,
                          transformStyle: "preserve-3d",
                        }}
                        className="absolute top-0 w-[220px] sm:w-[270px] lg:w-[310px] cursor-pointer select-none"
                      >
                        {/* Upper Card Box with Border */}
                        <div
                          className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
                            isCenter
                              ? "border-2 border-[#2F5B49] shadow-[0_12px_28px_rgba(20,50,35,0.18)] ring-2 ring-[#2F5B49]/10"
                              : "border border-[#D5E0D8] shadow-[0_6px_16px_rgba(0,0,0,0.08)]"
                          }`}
                        >
                          <div className="relative h-[145px] sm:h-[170px] lg:h-[190px] w-full overflow-hidden bg-[#E2EBE5]">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Card Name */}
                            <div className="absolute bottom-2.5 left-3 right-3 z-10">
                              <h4 className="font-sans text-xs sm:text-sm font-semibold text-white drop-shadow-md truncate">
                                {product.name}
                              </h4>
                            </div>
                          </div>
                        </div>

                        {/* Subtle Ground Reflection */}
                        <div
                          className="pointer-events-none mt-1 h-7 sm:h-9 w-full overflow-hidden opacity-25 select-none"
                          style={{
                            maskImage:
                              "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 60%)",
                            WebkitMaskImage:
                              "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 60%)",
                          }}
                        >
                          <img
                            src={product.image}
                            alt=""
                            className="h-full w-full object-cover scale-y-[-1] filter blur-[0.6px]"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Pagination Dots */}
                <div className="relative z-20 mt-2 flex items-center justify-center gap-1.5">
                  {filteredProducts.map((p, idx) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setActiveCoverflowIndex(idx)}
                      aria-label={`Select product ${idx + 1}`}
                      className={`h-1.5 transition-all duration-300 rounded-full ${
                        idx === activeCoverflowIndex
                          ? "w-6 bg-[#2F5B49] shadow-xs"
                          : "w-1.5 bg-[#C5D5CB] hover:bg-[#8EA699]"
                      }`}
                    />
                  ))}
                </div>

                {/* Active Product Details (Directly integrated in the single frame) */}
                {activeProduct && (
                  <motion.div
                    key={activeProduct.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-20 mx-auto mt-3 max-w-4xl rounded-2xl border border-[#DFE7E1] bg-white p-4 sm:p-5 shadow-[0_4px_20px_rgba(20,50,35,0.06)]"
                  >
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#CDE0D4] bg-[#EAF2EC] px-2.5 py-0.5 text-[11px] font-semibold text-[#24523F]">
                            <Sparkles size={11} className="text-[#2F5B49]" />
                            {activeProduct.category}
                          </span>
                          <span className="text-xs text-[#687D72] font-mono">
                            Solution {String(activeCoverflowIndex + 1).padStart(2, "0")} / {String(filteredProducts.length).padStart(2, "0")}
                          </span>
                        </div>

                        <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-[#172720]">
                          {activeProduct.name}
                        </h3>

                        <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-[#556960] line-clamp-2 max-w-2xl">
                          {activeProduct.description}
                        </p>

                        {/* Technical Highlights with Checkmarks */}
                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 pt-2.5 border-t border-[#EDF2EE]">
                          {activeProduct.highlights.slice(0, 4).map((h, i) => (
                            <div key={i} className="flex items-center gap-1.5 text-xs text-[#202B25] font-medium">
                              <Check size={13} className="text-[#2F5B49] shrink-0" />
                              <span className="truncate">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-row lg:flex-col gap-2.5 shrink-0 pt-2 lg:pt-0 border-t border-[#EDF2EE] lg:border-t-0">
                        <button
                          type="button"
                          onClick={() => openEnquiry(activeProduct)}
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-full bg-[#2F5B49] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#1E3B2F] hover:shadow-md active:scale-95"
                        >
                          <span>Request Quote</span>
                          <ArrowUpRight size={15} />
                        </button>

                        <button
                          type="button"
                          onClick={() => setSelectedProduct(activeProduct)}
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-full border border-[#DFE7E1] bg-[#F4F7F2] px-5 py-2 text-xs sm:text-sm font-semibold text-[#172720] transition-all duration-300 hover:border-[#2F5B49] hover:bg-white active:scale-95"
                        >
                          <span>View Full Specs</span>
                          <ArrowRight size={13} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ) : (
              <motion.div
                layout
                className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 pt-2"
              >
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product, index) => (
                    <motion.article
                      key={product.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.04,
                      }}
                      className="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl border border-[#DFE7E1] bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#2F5B49]/40 hover:shadow-xl h-[380px] sm:h-[400px]"
                    >
                      {/* Background Image */}
                      <img
                        className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.style.visibility = "hidden";
                        }}
                      />

                      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/50 to-black/15 transition-opacity duration-500 group-hover:opacity-95" />

                      <div className="relative z-10">
                        <h3 className="font-sans text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-[#C3D5A5]">
                          {product.name}
                        </h3>

                        <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-white/80 line-clamp-2">
                          {product.description}
                        </p>

                        <div className="mt-4 flex items-center justify-between border-t border-white/20 pt-3.5">
                          <button
                            type="button"
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white transition-colors duration-200 group-hover:text-[#C3D5A5]"
                            onClick={() => setSelectedProduct(product)}
                          >
                            View Details
                            <ArrowRight
                              size={15}
                              className="transition-transform duration-200 group-hover:translate-x-1"
                            />
                          </button>

                          <button
                            type="button"
                            className="grid h-9 w-9 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:border-[#2F5B49] hover:bg-[#2F5B49] hover:text-white"
                            onClick={() => openEnquiry(product)}
                            aria-label={`Request a quote for ${product.name}`}
                          >
                            <ArrowUpRight size={16} />
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </motion.div>
            )
          ) : (
            <div className="flex min-h-60 flex-col items-center justify-center text-center text-[#687D72]">
              <Search size={26} className="text-[#2F5B49]" />

              <h3 className="mt-3 font-semibold text-[#172720]">
                No matching products
              </h3>

              <p className="mt-1 text-sm text-[#687D72]">
                Try another search term or choose a different category.
              </p>

              <button
                type="button"
                className="mt-3 border-b border-[#2F5B49] py-0.5 text-sm font-bold text-[#2F5B49] hover:text-[#172720]"
                onClick={() => {
                  setActiveCategory("All Products");
                  setSearchTerm("");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* PRODUCT DETAILS MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 z-[9999] grid place-items-center overflow-y-auto bg-[#091913]/75 p-3 backdrop-blur-sm sm:p-6"
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedProduct(null);
              }
            }}
          >
            <motion.section
              className="relative grid max-h-[calc(100dvh-24px)] w-full max-w-4xl grid-cols-1 overflow-auto bg-[#FAFBF8] shadow-2xl sm:max-h-[min(720px,calc(100dvh-48px))] sm:grid-cols-[0.9fr_1.1fr]"
              role="dialog"
              aria-modal="true"
              aria-labelledby="product-modal-title"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <button
                className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full border border-[#E1E8E1] bg-white text-[#183D32]"
                type="button"
                onClick={() => setSelectedProduct(null)}
                aria-label="Close product details"
              >
                <X size={21} />
              </button>

              <div className="h-56 bg-[#E4EBE3] sm:h-full sm:min-h-[420px]">
                <img
                  className="h-full w-full object-cover"
                  src={selectedProduct.image}
                  alt={selectedProduct.imageAlt || selectedProduct.name}
                />
              </div>

              <div className="self-center p-6 sm:p-10">
                <p className={eyebrow}>{selectedProduct.category}</p>

                <h2
                  id="product-modal-title"
                  className="font-sans text-3xl font-medium leading-tight tracking-[-0.045em] text-[#183D32] sm:text-4xl"
                >
                  {selectedProduct.name}
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#68766F]">
                  {selectedProduct.description}
                </p>

                <ul className="my-6 grid gap-3">
                  {selectedProduct.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 text-sm leading-6 text-[#172720]"
                    >
                      <Check
                        className="mt-1 shrink-0 text-[#648477]"
                        size={17}
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <p className="border-l-2 border-[#C3D5A5] pl-3 text-xs leading-6 text-[#68766F]">
                  Product availability and specifications should be confirmed
                  with the SAR Renewables team.
                </p>

                <button
                  className={`${buttonBase} mt-5 bg-[#183D32] text-white hover:bg-[#285644]`}
                  type="button"
                  onClick={() => openEnquiry(selectedProduct)}
                >
                  Request a Quote
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CALL TO ACTION */}
      <section className="relative isolate overflow-hidden bg-[#183D32] text-white after:pointer-events-none after:absolute after:-right-24 after:-top-36 after:-z-10 after:h-[500px] after:w-[500px] after:rounded-full after:border after:border-[#C3D5A5]/20 after:shadow-[0_0_0_55px_rgba(195,213,165,0.035),0_0_0_110px_rgba(195,213,165,0.025)]">
        <div className="mx-auto flex w-[calc(100%-2rem)] max-w-[1200px] flex-col gap-8 py-16 sm:w-[calc(100%-3rem)] sm:py-24 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
          >
            <p className={`${eyebrow} text-[#C3D5A5]`}>
              YOUR PROJECT, YOUR REQUIREMENTS
            </p>

            <h2 className="font-sans text-4xl font-medium leading-tight tracking-[-0.055em] sm:text-6xl">
              <RevealLine delay={0.2}>Looking for the right</RevealLine>
              <RevealLine
                delay={0.34}
                className="font-serif italic text-[#C3D5A5]"
              >
                solar solution?
              </RevealLine>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              Tell us about your project and our team can help you explore
              suitable product options.
            </p>
          </motion.div>

          <motion.button
            className={`${buttonBase} shrink-0 bg-[#C3D5A5] text-[#183D32] hover:bg-[#d5e2bf]`}
            type="button"
            onClick={() => openEnquiry(null)}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            Request a Quote
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </section>
    </main>
  );
}
