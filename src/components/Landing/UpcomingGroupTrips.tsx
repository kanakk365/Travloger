"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Play, Star, ArrowRight } from "lucide-react";

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
  {
    title: "10 days In Kerala",
    image:
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80",
    location: "India",
    duration: "9 nights 10 days",
    dates: ["Sep 15", "Oct 10", "Nov 05"],
    description: "Enjoy the scenic backwaters and lush greenery of Kerala.",
    price: "₹ 45,000",
  },
  {
    title: "7 days In Dubai",
    image:
      "https://images.unsplash.com/photo-1512453979436-5a0045f8f8ed?auto=format&fit=crop&w=600&q=80",
    location: "UAE",
    duration: "6 nights 7 days",
    dates: ["Dec 01", "Dec 15", "Jan 05"],
    description: "Experience the luxury and modern architecture of Dubai.",
    price: "₹ 65,000",
  },
  {
    title: "6 days In Meghalaya",
    image:
      "https://images.unsplash.com/photo-1571536802807-6c2e17666ed8?auto=format&fit=crop&w=600&q=80",
    location: "India",
    duration: "5 nights 6 days",
    dates: ["Jul 20", "Aug 15", "Sep 10"],
    description: "Explore the breathtaking waterfalls and living root bridges.",
    price: "₹ 38,000",
  },
];

const tabs = [
  "All",
  "Leh",
  "Spiti Valley",
  "Meghalaya",
  "Himachal Pradesh",
  "Dubai",
  "Almaty",
  "Bhutan",
];

export default function UpcomingGroupTrips() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <section className="w-full bg-white py-16 overflow-hidden">
      <div className="w-full flex flex-col items-start px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex w-full items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-[28px] tracking-widest text-[#0a0a0a] uppercase font-[family-name:var(--font-vollkorn-sc),_serif] font-medium">
            Upcoming Group Trips
          </h2>
          <button className="bg-black hover:bg-gray-900 text-white px-6 py-2.5 rounded-full text-[14px] font-bold transition-all duration-300 flex items-center gap-2">
            View all
            <ArrowRight className="w-[16px] h-[16px]" />
          </button>
        </div>

        <div className="flex flex-wrap justify-start gap-4 mb-12 max-w-[1200px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 px-5 py-[6px] rounded-full text-[13.5px] font-[600] transition-colors border ${
                activeTab === tab
                  ? "bg-[#0aa699] text-white border-transparent"
                  : "bg-white text-gray-500 border-gray-300 hover:bg-gray-50 hover:text-gray-800"
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
      </div>

      <div className="w-full overflow-x-auto pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex gap-6 pl-4 sm:pl-6 md:pl-8 lg:pl-12 xl:pl-16 pr-4 sm:pr-6 md:pr-8 lg:pr-12 xl:pr-16 xl:max-w-none">
          {trips.map((trip, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] overflow-hidden flex flex-col shadow-lg group transition-transform duration-300 hover:-translate-y-2 w-[300px] sm:w-[340px] md:w-[380px] flex-shrink-0"
            >
              <div className="relative w-full aspect-[5/4] rounded-t-[24px] overflow-hidden">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />

                <div className="absolute top-[14px] left-[14px] right-[14px] flex justify-between items-start z-10">
                  <div className="flex items-center gap-[6px] bg-[#1f4b66]/80 backdrop-blur-md text-white pr-[12px] pl-[5px] py-[5px] rounded-full text-[13px] font-medium">
                    <div className="bg-[#0aa699] w-[20px] h-[20px] rounded-full flex items-center justify-center shadow-sm">
                      <Star className="w-[10px] h-[10px] fill-white text-white" />
                    </div>
                    {trip.duration}
                  </div>
                  <div className="flex items-center gap-[6px] bg-white/30 backdrop-blur-md text-white px-[12px] py-[6px] rounded-full text-[13px] font-medium border border-white/10">
                    <MapPin className="w-[13px] h-[13px] fill-white text-white" />
                    {trip.location}
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center z-10 pb-8">
                  <div className="w-[72px] h-[72px] bg-white/30 rounded-full flex items-center justify-center backdrop-blur-[2px] group-hover:scale-110 transition-transform duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/20">
                    <button className="w-[48px] h-[48px] bg-white rounded-full flex items-center justify-center shadow-md">
                      <Play className="w-[18px] h-[18px] text-[#0aa699] ml-1 fill-current" />
                    </button>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-black text-white py-[10px] px-5 text-[13.5px] font-medium z-10">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-[6px]">
                      <span className="text-[14px] leading-none mb-[1px] opacity-90">
                        📅
                      </span>
                      {trip.dates[0]}
                    </div>

                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[16px] h-[16px] text-white"
                    >
                      <path
                        d="M12 0L13.7 8.3L22 10L13.7 11.7L12 20L10.3 11.7L2 10L10.3 8.3L12 0Z"
                        fill="currentColor"
                      />
                    </svg>

                    <div className="flex items-center gap-[6px]">
                      <span className="text-[14px] leading-none mb-[1px] opacity-90">
                        📅
                      </span>
                      {trip.dates[1]}
                    </div>

                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[16px] h-[16px] text-white"
                    >
                      <path
                        d="M12 0L13.7 8.3L22 10L13.7 11.7L12 20L10.3 11.7L2 10L10.3 8.3L12 0Z"
                        fill="currentColor"
                      />
                    </svg>

                    <div className="flex items-center gap-[6px]">
                      <span className="text-[14px] leading-none mb-[1px] opacity-90">
                        📅
                      </span>
                      {trip.dates[2]}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 md:p-6 text-left flex flex-col flex-grow bg-white z-20">
                <h3 className="text-[19px] font-[800] text-[#0a0a0a] mb-[8px] leading-tight tracking-tight">
                  {trip.title}
                </h3>
                <p className="text-gray-500 text-[14px] leading-[1.6] mb-5 font-medium pr-2 line-clamp-2">
                  {trip.description}{" "}
                  <button className="text-[#0aa699] font-[700] hover:underline whitespace-nowrap">
                    Readmore
                  </button>
                </p>

                <div className="mt-auto flex items-end justify-between pt-2">
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-[13px] font-medium mb-1">
                      Starts from
                    </span>
                    <span className="text-[22px] font-[800] text-[#0a0a0a] leading-none tracking-tight">
                      {trip.price}
                    </span>
                  </div>
                  <button className="bg-[#0aa699] hover:bg-[#0aa699]/90 text-white px-5 py-2.5 rounded-[24px] text-[14px] font-[600] transition-colors shadow-[0_6px_15px_rgba(10,166,153,0.35)] cursor-pointer">
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
