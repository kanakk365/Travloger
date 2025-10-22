import Image from "next/image";
import { Award, Headset, Percent, Users } from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "Retention",
    description:
      "95% of our clients return – once you travel with us, you rarely go elsewhere.",
  },
  {
    icon: Award,
    title: "Uncompromised Quality",
    description:
      "We work only with top providers to ensure a safe, smooth, and premium trip.",
  },
  {
    icon: Percent,
    title: "Best Deals, Always",
    description:
      "Our network ensures unbeatable value and the best prices for premium experiences.",
  },
  {
    icon: Headset,
    title: "24×7 Support",
    description:
      "We’re one WhatsApp away, 24×7 – before, during, and after your journey.",
  },
];

export default function WhyTravel() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto flex container flex-col gap-16 px-6 sm:px-16">
        <div className="text-center">
          <h2 className=" text-2xl font-semibold text-black sm:text-4xl md:text-[44px]">
            Why Travel with Travloger?
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-16 ">
          <div className="hidden sm:grid sm:h-[35rem] sm:w-[50%] gap-6 sm:auto-rows-[110px] sm:grid-cols-2 sm:grid-rows-8 lg:auto-rows-[150px]">
            <figure className="relative h-56 overflow-hidden rounded-4xl shadow-[0_25px_45px_rgba(15,23,42,0.12)] sm:col-span-1 sm:row-span-5 sm:col-start-1 sm:row-start-1 sm:h-full">
              <Image
                src="/landing/travel1.png"
                alt="Traveler standing on a cliff at sunrise"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
            </figure>
            <figure className="relative h-56 overflow-hidden rounded-4xl shadow-[0_25px_45px_rgba(15,23,42,0.12)] sm:col-span-1 sm:row-span-3 sm:col-start-2 sm:row-start-1 sm:h-full">
              <Image
                src="/landing/travel2.png"
                alt="Traveler resting on mountain peak"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
            </figure>
            <figure className="relative h-56 overflow-hidden rounded-4xl shadow-[0_25px_45px_rgba(15,23,42,0.12)] sm:col-span-1 sm:row-span-3 sm:col-start-1 sm:row-start-6 sm:h-full">
              <Image
                src="/landing/travel3.png"
                alt="Traveler climbing rocky summit"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
            </figure>
            <figure className="relative h-56 overflow-hidden rounded-4xl shadow-[0_25px_45px_rgba(15,23,42,0.12)] sm:col-span-1 sm:row-span-5 sm:col-start-2 sm:row-start-4 sm:h-full">
              <Image
                src="/landing/travel4.png"
                alt="Traveler walking through green valley"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                className="object-cover"
              />
            </figure>
          </div>

          <div className="grid gap-8 sm:gap-16 w-full sm:w-[50%] grid-cols-1 sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, description }) => (
              <article key={title} className="flex flex-col gap-4">
                <div className="flex h-14 sm:h-16 w-14 sm:w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#00A99D] to-[#009186] text-white">
                  <Icon className="h-6 sm:h-8 w-6 sm:w-8" strokeWidth={1.6} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-2xl font-semibold text-black">{title}</h3>
                  <p className="text-sm sm:text-base text-slate-600">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="px-2 sm:px-20 container relative mt-20 h-[18rem] sm:h-[20rem] md:h-[22rem] mx-auto overflow-hidden rounded-xl sm:rounded-4xl">
          <Image
            src="/landing/boat.png"
            alt="Ladakh mountain range"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[linear-gradient(269.83deg,_rgba(96,96,96,0)_-17.48%,_#000000_116.05%)]" />

          <div className="absolute inset-y-0 left-0 flex flex-col justify-end pb-6 sm:pb-10 gap-2 sm:gap-3 px-4 sm:px-12 md:px-16 text-white">
            <p className="text-sm sm:text-lg text-white/85 ">
              Travelling with 8 or more ?
            </p>
            <h3 className="text-base sm:text-2xl font-semibold ">
              Enjoy a free photographer on your trip or unlock up to 40% off as
              the trip planner.
            </h3>
            <button className="mt-2 sm:mt-3 bg-teal-500 hover:bg-teal-600 text-white border border-teal-500 px-4 sm:px-6 py-1 rounded-full w-32 sm:w-40 text-sm sm:text-base">
              Plan my trip
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
