"use client";
import React from "react";
import { motion, useReducedMotion, type MotionProps } from "motion/react";
import NextImage from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { VolumeX } from "lucide-react";

export default function NewHero() {
  const prefersReducedMotion = useReducedMotion();

  const headingAnimation: MotionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
      };

  const infoAnimation: MotionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
      };

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[55vh] min-h-[300px] max-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/landing/herobg.png')" }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 pt-4 pb-12 w-full h-full">
          <motion.h1
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-6 max-w-[1000px] leading-tight sm:leading-snug md:leading-snug lg:leading-tight uppercase"
            style={{
              fontFamily: "var(--font-vollkorn-sc), serif",
              textShadow:
                "0 4px 30px rgba(0,0,0,0.8), 2px 2px 8px rgba(0,0,0,0.6)",
              fontWeight: 600,
            }}
            {...headingAnimation}
          >
            Where Every Journey Tells A<br className="hidden sm:block" /> Story
          </motion.h1>

          <motion.div
            className="flex items-center text-xs md:text-sm text-white font-medium mt-0 bg-transparent px-4 py-1"
            {...infoAnimation}
          >
            <span>🌍 23 people exploring Europe this week</span>
          </motion.div>
        </div>
      </div>

      {/* Mobile: marquee strip - Black Banner */}
      <div className="w-full bg-black py-2.5 border-t border-white/10 md:hidden">
        <Marquee
          className="[--gap:1.5rem] [--duration:30s]"
          pauseOnHover={false}
          repeat={4}
        >
          <div className="flex items-center gap-5 text-white whitespace-nowrap">
            <div className="flex items-center gap-1.5">
              <div className="bg-white p-[2px] rounded-full flex items-center justify-center w-4 h-4">
                <NextImage
                  src="/landing/google.svg"
                  alt="google"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>
              <span className="font-medium text-[13px]">4.9 ⭐ Rating</span>
            </div>
            <span className="text-white/40 text-[9px]">✦</span>
            <div className="flex items-center gap-1.5">
              <NextImage
                src="/landing/instagram.svg"
                alt="instagram"
                width={100}
                height={100}
                className="w-4 h-4"
              />
              <span className="font-medium text-[13px]">240K+ Community</span>
            </div>
            <span className="text-white/40 text-[9px]">✦</span>
            <div className="flex items-center gap-1.5">
              <NextImage
                src="/landing/happy.svg"
                alt="happy"
                width={32}
                height={32}
                className="w-4 h-4"
              />
              <span className="font-medium text-[13px]">
                800K+ Happy Travelers
              </span>
            </div>
          </div>
        </Marquee>
      </div>

      {/* Desktop and tablets: static strip - Black Banner */}
      <div className="w-full bg-[#0a0a0a] py-3 hidden md:block">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14 text-white">
            <div className="flex items-center gap-2.5">
              <div className="bg-white p-1 rounded-full flex items-center justify-center w-5 h-5">
                <NextImage
                  src="/landing/google.svg"
                  alt="google"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>
              <span className="font-medium text-[15px] tracking-wide">
                4.9 ⭐ Rating
              </span>
            </div>

            <span className="text-white/30 text-[10px]">✦</span>

            <div className="flex items-center gap-2.5">
              <NextImage
                src="/landing/instagram.svg"
                alt="instagram"
                width={100}
                height={100}
                className="w-5 h-5"
              />
              <span className="font-medium text-[15px] tracking-wide">
                240K+ Community
              </span>
            </div>

            <span className="text-white/30 text-[10px]">✦</span>

            <div className="flex items-center gap-2.5">
              <NextImage
                src="/landing/happy.svg"
                alt="happy"
                width={32}
                height={32}
                className="w-5 h-5"
              />
              <span className="font-medium text-[15px] tracking-wide">
                800K+ Happy Travelers
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
