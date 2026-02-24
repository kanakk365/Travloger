"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Marquee } from "../ui/marquee";

const reviews = [
  {
    id: 1,
    name: "Ria Shah",
    role: "UIUX Designer",
    text: "I've used other kits, but this one is the best. The attention to detail and usability are truly amazing for all designers. I highly recommend it for any type of project.",
    avatar:
      "https://api.dicebear.com/7.x/notionists/svg?seed=Ria&backgroundColor=e6f0ff",
  },
  {
    id: 2,
    name: "Disha Mehta",
    role: "Front End Developer",
    text: "I planned a 7-day Bali vacation and Traveloger handled everything—from flight tracking to day-wise activity suggestions. What I loved most was how it adapted when plans changed due to weather.",
    avatar:
      "https://api.dicebear.com/7.x/notionists/svg?seed=Disha&backgroundColor=e6e6e6",
  },
  {
    id: 3,
    name: "Sia Jain",
    role: "3D Designer",
    text: "Traveling with parents and kids usually means chaos, but Traveloger kept everything organized. Tickets, hotel details, attraction timings—all in one place.",
    avatar:
      "https://api.dicebear.com/7.x/notionists/svg?seed=Sia&backgroundColor=e6ffe6",
  },
  {
    id: 4,
    name: "Ram Sharma",
    role: "Graphic Designer",
    text: "During my Europe backpacking trip, I stored booking info and noted experiences directly inside Traveloger. It feels like a timeline of my journey. It's not just a...",
    avatar:
      "https://api.dicebear.com/7.x/notionists/svg?seed=Ram&backgroundColor=f0e6ff",
  },
  {
    id: 5,
    name: "Aditi Verma",
    role: "Software Engineer",
    text: "An absolute game-changer. The recommendations were spot on and the itinerary was flawless. Saved me so much time and stress.",
    avatar:
      "https://api.dicebear.com/7.x/notionists/svg?seed=Aditi&backgroundColor=ffe6e6",
  },
  {
    id: 6,
    name: "Karan Patel",
    role: "Marketing Specialist",
    text: "I loved the seamless integration of all my bookings into one single dashboard. Made my trip across Southeast Asia a breeze!",
    avatar:
      "https://api.dicebear.com/7.x/notionists/svg?seed=Karan&backgroundColor=e6ffff",
  },
];

interface ReviewCardProps {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

const ReviewCard = ({ name, role, text, avatar }: ReviewCardProps) => {
  return (
    <div className="flex flex-col p-6 sm:p-7 md:p-8 bg-white rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100/50 w-[300px] sm:w-[360px] md:w-[420px] shrink-0 mx-2">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
            <Image
              src={avatar}
              alt={name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <h4 className="text-[15px] md:text-[17px] font-semibold text-gray-900 leading-tight truncate">
              {name}
            </h4>
            <p className="text-[13px] md:text-sm text-gray-500 font-medium truncate">
              {role}
            </p>
          </div>
        </div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 md:w-[18px] md:h-[18px] fill-[#F97316] text-[#F97316]"
            />
          ))}
        </div>
      </div>
      <p className="text-[#333333] font-medium text-[14px] md:text-[15px] leading-relaxed">
        {text}
      </p>
    </div>
  );
};

export default function Reviews() {
  const firstRow = [...reviews].slice(0, 3);
  const secondRow = [...reviews].slice(3, 6);
  // Duplicate arrays for seamless marquee infinite loop
  const row1 = [...firstRow, ...firstRow, ...firstRow];
  const row2 = [...secondRow, ...secondRow, ...secondRow];

  return (
    <section className="bg-white py-24 w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-[44px] tracking-widest text-[#0a0a0a] uppercase mb-16 font-[family-name:var(--font-vollkorn-sc),_serif] font-medium text-center">
          Reviews From Our Travellers
        </h2>

        <div className="relative flex flex-col w-full items-center justify-center gap-6 px-4">


          {/* Row 1 - Left to Right */}
          <Marquee
            pauseOnHover
            reverse
            className="[--duration:40s] [--gap:2rem]"
          >
            {row1.map((review, idx) => (
              <ReviewCard key={`row1-${idx}`} {...review} />
            ))}
          </Marquee>

          {/* Row 2 - Right to Left */}
          <Marquee pauseOnHover className="[--duration:45s] [--gap:2rem]">
            {row2.map((review, idx) => (
              <ReviewCard key={`row2-${idx}`} {...review} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
