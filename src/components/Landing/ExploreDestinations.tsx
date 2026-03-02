"use client";

import React, { useState } from "react";
import Image from "next/image";

type Destination = {
  name: string;
  image: string;
};

const destinations: Destination[] = [
  {
    name: "Vietnam",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Tawang",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Bali",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Manali",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Thailand",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Himachal Pradesh",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dubai",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Kerala",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Georgia",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Uttarakhand",
    image:
      "https://images.unsplash.com/photo-1566838318109-a8bffb91d082?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Almaty",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Rajasthan",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sri Lanka",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Kashmir",
    image:
      "https://images.unsplash.com/photo-1566838318109-a8bffb91d082?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Northern Lights",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Andaman",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Egypt",
    image:
      "https://images.unsplash.com/photo-1566838318109-a8bffb91d082?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Cambodia",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Europe",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Nepal",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Bhutan",
    image:
      "https://images.unsplash.com/photo-1566838318109-a8bffb91d082?auto=format&fit=crop&w=400&q=80",
  },
];

const tabs = [
  { name: "All", icon: "🌍" },
  { name: "International", icon: "✈️" },
  { name: "Domestic", icon: "🇮🇳" },
  { name: "Weekend", icon: "🚗" },
];

export default function ExploreDestinations() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section className="w-full bg-white py-12 md:py-16 overflow-hidden">
      <div className="w-full flex flex-col items-start px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-2xl sm:text-[28px] tracking-widest text-[#0a0a0a] uppercase mb-6 font-[family-name:var(--font-vollkorn-sc),_serif] font-medium">
          Explore Destinations
        </h2>

        <div className="flex gap-4 mb-10 overflow-x-auto w-full pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pr-4">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors border whitespace-nowrap cursor-pointer ${
                activeTab === tab.name
                  ? "border-[#0aa699] bg-[#e6f6f5] text-gray-800"
                  : "border-gray-200 bg-white text-gray-800 hover:bg-gray-50 hover:border-gray-300"
              }`}
            >
              <span className="text-[15px]">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="grid grid-rows-2 grid-flow-col gap-x-6 gap-y-12 auto-cols-max pl-4 sm:pl-6 md:pl-8 lg:pl-12 xl:pl-16 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 xl:max-w-none">
          {destinations.map((dest, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 cursor-pointer group w-[110px] sm:w-[130px] md:w-[150px]"
            >
              <div className="relative w-full aspect-[4/5] rounded-4xl overflow-hidden border border-gray-100 bg-gray-50 flex-shrink-0">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 768px) 110px, (max-width: 1024px) 130px, 150px"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="font-regular text-gray-800 text-[13px] sm:text-[14px] text-center leading-tight">
                {dest.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
