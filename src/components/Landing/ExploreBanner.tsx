"use client";

import Image from "next/image";

export default function ExploreBanner() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-[80px] py-16">
      <div className="max-w-[1400px] mx-auto w-full relative aspect-[21/9] md:aspect-[3/1] lg:aspect-[4/1] rounded-[32px] overflow-hidden shadow-sm">
        <Image src="/explore.png" alt="Explore" fill className="object-cover" />
      </div>
    </section>
  );
}
