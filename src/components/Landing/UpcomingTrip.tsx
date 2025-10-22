import Image from "next/image";
import React from "react";
import { Marquee } from "@/components/ui/marquee";

const upcomingTrips = [
  {
    id: 1,
    destination: "Ladakh",
    tagline: "Oxygen levels low. Adventure levels: sky high.",
    price: "₹18,999",
    image: "/landing/ladakhMountain.png"
  },
  {
    id: 2,
    destination: "Ladakh",
    tagline: "Oxygen levels low. Adventure levels: sky high.",
    price: "₹18,999",
    image: "/landing/ladakhMountain.png"
  },
  {
    id: 3,
    destination: "Ladakh",
    tagline: "Oxygen levels low. Adventure levels: sky high.",
    price: "₹18,999",
    image: "/landing/ladakhMountain.png"
  },
];

function TripCard({ trip }: { trip: typeof upcomingTrips[0] }) {
  return (
    <div className="relative h-[14rem] w-[20rem] flex-shrink-0 overflow-hidden rounded-3xl sm:h-[18rem] sm:w-[28rem] md:h-[17rem] md:w-7xl">
      <Image
        src={trip.image}
        alt={`${trip.destination} landscape`}
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-y-0 left-0 flex flex-col justify-end pb-6 gap-2 px-6 text-white sm:pb-10 sm:gap-3 sm:px-8 md:px-4">
        <p className="text-sm text-white/85 sm:text-lg md:text-2xl">{trip.destination}</p>
        <h3 className="text-base font-semibold sm:text-2xl md:text-3xl">
          {trip.tagline}
        </h3>
        <p className="text-sm font-medium uppercase tracking-wider text-white/80 sm:text-lg">
          Start From <span className="text-[#ffba08]">{trip.price}/-</span>
        </p>
      </div>
    </div>
  );
}

function UpcomingTrip() {
  return (
    <section className="mx-auto w-full px-6">
      <h2 className="text-center text-4xl font-semibold mb-16 tracking-widest text-slate-900 sm:text-4xl md:text-[2.75rem]">
        Best Upcoming Trips
      </h2>

      <div className="relative mt-10 w-full overflow-hidden">
        <div className="pointer-events-none hidden sm:block absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none hidden sm:block absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-white to-transparent" />

        <Marquee className="[--gap:2rem]" pauseOnHover>
          {upcomingTrips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default UpcomingTrip;
