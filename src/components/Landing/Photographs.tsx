"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const photoCards = [
  {
    id: 1,
    image:
      "/landing/photo1.png",
    likes: "1,688",
    badge: "Most Liked",
    badgeClasses: "bg-teal-300 text-slate-900",
    heartClasses: "text-pink-500",
    filled: true,
  },
  {
    id: 2,
    image:
      "/landing/photo2.png",
    likes: "1,688",
    heartClasses: "text-white",
  },
  {
    id: 3,
    image:
      "/landing/photo3.png",
    likes: "1,688",
    heartClasses: "text-white",
  },
];

function Photographs() {
  const [cardOrder, setCardOrder] = useState<number[]>(() =>
    photoCards.map((_, index) => index)
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

  const handleCardChange = (direction: "next" | "prev") => {
    setCardOrder((prev) => {
      if (direction === "next") {
        const [first, ...rest] = prev;
        return [...rest, first];
      }
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, prev.length - 1);
      return [last, ...rest];
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
      const horizontal = Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10;
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

    if (!isSwiping.current || touchStartX.current === null) {
      touchStartY.current = null;
      touchStartX.current = null;
      setIsDragging(false);
      setDragOffset(0);
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - (touchStartX.current ?? touch.clientX);
    const swipeMagnitude = Math.abs(deltaX);

    // Allow swiping in either direction to show next card
    if (swipeMagnitude > SWIPE_THRESHOLD) {
      setIsAnimating(true);
      setIsDragging(false);
      setDragOffset(deltaX < 0 ? -SWIPE_OUT_DISTANCE : SWIPE_OUT_DISTANCE);

      animationTimeout.current = setTimeout(() => {
        handleCardChange("next");
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
    };
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#2C2C2C] to-black py-16 ">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6">
        <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
          Best Trip photographs
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid mt-12 w-full gap-8 md:grid-cols-3">
          {photoCards.map(
            ({
              id,
              image,
              likes,
              badge,
              badgeClasses,
              heartClasses,
              filled,
            }) => (
              <article
                key={id}
                className="flex min-h-[30rem] flex-col items-center gap-6 rounded-3xl bg-[#909090] shadow-2xl"
              >
                <div className="relative w-full h-[80%] overflow-hidden rounded-t-2xl bg-neutral-800/60">
                  <div className="relative h-full w-full">
                    <Image
                      src={image}
                      alt="Best trip photograph"
                      fill
                      sizes="(max-width: 768px) 100vw, 32vw"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      priority={id === 1}
                    />
                  </div>

                  {badge && (
                    <span
                      className={` bg-teal-500 hover:bg-teal-600 text-white border border-teal-500 absolute right-4 top-4 rounded-full px-4 py-1 text-xs font-semibold sm:text-sm ${badgeClasses}`}
                    >
                      {badge}
                    </span>
                  )}
                </div>
                <div className="flex w-full items-center justify-between px-5">
                  <div className="flex w-full items-center justify-between rounded-full bg-neutral-900 pl-5 pr-2 py-2">
                    <span className="flex items-center gap-2 text-sm font-semibold text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={`h-5 w-5 ${heartClasses}`}
                      >
                        <path
                          stroke="currentColor"
                          fill={filled ? "currentColor" : "none"}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M12.032 20.704c-.366.11-.698-.208-.978-.45-4.491-3.945-7.137-6.88-7.137-10.254 0-2.246 1.703-4.5 4.13-4.5 1.44 0 2.644.802 3.386 1.86.742-1.058 1.946-1.86 3.386-1.86 2.427 0 4.13 2.254 4.13 4.5 0 3.374-2.646 6.309-7.137 10.254-.28.242-.612.56-.78.45Z"
                        />
                      </svg>
                      {likes}
                    </span>

                    <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-colors hover:bg-[#f4f4f4]">
                      Plan this trip
                    </button>
                  </div>
                </div>
              </article>
            )
          )}
        </div>

        {/* Mobile Slider */}
        <div
          className="md:hidden relative mt-12 h-[35rem] w-full max-w-[22rem] mx-auto flex items-center justify-center"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {cardOrder.map((index, position) => {
            if (position > 2) return null;
            const card = photoCards[index];
            return (
              <article
                key={`${card.id}-${position}`}
                className="absolute flex flex-col w-[20rem] h-[30rem] items-center gap-6 rounded-3xl bg-[#909090] shadow-2xl"
                style={getCardStyle(position)}
              >
                <div className="relative w-full flex-[0_0_80%] overflow-hidden rounded-t-2xl bg-neutral-800/60">
                  <div className="relative h-full w-full">
                    <Image
                      src={card.image}
                      alt="Best trip photograph"
                      fill
                      sizes="(max-width: 768px) 100vw"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      priority={position === 0 && index === 0}
                    />
                  </div>

                  {card.badge && (
                    <span
                      className={` bg-teal-500 hover:bg-teal-600 text-white border border-teal-500 absolute right-4 top-4 rounded-full px-4 py-1 text-xs font-semibold sm:text-sm ${card.badgeClasses}`}
                    >
                      {card.badge}
                    </span>
                  )}
                </div>
                <div className="flex w-full flex-1 items-center justify-between px-5">
                  <div className="flex w-full items-center justify-between rounded-full bg-neutral-900 pl-5 pr-2 py-2">
                    <span className="flex items-center gap-2 text-sm font-semibold text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={`h-5 w-5 ${card.heartClasses}`}
                      >
                        <path
                          stroke="currentColor"
                          fill={card.filled ? "currentColor" : "none"}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M12.032 20.704c-.366.11-.698-.208-.978-.45-4.491-3.945-7.137-6.88-7.137-10.254 0-2.246 1.703-4.5 4.13-4.5 1.44 0 2.644.802 3.386 1.86.742-1.058 1.946-1.86 3.386-1.86 2.427 0 4.13 2.254 4.13 4.5 0 3.374-2.646 6.309-7.137 10.254-.28.242-.612.56-.78.45Z"
                        />
                      </svg>
                      {card.likes}
                    </span>

                    <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-colors hover:bg-[#f4f4f4]">
                      Plan this trip
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Photographs;
