"use client";

import React, { useState } from "react";
import Image from "next/image";

type Destination = {
  name: string;
  image: string;
};

const destinations: Destination[] = [
  {
    name: "Philippines",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Japan",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Vietnam",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Kashmir",
    image:
      "https://images.unsplash.com/photo-1566838318109-a8bffb91d082?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Manali",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Georgia",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Philippines",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Japan",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Vietnam",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Kashmir",
    image:
      "https://images.unsplash.com/photo-1566838318109-a8bffb91d082?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Manali",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Georgia",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ExploreDestinations() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-[80px] py-16">
      <div className="max-w-[1400px] mx-auto flex flex-col items-start text-left">
        <h2 className="text-3xl sm:text-4xl md:text-[44px] tracking-widest text-[#0a0a0a] uppercase mb-8 font-[family-name:var(--font-vollkorn-sc),_serif] font-medium">
          Explore Destinations
        </h2>

        <div className="flex flex-wrap gap-4 mt-2 mb-12">
          {["All", "International", "Domestic", "Weekend"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 px-8 py-[10px] rounded-full text-[15px] font-[600] transition-colors ${
                activeTab === tab
                  ? "bg-[#0aa699] text-white border-transparent"
                  : "bg-transparent text-gray-500 border border-gray-400 hover:bg-gray-50 hover:text-gray-800"
              }`}
            >
              {activeTab === tab && (
                <svg
                  width="26"
                  height="32"
                  viewBox="0 0 26 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[18px] w-auto"
                >
                  <path
                    d="M25.4203 15.8047C21.9406 15.0145 18.8062 13.0488 16.575 10.2664C14.3437 7.48398 13.1285 3.98438 13.1285 0.418359V0H12.8629V0.418359C12.8629 3.98438 11.6344 7.48398 9.40977 10.2664C7.18516 13.0488 4.04414 15.0211 0.564453 15.8047L0 15.9375L0.564453 16.0637C4.04414 16.8539 7.18516 18.8195 9.40977 21.6086C11.6344 24.3977 12.8629 27.8906 12.8629 31.4566V31.875H13.1285V31.4566C13.1285 27.8906 14.357 24.391 16.5816 21.6086C18.8062 18.8195 21.9473 16.8539 25.427 16.0637L25.998 15.9309L25.4203 15.8047Z"
                    fill="white"
                  />
                </svg>
              )}
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-[24px] gap-y-[40px] w-full">
          {destinations.map((dest, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4 cursor-pointer group"
            >
              <div className="w-full aspect-[4/5] relative rounded-[28px] overflow-hidden shadow-sm">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="font-semibold text-gray-800 text-[14px] md:text-[15px]">
                {dest.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
