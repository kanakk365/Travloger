import Image from "next/image";
import { CalendarDays, Clock3 } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

const tours = [
  {
    name: "Meghalaya",
    duration: "6 days",
    startDate: "Sep 23",
    image: "/landing/meghalaya.png",
  },
  {
    name: "Kerala",
    duration: "6 days",
    startDate: "Sep 23",
    image: "/landing/kerala2.png",
  },
  {
    name: "Manali",
    duration: "6 days",
    startDate: "Sep 23",
    image: "/landing/manali2.png",
  },
  {
    name: "Meghalaya",
    duration: "6 days",
    startDate: "Sep 23",
    image: "/landing/meghalaya.png",
  },
  {
    name: "Kerala",
    duration: "6 days",
    startDate: "Sep 23",
    image: "/landing/kerala2.png",
  },
  {
    name: "Manali",
    duration: "6 days",
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

      <div className="relative z-10 mx-auto flex flex-col items-center gap-12 px-0 sm:px-6 text-center text-white">
        <div className="space-y-4 px-6">
          <h2 className="text-2xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Travloger&lsquo;s EXCLUSIVE Tours.
          </h2>
        </div>

        <Marquee className="w-full [--gap:1.5rem] sm:[--gap:2.5rem]" pauseOnHover>
          {tours.map((tour, index) => (
            <article
              key={`${tour.name}-${index}`}
              className="group relative flex-shrink-0 overflow-hidden w-[20rem] sm:w-[28rem] rounded-[24px] sm:rounded-[32px] shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
            >
              <div className="relative h-[180px] sm:h-[260px] w-full overflow-hidden md:h-[320px]">
                <Image
                  src={tour.image}
                  alt={`${tour.name} scenic view`}
                  fill
                  className="object-cover transition duration-500 ease-out group-hover:scale-105"
                  sizes="448px"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10 transition duration-500 group-hover:from-black/90" />

              <div className="absolute top-3 sm:top-6 right-3 sm:right-6 flex flex-wrap justify-end gap-2 sm:gap-3 text-xs sm:text-sm">
                <span className="flex items-center gap-1 sm:gap-2 rounded-full bg-black/70 px-2 sm:px-4 py-1 sm:py-2 text-white backdrop-blur">
                  <Clock3 className="h-3 sm:h-4 w-3 sm:w-4" />
                  {tour.duration}
                </span>
                <span className="flex items-center gap-1 sm:gap-2 rounded-full bg-black/70 px-2 sm:px-4 py-1 sm:py-2 text-white backdrop-blur">
                  <CalendarDays className="h-3 sm:h-4 w-3 sm:w-4" />
                  {tour.startDate}
                </span>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <h3 className="text-2xl font-semibold leading-tight sm:text-4xl md:text-[44px]">
                  {tour.name}
                </h3>
              </div>
            </article>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
