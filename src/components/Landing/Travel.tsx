import TravelArticleCard from "../ui/TravelArticleCard";

function Travel() {
  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 min-h-screen">
      <div className="mx-auto w-full container px-4 sm:px-6 md:px-8 lg:px-16">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-semibold tracking-wide text-slate-900">
          Travel Stories &amp; Guides
        </h2>

        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 grid h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-7 lg:grid-rows-2 auto-rows-[minmax(10rem,auto)] sm:auto-rows-[minmax(12rem,auto)] gap-4 sm:gap-5 md:gap-6 lg:gap-8 pb-6">
          <TravelArticleCard
            title="7 Hidden Gems in Bali You Can't Miss"
            image="/landing/stories1.png"
            priority
            className="col-span-1 md:col-span-1 lg:col-span-3 row-span-1"
          />
          <TravelArticleCard
            title="Luxury Honeymoon Ideas for 2025"
            image="/landing/stories2.png"
            className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1"
          />
          <TravelArticleCard
            title="Top 10 Exotic Beach Destinations for 2025"
            image="/landing/stories5.png"
            className="col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-2"
          />
          <TravelArticleCard
            title="A Food Lover's Guide to Baku"
            image="/landing/stories3.png"
            className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1"
          />
          <TravelArticleCard
            title="Best Adventure Trips for Thrill Seekers"
            image="/landing/stories4.png"
            className="col-span-1 md:col-span-1 lg:col-span-3 row-span-1"
          />
        </div>
      </div>
    </section>
  );
}

export default Travel;
