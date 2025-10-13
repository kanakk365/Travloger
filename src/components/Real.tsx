import Image from "next/image";
import { Play } from "lucide-react";

const stories = [
  {
    name: "Traveler recording in Tbilisi",
    image:
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Traveler sharing city skyline",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Traveler vlogging at seaside",
    image:
      "https://images.unsplash.com/photo-1525189401768-6c2250d0aa5d?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function Real() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-14 px-6 text-center">
        <h2 className="font-poppins text-3xl font-semibold text-black sm:text-4xl md:text-[44px]">
          Real Stories. Real Memories.
        </h2>

        <div className="flex w-full flex-col gap-8 md:flex-row">
          {stories.map((story, index) => (
            <article
              key={story.name}
              className="group relative flex-1 overflow-hidden rounded-[36px] shadow-[0_30px_45px_rgba(15,23,42,0.12)]"
            >
              <div className="relative h-[30rem] w-full">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  priority={index === 0}
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
        </div>
      </div>
    </section>
  );
}
