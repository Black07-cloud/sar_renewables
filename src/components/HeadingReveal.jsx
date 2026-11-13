import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * HeadingReveal Component
 * Top-to-bottom, line-by-line heading reveal effect using smooth clipping/masking.
 * - Initial delay: exactly 0.20 seconds (200ms)
 * - Subtle stagger between subsequent lines
 * - Smooth overflow masking + top-to-bottom translation and clip-path
 * - Re-triggers when scrolling back into view (viewport.once = false)
 * - Respects prefers-reduced-motion
 */
export default function HeadingReveal({
  as: Component = "h2",
  lines,
  children,
  className = "",
  initialDelay = 0.20,
  stagger = 0.12,
  duration = 0.72,
  once = false,
  style = {},
  ...props
}) {
  const reduceMotion = useReducedMotion();

  // Parse lines: if lines array is provided, use it; otherwise split children by <br>
  let parsedLines = lines;
  if (!parsedLines) {
    if (typeof children === "string") {
      parsedLines = [children];
    } else {
      const elements = React.Children.toArray(children);
      const groups = [];
      let currentGroup = [];

      elements.forEach((child) => {
        if (React.isValidElement(child) && child.type === "br") {
          if (currentGroup.length > 0) {
            groups.push(currentGroup);
            currentGroup = [];
          }
        } else {
          currentGroup.push(child);
        }
      });
      if (currentGroup.length > 0) {
        groups.push(currentGroup);
      }
      parsedLines = groups.map((g, i) => (
        <React.Fragment key={i}>
          {g}
        </React.Fragment>
      ));
    }
  }

  // Animation variants for down-to-up line clipping/masking reveal
  const lineVariants = {
    hidden: {
      y: "110%",
      opacity: 0,
    },
    visible: (index) => ({
      y: "0%",
      opacity: 1,
      transition: {
        duration: reduceMotion ? 0 : duration,
        delay: reduceMotion ? 0 : initialDelay + index * stagger,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <Component className={className} style={style} {...props}>
      {parsedLines.map((lineContent, index) => (
        <span
          key={index}
          className="block overflow-hidden pb-[0.08em] -mb-[0.08em]"
          style={{ display: "block" }}
        >
          <motion.span
            className="block"
            custom={index}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once, amount: 0.2 }}
            variants={lineVariants}
          >
            {lineContent}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
