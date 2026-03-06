import Image from "next/image";

const companies = [
  { name: "Microsoft", logo: "/landing/microsoft.png" },
  { name: "Amazon", logo: "/landing/amazon.png" },
  { name: "Congnizant", logo: "/landing/cogni.png" },
  { name: "Deloitte", logo: "/landing/deloitte.png" },
  { name: "Mercedes", logo: "/landing/merc.png" },
];

export default function Companies() {
  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
        <h2 className="text-2xl sm:text-[28px] md:text-[32px] tracking-widest text-[#0a0a0a] uppercase mb-2 sm:mb-4 font-[family-name:var(--font-vollkorn-sc),_serif] font-medium text-center">
          Companies that trust us
        </h2>

        <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-10 md:justify-between px-2 sm:px-6">
          {companies.map((company) => (
            <article
              key={company.name}
              className="flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={140}
                height={40}
                className="h-6 sm:h-7 md:h-8 w-auto object-contain"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
