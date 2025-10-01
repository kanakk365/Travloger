"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type DestinationCategory = "domestic" | "international";

type Destination = {
  name: string;
  image: string;
};

const DESTINATION_MAP: Record<DestinationCategory, Destination[]> = {
  domestic: [
    {
      name: "Goa Beaches",
      image:
        "https://images.unsplash.com/photo-1512203492609-9721edcb9283?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Jaipur Forts",
      image:
        "https://images.unsplash.com/photo-1544989164-31dc3c645987?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Backwaters",
      image:
        "https://images.unsplash.com/photo-1507738978512-35798112892c?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Valley",
      image:
        "https://images.unsplash.com/photo-1526402468707-28b0efc017f7?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Andaman",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Rann of Kutch",
      image:
        "https://images.unsplash.com/photo-1602488259605-fd12a3da624d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Munnar Hills",
      image:
        "https://images.unsplash.com/photo-1515923152115-758a6c1b7b6b?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Darjeeling",
      image:
        "https://images.unsplash.com/photo-1549893249-42d62ccb7fd4?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Pondicherry",
      image:
        "https://images.unsplash.com/photo-1514661987656-76647f333a2a?auto=format&fit=crop&w=600&q=80",
    },
  ],
  international: [
    {
      name: "Eiffel Tower",
      image:
        "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Machu Picchu",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Great Wall",
      image:
        "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Statue",
      image:
        "https://images.unsplash.com/photo-1459130787921-c278b912da85?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Taj Mahal",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Opera House",
      image:
        "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Colosseum",
      image:
        "https://images.unsplash.com/photo-1526481280695-3c4699ed2f86?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Grand Canyon",
      image:
        "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Santorini",
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Bali Temples",
      image:
        "https://images.unsplash.com/photo-1526481280695-3c4699ed2f86?auto=format&fit=crop&w=600&q=80",
    },
  ],
};

const VISIBLE_COUNT = 7;

export default function Destinations() {
  const [category, setCategory] =
    useState<DestinationCategory>("international");
  const [startIndex, setStartIndex] = useState(0);

  const destinations = useMemo(() => DESTINATION_MAP[category], [category]);

  useEffect(() => {
    setStartIndex(0);
  }, [category]);

  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex + VISIBLE_COUNT < destinations.length;

  const visibleDestinations = destinations.slice(
    startIndex,
    startIndex + VISIBLE_COUNT
  );

  const handlePrev = () => {
    if (canGoPrev) {
      setStartIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      setStartIndex((prev) =>
        Math.min(prev + 1, destinations.length - VISIBLE_COUNT)
      );
    }
  };

  const isEdgeCard = (index: number) => {
    const isFirst = index === 0;
    const isLast = index === visibleDestinations.length - 1;
    return (isFirst && !canGoPrev) || (isLast && !canGoNext);
  };

  return (
    <section className="w-full bg-white py-24 pt-0">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl">
          Explore all destinations
        </h2>

        <div className="mt-10 flex gap-4">
          <button
            type="button"
            onClick={() => setCategory("domestic")}
            className={`rounded-full border px-14 py-3 text-lg font-medium transition-all duration-200 ${
              category === "domestic"
                ? "border-black bg-black text-white shadow-[0_20px_40px_rgba(15,23,42,0.12)] hover:bg-gray-900"
                : "border-gray-200 bg-white text-gray-500 hover:text-gray-700"
            }`}
          >
            <span className="mr-2">🏠</span>
            Domestic
          </button>
          <button
            type="button"
            onClick={() => setCategory("international")}
            className={`rounded-full border px-14 py-3 text-lg font-medium transition-all duration-200 ${
              category === "international"
                ? "border-black bg-black text-white shadow-[0_20px_40px_rgba(15,23,42,0.12)] hover:bg-gray-900"
                : "border-gray-200 bg-white text-gray-500 hover:text-gray-700"
            }`}
          >
            <span className="mr-2">🌍</span>
            International
          </button>
        </div>

        <div className="relative mt-14 w-full max-w-6xl">
          <div className="pointer-events-none absolute z-10 inset-y-0 left-0 w-48 bg-gradient-to-r from-white to-white/0" />
          <div className="pointer-events-none absolute z-10 inset-y-0 right-0 w-48 bg-gradient-to-l from-white to-white/0" />

          <button
            type="button"
            onClick={handlePrev}
            disabled={!canGoPrev}
            className={`absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full transition ${
              canGoPrev
                ? "bg-black text-white shadow-[0_10px_20px_rgba(15,23,42,0.15)] hover:bg-gray-900"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
            aria-label="Previous destinations"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={!canGoNext}
            className={`absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full transition ${
              canGoNext
                ? "bg-black text-white shadow-[0_10px_20px_rgba(15,23,42,0.15)] hover:bg-gray-900"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
            aria-label="Next destinations"
          >
            <ArrowRight className="h-4 w-4" />
          </button>

          <div className="flex items-center justify-center gap-6 overflow-hidden px-16">
            {visibleDestinations.map((destination, index) => (
              <div
                key={`${category}-${destination.name}`}
                className={`flex w-28 flex-col items-center text-center transition-opacity duration-200 sm:w-32 ${
                  isEdgeCard(index) ? "opacity-40" : "opacity-100"
                }`}
              >
                <div className="relative w-28 h-40  overflow-hidden rounded-xl bg-gray-100 shadow-[0_8px_30px_rgba(15,23,42,0.08)] sm:h-36">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 text-sm font-medium text-gray-700 sm:text-base">
                  {destination.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
