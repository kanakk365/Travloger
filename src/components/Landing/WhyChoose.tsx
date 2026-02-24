"use client";

import React, { useRef } from "react";
import { User, Flag, ShieldCheck, Gem } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";

const cards = [
  {
    title: "Solo is safe.",
    description: "Go solo. Come back with stories.",
    icon: User,
  },
  {
    title: "Greenest way.",
    description: "Certified green flag energy 💚",
    icon: Flag,
  },
  {
    title: "Captains are fire.",
    description: "Main character energy guides",
    icon: ShieldCheck,
  },
  {
    title: "Premium quality.",
    description: "Handpicked stays and epic moments.",
    icon: Gem,
  },
];

export default function WhyChoose() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="why-choose"
      className="bg-[#E6F4F1] relative w-full"
      ref={containerRef}
      style={{ height: `${cards.length * 90}vh` }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-12 sm:pt-20">
        <h2 className="absolute top-28 sm:top-36 text-2xl sm:text-3xl md:text-4xl lg:text-[44px] tracking-[0.1em] text-[#038575] uppercase font-[family-name:var(--font-vollkorn-sc),_serif] font-medium text-center z-50 px-4">
          Why Choose Travloger
        </h2>

        <div className="relative w-full max-w-[600px] h-[280px] flex justify-center items-center mt-16 px-6 sm:px-0">
          {cards.map((card, index) => (
            <Card
              key={index}
              card={card}
              index={index}
              totalCards={cards.length}
              progress={scrollYProgress}
            />
          ))}

          <PaginationDots
            totalCards={cards.length}
            progress={scrollYProgress}
          />
        </div>
      </div>
    </section>
  );
}

import { MotionValue } from "motion/react";

function Card({
  card,
  index,
  totalCards,
  progress,
}: {
  card: { title: string; description: string; icon: React.ElementType };
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}) {
  const continuousIndex = useTransform(progress, [0, 1], [0, totalCards - 1]);

  const y = useTransform(continuousIndex, (v: number) => {
    const offset = index - v;
    if (offset < 0) return offset * 150;
    return offset * 95;
  });

  const scale = useTransform(continuousIndex, (v: number) => {
    const offset = index - v;
    if (offset < 0) return Math.max(0.8, 1 + offset * 0.1);
    return Math.max(0.8, 1 - offset * 0.05);
  });

  const opacity = useTransform(continuousIndex, (v: number) => {
    const offset = index - v;
    if (offset < -0.8) return 0;
    if (offset < 0) return 1 + offset * 1.25;
    return Math.max(0, 1 - offset * 0.3);
  });

  const zIndex = totalCards - index;

  return (
    <motion.div
      style={{ y, scale, opacity, zIndex, transformOrigin: "top center" }}
      className="absolute w-full max-w-[560px] bg-white shadow-[0_15px_40px_rgba(0,0,0,0.06)] rounded-[36px] p-8 sm:p-12 flex justify-between items-center"
    >
      <div className="flex flex-col gap-3 max-w-[65%]">
        <h3 className="text-[26px] sm:text-[30px] font-bold text-[#111] tracking-tight">
          {card.title}
        </h3>
        <p className="text-[#666] text-lg sm:text-[20px] pr-2 leading-relaxed font-medium">
          {card.description}
        </p>
      </div>

      <div className="w-[84px] h-[84px] sm:w-[100px] sm:h-[100px] bg-[#0aa699] rounded-full flex justify-center items-center flex-shrink-0 shadow-sm">
        <card.icon
          className="w-10 h-10 sm:w-14 sm:h-14 text-white"
          strokeWidth={2}
        />
      </div>
    </motion.div>
  );
}

function PaginationDots({
  totalCards,
  progress,
}: {
  totalCards: number;
  progress: MotionValue<number>;
}) {
  const continuousIndex = useTransform(progress, [0, 1], [0, totalCards - 1]);

  return (
    <div className="absolute right-0 sm:-right-16 top-1/2 -translate-y-1/2 hidden flex-col gap-5 sm:flex">
      {Array.from({ length: totalCards }).map((_, i) => (
        <Dot key={i} index={i} continuousIndex={continuousIndex} />
      ))}
    </div>
  );
}

function Dot({
  index,
  continuousIndex,
}: {
  index: number;
  continuousIndex: MotionValue<number>;
}) {
  const isNear = useTransform(
    continuousIndex,
    (v: number) => Math.abs(v - index) < 0.5,
  );

  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    return isNear.on("change", (v) => setIsActive(v));
  }, [isNear]);

  return (
    <div
      className={`w-[8px] h-[8px] rounded-full transition-all duration-300 shadow-sm ${
        isActive ? "bg-[#0aa699] scale-125" : "bg-white hover:scale-110"
      }`}
    />
  );
}
