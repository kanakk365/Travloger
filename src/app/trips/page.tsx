"use client";
import Image from "next/image";
import Link from "next/link";
import NavbarWhite from "@/components/NavbarWhite";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import Footer from "@/components/Footer";

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
          "/landing/rajasthanlong.png",
        startDate: "24 July 2024",
        endDate: "01 August 2024",
        duration: "6 nights 7 days",
      },
      {
        id: 2,
        title: "Valley of Flowers",
        image:
          "/landing/valley.png",
        startDate: "24 July 2024",
        endDate: "01 August 2024",
        duration: "6 nights 7 days",
      },
      {
        id: 3,
        title: "Kedarkantha Trek",
        image:
          "/landing/kedarnath.png",
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
      <section className="relative isolate h-64 sm:h-80 md:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/trips/tripsHead.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        
        {/* Breadcrumb and Search - Overlaid on Image */}
        <div className="relative z-10 mx-auto max-w-7xl h-full px-4 sm:px-6 flex flex-col justify-between pt-20 sm:pt-28">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2 sm:gap-3 text-white/80 text-xs sm:text-sm">
              <Link href="/" className="hover:text-white transition-colors">
                My account
              </Link>
              <span className="text-white/60">&gt;</span>
              <span className="text-white truncate">Upcoming trips</span>
            </div>
            
            <div className="relative w-full sm:max-w-xs">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-white/20 border border-white/30 rounded-full py-2 sm:py-2.5 pl-3 sm:pl-4 pr-10 sm:pr-12 text-xs sm:text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
              />
              <Search className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs and Content Section */}
      <section className="mx-auto -mt-16 sm:-mt-24 w-full max-w-7xl px-4 sm:px-6 pb-16 sm:pb-24 relative z-10 mb-12 sm:mb-20">
        <div className="rounded-lg sm:rounded-xl border border-slate-200 bg-white">
          <div className="flex flex-col items-stretch text-left">
            <div className="relative flex w-full justify-center overflow-hidden rounded-t-lg sm:rounded-t-xl bg-slate-100">
              {tabs.map((tab) => (
                <button
                  key={tab.label}
                  className={`flex-1 px-3 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-base font-medium transition-all cursor-pointer ${
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
              <div className="flex flex-col items-center px-4 sm:px-6 py-12 sm:py-16 text-center">
                <div className="relative flex items-center justify-center">
                  <Image
                    src="/trips/emptyTrip.png"
                    alt="Empty trips illustration"
                    width={480}
                    height={320}
                    className="object-contain w-full max-w-xs sm:max-w-md"
                    priority
                  />
                </div>
                <div className="mt-6 sm:mt-10 space-y-2 sm:space-y-3 max-w-xl">
                  <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                    Looks like you haven{`'`}t booked any trips!
                  </h2>
                  <p className="text-sm sm:text-base text-slate-500">
                    Start exploring amazing destinations and create memories today.
                  </p>
                </div>
                <Link
                  href="/packages"
                  className="mt-6 sm:mt-10 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#009186] to-[#00A99D] px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                >
                  Plan Trip
                </Link>
              </div>
            ) : (
              <div className="space-y-4 sm:space-y-8 px-4 sm:px-6 py-8 sm:py-12">
                {pastTrips.map((trip) => (
                  <article
                    key={trip.id}
                    className="rounded-lg sm:rounded-2xl border border-slate-200 bg-white px-4 sm:px-6 pb-4 sm:pb-6 pt-4 sm:pt-6 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)]"
                  >
                    <div className="overflow-hidden rounded-lg sm:rounded-xl">
                      <Image
                        src={trip.image}
                        alt={trip.title}
                        width={1200}
                        height={700}
                        className="h-40 sm:h-56 w-full object-cover"
                      />
                    </div>

                    <div className="mt-4 sm:mt-6 flex flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-lg sm:text-2xl mb-1 sm:mb-2 font-semibold text-slate-900">{trip.title}</h3>
                        <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-slate-500">
                          {trip.startDate} - {trip.endDate}
                          <span className="mx-2 text-slate-300">•</span>
                          {trip.duration}
                        </p>
                      </div>

                      <Link
                        href="/review"
                        className="inline-flex items-center cursor-pointer justify-center rounded-full bg-gradient-to-r from-[#009186] to-[#00A99D] px-4 sm:px-8 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:opacity-90 w-full sm:w-auto"
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
      <Footer />
    </main>
  );
};

export default TripsPage;