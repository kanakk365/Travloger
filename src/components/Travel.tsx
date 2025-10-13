import TravelArticleCard from "./ui/TravelArticleCard";

function Travel() {
  return (
    <section className="bg-white py-16 h-screen ">
      <div className="mx-auto w-full container px-16">
        <h2 className="text-center text-4xl font-semibold tracking-wide text-slate-900 sm:text-[2.75rem]">
          Travel Stories &amp; Guides
        </h2>

  <div className="mt-14 grid h-full grid-cols-7 grid-rows-2 auto-rows-[minmax(12rem,auto)] gap-8 pb-6 ">
          <TravelArticleCard
            title="7 Hidden Gems in Bali You Can't Miss"
            image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
            priority
            className=" col-span-3 row-span-1  "
          />
          <TravelArticleCard
            title="Luxury Honeymoon Ideas for 2025"
            image="https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=1600&q=80"
            className="col-span-2 row-span-1 "
          />
          <TravelArticleCard
            title="Top 10 Exotic Beach Destinations for 2025"
            image="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1600&q=80"
            className="col-span-2 row-span-2"
          />
          <TravelArticleCard
            title="A Food Lover's Guide to Baku"
            image="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1600&q=80"
            className="col-span-2 row-span-1"
          />
          <TravelArticleCard
            title="Best Adventure Trips for Thrill Seekers"
            image="https://images.unsplash.com/photo-1526481280695-3c469928b67b?auto=format&fit=crop&w=1600&q=80"
            className="col-span-3 row-span-1 "
          />
        </div>
      </div>
    </section>
  );
}

export default Travel;