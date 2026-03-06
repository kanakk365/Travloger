"use client";

import { ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  offsetY?: number;
};

export default function AnimatedSection({
  children,
  className = "",
}: AnimatedSectionProps) {
  return <div className={className}>{children}</div>;
}
