"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Play, Star, ArrowRight, ArrowLeft } from "lucide-react";

type Trip = {
  title: string;
  image: string;
  location: string;
  duration: string;
  dates: string[];
  description: string;
  price: string;
};

const trips: Trip[] = [
  {
    title: "5 days In Ladhak",
    image:
      "https://images.unsplash.com/photo-1544989164-31dc3c645987?auto=format&fit=crop&w=600&q=80",
    location: "Turkey",
    duration: "6 nights 7 days",
    dates: ["April 29", "May 29", "Jun 01"],
    description: "Enjoy the scenic views of the valley of the Ladhak , Montse.",
    price: "₹ 29,000",
  },
  {
    title: "8 days In Rajasthan",
    image:
      "https://images.unsplash.com/photo-1566838318109-a8bffb91d082?auto=format&fit=crop&w=600&q=80",
    location: "Turkey",
    duration: "6 nights 7 days",
    dates: ["April 25", "April 29", "May 29"],
    description: "Enjoy the scenic views of the valley of the Ladhak , Montse.",
    price: "₹ 32,000",
  },
  {
    title: "9 days In Manali",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80",
    location: "Turkey",
    duration: "6 nights 7 days",
    dates: ["April 25", "April 29", "May 29"],
    description: "Enjoy the scenic views of the valley of the Ladhak , Montse.",
    price: "₹ 56,000",
  },
];

const tabs = ["SEP 25", "OCT 25", "NOV 25", "DEC 25", "JAN 26"];

export default function NewCommunityTravelExperiences() {
  const [activeTab, setActiveTab] = useState("SEP 25");

  const handlePrev = () => {
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1]);
    } else {
      setActiveTab(tabs[tabs.length - 1]); // Loop to end
    }
  };

  const handleNext = () => {
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    } else {
      setActiveTab(tabs[0]); // Loop to start
    }
  };

  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-[80px] py-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl md:text-[44px] tracking-widest text-[#0a0a0a] uppercase mb-10 font-[family-name:var(--font-vollkorn-sc),_serif] font-medium">
          Community Travel Experiences
        </h2>

        <div className="flex items-center justify-center gap-4 md:gap-8 mb-16 max-w-[1200px] w-full">
          <button
            onClick={handlePrev}
            className="hidden sm:flex flex-shrink-0 w-[54px] h-[54px] bg-black text-white rounded-full items-center justify-center hover:bg-gray-900 transition-colors shadow-lg"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <div className="flex flex-wrap justify-center overflow-x-auto gap-4 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-8 py-[10px] rounded-full text-[15px] font-[600] transition-colors ${
                  activeTab === tab
                    ? "bg-[#0aa699] text-white border-transparent"
                    : "bg-white text-gray-500 border border-gray-400 hover:bg-gray-50 hover:text-gray-800"
                }`}
              >
                {activeTab === tab && (
                  <svg
                    width="26"
                    height="32"
                    viewBox="0 0 26 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[18px] w-auto shrink-0"
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

          <button
            onClick={handleNext}
            className="hidden sm:flex flex-shrink-0 w-[54px] h-[54px] bg-black text-white rounded-full items-center justify-center hover:bg-gray-900 transition-colors shadow-lg"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1240px]">
          {trips.map((trip, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden flex flex-col shadow-[0_12px_50px_-15px_rgba(0,0,0,0.12)] group transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative w-full aspect-[5/4] rounded-t-3xl overflow-hidden">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />

                <div className="absolute top-[18px] left-[18px] right-[18px] flex justify-between items-start z-10">
                  <div className="flex items-center gap-[8px] bg-[#1f4b66]/80 backdrop-blur-md text-white pr-[14px] pl-[6px] py-[6px] rounded-full text-[14.5px] font-medium">
                    <div className="bg-[#0aa699] w-[24px] h-[24px] rounded-full flex items-center justify-center shadow-sm">
                      <Star className="w-[12px] h-[12px] fill-white text-white" />
                    </div>
                    {trip.duration}
                  </div>
                  <div className="flex items-center gap-[6px] bg-white/30 backdrop-blur-md text-white px-[14px] py-[8px] rounded-full text-[14.5px] font-medium border border-white/10">
                    <MapPin className="w-[15px] h-[15px] fill-white text-white" />
                    {trip.location}
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center z-10 pb-8">
                  <div className="w-[84px] h-[84px] bg-white/30 rounded-full flex items-center justify-center backdrop-blur-[2px] group-hover:scale-110 transition-transform duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/20">
                    <button className="w-[54px] h-[54px] bg-white rounded-full flex items-center justify-center shadow-md">
                      <Play className="w-[22px] h-[22px] text-[#0aa699] ml-1 fill-current" />
                    </button>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-black text-white py-[12px] px-6 text-[15px] font-medium z-10">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-[8px]">
                      <span className="text-[16px] leading-none mb-0.5 opacity-90">
                        📅
                      </span>
                      {trip.dates[0]}
                    </div>

                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[20px] h-[20px] text-white"
                    >
                      <path
                        d="M12 0L13.7 8.3L22 10L13.7 11.7L12 20L10.3 11.7L2 10L10.3 8.3L12 0Z"
                        fill="currentColor"
                      />
                    </svg>

                    <div className="flex items-center gap-[8px]">
                      <span className="text-[16px] leading-none mb-0.5 opacity-90">
                        📅
                      </span>
                      {trip.dates[1]}
                    </div>

                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[20px] h-[20px] text-white"
                    >
                      <path
                        d="M12 0L13.7 8.3L22 10L13.7 11.7L12 20L10.3 11.7L2 10L10.3 8.3L12 0Z"
                        fill="currentColor"
                      />
                    </svg>

                    <div className="flex items-center gap-[8px]">
                      <span className="text-[16px] leading-none mb-0.5 opacity-90">
                        📅
                      </span>
                      {trip.dates[2]}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-7 text-left flex flex-col flex-grow bg-white z-20">
                <h3 className="text-[22px] font-[800] text-[#0a0a0a] mb-[10px] leading-tight tracking-tight">
                  {trip.title}
                </h3>
                <p className="text-gray-500 text-[15.5px] leading-[1.6] mb-6 font-medium pr-2">
                  {trip.description}{" "}
                  <button className="text-[#0aa699] font-[700] hover:underline">
                    Readmore
                  </button>
                </p>

                <div className="mt-auto flex items-end justify-between pt-2">
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-[15px] font-medium mb-1">
                      Starts from
                    </span>
                    <span className="text-[26px] font-[800] text-[#0a0a0a] leading-none tracking-tight">
                      {trip.price}
                    </span>
                  </div>
                  <button className="bg-[#0aa699] hover:bg-[#0aa699]/90 text-white px-7 py-3 rounded-[30px] text-[15px] font-[600] transition-colors shadow-[0_6px_15px_rgba(10,166,153,0.35)]">
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <button className="bg-black hover:bg-gray-900 text-white px-8 py-3.5 rounded-full text-[15px] font-bold transition-all duration-300 hover:shadow-xl flex items-center gap-3">
            View all
            <ArrowRight className="w-[18px] h-[18px]" />
          </button>
        </div>
      </div>
    </section>
  );
}
