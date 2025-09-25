"use client";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Sparkles,
} from "lucide-react";

const months = [
  { label: "Sep 25", isFeatured: true },
  { label: "Oct 25" },
  { label: "Nov 25" },
  { label: "Dec 25" },
  { label: "Jan 26", isMuted: true },
];

const trips = [
  {
    title: "Manali – Himachal Pradesh",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
    startDate: "Sep 23",
    duration: "6 days",
    originalPrice: "₹79,999/-",
    currentPrice: "₹59,999/- onwards",
  },
  {
    title: "Kashmir 2025",
    image:
      "https://images.unsplash.com/photo-1599491079683-2de9484485f9?auto=format&fit=crop&w=1200&q=80",
    startDate: "Sep 23",
    duration: "6 days",
    originalPrice: "₹79,999/-",
    currentPrice: "₹69,999/- onwards",
  },
  {
    title: "Kerala",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    startDate: "Sep 23",
    duration: "6 days",
    originalPrice: "₹79,999/-",
    currentPrice: "₹59,999/- onwards",
  },
];

export default function CommunityTravelExperiences() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-4xl font-semibold md:text-5xl">
          Community Travel Experiences
        </h2>

        <div className="mb-12 flex items-center justify-center gap-6">
          <button className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-black/90">
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {months.map((month) => (
              <button
                key={month.label}
                className={`flex items-center gap-2 rounded-full border px-8 py-3 text-lg transition-colors ${
                  month.isFeatured
                    ? "border-[#02A589] bg-[#02A589] text-white"
                    : month.isMuted
                    ? "border-gray-200 bg-white text-gray-400"
                    : "border-black/10 bg-white text-gray-900 hover:border-black/30"
                }`}
              >
                {month.isFeatured && <Sparkles className="h-4 w-4" />}
                {month.label}
              </button>
            ))}
          </div>

          <button className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-black/90">
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {trips.map((trip) => (
            <div
              key={trip.title}
              className="group relative h-[30rem] overflow-hidden rounded-3xl"
            >
              <Image
                src={trip.image}
                alt={trip.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
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
