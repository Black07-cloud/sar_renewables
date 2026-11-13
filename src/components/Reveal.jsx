import { useRef } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";

/**
 * RevealLine Component
 * Down-to-up line-by-line reveal using an overflow mask.
 * - Initial delay: 0.20s (200ms) with stagger
 * - Re-triggers smoothly on scroll with useInView
 * - Retains full accessibility with useReducedMotion
 */
export function RevealLine({ children, delay = 0.20, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: "some" });
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <span className={`block ${className}`}>{children}</span>;
  }

  return (
    <span ref={ref} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
      <motion.span
        className={`block ${className}`}
        initial={{ y: "100%", opacity: 0 }}
        animate={
          isInView
            ? { y: "0%", opacity: 1 }
            : { y: "100%", opacity: 0 }
        }
        transition={{
          duration: isInView ? 0.75 : 0.2,
          delay: isInView ? delay : 0,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/**
 * Reveal Component
 * Down-to-up scroll reveal for containers and cards.
 * - Translates y: 32 -> 0 with opacity: 0 -> 1
 * - Uses once: true to prevent scroll bounce / vibration near page boundaries
 */
export function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        duration: reduceMotion ? 0 : 0.7,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
