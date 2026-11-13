import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * useGsapHeadingReveal hook
 * Optional GSAP-based line reveal animation on scroll.
 */
export function useGsapHeadingReveal(options = {}) {
  const containerRef = useRef(null);
  const {
    initialDelay = 0.20,
    stagger = 0.12,
    duration = 0.75,
    once = false,
  } = options;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lines = el.querySelectorAll(".gsap-reveal-line");
    if (!lines.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lines,
        {
          yPercent: -110,
          opacity: 0,
          clipPath: "inset(0% 0% 100% 0%)",
        },
        {
          yPercent: 0,
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration,
          ease: "power3.out",
          stagger,
          delay: initialDelay,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: once ? "play none none none" : "play reverse play reverse",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [initialDelay, stagger, duration, once]);

  return containerRef;
}

export default useGsapHeadingReveal;
