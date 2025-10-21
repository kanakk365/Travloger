"use client";
import Image from "next/image";
import Link from "next/link";
import NavbarWhite from "@/components/NavbarWhite";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

const TripsPage = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("past");

  const tabs = useMemo(
    () => [
      { label: "Upcoming trips", value: "upcoming" as const },
      { label: "Past Trips", value: "past" as const },
    ],
    []
  );

  const pastTrips = useMemo(
    () => [
      {
        id: 1,
        title: "Rajasthan 2025",
        image:
          "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
        startDate: "24 July 2024",
        endDate: "01 August 2024",
        duration: "6 nights 7 days",
      },
      {
        id: 2,
        title: "Valley of Flowers",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        startDate: "24 July 2024",
        endDate: "01 August 2024",
        duration: "6 nights 7 days",
      },
    ],
    []
  );

  return (
    <main className="min-h-screen bg-[#f6f7fb]">
      <div className="absolute inset-x-0 top-0 z-50">
        <NavbarWhite />
      </div>

      {/* Header Section with Image Background */}
      <section className="relative isolate h-96 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/trips/tripsHead.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        
        {/* Breadcrumb and Search - Overlaid on Image */}
        <div className="relative z-10 mx-auto max-w-7xl h-full px-6 flex flex-col justify-between pt-28">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-white/80 text-sm">
              <Link href="/" className="hover:text-white transition-colors">
                My account
              </Link>
              <span className="text-white/60">&gt;</span>
              <span className="text-white">Upcoming trips</span>
            </div>
            
            <div className="relative w-full max-w-xs ml-auto">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-white/20 border border-white/30 rounded-full py-2.5 pl-4 pr-12 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs and Content Section */}
      <section className="mx-auto -mt-24 w-full max-w-7xl px-6 pb-24 relative z-10">
        <div className="rounded-xl border border-slate-200 bg-white">
          <div className="flex flex-col items-stretch text-left">
            <div className="relative flex w-full justify-center overflow-hidden rounded-t-xl bg-slate-100">
              {tabs.map((tab) => (
                <button
                  key={tab.label}
                  className={`flex-1 px-6 py-3 text-base font-medium transition-all cursor-pointer ${
                    activeTab === tab.value
                      ? "bg-gradient-to-r from-[#009186] to-[#00A99D] text-white"
                      : "bg-[#cccccc] text-slate-900 hover:bg-[#bbbbbb]"
                  }`}
                  type="button"
                  onClick={() => setActiveTab(tab.value)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === "upcoming" ? (
              <div className="flex flex-col items-center px-6 py-16 text-center">
                <div className="relative flex items-center justify-center">
                  <Image
                    src="/trips/emptyTrip.png"
                    alt="Empty trips illustration"
                    width={480}
                    height={320}
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="mt-10 space-y-3 max-w-xl">
                  <h2 className="text-2xl font-semibold text-slate-900">
                    Looks like you haven{`'`}t booked any trips!
                  </h2>
                  <p className="text-base text-slate-500">
                    Start exploring amazing destinations and create memories today.
                  </p>
                </div>
                <Link
                  href="/packages"
                  className="mt-10 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#009186] to-[#00A99D] px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                >
                  Plan Trip
                </Link>
              </div>
            ) : (
              <div className="space-y-8 px-6 py-12">
                {pastTrips.map((trip) => (
                  <article
                    key={trip.id}
                    className="rounded-2xl border border-slate-200 bg-white px-6 pb-6 pt-6 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)]"
                  >
                    <div className="overflow-hidden rounded-xl">
                      <Image
                        src={trip.image}
                        alt={trip.title}
                        width={1200}
                        height={700}
                        className="h-56 w-full object-cover"
                      />
                    </div>

                    <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-2xl mb-2 font-semibold text-slate-900">{trip.title}</h3>
                        <p className="mt-2 text-sm text-slate-500">
                          {trip.startDate} - {trip.endDate}
                          <span className="mx-2 text-slate-300">•</span>
                          {trip.duration}
                        </p>
                      </div>

                      <Link
                        href="/review"
                        className="inline-flex items-center cursor-pointer justify-center rounded-full bg-gradient-to-r from-[#009186] to-[#00A99D] px-8 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                      >
                        Add a review
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TripsPage;