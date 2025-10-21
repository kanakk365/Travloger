import Image from "next/image";
import { Play } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

const stories = [
  {
    name: "Traveler recording in Tbilisi",
    image: "/landing/real1.png",
  },
  {
    name: "Traveler sharing city skyline",
    image: "/landing/real2.png",
  },
  {
    name: "Traveler vlogging at seaside",
    image: "/landing/real3.png",
  },
  {
    name: "Traveler exploring mountains",
    image: "/landing/real4.png",
  },
  {
    name: "Traveler recording in Tbilisi",
    image: "/landing/real1.png",
  },
  {
    name: "Traveler sharing city skyline",
    image: "/landing/real2.png",
  },
  {
    name: "Traveler vlogging at seaside",
    image: "/landing/real3.png",
  },
  {
    name: "Traveler exploring mountains",
    image: "/landing/real4.png",
  },
];

export default function Real() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto flex w-full flex-col items-center gap-14 px-6 text-center">
        <h2 className="font-poppins text-3xl font-semibold text-black sm:text-4xl md:text-[44px]">
          Real Stories. Real Memories.
        </h2>

        <Marquee className="w-full [--gap:2rem]" pauseOnHover>
          {stories.map((story, index) => (
            <article
              key={`${story.name}-${index}`}
              className="group relative flex-shrink-0 w-96 overflow-hidden rounded-[36px] "
            >
              <div className="relative h-[30rem] w-full">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  sizes="320px"
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  priority={index < 2}
                />
              </div>

              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                
                  <Play
                    className="h-14 w-14 text-white"
                    strokeWidth={1.5}
                    fill="currentColor"
                  />
                
              </div>
            </article>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
