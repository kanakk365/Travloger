"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { ArrowLeft, ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";

const months = [
  { label: "Sep 25", isFeatured: true },
  { label: "Oct 25" },
  { label: "Nov 25" },
  { label: "Dec 25" },
  { label: "Jan 26", isMuted: true },
  { label: "Feb 26", isMuted: true },
  { label: "Mar 26", isMuted: true },
  { label: "Apr 26", isMuted: true },
  { label: "May 26", isMuted: true },
  { label: "Jun 26", isMuted: true },
  { label: "Jul 26", isMuted: true },
  { label: "Aug 26", isMuted: true },
];

const trips = [
  {
    title: "Manali – Himachal Pradesh",
    image: "/landing/manali.png",
    startDate: "Sep 23",
    duration: "6 days",
    originalPrice: "₹79,999/-",
    currentPrice: "₹59,999/- onwards",
  },
  {
    title: "Kashmir 2025",
    image: "/landing/kashmir.png",
    startDate: "Sep 23",
    duration: "6 days",
    originalPrice: "₹79,999/-",
    currentPrice: "₹69,999/- onwards",
  },
  {
    title: "Kerala",
    image: "/landing/kerala.png",
    startDate: "Sep 23",
    duration: "6 days",
    originalPrice: "₹79,999/-",
    currentPrice: "₹59,999/- onwards",
  },
];

export default function CommunityTravelExperiences() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState("Sep 25");

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      const newScrollLeft =
        scrollRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const handleMonthClick = (monthLabel: string) => {
    setSelectedMonth(monthLabel);
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-16 text-center text-4xl font-semibold md:text-5xl">
          Community Travel Experiences
        </h2>

        <div className="mb-12 flex items-center justify-center gap-6">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`flex h-16 w-16 items-center justify-center rounded-full transition-colors ${
              canScrollLeft
                ? "bg-black text-white hover:bg-black/90"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex items-center gap-4 overflow-x-auto hide-scrollbar max-w-4xl"
          >
            {months.map((month) => {
              const isSelected = month.label === selectedMonth;
              return (
                <button
                  key={month.label}
                  onClick={() => handleMonthClick(month.label)}
                  className={`flex items-center gap-2 rounded-full border px-5 md:px-8 py-2 md:py-3 text-sm md:text-lg transition-transform duration-300 ease-out cursor-pointer active:scale-95 whitespace-nowrap ${
                    isSelected
                      ? "border-[#02A589] bg-gradient-to-r from-[#00A99D] to-[#009186] text-white"
                      : month.isMuted
                      ? "border-gray-200 bg-white text-gray-400"
                      : "border-black/10 bg-white text-gray-900 hover:border-black/30"
                  }`}
                >
                  {isSelected && <Sparkles className="h-4 w-4" />}
                  {month.label}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`flex h-16 w-16 items-center justify-center rounded-full transition-colors ${
              canScrollRight
                ? "bg-black text-white hover:bg-black/90"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile slider */}
        <div className="md:hidden -mx-6 px-6">
          <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory hide-scrollbar">
            {trips.map((trip) => (
              <div
                key={trip.title}
                className="group relative min-w-[16rem] h-[24rem] overflow-hidden rounded-3xl cursor-pointer snap-center"
              >
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  sizes="(max-width: 768px) 80vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/85" />

                <div className="absolute inset-x-5 bottom-5 text-white">
                  <h3 className="mb-3 text-lg font-semibold">{trip.title}</h3>

                  <div className="mb-4 flex gap-2 text-xs">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 backdrop-blur">
                      <Calendar className="h-3.5 w-3.5" /> {trip.startDate}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 backdrop-blur">
                      <Clock className="h-3.5 w-3.5" /> {trip.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-white/70 line-through text-xs">
                      {trip.originalPrice}
                    </span>
                    <span className="text-base font-semibold text-[#FF9700]">
                      {trip.currentPrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-1 gap-8 md:grid-cols-3">
          {trips.map((trip) => (
            <div
              key={trip.title}
              className="group relative h-[30rem] overflow-hidden rounded-3xl cursor-pointer"
            >
              <Image
                src={trip.image}
                alt={trip.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/85" />

              <div className="absolute inset-x-6 bottom-6 text-white">
                <h3 className="mb-4 text-xl font-semibold">{trip.title}</h3>

                <div className="mb-5 flex gap-3 text-sm">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 backdrop-blur">
                    <Calendar className="h-4 w-4" /> {trip.startDate}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 backdrop-blur">
                    <Clock className="h-4 w-4" /> {trip.duration}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <span className="text-white/70 line-through">
                    {trip.originalPrice}
                  </span>
                  <span className="text-[22px] font-semibold text-[#FF9700]">
                    {trip.currentPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
