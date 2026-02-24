import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Star } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

const tours = [
  {
    name: "Meghalaya",
    duration: "6 nights 7 days",
    startDate: "Sep 23",
    image: "/landing/meghalaya.png",
  },
  {
    name: "Kerala",
    duration: "6 nights 7 days",
    startDate: "Sep 23",
    image: "/landing/kerala2.png",
  },
  {
    name: "Manali",
    duration: "6 nights 7 days",
    startDate: "Sep 23",
    image: "/landing/manali2.png",
  },
  {
    name: "Meghalaya",
    duration: "6 nights 7 days",
    startDate: "Sep 23",
    image: "/landing/meghalaya.png",
  },
  {
    name: "Kerala",
    duration: "6 nights 7 days",
    startDate: "Sep 23",
    image: "/landing/kerala2.png",
  },
  {
    name: "Manali",
    duration: "6 nights 7 days",
    startDate: "Sep 23",
    image: "/landing/manali2.png",
  },
];

export default function Exclusive() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-20">
        <div className="relative h-full w-full">
          <Image
            src="/landing/exclusive.png"
            alt="Mountain landscape backdrop"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />

      <div className="relative z-10 mx-auto flex flex-col items-center gap-14 px-0 sm:px-6 text-center text-white">
        <div className="space-y-4 px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-[0.1em] text-white uppercase font-[family-name:var(--font-vollkorn-sc),_serif] font-medium drop-shadow-sm">
            Travloger&apos;s EXCLUSIVE Tours.
          </h2>
        </div>

        <Marquee
          className="w-full [--gap:1.5rem] sm:[--gap:2.5rem] [--duration:60s]"
          pauseOnHover
        >
          {tours.map((tour, index) => (
            <Link
              href="/details"
              key={`${tour.name}-${index}`}
              className="group relative flex-shrink-0 overflow-hidden w-[20rem] sm:w-[28rem] rounded-[24px] sm:rounded-[32px] shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
            >
              <div className="relative h-[220px] sm:h-[280px] w-full overflow-hidden md:h-[340px]">
                <Image
                  src={tour.image}
                  alt={`${tour.name} scenic view`}
                  fill
                  className="object-cover transition duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 320px, 448px"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition duration-500 group-hover:from-black/95" />

                <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 flex flex-col items-start gap-4">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
                    {tour.name}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 text-[13px] sm:text-[15px] font-medium">
                    <span className="flex items-center gap-2 rounded-full bg-white/20 border border-white/5 pr-4 pl-1.5 py-1.5 text-white backdrop-blur-md">
                      <div className="bg-[#0aa699] w-6 sm:w-7 h-6 sm:h-7 rounded-full flex items-center justify-center">
                        <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white text-white" />
                      </div>
                      <span className="opacity-95">{tour.duration}</span>
                    </span>
                    <span className="flex items-center gap-2 rounded-full bg-white/20 border border-white/5 px-4 py-2 sm:py-2.5 text-white backdrop-blur-md">
                      <CalendarDays
                        className="w-4 h-4 sm:w-5 sm:h-5 opacity-90"
                        strokeWidth={1.5}
                      />
                      <span className="opacity-95">{tour.startDate}</span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
