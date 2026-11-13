import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Reveal, { RevealLine } from "../components/Reveal";

import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Residential Solar",
    description:
      "Explore solar energy solutions designed around residential energy requirements.",
    image:
      "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Commercial Solutions",
    description:
      "Renewable energy possibilities for commercial properties and businesses.",
    image:
      "https://images.unsplash.com/photo-1545208942-e1c9c916524b?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Industrial Solar",
    description: "Explore solar energy options for industrial environments.",
    image:
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Energy Consultation",
    description:
      "Discuss your energy requirements and explore suitable solutions.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85",
  },
];

function ServiceCard({ service }) {
  return (
    <div className="group relative isolate flex flex-col justify-between overflow-hidden rounded-2xl bg-[#263D36] p-5 sm:p-6 min-h-[280px] sm:min-h-[300px] lg:h-[350px] xl:h-[380px] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-xl">
      <img
        src={service.image}
        alt=""
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#15241E]/95 via-[#15241E]/55 to-[#15241E]/15" />

      <div className="flex items-center justify-between">
        <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-medium tracking-wider text-white/90 backdrop-blur-md">
          {service.tag}
        </span>
        <span className="text-xs font-medium tracking-[0.2em] text-white/70">
          {service.number}
        </span>
      </div>

      <div className="max-w-lg">
        <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
          {service.title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm leading-6 text-white/80 line-clamp-3">
          {service.description}
        </p>
        <Link
          to="/contact"
          aria-label={`Enquire about ${service.title}`}
          className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white transition-colors group-hover:text-[#D9E5A3]"
        >
          Enquire Now
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const heroRef = useRef(null);

  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,

    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(
    scrollYProgress,

    [0, 1],

    ["0%", "20%"],
  );

  const heroOpacity = useTransform(
    scrollYProgress,

    [0, 0.8, 1],

    [1, 1, 0.7],
  );

  return (
    <main className="overflow-hidden bg-white text-[#263D36]">
      {/* IMMERSIVE HERO + PARALLAX */}
      <section
        ref={heroRef}
        id="home"
        className="relative isolate flex h-screen min-h-[560px] max-h-[1080px] flex-col justify-between overflow-hidden bg-[#263D36] pt-[82px]"
      >
        <motion.div
          className="absolute inset-0 -z-20"
          style={reduceMotion ? {} : { y: backgroundY }}
        >
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2400&q=90"
            alt="Solar panels under natural daylight"
            fetchPriority="high"
            className="h-full w-full scale-[1.08] object-cover object-center"
          />
        </motion.div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#172820]/95 via-[#172820]/75 to-[#172820]/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#172820]/60 via-transparent to-[#172820]/10" />

        <motion.div
          style={reduceMotion ? {} : { opacity: heroOpacity }}
          className="my-auto mx-auto w-full max-w-[1440px] px-6 py-4 sm:px-10 lg:px-16"
        >
          <div className="max-w-4xl">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-3.5 flex items-center gap-3 sm:mb-4"
            >
              <span className="h-px w-8 sm:w-10 bg-[#D9E5A3]" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E4EAC4]">
                SAR Renewables Private Limited
              </span>
            </motion.div>

            <h1 className="max-w-4xl font-sans text-4xl font-medium leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[66px] xl:text-[74px]">
              <RevealLine delay={0.2}>A Better Energy</RevealLine>
              <RevealLine
                delay={0.34}
                className="font-serif italic text-[#D9E5A3]"
              >
                Future Starts
              </RevealLine>
              <RevealLine delay={0.48}>With Us.</RevealLine>
            </h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-4 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-white/80 sm:mt-5"
            >
              Explore renewable energy possibilities with SAR Renewables.
              Discover solutions designed around a cleaner and more sustainable
              future.
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 flex flex-wrap gap-3 sm:mt-7 sm:gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#D9E5A3] px-6 py-3 text-xs sm:px-7 sm:py-3.5 sm:text-sm font-semibold text-[#263D36] transition-colors duration-300 hover:bg-white"
              >
                Book Now
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/40 px-6 py-3 text-xs sm:px-7 sm:py-3.5 sm:text-sm font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
              >
                Explore Services
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom information strip */}
        <div className="w-full border-t border-white/20 bg-[#172820]/40 backdrop-blur-sm">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 py-3 sm:px-10 sm:py-3.5 lg:px-16">
            <p className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.18em] text-white/75">
              Renewable Energy · Responsible Progress
            </p>

            <button
              type="button"
              onClick={() => {
                document.getElementById("introduction")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:text-[#D9E5A3] cursor-pointer"
            >
              Discover More
              <ArrowDown size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section
        id="introduction"
        className="relative flex flex-col justify-center px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
      >
        <Reveal className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#648477]">
              A New Perspective on Energy
            </p>
            <h2 className="mt-4 font-sans text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              <RevealLine delay={0.2}>Moving Towards</RevealLine>
              <RevealLine
                delay={0.34}
                className="font-serif italic text-[#648477]"
              >
                A Cleaner Tomorrow.
              </RevealLine>
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#65716B] sm:text-lg">
              Energy choices matter. SAR Renewables aims to make renewable
              energy possibilities easier to explore through a thoughtful,
              customer-focused approach.
            </p>
            <p className="mt-4 text-base leading-8 text-[#65716B]">
              Discover our company, explore available services and connect with
              our team to discuss your requirements.
            </p>
            <Link
              to="/about"
              className="group mt-7 inline-flex items-center gap-3 border-b border-[#648477]/40 pb-2 text-sm font-semibold text-[#426F61] transition-colors hover:border-[#426F61]"
            >
              About SAR Renewables
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* BENTO SERVICES */}
      <section
        id="services"
        className="relative flex flex-col justify-center bg-[#F4F6F2] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
      >
        <Reveal className="mx-auto flex h-full w-full max-w-[1280px] flex-col justify-center">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#648477]">
                What We Do
              </p>
              <h2 className="mt-2 font-sans text-3xl font-medium tracking-[-0.035em] sm:text-4xl lg:text-[42px] lg:leading-[1.12]">
                <RevealLine delay={0.2}>Energy Solutions,</RevealLine>
                <RevealLine
                  delay={0.34}
                  className="font-serif italic text-[#648477]"
                >
                  Designed Around You.
                </RevealLine>
              </h2>
            </div>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#426F61] transition-colors hover:text-[#263D36]"
            >
              View All Services
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 xl:gap-5">
            {services.map((service) => (
              <ServiceCard key={service.number} service={service} />
            ))}
          </div>

          <p className="mt-6 text-xs leading-5 text-[#7B857F]">
            Service categories shown are illustrative and should be confirmed
            against the company's actual offerings before publication.
          </p>
        </Reveal>
      </section>

      {/* BENTO HIGHLIGHTS */}

      {/* WHY CHOOSE US / OUR APPROACH */}
      <section className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#F7F9F5] via-[#F2F6F3] to-[#EDF3EF] px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        {/* Ambient lighting glows */}
        <div className="pointer-events-none absolute -top-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#E2ECE5]/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-[#DFEBE3]/50 blur-3xl" />

        <Reveal className="mx-auto flex h-full w-full max-w-[1280px] flex-col justify-center">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-14 xl:gap-16">
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#D5E2D8] bg-white/80 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#315648] shadow-xs backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#426F61] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#426F61]"></span>
                </span>
                Our Approach
              </div>

              <h2 className="mt-3 font-sans text-3xl font-medium leading-[1.12] tracking-[-0.04em] text-[#263D36] sm:text-4xl lg:text-[44px]">
                <RevealLine delay={0.15}>A Clear Path to</RevealLine>
                <RevealLine
                  delay={0.28}
                  className="font-serif italic text-[#426F61]"
                >
                  Better Energy.
                </RevealLine>
              </h2>

              <p className="mt-3 max-w-lg text-xs leading-relaxed text-[#607067] sm:text-sm sm:leading-7">
                Every energy requirement is different. We focus on understanding
                your needs, exploring suitable renewable energy options and
                helping you move forward with clarity.
              </p>

              <Link
                to="/contact"
                className="group mt-5 inline-flex w-fit items-center gap-2.5 rounded-full bg-[#426F61] px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#315648] hover:shadow-md sm:py-3 sm:text-sm"
              >
                Discuss Your Requirements
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              {/* Connected step indicator dots */}
              <div className="mt-6 hidden items-center gap-2 sm:flex">
                <span className="h-1.5 w-10 rounded-full bg-[#426F61]" />
                <span className="h-1.5 w-6 rounded-full bg-[#D9E5A3]" />
                <span className="h-1.5 w-2 rounded-full bg-[#C8D5CC]" />
              </div>
            </div>

            {/* RIGHT CONTENT — 4 STEP CARDS */}
            <div className="flex flex-col gap-3 sm:gap-3.5">
              {[
                {
                  number: "01",
                  title: "Understand Your Needs",
                  description:
                    "We begin by understanding your energy requirements, property and objectives.",
                },
                {
                  number: "02",
                  title: "Explore Suitable Solutions",
                  description:
                    "We help you explore renewable energy options relevant to your requirements.",
                },
                {
                  number: "03",
                  title: "Plan With Clarity",
                  description:
                    "We focus on clear communication and an informed approach to the next steps.",
                },
                {
                  number: "04",
                  title: "Move Towards Better Energy",
                  description:
                    "Take the next step towards exploring a cleaner and more sustainable energy future.",
                },
              ].map((item, index) => (
                <motion.article
                  key={item.number}
                  initial={reduceMotion ? false : { opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: reduceMotion ? 0 : 0.1 + index * 0.08,
                    ease: [0.21, 1, 0.36, 1],
                  }}
                  className="group relative flex items-start gap-4 rounded-2xl border border-[#DFE7E1] bg-white/80 p-3.5 sm:p-4 shadow-xs backdrop-blur-sm transition-all duration-400 ease-out hover:-translate-y-1 hover:border-[#426F61]/45 hover:bg-white hover:shadow-[0_12px_28px_-6px_rgba(24,61,50,0.1)]"
                >
                  {/* Left Number Pill */}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF5F0] font-mono text-xs font-bold text-[#315648] transition-all duration-300 group-hover:bg-[#426F61] group-hover:text-white group-hover:scale-105">
                    {item.number}
                  </span>

                  {/* Body Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-sans text-base font-semibold tracking-tight text-[#263D36] transition-colors duration-300 group-hover:text-[#315648] sm:text-[17px]">
                        {item.title}
                      </h3>
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F3F7F4] text-[#8EA295] transition-all duration-300 group-hover:bg-[#E8F2EC] group-hover:text-[#263D36] group-hover:rotate-45">
                        <ArrowUpRight size={13} />
                      </div>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-[#65716B] transition-colors duration-300 group-hover:text-[#4A5852] sm:text-[13px] sm:leading-snug">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#FAFBF9] via-[#F4F7F4] to-[#EDF3EF] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        {/* Subtle ambient lighting glows */}
        <div className="pointer-events-none absolute -top-40 -right-40 h-[450px] w-[450px] rounded-full bg-[#E2ECE5]/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#DFEBE3]/50 blur-3xl" />

        <Reveal className="mx-auto flex h-full w-full max-w-[1280px] flex-col justify-center">
          {/* Section Heading */}
          <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D5E2D8] bg-white/80 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#315648] shadow-xs backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#426F61] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#426F61]"></span>
              </span>
              Why Choose Us
            </div>
            <h2 className="mt-3 font-sans text-3xl font-medium leading-[1.12] tracking-[-0.04em] text-[#263D36] sm:text-4xl lg:text-[44px]">
              <RevealLine delay={0.2}>A Smarter Approach to</RevealLine>
              <RevealLine
                delay={0.34}
                className="font-serif italic text-[#426F61]"
              >
                Renewable Energy.
              </RevealLine>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-[#5F6E66] sm:text-sm sm:leading-7">
              Choosing renewable energy starts with the right information and a
              solution that fits your needs. We focus on a thoughtful,
              customer-focused approach to help you explore your options.
            </p>
          </div>

          {/* Benefits Cards Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {[
              {
                number: "01",
                title: "Sustainable Solutions",
                description:
                  "Explore renewable energy options that support a cleaner and more sustainable future.",
                tag: "Clean Energy",
                image:
                  "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1000&q=85",
              },
              {
                number: "02",
                title: "Customer-Focused",
                description:
                  "We prioritise understanding your energy requirements before exploring suitable solutions.",
                tag: "Tailored Care",
                image:
                  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=85",
              },
              {
                number: "03",
                title: "Quality Conscious",
                description:
                  "A considered approach to evaluating energy solutions with attention to quality.",
                tag: "High Standards",
                image:
                  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1000&q=85",
              },
              {
                number: "04",
                title: "Transparent Guidance",
                description:
                  "Clear communication helps you understand your options and make informed decisions.",
                tag: "Clear Insights",
                image:
                  "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=85",
              },
            ].map((item, index) => (
              <motion.article
                key={item.number}
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : 0.12 + index * 0.08,
                  ease: [0.21, 1, 0.36, 1],
                }}
                className="group relative isolate flex flex-col justify-between overflow-hidden rounded-2xl border border-white/20 bg-[#15271F] p-5 sm:p-6 min-h-[260px] sm:min-h-[280px] lg:h-[300px] xl:h-[320px] shadow-[0_8px_30px_-6px_rgba(15,35,27,0.35)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#D9E5A3]/40 hover:shadow-[0_22px_45px_-10px_rgba(15,35,27,0.45)]"
              >
                {/* Background Image with Zoom on Hover */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Gradient Overlays for High Legibility & Cinematic Tone */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0e1d17]/95 via-[#13281f]/75 to-[#193226]/40 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-0 -z-10 bg-black/25" />

                {/* Top Subtle Animated Accent Line on Hover */}
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#D9E5A3] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Card Content */}
                <div>
                  <h3 className="font-sans text-lg font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-[#D9E5A3] sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs leading-relaxed text-white/85 sm:text-[13px] sm:leading-6">
                    {item.description}
                  </p>
                </div>

                {/* Card Bottom Meta */}
                <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-3 text-[11px] font-medium text-white/80">
                  <span className="rounded-full border border-white/20 bg-black/30 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white/90 backdrop-blur-sm">
                    {item.tag}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[#D9E5A3]/60 transition-all duration-300 group-hover:scale-125 group-hover:bg-[#D9E5A3]" />
                </div>
              </motion.article>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div className="mt-14 sm:mt-16 flex flex-col justify-between gap-4 rounded-2xl border border-[#DFE7E1] bg-white/90 p-5 sm:flex-row sm:items-center sm:p-6 backdrop-blur-md shadow-sm">
            <div className="text-left">
              <p className="text-xs font-medium text-[#263D36] sm:text-sm">
                Looking for a renewable energy solution suited to your
                requirements?
              </p>
              <p className="text-[11px] text-[#718279] sm:text-xs">
                Let's start a conversation and explore cleaner energy options
                for your home or business.
              </p>
            </div>
            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#426F61] px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#315648] hover:shadow-md sm:py-3 sm:text-sm"
            >
              Talk to Our Team
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* PARALLAX TRANSITION BANNER */}

      <section className="relative isolate flex min-h-[440px] items-center overflow-hidden bg-[#263D36] sm:min-h-[500px]">
        <div className="absolute inset-0 -z-20">
          <img
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2000&q=85"
            alt="Renewable energy landscape"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-[#172820]/75" />

        <div className="mx-auto w-full max-w-[1280px] px-6 py-28 sm:px-10 sm:py-36 lg:px-16 lg:py-40">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D9E5A3]">
              The Future Is Renewable
            </p>

            <h2 className="mt-6 max-w-4xl font-sans text-4xl font-medium leading-tight tracking-[-0.035em] text-white sm:text-5xl md:text-7xl">
              <RevealLine delay={0.2}>Let's Make</RevealLine>

              <RevealLine delay={0.34}>
                Energy More{" "}
                <span className="font-serif italic text-[#D9E5A3]">
                  Meaningful.
                </span>
              </RevealLine>
            </h2>

            <Link
              to="/contact"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#263D36] transition-colors hover:bg-[#D9E5A3]"
            >
              Talk to Our Team
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <Reveal className="mx-auto flex max-w-[1280px] flex-col justify-between gap-8 border-b border-[#DDE5DE] pb-16 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#648477]">
              Start a Conversation
            </p>

            <h2 className="mt-5 max-w-3xl font-sans text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
              <RevealLine delay={0.2}>Have an Energy Requirement?</RevealLine>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-[#65716B]">
              Contact SAR Renewables to discuss your requirements and explore
              the next steps.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#426F61] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#315648]"
          >
            Book Now
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
