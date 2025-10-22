"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const destinations = [
  {
    name: "RAJASTHAN",
    image: "/landing/rajasthan.png",
    oldPrice: "₹79,999/-",
    price: "₹29,999/- onwards",
  },
  {
    name: "LADAKH",
    image: "/landing/ladakh.png",
    oldPrice: "₹79,999/-",
    price: "₹69,999/- onwards",
  },
  {
    name: "HAMPI",
    image: "/landing/hampitemple.png",
    oldPrice: "₹79,999/-",
    price: "₹19,999/- onwards",
  },
];

export default function Explore() {
  const [cardOrder, setCardOrder] = useState<number[]>(() =>
    destinations.map((_, index) => index)
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
    <section className="relative overflow-hidden pb-20 pt-24 mt-16 sm:pb-32 sm:pt-28 font-manrope bg-white">
      <div className="max-w-7xl mx-auto sm:px-10">
        <div className="relative isolate">
          <div className="pointer-events-none absolute -inset-x-8 sm:-inset-x-18 lg:-inset-x-24 -top-28 h-[25rem] sm:h-[25rem] rounded-3xl ">
            <Image
              src="/landing/city.png"
              alt="Taj Mahal silhouette"
              fill
              priority
              className="object-cover object-center rounded-3xl"
            />
          </div>

          <div className="relative z-10 w-full flex flex-col items-center">
            <h2 className="text-center  text-3xl sm:text-4xl md:text-5xl font-semibold tracking- text-white drop-shadow-[0_0.75rem_2.8125rem_rgba(0,0,0,0.4)]">
              Explore Incredible India
            </h2>

            <div className="relative mt-12 sm:mt-16 w-full">
              <div className="relative z-10 w-full">
                <button className=" z-10 pointer-events-auto hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-[0_1.5rem_2.8125rem_rgba(15,23,42,0.35)] absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
                  <ArrowLeft className="h-5 w-5" />
                </button>

                <div className="px-8">
                  <div className="hidden sm:grid w-full grid-cols-1 gap-y-16 gap-x-14 sm:grid-cols-2 lg:grid-cols-3 justify-items-center md:mx-auto">
                    {destinations.map((destination) => (
                      <div
                        key={destination.name}
                        className="group relative h-[28rem] w-[23rem] overflow-hidden rounded-3xl shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] cursor-pointer"
                      >
                        <Image
                          src={destination.image}
                          alt={destination.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20rem"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/85" />

                        <div className="absolute inset-0 flex flex-col">
                          <div className="flex pt-8 flex-1 items-center justify-center px-9 text-center text-white">
                            <h3 className="text-2xl font-extrabold tracking-[0.32em] uppercase">
                              {destination.name}
                            </h3>
                          </div>

                          <div className="px-9 pb-10">
                            <div className="flex items-baseline gap-3">
                              <p className="text-base text-white/65 line-through">
                                {destination.oldPrice}
                              </p>
                              <p className="text-xl font-semibold text-[#FBB429]">
                                {destination.price}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    className="sm:hidden relative h-[30rem] w-full max-w-[20rem] mx-auto flex items-center justify-center"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                  >
                    {cardOrder.map((index, position) => {
                      if (position > 2) return null;
                      const destination = destinations[index];
                      return (
                        <div
                          key={`${destination.name}-${position}`}
                          className="absolute h-[26rem] w-[19rem] rounded-3xl overflow-hidden shadow-[0px_18px_32px_rgba(0,0,0,0.35)]"
                          style={getCardStyle(position)}
                        >
                          <Image
                            src={destination.image}
                            alt={destination.name}
                            fill
                            sizes="(max-width: 768px) 100vw"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/85" />
                          <div className="absolute inset-0 flex flex-col">
                            <div className="flex flex-1 items-center justify-center px-8 text-center text-white">
                              <h3 className="text-2xl font-extrabold tracking-[0.28em] uppercase">
                                {destination.name}
                              </h3>
                            </div>
                            <div className="px-8 pb-8">
                              <div className="flex items-baseline gap-3">
                                <p className="text-sm text-white/70 line-through">
                                  {destination.oldPrice}
                                </p>
                                <p className="text-lg font-semibold text-[#FBB429]">
                                  {destination.price}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <button className="pointer-events-auto hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-[0_1.5rem_2.8125rem_rgba(15,23,42,0.35)] absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
