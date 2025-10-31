
import NavbarWhite from "@/components/NavbarWhite";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Page() {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="relative w-full">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/about/hero.jpg"
            alt="about-hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-black/60" />
        </div>
        <div className="relative">
          <NavbarWhite />
        </div>

        <div className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-28">
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="text-sm tracking-[0.25em] text-[#F4F4F4]">Unplug. Explore. Get Captured.</p>
            <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight">India’s 1st Photography-Led Travel Brand</h1>
            <p className="text-white/90 max-w-3xl text-base md:text-lg">
              We’re India’s first photography-led travel company — built on a simple idea: travelers should live every
              moment, not pause to click it.
            </p>
            <div className="flex items-center gap-4">
              <button className="rounded-full px-6 py-3 bg-white/20 hover:bg-white/30 text-white text-sm transition">Explore Journeys</button>
              <button className="rounded-full px-6 py-3 bg-gradient-to-r from-[#009186] to-[#00A99D] text-white text-sm">Meet the Team</button>
            </div>
          </div>
        </div>

        {/* Partner/Stats strip under hero */}
        <div className="w-full">
          <div className="mx-auto max-w-6xl px-6 md:px-10 py-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 bg-white rounded-xl shadow-sm p-4 md:p-6">
              <StatItem number="₹7 Cr+" label="Revenue created" />
              <StatItem number="6,000+" label="Leisure guests" />
              <StatItem number="10,000+" label="Total including corporates" />
              <StatItem number="500+" label="Journeys curated" />
            </div>
          </div>
        </div>
      </section>

      {/* Who we are blurb */}
      <section className="mx-auto max-w-5xl px-6 md:px-10 py-12 md:py-16">
        <h2 className="text-2xl md:text-4xl font-extrabold text-black text-center mb-4">Milestones That Made Us Who We Are</h2>
        <p className="text-center text-[#6B6B6B] text-base md:text-lg">
          Our curated journeys free you from screens and distractions. While you immerse in destinations, our professional
          storytellers frame the candid moments — turning each trip into a timeless memory.
        </p>
      </section>

      {/* Our Journey timeline (simplified) */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-8 md:py-16">
        <h3 className="text-2xl md:text-3xl font-extrabold mb-10">Our Journey</h3>
        <div className="relative">
          <div className="absolute left-1.5 md:left-2 top-0 bottom-0 w-[2px] bg-black/10" />
          <div className="space-y-10">
            <TimelineItem year="2021" title="Ideation" desc="The spark: merge photography, marketing, and travel into one experience. Research, brainstorming, and early concept validation began here." />
            <TimelineItem year="2022" title="Experiment & Learn" desc="Launched corporate travel vertical, curating experiences for Amazon, Microsoft, Mercedes, Hyundai, MG, Salesforce, HSBC, and others." />
            <TimelineItem year="2023" title="Scaling Up" desc="Expanded destinations and premium experiences while keeping storytelling at the core of every journey." />
            <TimelineItem year="2024" title="Evolving the Brand" desc="Growing partnerships, international departures, and seamless photography-led travel across segments." />
          </div>
        </div>
      </section>

      {/* The Spark Behind Travloger (Founders cards) */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-10 md:py-16">
        <h3 className="text-2xl md:text-3xl font-extrabold text-center mb-12">The Spark Behind Travloger</h3>
        <div className="grid md:grid-cols-2 gap-10">
          <SparkCard
            heading="Travloger was never a company I sat down to build. It was born out of a childhood dream…"
            text="Growing up, travel fascinated me even though it wasn’t common in my family. During Covid, I realized I wanted to create meaningful journeys — helping people travel as storytellers, not tourists. In 2021, my skills in marketing, photography, and storytelling came together to spark Travloger. From our first local trips to luxury and international adventures, we focus on seamless travel, capturing memories beautifully, and creating personal experiences — and this is just the beginning."
            image="/about/founder-1.jpg"
            name="Vinay Kumar, Founder & CEO"
          />
          <SparkCard
            heading="At Travloger, we began our journey with a simple belief — travel should be lived, not just documented."
            text="What began as a small idea to free travelers from gadgets has grown into a movement where every moment is captured, letting people be fully present. We’ve curated experiences for 3,000+ travelers and partnered with brands like Amazon, Microsoft, Mercedes, Hyundai, and MG. Our goal is to build a global brand from India that inspires people to disconnect, reconnect, and experience the true essence of travel."
            image="/about/founder-2.jpg"
            name="Neeraj, CXO & Co-founder"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-10 md:py-16">
        <h3 className="text-2xl md:text-3xl font-extrabold text-center mb-12">Real Experiences of People with Us</h3>
        <div className="grid lg:grid-cols-2 gap-8">
          <TestimonialCard
            name="Ananya Sharma"
            text="Travloger doesn’t just take you places — they craft experiences. From seamless trips to capturing every memory beautifully, they made every journey unforgettable. I didn’t just travel — I truly lived it."
            image="/about/testimonial-1.jpg"
          />
          <TestimonialCard
            name="Rohit Verma"
            text="I’ve traveled before, but never like this. Travloger made everything simple, fun, and deeply memorable. I felt fully present, and every experience was truly special."
            image="/about/testimonial-2.jpg"
          />
        </div>
      </section>

      {/* Gallery highlight (Best Trip photographs) */}
      <section className="relative w-full bg-gradient-to-b from-[#2C2C2C] to-black text-white">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-14 md:py-20">
          <h3 className="text-3xl md:text-5xl font-extrabold mb-10">Best Trip photographs</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <PhotoCard src="/about/photo-1.jpg" likes="1,688" />
            <PhotoCard src="/about/photo-2.jpg" likes="1,688" />
            <div className="relative">
              <PhotoCard src="/about/photo-3.jpg" likes="1,688" />
              <div className="absolute top-3 right-3 px-3 py-1 rounded-2xl border border-white/40 bg-white/10 text-xs">Most Liked</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom nav for internal pages can reuse site navbar styling */}
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-12">
        <Navbar />
      </div>
    </main>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-2xl md:text-3xl font-extrabold text-black">{number}</div>
      <div className="text-sm text-black/70">{label}</div>
    </div>
  );
}

function TimelineItem({ year, title, desc }: { year: string; title: string; desc: string }) {
  return (
    <div className="relative pl-10">
      <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-gradient-to-b from-[#00A99D] to-[#009186]" />
      <div className="flex flex-col gap-1">
        <span className="text-sm font-extrabold text-black/80">{year}</span>
        <h4 className="text-lg md:text-xl font-extrabold">{title}</h4>
        <p className="text-sm md:text-base text-black/70 max-w-3xl">{desc}</p>
      </div>
    </div>
  );
}

function SparkCard({ heading, text, image, name }: { heading: string; text: string; image: string; name: string }) {
  return (
    <div className="grid md:grid-cols-[280px,1fr] gap-8 items-start">
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl bg-neutral-200">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="space-y-4">
        <h4 className="text-lg md:text-xl font-extrabold leading-relaxed">{heading}</h4>
        <p className="text-black/70 leading-8">{text}</p>
        <div className="inline-flex items-center rounded-lg bg-gradient-to-r from-[#00A99D] to-[#009186] text-white px-4 py-2 text-sm font-semibold">
          {name}
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ name, text, image }: { name: string; text: string; image: string }) {
  return (
    <div className="grid md:grid-cols-[260px,1fr] gap-8 rounded-2xl bg-white shadow-sm p-6">
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-neutral-200">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="flex flex-col justify-center">
        <h4 className="text-xl font-semibold mb-3 text-black">{name}</h4>
        <p className="text-black/70 leading-8">{text}</p>
      </div>
    </div>
  );
}

function PhotoCard({ src, likes }: { src: string; likes: string }) {
  return (
    <div className="relative overflow-hidden rounded-3xl">
      <div className="relative w-full aspect-[3/4]">
        <Image src={src} alt="trip-photo" fill className="object-cover" />
      </div>
      <div className="absolute left-4 bottom-4 flex items-center gap-2 rounded-full bg-white/20 backdrop-blur text-white px-4 py-2 text-sm">
        <span className="inline-block h-3 w-3 rounded-full bg-white" />
        <span>{likes}</span>
        <span className="opacity-80">likes</span>
      </div>
      <button className="absolute right-4 bottom-4 rounded-full bg-white text-black px-4 py-2 text-sm">Plan this trip</button>
    </div>
  );
}