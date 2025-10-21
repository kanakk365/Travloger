import Image from "next/image";
import React from "react";

const photoCards = [
  {
    id: 1,
    image:
      "/landing/photo1.png",
    likes: "1,688",
    badge: "Most Liked",
    badgeClasses: "bg-teal-300 text-slate-900",
    heartClasses: "text-pink-500",
    filled: true,
  },
  {
    id: 2,
    image:
      "/landing/photo2.png",
    likes: "1,688",
    heartClasses: "text-white",
  },
  {
    id: 3,
    image:
      "/landing/photo3.png",
    likes: "1,688",
    heartClasses: "text-white",
  },
];

function Photographs() {
  return (
    <section className="w-full bg-gradient-to-b from-[#2C2C2C] to-black py-16 ">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6">
        <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
          Best Trip photographs
        </h2>

        <div className="mt-12 grid w-full gap-8 md:grid-cols-3">
          {photoCards.map(
            ({
              id,
              image,
              likes,
              badge,
              badgeClasses,
              heartClasses,
              filled,
            }) => (
              <article
                key={id}
                className="flex min-h-[30rem] flex-col items-center gap-6 rounded-3xl bg-[#909090] shadow-2xl"
              >
                <div className="relative w-full h-[80%] overflow-hidden rounded-t-2xl bg-neutral-800/60">
                  <div className="relative h-full w-full">
                    <Image
                      src={image}
                      alt="Best trip photograph"
                      fill
                      sizes="(max-width: 768px) 100vw, 32vw"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      priority={id === 1}
                    />
                  </div>

                  {badge && (
                    <span
                      className={` bg-teal-500 hover:bg-teal-600 text-white border border-teal-500 absolute right-4 top-4 rounded-full px-4 py-1 text-xs font-semibold sm:text-sm ${badgeClasses}`}
                    >
                      {badge}
                    </span>
                  )}
                </div>
                <div className="flex w-full items-center justify-between px-5">
                  <div className="flex w-full items-center justify-between rounded-full bg-neutral-900 pl-5 pr-2 py-2">
                    <span className="flex items-center gap-2 text-sm font-semibold text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={`h-5 w-5 ${heartClasses}`}
                      >
                        <path
                          stroke="currentColor"
                          fill={filled ? "currentColor" : "none"}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M12.032 20.704c-.366.11-.698-.208-.978-.45-4.491-3.945-7.137-6.88-7.137-10.254 0-2.246 1.703-4.5 4.13-4.5 1.44 0 2.644.802 3.386 1.86.742-1.058 1.946-1.86 3.386-1.86 2.427 0 4.13 2.254 4.13 4.5 0 3.374-2.646 6.309-7.137 10.254-.28.242-.612.56-.78.45Z"
                        />
                      </svg>
                      {likes}
                    </span>

                    <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-colors hover:bg-[#f4f4f4]">
                      Plan this trip
                    </button>
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Photographs;
