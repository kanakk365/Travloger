import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const destinations = [
  {
    name: "VIETNAM",
    image:
      "/landing/vietnam.png",
    oldPrice: "₹79,999/-",
    price: "₹29,999/- onwards",
  },
  {
    name: "BALI",
    image:
      "/landing/bali.png",
    oldPrice: "₹79,999/-",
    price: "₹69,999/- onwards",
  },
  {
    name: "SINGAPORE",
    image:
      "/landing/singapore.png",
    oldPrice: "₹79,999/-",
    price: "₹19,999/- onwards",
  },
];

export default function Trending() {
  return (
    <section className="relative overflow-hidden mt-20 pb-20  font-manrope bg-white">
      <div className="max-w-7xl mx-auto  ">
        <h1 className="text-4xl font-semibold text-neutral-800 ">
            Trending Destinations
        </h1>
        <div className="relative isolate">


          <div className="relative z-10 w-full flex flex-col items-center px-7">
            <div className="relative mt-16 w-full">
              <div className="relative z-10 w-full">
                <button className=" z-10 pointer-events-auto hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-black text-white  absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">
                  <ArrowLeft className="h-5 w-5" />
                </button>

                <div className="grid w-full grid-cols-1 gap-y-16 gap-x-14 sm:grid-cols-2 lg:grid-cols-3 justify-items-center md:mx-auto px-8">
                  {destinations.map((destination) => (
                    <div
                      key={destination.name}
                      className="relative h-[28rem] w-[23rem] overflow-hidden rounded-3xl shadow-[0px_4px_16px_0px_rgba(0,0,0,0.25)]"
                    >
                      <Image
                        src={destination.image}
                        alt={destination.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20rem"
                        className="object-cover"
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

                <button className="pointer-events-auto hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-black text-white absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
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
