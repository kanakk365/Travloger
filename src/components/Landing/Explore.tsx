"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const destinations = [
  {
    name: "RAJASTHAN",
    image: "/landing/rajasthan.png",
    oldPrice: "₹79,999/-",
    price: "₹29,999/- onwards",
  },
  {
    name: "LADAKH",
    image: "/landing/ladakh.png",
    oldPrice: "₹79,999/-",
    price: "₹29,999/- onwards",
  },
  {
    name: "HAMPI",
    image: "/landing/hampitemple.png",
    oldPrice: "₹79,999/-",
    price: "₹29,999/- onwards",
  },
];

export default function Explore() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-[80px] py-16">
      <div className="max-w-[1400px] mx-auto relative flex flex-col items-center">
        {/* Background Image Banner */}
        <div className="w-full relative h-[260px] md:h-[360px] lg:h-[400px] rounded-[32px] overflow-hidden">
          <Image
            src="/landing/city.png"
            alt="Incredible India"
            fill
            className="object-cover object-center"
          />
          {/* Title inside the banner */}
          <div className="absolute top-[35%] md:top-[30%] lg:top-[32%] w-full flex justify-center px-4">
            <h2 className="text-3xl sm:text-4xl md:text-[44px] tracking-widest text-[#0a0a0a] uppercase font-[family-name:var(--font-vollkorn-sc),_serif] font-medium text-center">
              Explore Incredible India
            </h2>
          </div>
        </div>

        {/* Cards Wrapper */}
        <div className="w-full max-w-[1240px] relative mt-[-100px] md:mt-[-160px] lg:mt-[-180px] z-10 pb-8">
          {/* Arrows */}
          <button className="hidden md:flex absolute -left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-20 h-[48px] w-[48px] items-center justify-center rounded-full bg-black text-white shadow-[0_4px_14px_rgba(0,0,0,0.5)] hover:bg-gray-900 transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </button>

          <button className="hidden md:flex absolute -right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-20 h-[48px] w-[48px] items-center justify-center rounded-full bg-black text-white shadow-[0_4px_14px_rgba(0,0,0,0.5)] hover:bg-gray-900 transition-colors">
            <ArrowRight className="h-5 w-5" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
            {destinations.map((destination) => (
              <Link
                href="/details"
                key={destination.name}
                className="w-full group"
              >
                <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)] group-hover:-translate-y-2 transition-transform duration-300">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Text Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col">
                    <h3 className="text-white text-[28px] md:text-[32px] font-[800] tracking-wide mb-2 uppercase">
                      {destination.name}
                    </h3>
                    <div className="flex items-center gap-[10px]">
                      <span className="text-white/70 text-[14px] line-through decoration-white/70 font-medium tracking-wide">
                        {destination.oldPrice}
                      </span>
                      <span className="text-white text-[15.5px] font-[700] tracking-wide">
                        {destination.price}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
