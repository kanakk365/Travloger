"use client";
import { useState } from "react";
import Image from "next/image";
import {
  ChevronRight,
  Clock,
  Calendar,
  IndianRupee,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

export default function TravelPlan() {
  const [budget, setBudget] = useState(10000);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollUp = () => {
    const container = document.getElementById("results-scroll-container");
    if (container) {
      const newPosition = Math.max(0, scrollPosition - 200);
      container.scrollTo({
        top: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
    }
  };

  const handleScrollDown = () => {
    const container = document.getElementById("results-scroll-container");
    if (container) {
      const newPosition = Math.min(
        container.scrollHeight - container.clientHeight,
        scrollPosition + 200
      );
      container.scrollTo({
        top: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollPosition(e.currentTarget.scrollTop);
  };

  return (
    <section className="bg-white sm:mt-16 mt-8 py-16 ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-center mb-12">
          What’s your Travel Plan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch relative">
          {/* Filters Card */}
          <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10 border border-black/5 h-full">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8">
              Select your filters
            </h3>

            {/* Mood */}
            <div className="mb-8">
              <div className="text-base md:text-lg text-gray-700 mb-4 font-medium">
                Mood
              </div>
              <div className="flex flex-wrap gap-4">
                {[
                  { label: "Adventure 🧗", key: "adventure" },
                  { label: "Chill 🏖️", key: "chill" },
                  { label: "Culture 🧑‍🎨", key: "culture" },
                ].map((item) => (
                  <button
                    key={item.key}
                    className=" text-neutral-500 rounded-full border px-6 py-1.5 text-base bg-white hover:bg-gray-50 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div className="mb-8">
              <div className="text-base md:text-lg text-gray-700 mb-4 font-medium">
                Budget
              </div>
              <div className="px-2">
                <input
                  type="range"
                  min={10000}
                  max={200000}
                  step={1000}
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full accent-black h-2"
                />
                <div className="flex justify-between text-sm md:text-base text-gray-600 mt-3 font-medium">
                  <span>₹10k</span>
                  <span>₹2L</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="mb-8">
              <div className="text-base md:text-lg text-gray-700 mb-4 font-medium">
                Location
              </div>
              <div className="flex gap-4">
                <button className="rounded-full text-neutral-500 border px-6 py-1.5 text-base bg-white hover:bg-gray-50 transition-colors">
                  🏡 Domestic
                </button>
                <button className="rounded-full text-neutral-500 border px-8 py-1.5 text-base bg-white hover:bg-gray-50 transition-colors">
                  🌍 International
                </button>
              </div>
            </div>

            {/* Travel Style */}
            <div>
              <div className="text-base md:text-lg text-gray-700 mb-4 font-medium">
                Travel Style
              </div>
              <div className="flex gap-4">
                <button className="rounded-full text-neutral-500 border px-8 py-1.5 text-base bg-white hover:bg-gray-50 transition-colors">
                  Solo
                </button>
                <button className="rounded-full text-neutral-500 border px-8 py-1.5 text-base bg-white hover:bg-gray-50 transition-colors">
                  Group
                </button>
              </div>
            </div>
          </div>

          {/* Results List */}
          <div
            id="results-scroll-container"
            className="relative flex flex-col gap-6 h-[36rem] rounded-3xl overflow-y-auto overflow-x-hidden hide-scrollbar"
            onScroll={handleScroll}
          >
            {[
              { image: "/landing/valley.png", title: "Valley of Flowers Trek" },
              { image: "/landing/hampi.png", title: "Hampi Adventure" },
              { image: "/landing/kedarnath.png", title: "Kedarkantha Trek" },
            ].map((card, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-3xl h-[13rem] md:h-[13rem] flex-shrink-0"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />

                {/* Badges */}
                <div className="absolute top-3 right-3 flex gap-2 text-[11px] text-white/90">
                  <span className="inline-flex items-center gap-1 bg-black/40 backdrop-blur rounded-full px-2 py-1">
                    <Clock className="w-3.5 h-3.5" /> 6 days
                  </span>
                  <span className="inline-flex items-center gap-1 bg-black/40 backdrop-blur rounded-full px-2 py-1">
                    <Calendar className="w-3.5 h-3.5" /> Sep 23
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="text-lg font-semibold mb-1">{card.title}</div>
                  <div className="flex items-end gap-2">
                    <span className="line-through text-white/70 text-sm">
                      ₹11,600
                    </span>
                    <span className="text-xl font-semibold inline-flex items-center gap-1">
                      <IndianRupee className="w-4 h-4" />
                      10,000
                    </span>
                    <span className="text-xs text-white/80 mb-[2px]">
                      per person
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <button className="absolute right-4 bottom-3 h-8 w-8 rounded-full bg-white/80 flex items-center justify-center">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Scroll Button */}
          <div className="absolute bottom-10 left-[76%] transform -translate-x-1/2 z-10">
            <button
              onClick={handleScrollDown}
              className={`h-12 w-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-all shadow-lg`}
              aria-label="Scroll cards down"
            >
              <ArrowDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
