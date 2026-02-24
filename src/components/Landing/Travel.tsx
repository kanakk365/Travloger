import TravelArticleCard from "../ui/TravelArticleCard";
import { Marquee } from "../ui/marquee";

const travelArticles = [
  {
    title: "7 Hidden Gems in Bali You Can't Miss",
    image: "/landing/stories1.png",
    priority: true,
    className: "col-span-1 md:col-span-1 lg:col-span-3 row-span-1",
  },
  {
    title: "Luxury Honeymoon Ideas for 2025",
    image: "/landing/stories2.png",
    className: "col-span-1 md:col-span-1 lg:col-span-2 row-span-1",
  },
  {
    title: "Top 10 Exotic Beach Destinations for 2025",
    image: "/landing/stories5.png",
    className: "col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-2",
  },
  {
    title: "A Food Lover's Guide to Baku",
    image: "/landing/stories3.png",
    className: "col-span-1 md:col-span-1 lg:col-span-2 row-span-1",
  },
  {
    title: "Best Adventure Trips for Thrill Seekers",
    image: "/landing/stories4.png",
    className: "col-span-1 md:col-span-1 lg:col-span-3 row-span-1",
  },
];

function Travel() {
  return (
    <section
      id="travel-stories"
      className="bg-white py-8 sm:py-12 md:py-16 min-h-screen"
    >
      <div className="mx-auto w-full container px-4 sm:px-6 md:px-8 lg:px-16">
        <h2 className="text-3xl sm:text-4xl md:text-[44px] tracking-widest text-[#0a0a0a] uppercase font-[family-name:var(--font-vollkorn-sc),_serif] font-medium text-center">
          Travel Stories &amp; Guides
        </h2>

        {/* Mobile: Marquee */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 md:hidden pb-6">
          <Marquee pauseOnHover={false} className="[--gap:1rem]">
            {travelArticles.map((article, index) => (
              <div key={index} className="w-[280px] shrink-0">
                <TravelArticleCard
                  title={article.title}
                  image={article.image}
                  priority={article.priority}
                  className="h-[400px] min-h-0"
                />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Desktop: Grid */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 hidden md:grid h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-7 lg:grid-rows-2 auto-rows-[minmax(10rem,auto)] sm:auto-rows-[minmax(12rem,auto)] gap-4 sm:gap-5 md:gap-6 lg:gap-8 pb-6">
          {travelArticles.map((article, index) => (
            <TravelArticleCard
              key={index}
              title={article.title}
              image={article.image}
              priority={article.priority}
              className={article.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Travel;
