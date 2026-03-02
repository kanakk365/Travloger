import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Marquee } from "@/components/ui/marquee";

const upcomingTrips = [
  {
    id: 1,
    destination: "Ladakh",
    tagline: "Oxygen levels low. Adventure levels: sky high.",
    price: "₹18,999",
    image: "/landing/ladakhMountain.png",
  },
  {
    id: 2,
    destination: "Ladakh",
    tagline: "Oxygen levels low. Adventure levels: sky high.",
    price: "₹18,999",
    image: "/landing/ladakhMountain.png",
  },
  {
    id: 3,
    destination: "Ladakh",
    tagline: "Oxygen levels low. Adventure levels: sky high.",
    price: "₹18,999",
    image: "/landing/ladakhMountain.png",
  },
];

function TripCard({ trip }: { trip: (typeof upcomingTrips)[0] }) {
  return (
    <Link
      href="/details"
      className="relative h-[9rem] w-[80vw] sm:h-[12rem] sm:w-[70vw] md:h-[14rem] md:w-[60vw] lg:h-[16rem] lg:w-[800px] flex-shrink-0 overflow-hidden rounded-3xl"
    >
      <Image
        src={trip.image}
        alt={`${trip.destination} landscape`}
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-y-0 left-0 flex flex-col justify-end pb-4 gap-1 px-5 text-white sm:pb-6 sm:gap-2 sm:px-6 md:px-8">
        <p className="text-xs text-white/85 sm:text-sm">{trip.destination}</p>
        <h3 className="text-sm font-semibold sm:text-lg">{trip.tagline}</h3>
        <p className="text-xs font-medium uppercase tracking-wider text-white/80 sm:text-sm mt-1">
          Start From <span className="text-[#ffba08]">{trip.price}/-</span>
        </p>
      </div>
    </Link>
  );
}

function UpcomingTrip() {
  return (
    <section className="w-full bg-white py-16 overflow-hidden">
      <div className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-2xl sm:text-[28px] tracking-widest text-[#0a0a0a] uppercase font-[family-name:var(--font-vollkorn-sc),_serif] font-medium text-center">
          Best Upcoming Trips
        </h2>
      </div>

      <div className="relative mt-10 w-full overflow-hidden">
        <div className="pointer-events-none hidden sm:block absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none hidden sm:block absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-white to-transparent" />

        <Marquee className="[--gap:2rem] [--duration:70s]" pauseOnHover>
          {upcomingTrips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default UpcomingTrip;
