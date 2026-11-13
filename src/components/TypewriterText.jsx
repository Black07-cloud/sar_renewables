import { motion, useReducedMotion } from "framer-motion";

/**
 * TypewriterText Component
 * Types out words or letters smoothly with normal natural flow.
 */
export default function TypewriterText({
  text,
  className = "",
  delay = 0,
  speed = 0.03,
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <span className={className}>{text}</span>;
  }

  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: speed, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap">
          {word.split("").map((char, j) => (
            <motion.span
              key={j}
              variants={{
                hidden: { opacity: 0, y: 5 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.15 }}
            >
              {char}
            </motion.span>
          ))}
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </motion.span>
  );
}
