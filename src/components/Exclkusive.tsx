import Image from "next/image";
import { CalendarDays, Clock3 } from "lucide-react";

const tours = [
	{
		name: "Meghalaya",
		duration: "6 days",
		startDate: "Sep 23",
		image:
			"https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
	},
	{
		name: "Kerala",
		duration: "6 days",
		startDate: "Sep 23",
		image:
			"https://images.unsplash.com/photo-1572188863110-46d457c9234d?auto=format&fit=crop&w=1600&q=80",
	},
	{
		name: "Manali",
		duration: "6 days",
		startDate: "Sep 23",
		image:
			"https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80",
	},
];

export default function Exclkusive() {
	return (
		<section className="relative overflow-hidden py-24">
			<div className="absolute inset-0 -z-20">
				<div className="relative h-full w-full">
					<Image
						src="/landing/herobg.png"
						alt="Mountain landscape backdrop"
						fill
						priority
						className="object-cover"
					/>
				</div>
			</div>
			<div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />

			<div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 text-center text-white">
				<div className="space-y-4">
					<p className="text-sm uppercase tracking-[0.4em] text-white/70">Travloger’s</p>
					<h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
						EXCLUSIVE Tours.
					</h2>
					<p className="max-w-2xl text-base text-white/70 md:text-lg">
						Discover curated adventures crafted for thrill seekers and cultural explorers alike.
						Every journey promises unforgettable memories in India’s most scenic destinations.
					</p>
				</div>

				<div className="flex w-full flex-col gap-8 md:flex-row md:items-stretch md:gap-6">
					{tours.map((tour) => (
									<article
										key={tour.name}
										className="group relative flex-1 overflow-hidden rounded-[32px] shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
									>
										<div className="relative h-[260px] w-full overflow-hidden md:h-[320px]">
											<Image
												src={tour.image}
												alt={`${tour.name} scenic view`}
												fill
												className="object-cover transition duration-500 ease-out group-hover:scale-105"
												sizes="(max-width: 768px) 100vw, 33vw"
												priority
											/>
										</div>
										<div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10 transition duration-500 group-hover:from-black/90" />

							<div className="absolute top-6 left-6 flex flex-wrap gap-3 text-sm">
								<span className="flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 backdrop-blur">
									<Clock3 className="h-4 w-4" />
									{tour.duration}
								</span>
								<span className="flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 backdrop-blur">
									<CalendarDays className="h-4 w-4" />
									{tour.startDate}
								</span>
							</div>

							<div className="absolute bottom-8 left-8 text-left">
								<p className="text-sm uppercase tracking-[0.3em] text-white/70">Destination</p>
								<h3 className="text-3xl font-semibold leading-tight md:text-[40px]">{tour.name}</h3>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
 