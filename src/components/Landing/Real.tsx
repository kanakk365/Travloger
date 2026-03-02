"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const stories = [
  {
    name: "Traveler recording in Tbilisi",
    image: "/landing/real1.png",
  },
  {
    name: "Traveler sharing city skyline",
    image: "/landing/real2.png",
  },
  {
    name: "Traveler vlogging at seaside",
    image: "/landing/real3.png",
  },
  {
    name: "Traveler exploring mountains",
    image: "/landing/real4.png",
  },
  {
    name: "Traveler recording in Tbilisi",
    image: "/landing/real1.png",
  },
  {
    name: "Traveler sharing city skyline",
    image: "/landing/real2.png",
  },
  {
    name: "Traveler vlogging at seaside",
    image: "/landing/real3.png",
  },
  {
    name: "Traveler exploring mountains",
    image: "/landing/real4.png",
  },
];

export default function Real() {
  const router = useRouter();
  const [cardOrder, setCardOrder] = useState<number[]>(() =>
    stories.map((_, i) => i),
  );
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartY = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const isSwiping = useRef(false);
  const animationTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (animationTimeout.current) {
        clearTimeout(animationTimeout.current);
      }
    };
  }, []);

  const handleCardChange = () => {
    setCardOrder((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (isAnimating) return;
    const touch = event.touches[0];
    touchStartY.current = touch.clientY;
    touchStartX.current = touch.clientX;
    isSwiping.current = false;
    setIsDragging(false);
  };

  const onTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (isAnimating) return;
    if (touchStartY.current === null || touchStartX.current === null) return;
    const touch = event.touches[0];
    const deltaY = touch.clientY - touchStartY.current;
    const deltaX = touch.clientX - touchStartX.current;

    if (!isSwiping.current) {
      const horizontal =
        Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10;
      const vertical = Math.abs(deltaY) > 10;

      if (horizontal) {
        isSwiping.current = true;
        setIsDragging(true);
      } else if (vertical) {
        touchStartY.current = null;
        touchStartX.current = null;
        isSwiping.current = false;
        setIsDragging(false);
        return;
      }
    }

    if (isSwiping.current) {
      event.preventDefault();
      setDragOffset(deltaX);
    }
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (isAnimating) return;
    const SWIPE_THRESHOLD = 80;
    const SWIPE_OUT_DISTANCE = 320;

    if (!isSwiping.current || touchStartY.current === null) {
      touchStartY.current = null;
      touchStartX.current = null;
      setIsDragging(false);
      setDragOffset(0);
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - (touchStartX.current ?? touch.clientX);
    const swipeMagnitude = Math.abs(deltaX);

    if (swipeMagnitude > SWIPE_THRESHOLD) {
      setIsAnimating(true);
      setIsDragging(false);
      setDragOffset(deltaX < 0 ? -SWIPE_OUT_DISTANCE : SWIPE_OUT_DISTANCE);

      animationTimeout.current = setTimeout(() => {
        handleCardChange();
        setIsAnimating(false);
        setDragOffset(0);
      }, 220);
    } else {
      setIsDragging(false);
      setDragOffset(0);
    }

    isSwiping.current = false;
    touchStartY.current = null;
    touchStartX.current = null;
  };

  const getCardStyle = (position: number) => {
    const baseTransforms = [
      "translate(0px, 0px) scale(1)",
      "translate(20px, -16px) scale(0.95)",
      "translate(40px, -32px) scale(0.9)",
    ];

    let transform = baseTransforms[position] ?? baseTransforms[2];
    if (position === 0) {
      transform = `translate(${dragOffset}px, 0px) scale(1)`;
    }

    return {
      transform,
      transition:
        position === 0 && isDragging
          ? "none"
          : "transform 0.3s ease, opacity 0.3s ease",
      zIndex: position === 0 ? 30 : position === 1 ? 20 : 10,
      opacity: position === 2 ? 0.85 : 1,
    } as React.CSSProperties;
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex w-full flex-col items-center gap-10 px-6 text-center">
        <h2 className="text-2xl sm:text-[28px] md:text-[32px] uppercase tracking-widest text-[#0a0a0a] font-[family-name:var(--font-vollkorn-sc),_serif] font-medium">
          Real Stories. Real Memories.
        </h2>

        {/* Desktop/Tablet: original marquee */}
        <div className="hidden sm:block w-full">
          <Marquee className="w-full [--gap:2rem]" pauseOnHover>
            {stories.map((story, index) => (
              <Link
                href="/details"
                key={`${story.name}-${index}`}
                className="group relative flex-shrink-0 w-64 sm:w-80 overflow-hidden rounded-[24px]"
              >
                <div className="relative h-[20rem] sm:h-[24rem] w-full">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    sizes="320px"
                    className="object-cover transition duration-700 ease-out group-hover:scale-105"
                    priority={index < 2}
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <Play
                    className="h-14 w-14 text-white"
                    strokeWidth={1.5}
                    fill="currentColor"
                  />
                </div>
              </Link>
            ))}
          </Marquee>
        </div>

        {/* Mobile: swipeable stacked cards */}
        <div
          className="sm:hidden relative h-[24rem] w-full max-w-[16rem] mx-auto flex items-center justify-center"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {cardOrder.map((index, position) => {
            if (position > 2) return null;
            const story = stories[index];
            return (
              <div
                key={`${story.name}-${position}`}
                className="absolute h-[20rem] w-[15rem] rounded-[24px] overflow-hidden shadow-[0px_18px_32px_rgba(0,0,0,0.35)] group"
                style={getCardStyle(position)}
                onClick={() => router.push("/details")}
              >
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  sizes="(max-width: 768px) 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/70" />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <Play
                    className="h-12 w-12 text-white"
                    strokeWidth={1.5}
                    fill="currentColor"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
