import Image from "next/image";
import {
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const socialIcons = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
];

const aboutLinks = [
  "Who we are",
  "Why Traveloger?",
  "Careers",
  "Review & love",
  "Terms and Conditions",
  "Scam Alerts",
];

const collabLinks = [
  "Local hosts & stays",
  "Influencer travel",
  "Strategic brand collab",
  "Destination promos",
  "Events & Retreats",
];

const contactDetails = [
  {
    label: "Telephone",
    value: "+91-62813-92007",
    Icon: Phone,
  },
  {
    label: "Mail",
    value: "hello@traveloger.in",
    Icon: Mail,
  },
  {
    label: "Address",
    value: "ABC road, Hyderabad, Telangana",
    Icon: MapPin,
  },
];

const tripSections = [
  {
    title: "Indian Trips",
    trips: [
      {
        name: "HAMPI",
        image:
          "/landing/hampi.png",
      },
      {
        name: "MANALI",
        image:
          "/landing/manali.png",
      },
      {
        name: "AGRA",
        image:
          "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "KASHMIR",
        image:
          "/landing/kashmir.png",
      },
      {
        name: "RAJASTHAN",
        image:
          "/landing/rajasthan.png",
      },
      {
        name: "SIKKIM",
        image:
          "/landing/sikkim.png",
      },
    ],
  },
  {
    title: "International Trips",
    trips: [
      {
        name: "THAILAND",
        image:
          "/landing/thai.png",
      },
      {
        name: "JAPAN",
        image:
          "/landing/japan.png",
      },
      {
        name: "CHINA",
        image:
          "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "BAKU",
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "PERU",
        image:
          "/landing/peru.png",
      },
      {
        name: "KOREA",
        image:
          "/landing/korea.png",
      },
    ],
  },
];

const footerLinks = [
  { label: "About us", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Privacy policy", href: "#" },
  { label: "Sitemap", href: "#" },
  { label: "Terms of Use", href: "#" },
  { label: "Blogs", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 pt-24 pb-10 md:px-12 lg:px-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative h-12 w-12">
                <Image
                  src="/landing/logo.png"
                  alt="Traveloger logo"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-semibold tracking-wide">
                  travloger.in
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              We don&apos;t just book trips. We co-create stories.
            </p>
            <div className="flex items-center space-x-4">
              {socialIcons.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="transition-transform hover:-translate-y-1"
                >
                  <Icon className="h-5 w-5 text-white" strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-12 text-sm md:grid-cols-3">
            <div>
              <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.3em] text-white/60">
                About Traveloger
              </p>
              <ul className="space-y-6 text-white/80">
                {aboutLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="transition-colors hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.3em] text-white/60">
                Collab With Us
              </p>
              <ul className="space-y-6 text-white/80">
                {collabLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="transition-colors hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-10">
              {contactDetails.map(({ label, value, Icon }) => (
                <div
                  key={label}
                  className="flex items-start space-x-3 text-white/80"
                >
                  <Icon
                    className="mt-0.5 h-6 w-6 text-white"
                    strokeWidth={1.6}
                  />
                  <div>
                    <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-white/60">
                      {label}
                    </p>
                    <p className="text-sm leading-relaxed text-white/80">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {tripSections.map(({ title, trips }) => (
          <section key={title} className="space-y-6">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.3em] text-white/70">
              {title}
            </h3>
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
              {trips.map((trip) => (
                <div
                  key={trip.name}
                  className="group relative h-32 overflow-hidden rounded-3xl border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(0,0,0,0.45)]"
                >
                  <Image
                    src={trip.image}
                    alt={trip.name}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover opacity-90 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
                  <p className="absolute inset-x-0 bottom-6 text-center text-lg font-semibold tracking-[0.2em] text-white">
                    {trip.name}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="flex flex-col gap-4 text-sm tracking-wide text-white/60 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {footerLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="transition-colors duration-200 hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
          <p className="whitespace-nowrap">© 2025, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
