import Image from "next/image";

import { Marquee } from "@/components/ui/marquee";

const companies = [
  { name: "Microsoft", logo: "/landing/microsoft.png" },
  { name: "Amazon", logo: "/landing/amazon.png" },
  { name: "Congnizant", logo: "/landing/cogni.png" },
  { name: "Deloitte", logo: "/landing/deloitte.png" },
  { name: "Mercedes", logo: "/landing/merc.png" },
];

export default function Companies() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl sm:text-4xl font-semibold leading-loose text-neutral-900 md:text-6xl">
            Companies that trust us
          </h2>
        </div>

        <div className="relative mt-4 w-full overflow-hidden">
          <div className="pointer-events-none hidden sm:block absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
          <div className="pointer-events-none hidden sm:block absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />

          <Marquee className="[--gap:1.5rem] sm:[--gap:3rem]" pauseOnHover>
            {companies.map((company) => (
              <article
                key={company.name}
                className="w-28 sm:w-40 flex items-center justify-center rounded-2xl text-base font-semibold text-neutral-500"
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={96}
                  height={32}
                  className="h-6 sm:h-8 w-auto"
                />
              </article>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
