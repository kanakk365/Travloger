import Image from "next/image";

import { Marquee } from "@/components/ui/marquee";

const companies = [
  { name: "Airbnb", logo: "/landing/logo.png" },
  { name: "Booking.com", logo: "/landing/logo.png" },
  { name: "Expedia", logo: "/landing/logo.png" },
  { name: "TripAdvisor", logo: "/landing/logo.png" },
  { name: "Kayak", logo: "/landing/logo.png" },
  { name: "Hopper", logo: "/landing/logo.png" },
  { name: "Skyscanner", logo: "/landing/logo.png" },
  { name: "Hostelworld", logo: "/landing/logo.png" },
];

export default function Companies() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center">
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-400">
            Trusted by leading brands
          </span>
          <h2 className="text-3xl font-semibold text-neutral-900 sm:text-4xl">
            Partners that power every journey
          </h2>
          <p className="max-w-2xl text-base text-neutral-500 sm:text-lg">
            We collaborate with global travel innovators to secure better deals,
            richer itineraries, and seamless experiences for our community.
          </p>
        </div>

        <div className="relative mt-4 w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />

          <Marquee className="[--gap:3rem]" pauseOnHover>
            {companies.map((company) => (
              <article
                key={company.name}
                className="flex h-16 w-40 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 px-6 text-base font-semibold text-neutral-500 shadow-[0_12px_28px_rgba(15,23,42,0.06)]"
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={96}
                  height={32}
                  className="h-8 w-auto"
                />
              </article>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
