import TravelArticleCard from "../ui/TravelArticleCard";

function Travel() {
  return (
    <section className="bg-white py-16 min-h-screen ">
      <div className="mx-auto w-full container px-16">
        <h2 className="text-center text-4xl font-semibold tracking-wide text-slate-900 sm:text-[2.75rem]">
          Travel Stories &amp; Guides
        </h2>

        <div className="mt-14 grid h-full grid-cols-7 grid-rows-2 auto-rows-[minmax(12rem,auto)] gap-8 pb-6 ">
          <TravelArticleCard
            title="7 Hidden Gems in Bali You Can't Miss"
            image="/landing/stories1.png"
            priority
            className=" col-span-3 row-span-1  "
          />
          <TravelArticleCard
            title="Luxury Honeymoon Ideas for 2025"
            image="/landing/stories2.png"
            className="col-span-2 row-span-1 "
          />
          <TravelArticleCard
            title="Top 10 Exotic Beach Destinations for 2025"
            image="/landing/stories5.png"
            className="col-span-2 row-span-2"
          />
          <TravelArticleCard
            title="A Food Lover's Guide to Baku"
            image="/landing/stories3.png"
            className="col-span-2 row-span-1"
          />
          <TravelArticleCard
            title="Best Adventure Trips for Thrill Seekers"
            image="/landing/stories4.png"
            className="col-span-3 row-span-1 "
          />
        </div>
      </div>
    </section>
  );
}

export default Travel;
