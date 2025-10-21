import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const destinations = [
  {
    name: "RAJASTHAN",
    image:
      "/landing/rajasthan.png",
    oldPrice: "₹79,999/-",
    price: "₹29,999/- onwards",
  },
  {
    name: "LADAKH",
    image:
      "/landing/ladakh.png",
    oldPrice: "₹79,999/-",
    price: "₹69,999/- onwards",
  },
  {
    name: "HAMPI",
    image:
      "/landing/hampitemple.png",
    oldPrice: "₹79,999/-",
    price: "₹19,999/- onwards",
  },
];

export default function Explore() {
  return (
    <section className="relative overflow-hidden pb-20 pt-24 mt-16 sm:pb-32 sm:pt-28 font-manrope bg-white">
      <div className="max-w-7xl mx-auto px-10">
        <div className="relative isolate">
          <div className="pointer-events-none absolute -inset-x-8 sm:-inset-x-18 lg:-inset-x-24 -top-28 h-[25rem] sm:h-[25rem] rounded-3xl ">
            <Image
              src="/landing/city.png"
              alt="Taj Mahal silhouette"
              fill
              priority
              className="object-cover object-center rounded-3xl"
            />
          </div>

          <div className="relative z-10 w-full flex flex-col items-center">
            <h2 className="text-center  text-3xl sm:text-4xl md:text-5xl font-semibold tracking- text-white drop-shadow-[0_0.75rem_2.8125rem_rgba(0,0,0,0.4)]">
              Explore Incredible India
            </h2>

            <div className="relative mt-12 sm:mt-16 w-full">
              <div className="relative z-10 w-full">
                <button className=" z-10 pointer-events-auto hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-[0_1.5rem_2.8125rem_rgba(15,23,42,0.35)] absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
                  <ArrowLeft className="h-5 w-5" />
                </button>

                <div className="grid w-full grid-cols-1 gap-y-16 gap-x-14 sm:grid-cols-2 lg:grid-cols-3 justify-items-center md:mx-auto px-8">
                  {destinations.map((destination) => (
                    <div
                      key={destination.name}
                      className="group relative h-[28rem] w-[23rem] overflow-hidden rounded-3xl shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)] cursor-pointer"
                    >
                      <Image
                        src={destination.image}
                        alt={destination.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20rem"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/85" />

                      <div className="absolute inset-0 flex flex-col">
                        <div className="flex pt-8 flex-1 items-center justify-center px-9 text-center text-white">
                          <h3 className="text-2xl font-extrabold tracking-[0.32em] uppercase">
                            {destination.name}
                          </h3>
                        </div>

                        <div className="px-9 pb-10">
                          <div className="flex items-baseline gap-3">
                            <p className="text-base text-white/65 line-through">
                              {destination.oldPrice}
                            </p>
                            <p className="text-xl font-semibold text-[#FBB429]">
                              {destination.price}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="pointer-events-auto hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-[0_1.5rem_2.8125rem_rgba(15,23,42,0.35)] absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
