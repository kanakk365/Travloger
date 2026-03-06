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
    <section id="why" className="bg-white py-20 w-full overflow-hidden">
      <div className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="w-full max-w-[1000px] xl:max-w-[1100px] mx-auto flex flex-col gap-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-[28px] md:text-[32px] tracking-widest uppercase text-[#0a0a0a] font-[family-name:var(--font-vollkorn-sc),_serif] font-medium">
              Why Travel with Travloger?
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-12">
            <div className="hidden sm:grid sm:h-[30rem] sm:w-[50%] gap-4 sm:auto-rows-[90px] sm:grid-cols-2 sm:grid-rows-8 lg:auto-rows-[120px]">
              <figure className="relative h-48 overflow-hidden rounded-[24px] shadow-[0_25px_45px_rgba(15,23,42,0.12)] sm:col-span-1 sm:row-span-5 sm:col-start-1 sm:row-start-1 sm:h-full">
                <Image
                  src="/landing/travel1.png"
                  alt="Traveler standing on a cliff at sunrise"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                  className="object-cover"
                />
              </figure>
              <figure className="relative h-48 overflow-hidden rounded-[24px] shadow-[0_25px_45px_rgba(15,23,42,0.12)] sm:col-span-1 sm:row-span-3 sm:col-start-2 sm:row-start-1 sm:h-full">
                <Image
                  src="/landing/travel2.png"
                  alt="Traveler resting on mountain peak"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                  className="object-cover"
                />
              </figure>
              <figure className="relative h-48 overflow-hidden rounded-[24px] shadow-[0_25px_45px_rgba(15,23,42,0.12)] sm:col-span-1 sm:row-span-3 sm:col-start-1 sm:row-start-6 sm:h-full">
                <Image
                  src="/landing/travel3.png"
                  alt="Traveler climbing rocky summit"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                  className="object-cover"
                />
              </figure>
              <figure className="relative h-48 overflow-hidden rounded-[24px] shadow-[0_25px_45px_rgba(15,23,42,0.12)] sm:col-span-1 sm:row-span-5 sm:col-start-2 sm:row-start-4 sm:h-full">
                <Image
                  src="/landing/travel4.png"
                  alt="Traveler walking through green valley"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                  className="object-cover"
                />
              </figure>
            </div>

            <div className="grid gap-8 sm:gap-12 w-full sm:w-[50%] grid-cols-1 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, title, description }) => (
                <article key={title} className="flex flex-col gap-3">
                  <div className="flex h-12 sm:h-14 w-12 sm:w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#00A99D] to-[#009186] text-white">
                    <Icon className="h-5 sm:h-6 w-5 sm:w-6" strokeWidth={1.6} />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-xl font-semibold text-[#0a0a0a]">
                      {title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="relative mt-8 h-auto sm:h-[220px] w-full mx-auto overflow-hidden rounded-[24px]">
            <Image
              src="/landing/boat.png"
              alt="People rafting in a river"
              fill
              priority
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

            <div className="absolute inset-y-0 left-0 flex flex-col justify-center gap-3 p-6 sm:p-8 md:p-10 text-white w-full sm:max-w-[70%] lg:max-w-[55%]">
              <h2 className="text-xl sm:text-2xl md:text-[28px] font-medium leading-tight">
                Travelling with 8 or more?
              </h2>
              <p className="text-xs sm:text-base font-normal text-white/90 leading-relaxed max-w-[480px]">
                Enjoy a free photographer on your trip or unlock up to{" "}
                <span className="font-bold text-white">40%</span> off as the
                trip planner.
              </p>
              <button className="mt-2 bg-[#0aa699] hover:bg-[#099587] transition-colors text-white px-5 py-2 rounded-full w-fit text-sm font-medium shadow-[0_8px_20px_rgba(10,166,153,0.3)]">
                Plan my trip
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
