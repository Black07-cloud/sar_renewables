import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Reveal, { RevealLine } from "../components/Reveal";
import { ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const services = [
  {
    number: "01",
    tag: "Commercial & Industrial",
    title: "Solar Energy Solutions",
    description:
      "Explore solar energy options for your property or commercial facility with engineering tailored to site irradiance, structural load capacity, and long-term energy yields.",
    image:
      "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Solar panels installed in a residential property setting",
    bullets: [
      "Custom engineering tailored to site irradiance & load capacity",
      "Tier-1 mono-PERC & bifacial solar modules with 25-year warranty",
      "Smart remote generation tracking with live telemetry",
      "Accelerated depreciation & substantial commercial tariff reductions",
    ],
  },
  {
    number: "02",
    tag: "Clean Infrastructure",
    title: "Renewable Energy Projects",
    description:
      "Discuss renewable energy project requirements and explore sustainable multi-kilowatt and megawatt possibilities based on comprehensive site feasibility.",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Renewable energy and ecological landscape",
    bullets: [
      "Turnkey planning and development for high-yield installations",
      "Topographical profiling, shading simulation & environmental review",
      "Scalable multi-kilowatt and megawatt design configurations",
      "Substation and transmission grid synchronization deployment",
    ],
  },
  {
    number: "03",
    tag: "Corporate & Enterprise",
    title: "Commercial Energy",
    description:
      "Explore energy options for commercial facilities, offices and business premises with a requirements-led approach that protects your operational margins.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Modern commercial building with renewable energy installation",
    bullets: [
      "Drastic reduction in peak-hour commercial utility expenses",
      "Flexible CAPEX and zero-capex RESCO financing options",
      "Uninterrupted business power integration with failover systems",
      "ESG compliance and certified green building carbon credits",
    ],
  },
  {
    number: "04",
    tag: "Technical Advisory",
    title: "Project Planning & Consultation",
    description:
      "Start with a conversation about your objectives, available space, project needs and clear financial return projections.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Technical project planning and consultation",
    bullets: [
      "Detailed financial modeling with clear ROI & payback timeline",
      "Statutory liaison, CEIG clearances & net-metering sanctions",
      "Comprehensive DPR (Detailed Project Report) & bill of materials",
      "Preventive maintenance schedules & performance guarantees",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Understand",
    text: "We begin by listening to your goals, site context, rooftop load characteristics and electrical load profile.",
  },
  {
    step: "02",
    title: "Explore",
    text: "We model yield scenarios, simulate shading patterns, and evaluate optimal technology configurations.",
  },
  {
    step: "03",
    title: "Plan & Execute",
    text: "We clarify statutory clearances, delivery milestones, and turnkey execution with complete transparency.",
  },
];

const benefits = [
  "A customer-focused approach",
  "Clear communication at each stage",
  "Solutions explored around your requirements",
  "A focus on responsible energy choices",
];

export default function Services() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [activeTimelineStep, setActiveTimelineStep] = useState(0);
  const [isTimelinePaused, setIsTimelinePaused] = useState(false);

  useEffect(() => {
    if (isTimelinePaused) return;
    const timer = setInterval(() => {
      setActiveTimelineStep((prev) => (prev + 1) % process.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [isTimelinePaused]);

  return (
    <main className="overflow-hidden bg-[#FAFBF8] text-[#202B25]">
      {/* HERO */}
      <section className="relative isolate flex h-screen min-h-[560px] max-h-[1080px] flex-col justify-center overflow-hidden bg-[#183D32] px-6 text-white pt-[82px] sm:px-10 lg:px-16">
        <img
          src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=2200&q=85"
          alt="Solar energy engineers inspecting solar installation"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#102E25]/95 via-[#183D32]/80 to-[#183D32]/35" />
        <div className="absolute -right-24 -top-28 -z-10 h-[420px] w-[420px] rounded-full border border-white/15 sm:h-[620px] sm:w-[620px]" />

        <div className="my-auto mx-auto w-full max-w-[1280px] py-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="mb-3.5 flex items-center gap-3 sm:mb-4">
              <span className="h-px w-8 sm:w-10 bg-[#C3D5A5]" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C3D5A5]">
                SAR Renewables · Services
              </p>
            </motion.div>

            <h1 className="font-sans text-4xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[66px] xl:text-[74px]">
              <RevealLine delay={0.20}>Energy solutions,</RevealLine>
              <RevealLine delay={0.34}>
                shaped around{" "}
                <span className="font-serif italic text-[#C3D5A5]">
                  your needs.
                </span>
              </RevealLine>
            </h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-white/80 sm:mt-5"
            >
              Explore renewable energy possibilities with a clear,
              customer-focused approach—from understanding your requirements
              to discussing the next steps.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3 sm:mt-7 sm:gap-4">
              <button
                type="button"
                onClick={() => {
                  document.getElementById("our-services")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#C3D5A5] px-6 py-3 text-xs sm:px-7 sm:py-3.5 sm:text-sm font-semibold text-[#183D32] transition duration-300 hover:bg-white cursor-pointer"
              >
                Explore Services
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/35 px-6 py-3 text-xs sm:px-7 sm:py-3.5 sm:text-sm font-semibold text-white transition duration-300 hover:border-white hover:bg-white/10"
              >
                Talk to Our Team
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ASYMMETRICAL MAGAZINE GRID (SERVICES SHOWCASE) */}
      <section id="our-services" className="relative flex min-h-screen flex-col justify-center bg-[#FAFBF8] px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
        <Reveal className="mx-auto flex h-full w-full max-w-[1280px] flex-col justify-center">
          {/* Section Header */}
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#648477]">
                What We Do
              </p>
              <h2 className="mt-2 font-sans text-3xl font-medium tracking-[-0.035em] sm:text-4xl lg:text-[42px] lg:leading-[1.12]">
                <RevealLine delay={0.20}>Practical thinking.</RevealLine>
                <RevealLine delay={0.34} className="font-serif italic text-[#648477]">
                  Clear direction.
                </RevealLine>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm leading-6 text-[#68756C]">
              Every project has different needs. Select any solution below to explore technical capabilities and deployment models.
            </p>
          </div>

          {/* Asymmetrical Magazine Layout: Large Visual Anchor + Editorial Highlights */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 items-stretch">
            {/* Left Column: Immersive Hero Visual Showcase */}
            <div className="lg:col-span-7">
              <div className="relative isolate flex flex-col justify-between overflow-hidden rounded-[32px] bg-[#10251E] p-7 sm:p-9 lg:p-10 min-h-[490px] sm:min-h-[520px] lg:h-full shadow-[0_20px_50px_rgba(16,37,30,0.16)]">
                {/* Cross-fade Background Image */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={services[activeServiceIndex].image}
                    src={services[activeServiceIndex].image}
                    alt={services[activeServiceIndex].title}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 -z-20 h-full w-full object-cover"
                  />
                </AnimatePresence>

                {/* Dark Editorial Gradient Overlays */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0A1812]/95 via-[#10281E]/65 to-[#10281E]/20" />
                <div className="absolute inset-0 -z-10 bg-black/25" />

                {/* Top Meta Bar */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3.5 py-1 text-[11px] font-semibold tracking-wider text-white backdrop-blur-md">
                    <Sparkles size={12} className="text-[#C3D5A5]" />
                    {services[activeServiceIndex].tag}
                  </span>
                  <span className="font-mono text-xs font-bold tracking-widest text-[#C3D5A5]">
                    {services[activeServiceIndex].number} / 04
                  </span>
                </div>

                {/* Bottom Story Content */}
                <div className="relative z-10 mt-12 max-w-xl">
                  <div className="flex items-center gap-2 mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C3D5A5]">
                    <span>Solution Spotlight</span>
                    <span className="h-px w-6 bg-[#C3D5A5]/60" />
                  </div>

                  <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white">
                    {services[activeServiceIndex].title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/85">
                    {services[activeServiceIndex].description}
                  </p>

                  {/* Bulleted Technical Highlights */}
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 border-t border-white/15 pt-4">
                    {services[activeServiceIndex].bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs leading-5 text-white/90">
                        <Check size={14} className="mt-0.5 shrink-0 text-[#C3D5A5]" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Direct Action */}
                  <div className="mt-6">
                    <Link
                      to={`/contact?subject=${encodeURIComponent(services[activeServiceIndex].title)}`}
                      className="group inline-flex items-center gap-2.5 rounded-full bg-[#C3D5A5] px-6 py-2.5 text-xs sm:text-sm font-bold text-[#183D32] shadow-md transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-0.5"
                    >
                      <span>Enquire About This Solution</span>
                      <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Magazine Selector (Borderless Rows) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5">
              {services.map((service, index) => {
                const isActive = activeServiceIndex === index;

                return (
                  <button
                    type="button"
                    key={service.number}
                    onClick={() => setActiveServiceIndex(index)}
                    onMouseEnter={() => setActiveServiceIndex(index)}
                    className={`group w-full text-left rounded-2xl p-5 sm:p-5.5 transition-all duration-300 border-l-4 ${
                      isActive
                        ? "border-[#183D32] bg-white shadow-[0_12px_32px_rgba(20,50,35,0.08)] -translate-x-1"
                        : "border-transparent bg-white/40 hover:bg-white/80 hover:border-[#183D32]/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-mono text-xs font-bold transition-colors ${
                        isActive ? "text-[#183D32]" : "text-[#7B8B82] group-hover:text-[#183D32]"
                      }`}>
                        {service.number}
                      </span>
                      <span className="text-[11px] font-medium text-[#7B8B82]">
                        {service.tag}
                      </span>
                    </div>

                    <h4 className={`mt-2 font-sans text-base sm:text-lg font-semibold tracking-tight transition-colors ${
                      isActive ? "text-[#183D32]" : "text-[#2C3B34] group-hover:text-[#183D32]"
                    }`}>
                      {service.title}
                    </h4>

                    <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-[#68756C] line-clamp-2">
                      {service.description}
                    </p>

                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-black/[0.04]">
                      <span className={`text-[11px] font-bold uppercase tracking-wider transition-colors ${
                        isActive ? "text-[#183D32]" : "text-[#8A968E] group-hover:text-[#183D32]"
                      }`}>
                        {isActive ? "Currently Active" : "Click to View Details"}
                      </span>
                      <ArrowRight
                        size={14}
                        className={`transition-all duration-300 ${
                          isActive
                            ? "text-[#183D32] translate-x-1"
                            : "text-[#8A968E] opacity-50 group-hover:opacity-100 group-hover:translate-x-1"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      {/* PROCESS — CONNECTED ROADMAP (CARD-FREE PROGRESSION) */}
      <section className="relative flex flex-col justify-center bg-white px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <Reveal className="mx-auto flex h-full w-full max-w-[1280px] flex-col justify-center">
          <div className="mb-10 max-w-3xl sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#648477]">
              Our Process
            </p>
            <h2 className="mt-2 font-sans text-3xl font-medium tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              <RevealLine delay={0.20}>From first conversation</RevealLine>
              <RevealLine delay={0.34}>
                to{" "}
                <span className="font-serif italic text-[#648477]">
                  next steps.
                </span>
              </RevealLine>
            </h2>
            <p className="mt-3 max-w-2xl text-xs sm:text-sm leading-6 sm:leading-7 text-[#778078]">
              Our structured approach ensures clear communication and a considered evaluation of your requirements from the very first conversation.
            </p>
          </div>

          {/* Connected Flow Roadmap with Sequential Timeline Animation */}
          <div
            className="relative"
            onMouseEnter={() => setIsTimelinePaused(true)}
            onMouseLeave={() => setIsTimelinePaused(false)}
          >
            {/* Horizontal Connecting Rail on Desktop — Base Track */}
            <div className="pointer-events-none absolute top-7 left-10 right-10 hidden h-1 rounded-full bg-[#E5EDE7] lg:block" />

            {/* Animated Progress Timeline Line (Filling progressively from section to section) */}
            <motion.div
              className="pointer-events-none absolute top-7 left-10 hidden h-1 rounded-full bg-gradient-to-r from-[#183D32] via-[#2F5B49] to-[#C3D5A5] lg:block shadow-[0_0_10px_rgba(24,61,50,0.35)]"
              animate={{
                width:
                  activeTimelineStep === 0
                    ? "28px"
                    : activeTimelineStep === 1
                    ? "calc(50% - 14px)"
                    : "calc(100% - 56px)",
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />

            <div className="grid gap-8 md:grid-cols-3 sm:gap-8">
              {process.map((item, i) => {
                const isActive = activeTimelineStep === i;
                const isPassed = activeTimelineStep >= i;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.12 + i * 0.1,
                      ease: [0.21, 1, 0.36, 1],
                    }}
                    onClick={() => setActiveTimelineStep(i)}
                    className="group relative flex flex-col pt-2 cursor-pointer select-none"
                  >
                    {/* Step Node Marker */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        {/* Active Pulse Aura */}
                        {isActive && (
                          <motion.span
                            layoutId="timeline-aura"
                            className="absolute -inset-1.5 rounded-2xl bg-[#C3D5A5]/60 animate-pulse"
                            transition={{ duration: 0.35 }}
                          />
                        )}
                        <span
                          className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 font-mono text-base font-bold transition-all duration-500 ${
                            isActive
                              ? "border-[#183D32] bg-[#183D32] text-white shadow-lg scale-105"
                              : isPassed
                              ? "border-[#2F5B49] bg-[#2F5B49] text-white shadow-sm"
                              : "border-white bg-[#EEF5F0] text-[#183D32] shadow-sm hover:border-[#183D32]/30 hover:scale-105"
                          }`}
                        >
                          {item.step}
                        </span>
                      </div>

                      {/* Mobile Animated Connecting Line */}
                      <div className="relative h-1 flex-1 rounded-full bg-[#E5EDE7] lg:hidden overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#183D32] to-[#C3D5A5]"
                          animate={{
                            width: isPassed ? "100%" : "0%",
                          }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>

                    {/* Content below Marker */}
                    <div className="mt-6 pr-4">
                      <div className="flex items-center gap-2">
                        <h3
                          className={`font-sans text-xl sm:text-2xl font-semibold tracking-tight transition-colors duration-300 ${
                            isActive
                              ? "text-[#183D32]"
                              : "text-[#202B25] group-hover:text-[#183D32]"
                          }`}
                        >
                          {item.title}
                        </h3>
                        {isActive && (
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#426F61] opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#426F61]" />
                          </span>
                        )}
                      </div>

                      {/* Underline (Animates width on active step) */}
                      <motion.div
                        className={`mt-2.5 h-0.5 rounded-full transition-all duration-500 ${
                          isActive ? "bg-[#183D32]" : "bg-[#C3D5A5]"
                        }`}
                        animate={{
                          width: isActive ? "4rem" : "2rem",
                        }}
                        transition={{ duration: 0.4 }}
                      />

                      <p
                        className={`mt-3 text-xs sm:text-[13px] leading-relaxed transition-colors duration-300 ${
                          isActive ? "text-[#263D36] font-medium" : "text-[#68756C]"
                        }`}
                      >
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      {/* WHY SAR / THE SAR APPROACH */}
      <section className="relative flex min-h-screen flex-col justify-center px-6 py-12 sm:px-10 lg:h-screen lg:max-h-[960px] lg:px-16 lg:py-8">
        <Reveal className="mx-auto grid max-w-[1280px] items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#648477]">
              The SAR Approach
            </p>
            <h2 className="mt-3 font-sans text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              <RevealLine delay={0.20}>Clear communication.</RevealLine>
              <RevealLine delay={0.34} className="font-serif italic text-[#648477]">
                Thoughtful service.
              </RevealLine>
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-[#68756C]">
              We aim to make it easier to discuss your energy goals and
              understand the options available to you. Our focus is on a
              considered, requirements-led conversation.
            </p>

            <div className="mt-6 space-y-3.5">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-[#E7EDE4]">
                    <Check size={13} className="text-[#426F61]" />
                  </span>
                  <p className="text-xs sm:text-sm leading-6 text-[#4F5E54]">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="group relative min-h-[320px] sm:min-h-[400px] lg:h-[460px] xl:h-[500px] overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=1400&q=85"
              alt="Renewable energy infrastructure at sunset"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102E25]/85 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C3D5A5]">Renewable Possibilities</p>
              <h3 className="mt-4 text-2xl font-medium text-white sm:text-3xl">
                Explore what’s possible.
              </h3>
              <p className="mt-2 max-w-md text-xs sm:text-sm leading-6 text-white/80">
                Share your goals with our team and start a conversation about
                your energy requirements.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="relative flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-20 lg:px-16">
        <Reveal className="relative isolate mx-auto w-full max-w-[1280px] overflow-hidden rounded-3xl bg-[#183D32] px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-16">
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=80"
            alt=""
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 -z-10 bg-[#183D32]/85" />

          <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C3D5A5]">
                Start a Conversation
              </p>
              <h2 className="mt-4 font-sans text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                <RevealLine delay={0.20}>
                  Let’s discuss your energy{" "}
                  <span className="font-serif italic text-[#C3D5A5]">
                    requirements.
                  </span>
                </RevealLine>
              </h2>
              <p className="mt-4 max-w-xl text-xs sm:text-sm leading-6 sm:leading-7 text-white/75">
                Contact our team to share your goals and explore the next
                steps for your project.
              </p>
            </div>
            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#C3D5A5] px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#183D32] transition duration-300 hover:bg-white"
            >
              Get in Touch
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
