import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal, { RevealLine } from "../components/Reveal";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

const CONTACT_DETAILS = {
  email: "info@sarrenewables.in",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  address:
    "Door No. 86/4, Thiyagi Sivaram Nagar, Ramanathapuram, Coimbatore, Tamil Nadu 641045, India",
};

const inputClass =
  "mt-1.5 w-full rounded-xl border border-[#DFE7E1] bg-[#FAFBF8] px-4 py-3 text-sm text-[#183D32] outline-none transition placeholder:text-[#9AA69D] focus:border-[#426F61] focus:bg-white focus:ring-2 focus:ring-[#426F61]/15";

const labelClass =
  "block text-xs font-semibold uppercase tracking-[0.14em] text-[#52645A]";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);
  const [mapActive, setMapActive] = useState(false);

  const handleCopy = (text, itemKey) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedItem(itemKey);
      setTimeout(() => setCopiedItem(null), 2000);
    }
  };

  const updateField = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (
      !formData.phone.trim() ||
      !/^[+]?[\d\s()-]{7,20}$/.test(formData.phone)
    ) {
      nextErrors.phone = "Enter a valid phone number.";
    }

    if (!formData.subject.trim()) {
      nextErrors.subject = "Please select an enquiry subject.";
    }

    if (formData.message.trim().length < 10) {
      nextErrors.message = "Message must contain at least 10 characters.";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const whatsappMessage = [
      "Hello SAR Renewables,",
      "",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Subject: ${formData.subject}`,
      "",
      "Message:",
      formData.message,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${
      CONTACT_DETAILS.whatsapp
    }?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <main className="overflow-clip bg-[#FAFBF8] text-[#183D32] pt-[82px]">
      {/* 1. ENQUIRY SECTION */}
      <section
        id="enquiry-section"
        className="relative flex min-h-screen flex-col justify-center px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20 bg-gradient-to-b from-[#FAFBF8] via-[#F2F6F3] to-[#EDF3EF]"
      >
        <Reveal className="mx-auto w-[calc(100%-2rem)] max-w-[1240px] sm:w-[calc(100%-3rem)]">
          {/* Header */}
          <div className="mb-10 max-w-2xl sm:mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#648477]">
              LET&apos;S CONNECT
            </p>
            <h1 className="mt-2.5 font-sans text-3xl font-medium tracking-[-0.045em] sm:text-4xl md:text-5xl lg:text-[54px] text-[#202B25] leading-tight">
              <RevealLine delay={0.2}>Tell us about</RevealLine>
              <RevealLine delay={0.34} className="font-serif italic text-[#648477]">
                your project.
              </RevealLine>
            </h1>
            <p className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-[#68766F]">
              Have a solar project or energy enquiry? Share your requirements
              below and connect with our team directly.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">
            {/* Left Contact Details & Quick Links */}
            <div className="space-y-5">
              {/* WhatsApp Quick Connect Card */}
              <div className="group relative overflow-hidden rounded-3xl border border-[#DFE7E1] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#426F61]/40 hover:shadow-md sm:p-7">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#E8F3EB] text-[#2D6A4F] transition-transform duration-300 group-hover:scale-105">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-semibold text-[#183D32]">
                      Direct WhatsApp Chat
                    </h3>
                    <p className="mt-0.5 text-xs text-[#718077]">
                      Connect instantly with our technical advisors.
                    </p>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${CONTACT_DETAILS.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#183D32] px-5 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#285644] hover:gap-3"
                >
                  Start Conversation
                  <ArrowUpRight size={15} />
                </a>
              </div>

              {/* Email Card */}
              <div className="rounded-3xl border border-[#DFE7E1] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#426F61]/40 sm:p-7">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#EEF5F0] text-[#426F61]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#718077]">
                        Email Us
                      </h3>
                      <a
                        href={`mailto:${CONTACT_DETAILS.email}`}
                        className="mt-1 block font-mono text-sm font-semibold text-[#183D32] hover:text-[#426F61] transition-colors"
                      >
                        {CONTACT_DETAILS.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(CONTACT_DETAILS.email, "email")}
                    aria-label="Copy email address"
                    className="grid h-8 w-8 place-items-center rounded-lg border border-[#DFE7E1] text-[#718077] hover:border-[#426F61] hover:text-[#426F61] transition-colors"
                  >
                    <AnimatePresence mode="wait">
                      {copiedItem === "email" ? (
                        <motion.span
                          key="copied"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.5, opacity: 0 }}
                        >
                          <Check size={14} className="text-[#2D6A4F]" />
                        </motion.span>
                      ) : (
                        <motion.span
                          key="copy"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.5, opacity: 0 }}
                        >
                          <Copy size={14} />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div className="rounded-3xl border border-[#DFE7E1] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#426F61]/40 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#EEF5F0] text-[#426F61]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#718077]">
                      Call Us
                    </h3>
                    <a
                      href={`tel:${CONTACT_DETAILS.phone.replace(/\s/g, "")}`}
                      className="mt-1 block font-mono text-sm font-semibold text-[#183D32] hover:text-[#426F61] transition-colors"
                    >
                      {CONTACT_DETAILS.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="rounded-3xl border border-[#DFE7E1] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#426F61]/40 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#EEF5F0] text-[#426F61]">
                    <MapPin size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-[#718077]">
                      Headquarters
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#183D32]">
                      {CONTACT_DETAILS.address}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        document.getElementById("office-map")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#426F61] hover:underline cursor-pointer"
                    >
                      View on Map Below <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Enquiry Form */}
            <form
              className="rounded-3xl border border-[#DFE7E1] bg-white p-6 shadow-lg sm:p-8 lg:p-9"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="mb-6 border-b border-[#EEF2ED] pb-4">
                <h2 className="font-sans text-xl font-semibold tracking-tight text-[#183D32] sm:text-2xl">
                  Send an Enquiry
                </h2>
                <p className="mt-1 text-xs text-[#718077]">
                  Fill in your details below to begin discussing your requirements.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="contact-name">
                    Full Name *
                  </label>
                  <input
                    className={inputClass}
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={updateField}
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className={labelClass} htmlFor="contact-email">
                    Email Address *
                  </label>
                  <input
                    className={inputClass}
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={updateField}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className={labelClass} htmlFor="contact-phone">
                    Phone Number *
                  </label>
                  <input
                    className={inputClass}
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={updateField}
                    aria-invalid={Boolean(errors.phone)}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className={labelClass} htmlFor="contact-subject">
                    Enquiry Subject *
                  </label>
                  <select
                    className={`${inputClass} appearance-none cursor-pointer`}
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={updateField}
                    aria-invalid={Boolean(errors.subject)}
                  >
                    <option value="">Select subject</option>
                    <option value="Rooftop Solar Projects (C&I)">
                      Rooftop Solar Projects (C&I)
                    </option>
                    <option value="Ground-Mounted Solar Projects">
                      Ground-Mounted Solar Projects
                    </option>
                    <option value="RESCO Models (Zero Capex)">
                      RESCO Models (Zero Capex)
                    </option>
                    <option value="Utility-Scale Solar Projects">
                      Utility-Scale Solar Projects
                    </option>
                    <option value="Solar Carport EPC">Solar Carport EPC</option>
                    <option value="Turnkey EPC Solutions">
                      Turnkey EPC Solutions
                    </option>
                    <option value="General Consultation">
                      General Consultation
                    </option>
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-600">{errors.subject}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="contact-message">
                    Project Details / Message *
                  </label>
                  <textarea
                    className={`${inputClass} min-h-[110px] resize-y`}
                    id="contact-message"
                    name="message"
                    placeholder="Tell us about your project requirements, location, estimated capacity..."
                    value={formData.message}
                    onChange={updateField}
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                  )}
                </div>
              </div>

              {submitted && (
                <div
                  className="mt-4 flex items-start gap-3 rounded-xl border border-[#C9DCC6] bg-[#F0F6ED] p-3.5 text-xs leading-5 text-[#183D32]"
                  role="status"
                >
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#2D6A4F]" size={17} />
                  <p>
                    WhatsApp opened with your enquiry details. Please press Send in
                    WhatsApp to transmit your message to the team.
                  </p>
                </div>
              )}

              <button
                className="mt-6 inline-flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-full bg-[#183D32] px-8 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#285644] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#648477] sm:w-auto"
                type="submit"
              >
                Continue to WhatsApp
                <Send size={15} />
              </button>
            </form>
          </div>
        </Reveal>
      </section>

      {/* 2. MAP SECTION */}
      <section
        id="office-map"
        className="relative scroll-mt-8 bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-12 lg:py-28"
      >
        <Reveal className="mx-auto w-[calc(100%-2rem)] max-w-[1240px] sm:w-[calc(100%-3rem)]">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#648477]">
                OUR LOCATION
              </p>
              <h2 className="mt-2 font-sans text-3xl font-medium tracking-[-0.04em] sm:text-4xl text-[#202B25]">
                <RevealLine delay={0.2}>Visit our Office</RevealLine>
                <RevealLine delay={0.34} className="font-serif italic text-[#648477]">
                  in Coimbatore.
                </RevealLine>
              </h2>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Door+No.+86%2F4+Thiyagi+Sivaram+Nagar+Ramanathapuram+Coimbatore+Tamil+Nadu+641045"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#DFE7E1] bg-[#FAFBF8] px-4 py-2 text-xs font-semibold text-[#183D32] transition-colors hover:border-[#426F61] hover:bg-white hover:text-[#426F61]"
            >
              Get Directions on Google Maps
              <ExternalLink size={13} />
            </a>
          </div>

          {/* Scroll-Safe Google Map Frame (Eliminates scroll capture vibration) */}
          <div
            className="group relative overflow-hidden rounded-3xl border border-[#DFE7E1] shadow-[0_8px_30px_rgba(0,0,0,0.06)] h-[400px] sm:h-[480px] lg:h-[520px] w-full bg-[#E5ECE5]"
            onClick={() => setMapActive(true)}
            onMouseLeave={() => setMapActive(false)}
          >
            <iframe
              title="SAR Renewables Office Location Map"
              src="https://maps.google.com/maps?q=Door+No.+86/4,+Thiyagi+Sivaram+Nagar,+Ramanathapuram,+Coimbatore,+Tamil+Nadu+641045&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className={`h-full w-full border-0 transition-opacity duration-300 ${
                mapActive ? "pointer-events-auto" : "pointer-events-none"
              }`}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Click-To-Interact Shield: allows 100% smooth document scrolling without iframe trapping */}
            {!mapActive && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/[0.02] backdrop-blur-[0.5px] cursor-pointer transition-all hover:bg-black/[0.04]">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#DFE7E1] bg-white/95 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#183D32] shadow-md transition-transform duration-200 group-hover:scale-105 active:scale-95">
                  <MapPin size={16} className="text-[#426F61]" />
                  <span>Click to interact with map</span>
                </span>
              </div>
            )}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
