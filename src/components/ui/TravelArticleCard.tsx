import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface TravelArticleCardProps {
  title: string;
  image: string;
  priority?: boolean;
  className:string
}

function TravelArticleCard({ title, image, priority = false , className }: TravelArticleCardProps) {
  return (
    <article className = {`group relative overflow-hidden rounded-[28px] h-full bg-slate-900 min-h-[20rem]  ${className }`} >
      <Image
        src={image}
        alt={title}
        fill
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div className="flex w-full justify-end">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/25 backdrop-blur-md transition-colors duration-300 group-hover:bg-white/35">
            <ArrowUpRight className="h-5 w-5 text-white" />
          </span>
        </div>

        <p className="max-w-[20ch] text-2xl font-semibold leading-loose text-white sm:text-xl">
          {title}
        </p>
      </div>
    </article>
  );
}

export default TravelArticleCard;
