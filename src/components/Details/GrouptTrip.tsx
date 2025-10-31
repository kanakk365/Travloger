"use client";
import {
  BedDouble,
  Binoculars,
  Bus,
  ChevronDown,
  Minus,
  Plus,
  RefreshCcw,
  Utensils,
  Users,
} from "lucide-react";
import React from "react";

const features = [
  { icon: Bus, label: "Transport" },
  { icon: Utensils, label: "Meals Included" },
  { icon: BedDouble, label: "Stay Included" },
  { icon: RefreshCcw, label: "Transfers" },
  { icon: Binoculars, label: "Sightseeing" },
  { icon: Users, label: "Guides" },
];

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false" {...props}>
    <path
      fill="currentColor"
      d="M16 3C9.383 3 4 8.383 4 15c0 2.637.802 5.043 2.18 7.053L4 29l7.137-2.155A11.895 11.895 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3zm6.974 17.32c-.26.732-1.521 1.395-2.068 1.476-.547.082-1.24.116-2-.127-.46-.143-1.049-.343-1.812-.669-3.192-1.369-5.275-4.731-5.438-4.956-.16-.226-1.3-1.732-1.3-3.306 0-1.573.823-2.345 1.115-2.66.292-.315.64-.395.853-.395.213 0 .426.002.611.011.196.009.458-.074.717.547.26.621.872 2.147.951 2.302.078.154.13.335.022.561-.109.226-.163.335-.32.51-.156.175-.33.394-.47.527-.15.14-.306.295-.131.58.175.286.777 1.279 1.666 2.07 1.146 1.023 2.111 1.337 2.397 1.49.285.153.45.13.615-.078.165-.208.707-.823.896-1.106.19-.283.39-.236.653-.143.262.094 1.668.786 1.953.93.286.145.477.215.547.335.068.12.068.694-.191 1.426z"
    />
  </svg>
);

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const tripDates = [
  { date: "2 Nov 2025", price: "₹15,000" },
  { date: "10 Nov 2025", price: "₹15,000" },
  { date: "18 Nov 2025", price: "₹15,000" },
];

function GrouptTrip() {
  const [selectedMonth, setSelectedMonth] = React.useState("Nov");
  const [selectedDate, setSelectedDate] = React.useState("");
  const [travelerCount, setTravelerCount] = React.useState(1);

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
            <div className="grid gap-6 grid-cols-2 md:grid-cols-3">
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

          <div className="space-y-4  ">
            <h2 className="text-lg font-semibold uppercase text-slate-900">
              Destination Route
            </h2>
            <div className=" rounded-xl px-6 py-6 text-center border-[1px] border-[#009186] bg-[#e0f3f1]  " >
              <div className="flex items-center justify-start gap-4 text-lg font-semibold text-[#009186]">
                <span className="">JODHPUR</span>
                <span className="text-xl">→</span>
                <span className="">UDAIPUR</span>
                <span className="text-xl">→</span>
                <span className="">JAISALMER</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full rounded-[32px] border border-slate-100 bg-white/95 p-8 shadow-md">
          <div className="space-y-7">
            {/* Header */}
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-[#009186]">₹15,000 per person</h3>
              <p className="text-sm text-gray-400">Excluded all the taxes</p>
            </div>

            <form className="space-y-6">
              {/* Trip Dates Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">Trip Dates</label>
                  <div className="relative">
                    <select
                      value={selectedMonth}
                      onChange={(e) => setSelectedMonth(e.target.value)}
                      className="appearance-none rounded-lg border border-[#009186] bg-white px-4 py-2 pr-8 text-sm font-medium text-[#009186] focus:outline-none focus:ring-2 focus:ring-[#009186] focus:ring-offset-1"
                    >
                      {months.map((month) => (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-[#009186]" />
                  </div>
                </div>
                <div className="space-y-8 mt-4">
                  {tripDates.map((trip, index) => (
                    <label
                      key={index}
                      className="flex items-center justify-between cursor-pointer rounded-lg transition-colors"
                    >
                      <div className="flex-1">
                        <div className="font-semibold font-xl text-gray-900">{trip.date}</div>
                        <div className="text-xs text-gray-400 mt-0.5">
                          Starting {trip.price}/person
                        </div>
                      </div>
                      <input
                        type="radio"
                        name="tripDate"
                        value={trip.date}
                        checked={selectedDate === trip.date}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="h-8 w-8 cursor-pointer"
                        style={{ accentColor: '#009186' }}
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* No. of Travellers Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">No.of Travellers</label>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setTravelerCount(Math.max(1, travelerCount - 1))}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#009186] to-[#00A99D] text-white transition-opacity hover:opacity-90"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="min-w-[2rem] text-center text-base font-medium text-gray-900">
                      {travelerCount}
                    </span>
                    <button
                      type="button"
                      onClick={() => setTravelerCount(travelerCount + 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#009186] to-[#00A99D] text-white transition-opacity hover:opacity-90"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-br from-[#009186] to-[#00A99D] px-6 py-3 text-base font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Send Enquiry
                </button>

                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-[#009186] bg-white px-6 py-3 text-base font-semibold text-[#009186] transition-colors duration-200 hover:bg-[#009186]/5"
                >
                  <WhatsAppIcon className="h-5 w-5 text-green-500" />
                  Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GrouptTrip;
