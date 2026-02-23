"use client";

import Image from "next/image";

export default function ExploreBanner() {
  return (
    <section className="w-full relative overflow-hidden flex flex-col mt-4">
      <div className="w-full relative">
        <Image
          src="/explore.png"
          alt="Explore Community"
          width={2560}
          height={1440}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
