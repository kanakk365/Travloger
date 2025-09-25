import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const destinations = [
  {
    name: "RAJASTHAN",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    oldPrice: "₹79,999/-",
    price: "₹29,999/- onwards",
  },
  {
    name: "LADAKH",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    oldPrice: "₹79,999/-",
    price: "₹69,999/- onwards",
  },
  {
    name: "HAMPI",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    oldPrice: "₹79,999/-",
    price: "₹19,999/- onwards",
  },
];

export default function Explore() {
  return (
    <section className="relative overflow-hidden pb-48 pt-24 mt-16 sm:pb-52 sm:pt-28 font-manrope bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative isolate">
          <div className="pointer-events-none absolute -inset-x-8 sm:-inset-x-18 lg:-inset-x-24 -top-28 h-[25rem] sm:h-[25rem] rounded-3xl ">
            <Image
              src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80"
              alt="Taj Mahal silhouette"
              fill
              priority
              className="object-cover object-center rounded-3xl"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-center  text-3xl sm:text-4xl md:text-5xl font-semibold tracking- text-white drop-shadow-[0_0.75rem_2.8125rem_rgba(0,0,0,0.4)]">
              Explore Incredible India
            </h2>

            <div className="relative mt-12 sm:mt-16 w-full">
              <div className="relative z-10 flex w-full items-center justify-center gap-6">
                <button className="hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-[0_1.5rem_2.8125rem_rgba(15,23,42,0.35)]">
                  <ArrowLeft className="h-5 w-5" />
                </button>

                <div className="grid w-full max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                  {destinations.map((destination) => (
                    <div
                      key={destination.name}
                      className="relative h-[26.25rem] w-full max-w-[21.25rem] overflow-hidden rounded-[2.375rem] shadow-[0_2.5rem_5rem_rgba(15,23,42,0.35)]"
                    >
                      <Image
                        src={destination.image}
                        alt={destination.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20rem"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/85" />

                      <div className="absolute inset-x-0 bottom-28 px-9 text-white">
                        <h3 className="text-[1.375rem] font-semibold tracking-[0.32em] uppercase">
                          {destination.name}
                        </h3>
                      </div>

                      <div className="absolute inset-x-0 bottom-10 px-9">
                        <p className="mb-2 text-sm text-white/65 line-through">
                          {destination.oldPrice}
                        </p>
                        <p className="text-lg font-semibold text-[#ffba08]">
                          {destination.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-[0_1.5rem_2.8125rem_rgba(15,23,42,0.35)]">
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
