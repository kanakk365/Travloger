"use client";
import {
  BedDouble,
  Binoculars,
  Bus,
  CalendarDays,
  ChevronDown,
  RefreshCcw,
  Utensils,
  Users,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const features = [
  { icon: Bus, label: "Transport" },
  { icon: Utensils, label: "Meals Included" },
  { icon: BedDouble, label: "Stay Included" },
  { icon: RefreshCcw, label: "Transfers" },
  { icon: Binoculars, label: "Sightseeing" },
  { icon: Users, label: "Guides" },
];

const durations = [
  {
    id: "6n7d",
    title: "6N/7D",
    startsFrom: "₹15,000",
    image:
      "https://images.unsplash.com/photo-1547119957-637cd4a27c16?auto=format&fit=crop&w=420&q=80",
    active: true,
  },
  {
    id: "7n8d",
    title: "7N/8D",
    startsFrom: "₹25,000",
    image:
      "https://images.unsplash.com/photo-1494472155656-f34e81b17ddc?auto=format&fit=crop&w=420&q=80",
  },
  {
    id: "8n9d",
    title: "8N/9D",
    startsFrom: "₹35,000",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=420&q=80",
  },
  {
    id: "9n10d",
    title: "9N/10D",
    startsFrom: "₹45,000",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=420&q=80",
  },
];

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false" {...props}>
    <path
      fill="currentColor"
      d="M16 3C9.383 3 4 8.383 4 15c0 2.637.802 5.043 2.18 7.053L4 29l7.137-2.155A11.895 11.895 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3zm6.974 17.32c-.26.732-1.521 1.395-2.068 1.476-.547.082-1.24.116-2-.127-.46-.143-1.049-.343-1.812-.669-3.192-1.369-5.275-4.731-5.438-4.956-.16-.226-1.3-1.732-1.3-3.306 0-1.573.823-2.345 1.115-2.66.292-.315.64-.395.853-.395.213 0 .426.002.611.011.196.009.458-.074.717.547.26.621.872 2.147.951 2.302.078.154.13.335.022.561-.109.226-.163.335-.32.51-.156.175-.33.394-.47.527-.15.14-.306.295-.131.58.175.286.777 1.279 1.666 2.07 1.146 1.023 2.111 1.337 2.397 1.49.285.153.45.13.615-.078.165-.208.707-.823.896-1.106.19-.283.39-.236.653-.143.262.094 1.668.786 1.953.93.286.145.477.215.547.335.068.12.068.694-.191 1.426z"
    />
  </svg>
);

function Trip() {
  const [travelDate, setTravelDate] = React.useState("");

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16">
      <div className="flex flex-col-reverse gap-12 lg:grid lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-2xl font-semibold  ">Rajasthan 2025</p>
              <h1 className="text-sm text-slate-900 sm:text-sm">
                Enjoy The Best Of Rajasthan With Traveloger , Where You Will
                Find The Most Heritage Culture{" "}
                <span>
                  <button className="text-sm font-semibold text-[#009186]">
                    Read More
                  </button>
                </span>{" "}
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-8 py-4 text-sm font-medium text-emerald-600">
              <span className="rounded-full bg-gradient-to-br from-[#009186] to-[#00A99D] px-4 py-2 text-base font-semibold text-white ">
                6N / 7D
              </span>
              <div className="flex items-center gap-3 divide-x divide-neutral-300 ">
                <span className="flex items-center justify-center gap-2 text-slate-800 pr-3 ">
                  <span className="text-5xl font-extrabold text-neutral-300">
                    3
                  </span>
                  <span className="text-sm uppercase tracking-wide text-slate-500">
                    Days In
                    <br />
                    <span className="text-[#009186]">Udaipur</span>
                  </span>
                </span>
                <span className="flex  items-center justify-center gap-2 text-slate-800 pr-3">
                  <span className="text-5xl font-extrabold text-neutral-300">
                    2
                  </span>
                  <span className="text-sm uppercase tracking-wide text-slate-500">
                    Days In
                    <br />
                    <span className="text-[#009186]">Jodhpur</span>
                  </span>
                </span>
                <span className="flex items-center justify-center gap-2 text-slate-800">
                  <span className="text-5xl font-extrabold text-neutral-300">
                    2
                  </span>
                  <span className="text-sm uppercase tracking-wide text-slate-500">
                    Days In
                    <br />
                    <span className="text-[#009186]">Jaisalmer</span>
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl  bg-white/95 p-6 shadow-sm">
            <div className="grid gap-6 sm:grid-cols-3">
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-700"
                >
                  <div className="bg-emerald-50 px-3 py-3 rounded-full  bg-gradient-to-br from-[#009186] to-[#00A99D] ">
                    <Icon className="h-5 w-5 text-white" strokeWidth={1.8} />
                  </div>
                  <span className="uppercase text-base text-black ">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold uppercase text-slate-900">
              Choose Trip Duration
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {durations.map((duration) => (
                <div
                  key={duration.id}
                  className="group relative overflow-hidden bg-white transition-all duration-300 "
                >
                  <div
                    className={`relative h-36 w-40 overflow-hidden rounded-[2.5rem] ${
                      duration.active ? "border-4 border-[#009186]" : ""
                    }`}
                  >
                    <Image
                      src={duration.image}
                      alt={duration.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute inset-0 flex items-end justify-center pb-2">
                      <p className="text-2xl text-white text-center drop-shadow-lg">
                        {duration.title}
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 text-center space-y-3 px-4 py-3">
                    <div className="space-y-1">
                      <p className="text-sm text-neutral-500">
                        Starts from
                      </p>
                      <p className="text-sm font-semibold text-emerald-600 leading-tight">
                        {duration.startsFrom}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full  rounded-[32px] border border-slate-100 bg-white/95 p-8 shadow-md">
          <div className="space-y-7">
            <div>
              <p className="text-xl font-semibold  text-neutral-400">
                Rajasthan 2025
              </p>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-xl font-bold text-slate-900">
                  INR 25,000
                </span>
                <span className="text-lg font-medium text-slate-400 line-through">
                  INR 29,000
                </span>
              </div>
            </div>

            <form className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Enter your Name*"
                className="w-full rounded-full bg-[#f2f2f2] px-5 py-3 text-sm font-medium text-neutral-800 placeholder:font-normal placeholder:text-neutral-400 focus:border-[#009186] focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your Email*"
                className="w-full rounded-full bg-[#f2f2f2] px-5 py-3 text-sm font-medium text-neutral-800 placeholder:font-normal placeholder:text-neutral-400 focus:border-[#009186] focus:outline-none"
              />
              <div className="flex gap-3">
                <div className="relative">
                  <select
                    name="countryCode"
                    className="appearance-none rounded-full bg-[#f2f2f2] px-4 py-3 text-sm font-medium text-neutral-800 focus:border-[#009186] focus:outline-none"
                    defaultValue="+91"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+86">+86</option>
                    <option value="+49">+49</option>
                    <option value="+33">+33</option>
                    <option value="+81">+81</option>
                    <option value="+65">+65</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#009186]" />
                </div>
                <div className="flex-1">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number*"
                    className="w-full rounded-full bg-[#f2f2f2] px-5 py-3 text-sm font-medium text-neutral-800 placeholder:font-normal placeholder:text-neutral-400 focus:border-[#009186] focus:outline-none"
                  />
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="travelDate"
                  value={travelDate}
                  onFocus={(event) => {
                    event.target.type = "date";
                    event.target.showPicker?.();
                  }}
                  onBlur={(event) => {
                    if (!event.target.value) {
                      event.target.type = "text";
                    }
                  }}
                  onChange={(event) => setTravelDate(event.target.value)}
                  placeholder="Travel Date*"
                  className="w-full rounded-full bg-[#f2f2f2] px-5 py-3 text-sm font-medium text-neutral-800 placeholder:font-normal placeholder:text-neutral-400 focus:border-[#009186] focus:outline-none"
                />
                <CalendarDays className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald-500" />
              </div>

              <div className="relative">
                <select
                  name="travelCount"
                  className="w-full appearance-none rounded-full bg-[#f2f2f2] px-5 py-3 text-sm font-medium text-neutral-800 placeholder:font-normal placeholder:text-neutral-400 focus:border-[#009186] focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Travel Count*
                  </option>
                  <option value="2">2 Travellers</option>
                  <option value="4">4 Travellers</option>
                  <option value="6">6 Travellers</option>
                  <option value="8">8 Travellers</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#009186]" />
              </div>

              <textarea
                name="message"
                placeholder="Message*"
                rows={4}
                className="w-full min-h-[140px] resize-none rounded-3xl bg-[#f2f2f2] px-5 py-4 text-sm font-medium text-neutral-800 placeholder:font-normal placeholder:text-neutral-400 focus:border-[#009186] focus:outline-none"
              />

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-br from-[#009186] to-[#00A99D] px-6 py-3 text-base font-semibold text-white shadow-[0_18px_35px_-22px_rgba(16,185,129,0.9)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Send Enquiry
              </button>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-full border border-emerald-500 px-6 py-3 text-base font-semibold text-emerald-600 transition-colors duration-200 hover:bg-emerald-50"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <WhatsAppIcon className="h-4 w-4" />
                </span>
                Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trip;
