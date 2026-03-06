"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Star } from "lucide-react";

// Dummy data to match the image precisely
const locations = [
  "All",
  "Bali",
  "Bhutan",
  "Ladakh",
  "Japan",
  "Sri lanka",
  "Varanasi",
  "Kerala",
  "Vietnam",
  "Shimla",
  "Nepal",
  "Munnar",
  "North-East",
  "Mussoorie",
];

const trips = [
  {
    id: 1,
    title: "8 days In Ladhak",
    image: "/landing/ladakhMountain.png",
    duration: "7 nights 6 days",
    description: "Enjoy the scenic views of the valley of the Ladhak, Montse.",
    oldPrice: "₹ 92,000",
    price: "₹ 62,000",
    dates: "Feb 12, Feb 24, Mar 13",
  },
  {
    id: 2,
    title: "6 days In Manali",
    image: "/landing/manali.png",
    duration: "5 nights 6 days",
    description: "Enjoy the scenic views of the valley of the Manali, Himac.",
    oldPrice: "₹ 62,000",
    price: "₹ 59,000",
    dates: "Feb 12, Feb 24, Mar 13",
  },
  {
    id: 3,
    title: "12 days In Vietnam",
    image: "/landing/vietnam.png",
    duration: "6 nights 7 days",
    description: "Enjoy the scenic views of the valley of the Vietnam, Montse.",
    oldPrice: "₹ 1,62,000",
    price: "₹ 1,32,000",
    dates: "Feb 12, Feb 24, Mar 13",
  },
];

export default function AllUpcomingTripsContent() {
  const [activeLocation, setActiveLocation] = useState("All");
  const [openFilter, setOpenFilter] = useState<string>("dates"); // default to open dates

  const toggleFilter = (filterName: string) => {
    setOpenFilter(openFilter === filterName ? "" : filterName);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[55vh] min-h-[300px] max-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/landing/ladakhMountain.png"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/30 z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 pt-4 pb-12 w-full h-full">
          <h1
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-6 max-w-[1000px] leading-tight sm:leading-snug md:leading-snug lg:leading-tight uppercase"
            style={{
              fontFamily: "var(--font-vollkorn-sc), serif",
              textShadow:
                "0 4px 30px rgba(0,0,0,0.8), 2px 2px 8px rgba(0,0,0,0.6)",
              fontWeight: 600,
            }}
          >
            Explore All Upcoming Trips
          </h1>

          <div className="flex items-center text-sm md:text-base text-white/90 font-medium bg-black/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20">
            <span className="mr-2">🌍</span> 23 people exploring Europe this
            week
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-[28px] md:text-[32px] tracking-widest text-[#0a0a0a] uppercase mb-8 font-[family-name:var(--font-vollkorn-sc),_serif] font-medium drop-shadow-sm">
          All Upcoming Trips
        </h2>

        {/* Pill Nav */}
        <div className="flex gap-4 overflow-x-auto pb-6 mb-8 scrollbar-hide">
          {locations.map((loc) => (
            <button
              key={loc}
              onClick={() => setActiveLocation(loc)}
              className={`flex items-center justify-center gap-2 px-7 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                activeLocation === loc
                  ? "bg-[#0aa699] text-white border-transparent shadow-md"
                  : "bg-white text-gray-500 border border-gray-400 hover:bg-gray-50 hover:text-gray-800"
              }`}
            >
              {activeLocation === loc && (
                <svg
                  width="26"
                  height="32"
                  viewBox="0 0 26 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-auto shrink-0"
                >
                  <path
                    d="M25.4203 15.8047C21.9406 15.0145 18.8062 13.0488 16.575 10.2664C14.3437 7.48398 13.1285 3.98438 13.1285 0.418359V0H12.8629V0.418359C12.8629 3.98438 11.6344 7.48398 9.40977 10.2664C7.18516 13.0488 4.04414 15.0211 0.564453 15.8047L0 15.9375L0.564453 16.0637C4.04414 16.8539 7.18516 18.8195 9.40977 21.6086C11.6344 24.3977 12.8629 27.8906 12.8629 31.4566V31.875H13.1285V31.4566C13.1285 27.8906 14.357 24.391 16.5816 21.6086C18.8062 18.8195 21.9473 16.8539 25.427 16.0637L25.998 15.9309L25.4203 15.8047Z"
                    fill="white"
                  />
                </svg>
              )}
              {loc}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sidebar / Filters */}
          <div className="w-full lg:w-[400px] shrink-0 bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-8 sticky top-[100px]">
            <h3 className="text-lg font-extrabold text-gray-900 mb-8">
              Select your filters
            </h3>
            <div className="flex flex-col gap-5">
              {/* Starting From */}
              <div>
                <div
                  className={`flex justify-between items-center text-[15px] font-bold text-[#333] cursor-pointer hover:text-teal-600 transition-colors ${openFilter !== "starting-from" ? "border-b border-gray-100 pb-5" : "pb-2"}`}
                  onClick={() => toggleFilter("starting-from")}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl opacity-90">📍</span> Starting From
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${openFilter === "starting-from" ? "rotate-180" : ""}`}
                  />
                </div>
                {openFilter === "starting-from" && (
                  <div className="pt-4 pb-6 border-b border-gray-100 mb-2 flex flex-wrap gap-2.5">
                    <button className="px-5 py-2 rounded-full border border-gray-300 text-gray-600 text-sm font-medium hover:border-gray-400 transition-colors">
                      Delhi
                    </button>
                    <button className="px-5 py-2 rounded-full border border-gray-300 text-gray-600 text-sm font-medium hover:border-gray-400 transition-colors">
                      Mumbai
                    </button>
                    <button className="px-5 py-2 rounded-full border border-gray-300 text-gray-600 text-sm font-medium hover:border-gray-400 transition-colors">
                      Bangalore
                    </button>
                  </div>
                )}
              </div>

              {/* Check dates on Calendar */}
              <div>
                <div
                  className={`flex justify-between items-center text-[15px] font-bold text-[#333] cursor-pointer hover:text-teal-600 transition-colors ${openFilter !== "dates" ? "border-b border-gray-100 pb-5" : "pb-2"}`}
                  onClick={() => toggleFilter("dates")}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl opacity-90">📅</span> Check dates
                    on Calendar
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${openFilter === "dates" ? "rotate-180" : ""}`}
                  />
                </div>
                {openFilter === "dates" && (
                  <div className="pt-4 pb-6 border-b border-gray-100 mb-2">
                    <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-5">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-[#0e163d] font-bold text-sm">
                          January 2025
                        </span>
                        <div className="flex text-gray-400 gap-4">
                          <span className="cursor-pointer hover:text-gray-800">
                            {"<"}
                          </span>
                          <span className="cursor-pointer hover:text-gray-800">
                            {">"}
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-7 gap-y-4 gap-x-1 text-center text-xs font-bold text-gray-400 mb-4">
                        <div>MON</div>
                        <div>TUE</div>
                        <div>WED</div>
                        <div>THU</div>
                        <div>FRI</div>
                        <div>SAT</div>
                        <div>SUN</div>

                        {/* Dates */}
                        <div className="w-8 h-8 flex items-center justify-center mx-auto bg-[#0aa699] text-white rounded-full font-bold text-xs">
                          1
                        </div>
                        {[
                          2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                          17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
                          30, 31,
                        ].map((d) => (
                          <div
                            key={d}
                            className="w-8 h-8 flex items-center justify-center mx-auto text-[#0e163d] font-bold text-xs hover:bg-gray-100 rounded-full cursor-pointer"
                          >
                            {d}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Trip Category */}
              <div>
                <div
                  className={`flex justify-between items-center text-[15px] font-bold text-[#333] cursor-pointer hover:text-teal-600 transition-colors ${openFilter !== "category" ? "border-b border-gray-100 pb-5" : "pb-2"}`}
                  onClick={() => toggleFilter("category")}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl opacity-90">🌍</span> Trip Category
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${openFilter === "category" ? "rotate-180" : ""}`}
                  />
                </div>
                {openFilter === "category" && (
                  <div className="pt-4 pb-6 border-b border-gray-100 mb-2 flex flex-wrap gap-2.5">
                    <button className="px-3.5 py-1.5 rounded-full border border-gray-300 text-gray-600 text-xs font-medium hover:border-gray-400 transition-colors">
                      🚗 Weekend Trips
                    </button>
                    <button className="px-3.5 py-1.5 rounded-full border border-gray-300 text-gray-600 text-xs font-medium hover:border-gray-400 transition-colors">
                      🏍 Bike Trips
                    </button>
                    <button className="px-3.5 py-1.5 rounded-full border border-gray-300 text-gray-600 text-xs font-medium hover:border-gray-400 transition-colors">
                      🧗‍♀️ All Girls Trip
                    </button>
                    <button className="px-3.5 py-1.5 rounded-full border border-gray-300 text-gray-600 text-xs font-medium hover:border-gray-400 transition-colors">
                      🏛 Spiritual Trips
                    </button>
                    <button className="px-3.5 py-1.5 rounded-full border border-gray-300 text-gray-600 text-xs font-medium hover:border-gray-400 transition-colors">
                      💌 The Match Maker
                    </button>
                  </div>
                )}
              </div>

              {/* Your Budget */}
              <div>
                <div
                  className={`flex justify-between items-center text-[15px] font-bold text-[#333] cursor-pointer hover:text-teal-600 transition-colors ${openFilter !== "budget" ? "border-b border-gray-100 pb-5" : "pb-2"}`}
                  onClick={() => toggleFilter("budget")}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl opacity-90">💰</span> Your Budget
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${openFilter === "budget" ? "rotate-180" : ""}`}
                  />
                </div>
                {openFilter === "budget" && (
                  <div className="pt-6 pb-6 border-b border-gray-100 mb-2">
                    {/* Fake Range Slider */}
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-[6px] bg-black rounded-full w-1/3 relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[14px] h-[14px] bg-black rounded-full" />
                      </div>
                      <div className="h-[6px] bg-gray-200 rounded-full w-2/3" />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 font-bold mb-6">
                      <span>₹10K</span>
                      <span>₹2L</span>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      <button className="px-4 py-1.5 rounded-full border border-gray-300 text-gray-500 text-xs font-medium hover:border-gray-400 transition-colors">
                        Below 10K
                      </button>
                      <button className="px-4 py-1.5 rounded-full border border-gray-300 text-gray-500 text-xs font-medium hover:border-gray-400 transition-colors">
                        10K - 20K
                      </button>
                      <button className="px-4 py-1.5 rounded-full border border-gray-300 text-gray-500 text-xs font-medium hover:border-gray-400 transition-colors">
                        20K - 40K
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* All Trips */}
              <div>
                <div
                  className={`flex justify-between items-center text-[15px] font-bold text-[#333] cursor-pointer hover:text-teal-600 transition-colors ${openFilter !== "trips" ? "pb-2" : "pb-2"}`}
                  onClick={() => toggleFilter("trips")}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl opacity-90">🌍</span> All Trips
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${openFilter === "trips" ? "rotate-180" : ""}`}
                  />
                </div>
                {openFilter === "trips" && (
                  <div className="pt-4 pb-2 flex flex-wrap gap-3">
                    <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 text-xs font-medium flex items-center gap-2 hover:border-gray-400 transition-colors">
                      🌍 International
                    </button>
                    <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-600 text-xs font-medium flex items-center gap-2 hover:border-gray-400 transition-colors">
                      🚙 Domestic
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Cards List */}
          <div className="flex-1 flex flex-col gap-6">
            {trips.map((trip) => (
              <div
                key={trip.id}
                className="flex flex-col sm:flex-row bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-3 sm:p-4 group hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                {/* Image */}
                <div className="w-full sm:w-64 lg:w-72 h-48 sm:h-auto md:h-56 relative rounded-[20px] overflow-hidden shrink-0">
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="flex-1 px-4 sm:px-6 py-4 sm:py-5 flex flex-col justify-center">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-3">
                    <h3 className="text-lg sm:text-[20px] font-extrabold text-gray-900 leading-tight">
                      {trip.title}
                    </h3>
                    <div className="bg-gray-100/80 text-gray-700 text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 font-bold whitespace-nowrap">
                      <div className="bg-[#0aa699] w-4.5 h-4.5 rounded-full flex items-center justify-center">
                        <Star className="w-2.5 h-2.5 text-white fill-white" />
                      </div>
                      {trip.duration}
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm font-medium leading-relaxed mb-5 max-w-md">
                    {trip.description}{" "}
                    <span className="text-[#0aa699] font-bold hover:underline cursor-pointer tracking-wide ml-1">
                      Readmore
                    </span>
                  </p>

                  <div className="mt-auto">
                    <div className="flex items-end gap-3 mb-3">
                      <span className="text-[#f87171] line-through text-sm font-semibold relative top-[-3px]">
                        {trip.oldPrice}
                      </span>
                      <span className="text-2xl font-extrabold text-gray-900 leading-none">
                        {trip.price}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600 text-sm font-semibold">
                      <span className="text-base opacity-90 leading-none mb-0.5">
                        📅
                      </span>
                      {trip.dates}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
