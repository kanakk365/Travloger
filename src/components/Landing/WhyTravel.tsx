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
      <div className="mx-auto flex container flex-col gap-16 px-16">
        <div className="text-center">
          <h2 className=" text-3xl font-semibold text-black sm:text-4xl md:text-[44px]">
            Why Travel with Travloger?
          </h2>
        </div>

        <div className="flex justify-between gap-16 ">
          <div className="grid grid-cols-1 sm:h-[35rem] sm:w-[50%] gap-6 sm:auto-rows-[110px] sm:grid-cols-2 sm:grid-rows-8 lg:auto-rows-[150px]">
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

          <div className="grid gap-16 sm:w-[50%] sm:grid-cols-2">
            {highlights.map(({ icon: Icon, title, description }) => (
              <article key={title} className="flex flex-col gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#00A99D] to-[#009186] text-white">
                  <Icon className="h-8 w-8" strokeWidth={1.6} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-black">{title}</h3>
                  <p className="text-balg text-slate-600">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className=" px-20  container relative mt-20 h-[22rem]  mx-auto overflow-hidden rounded-4xl  sm:h-[20rem] md:h-[22rem]">
          <Image
            src="/landing/boat.png"
            alt="Ladakh mountain range"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[linear-gradient(269.83deg,_rgba(96,96,96,0)_-17.48%,_#000000_116.05%)]" />

          <div className="absolute inset-y-0 left-0 flex flex-col justify-end pb-10 gap-3 px-16 text-white sm:px-12 md:px-16">
            <p className="text-lg text-white/85 sm:text-2xl">
              Travelling with 8 or more ?
            </p>
            <h3 className="text-2xl font-semibold sm:text-3xl">
              Enjoy a free photographer on your trip or unlock up to 40% off as
              the trip planner.
            </h3>
            <button className=" mt-3 bg-teal-500 hover:bg-teal-600 text-white border border-teal-500 px-6 py-1 rounded-full w-40 ">
              Plan my trip
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
