"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  offsetY?: number;
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  offsetY = 40,
}: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  const initial = prefersReducedMotion
    ? undefined
    : { opacity: 0, y: offsetY };
  const whileInView = prefersReducedMotion
    ? undefined
    : { opacity: 1, y: 0 };
  const transition = prefersReducedMotion
    ? undefined
    : { duration: 0.6, ease: "easeOut", delay };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, amount: 0.2 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}


