import Image from "next/image";
import React from "react";

function UpcomingTrip() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-10 pt-0">
      <h2 className="text-center text-4xl font-semibold mb-16 tracking-widest text-slate-900 sm:text-4xl md:text-[2.75rem]">
        Best Upcoming Trips
      </h2>

      <div className="relative mt-10 h-[18rem] w-full overflow-hidden rounded-3xl  sm:h-[20rem] md:h-[17rem]">
        <Image
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80"
          alt="Ladakh mountain range"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-y-0 left-0 flex flex-col justify-end pb-10 gap-3 px-8 text-white sm:px-12 md:px-4">
          <p className="text-lg text-white/85 sm:text-2xl">Ladakh</p>
          <h3 className="text-2xl font-semibold sm:text-3xl">
            Oxygen levels low. Adventure levels: sky high.
          </h3>
          <p className="text-lg font-medium uppercase tracking-wider text-white/80">
            Start From <span className="text-[#ffba08]">₹18,999/-</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default UpcomingTrip;
