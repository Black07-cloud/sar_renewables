import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal, { RevealLine } from "../components/Reveal";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const values = [
  {
    title: "Integrity",
    text: "Clear communication and transparent interactions help build lasting trust.",
  },
  {
    title: "Thoughtful Solutions",
    text: "We take time to understand requirements before exploring suitable possibilities.",
  },
  {
    title: "Customer Focus",
    text: "Every conversation starts by listening to the needs and goals of our customers.",
  },
  {
    title: "Sustainability",
    text: "We support informed energy choices and progress towards a cleaner future.",
  },
];

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#648477]">
      {children}
    </p>
  );
}

export default function About() {
  return (
    <main className="overflow-hidden bg-[#FAFBF8] text-[#202B25]">
      {/* HERO */}
      <section className="relative isolate flex h-screen min-h-[560px] max-h-[1080px] flex-col justify-center overflow-hidden bg-[#183D32] px-6 text-white pt-[82px] sm:px-10 lg:px-16">
        <img
          src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=2200&q=85"
          alt="Panoramic solar farm in green rolling hills under open sky"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#102E25]/95 via-[#183D32]/80 to-[#183D32]/35" />
        <div className="absolute -right-28 -top-28 -z-10 h-[420px] w-[420px] rounded-full border border-white/15 sm:h-[620px] sm:w-[620px]" />
        <div className="absolute -right-12 -top-12 -z-10 h-[300px] w-[300px] rounded-full border border-white/15 sm:h-[470px] sm:w-[470px]" />

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
              <SectionLabel>About SAR Renewables</SectionLabel>
            </motion.div>

            <h1 className="font-sans text-4xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[66px] xl:text-[74px]">
              <RevealLine delay={0.20}>A thoughtful approach</RevealLine>
              <RevealLine delay={0.34}>
                to a{" "}
                <span className="font-serif italic text-[#C3D5A5]">
                  cleaner future.
                </span>
              </RevealLine>
            </h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-white/80 sm:mt-5"
            >
              We aim to make renewable energy possibilities easier to
              understand and explore through a customer-focused, transparent
              and considered approach.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 sm:mt-7">
              <button
                type="button"
                onClick={() => {
                  document.getElementById("our-story")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-3 rounded-full bg-[#C3D5A5] px-6 py-3 text-xs font-semibold text-[#183D32] transition duration-300 hover:bg-white sm:px-7 sm:py-3.5 sm:text-sm cursor-pointer"
              >
                Discover Our Story
                <ArrowDownRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </button>
            </motion.div>
          </motion.div>

          <div className="absolute bottom-6 right-6 lg:right-16 hidden items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/65 lg:flex">
            <span>Renewable Energy</span>
            <span className="h-px w-10 bg-white/40" />
            <span>Responsible Progress</span>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="our-story" className="relative flex min-h-screen flex-col justify-center px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <Reveal className="mx-auto grid max-w-[1280px] items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="group relative min-h-[320px] sm:min-h-[400px] lg:h-[460px] xl:h-[500px] overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1400&q=85"
              alt="Renewable energy technology in a green landscape"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102E25]/85 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C3D5A5]">
                Our Perspective
              </p>
              <h2 className="mt-2 max-w-md text-2xl font-medium leading-tight text-white sm:text-3xl">
                Better energy decisions begin with understanding.
              </h2>
            </div>
          </div>

          <div>
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="mt-3 font-sans text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              <RevealLine delay={0.20}>Energy decisions made</RevealLine>
              <RevealLine delay={0.34} className="font-serif italic text-[#648477]">
                thoughtfully.
              </RevealLine>
            </h2>
            <div className="mt-5 h-px w-20 bg-[#648477]/50" />

            <div className="mt-5 space-y-3.5 text-sm sm:text-base leading-7 sm:leading-8 text-[#68756C]">
              <p>
                SAR Renewables is focused on helping customers explore
                renewable energy possibilities with greater clarity. We
                believe understanding available options is an important first
                step towards informed energy decisions.
              </p>
              <p>
                Our approach begins with listening, understanding individual
                requirements and communicating clearly. We aim to create a
                dependable experience where customers can discuss their needs
                and explore relevant solutions.
              </p>
              <p>
                As renewable energy continues to evolve, we remain focused on
                thoughtful service, responsible progress and building
                relationships that last.
              </p>
            </div>

            <Link
              to="/services"
              className="group mt-6 inline-flex items-center gap-3 border-b border-[#648477]/40 pb-2 text-sm font-semibold text-[#426F61] transition-colors hover:border-[#426F61]"
            >
              Explore Our Services
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* MISSION & VISION */}
      <section className="relative flex min-h-screen flex-col justify-center px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32 bg-gradient-to-b from-[#FAFBF8] via-[#F2F6F3] to-[#EDF3EF]">
        <Reveal className="mx-auto grid max-w-[1280px] items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="group relative min-h-[320px] sm:min-h-[400px] lg:h-[460px] xl:h-[500px] overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85"
              alt="SAR Renewables team collaboration"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102E25]/85 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C3D5A5]">
                Our Purpose
              </p>
              <h2 className="mt-2 max-w-md text-2xl font-medium leading-tight text-white sm:text-3xl">
                Every system planned with purpose and clarity.
              </h2>
            </div>
          </div>

          <div>
            <SectionLabel>What Guides Us</SectionLabel>
            <h2 className="mt-3 font-sans text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              <RevealLine delay={0.20}>A clear purpose.</RevealLine>
              <RevealLine delay={0.34} className="font-serif italic text-[#648477]">
                A considered direction.
              </RevealLine>
            </h2>
            <div className="mt-5 h-px w-20 bg-[#648477]/50" />

            <div className="mt-5 space-y-3.5 text-sm sm:text-base leading-7 sm:leading-8 text-[#68756C]">
              <p>
                Our mission is making energy choices clearer. We help customers
                explore renewable energy options through clear communication,
                a considered approach, and a focus on their individual requirements.
              </p>
              <p>
                Our vision is progress with responsibility. We contribute to a
                future where renewable energy is easier to understand, accessible to
                explore, and considered as part of responsible, long-term energy planning.
              </p>
              <p>
                We believe sustainable progress happens when dependable engineering,
                transparent guidance, and genuine community stewardship come together.
              </p>
            </div>

            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center gap-3 border-b border-[#648477]/40 pb-2 text-sm font-semibold text-[#426F61] transition-colors hover:border-[#426F61]"
            >
              Speak With Our Team
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </section>


      {/* VALUES */}
      <section className="relative flex min-h-screen flex-col justify-center bg-white px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <Reveal className="mx-auto flex h-full w-full max-w-[1280px] flex-col justify-center">
          <div className="mb-6 max-w-3xl sm:mb-8">
            <SectionLabel>What Matters to Us</SectionLabel>
            <h2 className="mt-2 font-sans text-3xl font-medium tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              <RevealLine delay={0.20}>Principles behind</RevealLine>
              <RevealLine delay={0.34} className="font-serif italic text-[#648477]">
                every interaction.
              </RevealLine>
            </h2>
            <p className="mt-3 max-w-2xl text-xs sm:text-sm leading-6 sm:leading-7 text-[#778078]">
              Our values shape how we communicate, understand requirements
              and build relationships with the people we work with.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: 0.14 + i * 0.08,
                  ease: [0.21, 1, 0.36, 1],
                }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#DFE7E1] bg-gradient-to-b from-[#FAFBF8] to-white p-6 sm:p-7 shadow-[0_4px_20px_-6px_rgba(20,50,35,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#426F61]/45 hover:shadow-[0_22px_45px_-10px_rgba(20,50,35,0.12)] min-h-[220px] lg:h-[260px]"
              >
                {/* Top Accent Animated Glow Sheen */}
                <div className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#426F61] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <h3 className="font-sans text-xl font-medium tracking-tight text-[#202B25] transition-colors duration-300 group-hover:text-[#315648]">
                    <RevealLine delay={0.22 + i * 0.08}>
                      {value.title}
                    </RevealLine>
                  </h3>

                  <div className="mt-3.5 h-px w-8 bg-[#D5E2D8] transition-all duration-300 group-hover:w-16 group-hover:bg-[#426F61]" />

                  <p className="mt-3.5 text-xs sm:text-[13px] leading-relaxed text-[#68756C] transition-colors duration-300 group-hover:text-[#2E3D35]">
                    {value.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="relative flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-20 lg:px-16">
        <Reveal className="relative isolate mx-auto w-full max-w-[1280px] overflow-hidden rounded-3xl bg-[#183D32] px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-16">
          <img
            src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=1800&q=80"
            alt=""
            loading="lazy"
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 -z-10 bg-[#183D32]/85" />
          <div className="absolute -right-16 -top-24 -z-10 h-72 w-72 rounded-full border border-white/10" />

          <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C3D5A5]">
                Let’s Connect
              </p>
              <h2 className="mt-4 font-sans text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                <RevealLine delay={0.20}>
                  Your energy journey starts with a{" "}
                  <span className="font-serif italic text-[#C3D5A5]">
                    conversation.
                  </span>
                </RevealLine>
              </h2>
              <p className="mt-4 max-w-xl text-xs sm:text-sm leading-6 sm:leading-7 text-white/75">
                Tell us what you are looking for. Let’s discuss your
                requirements and explore the next steps together.
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
