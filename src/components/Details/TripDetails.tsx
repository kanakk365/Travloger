"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const aboutDetails = [
  {
    label: "Route",
    value:
      "Delhi - Shimla - Chitkul - Kalpa - Nako - Tabo - Dhankar - Kaza - Hikkim - Komic - Langza - Key - Kibber - Chandratal - Manali - Delhi.",
  },
  { label: "Duration", value: "7 Days and 6 Nights." },
  { label: "Start Point", value: "Delhi." },
  { label: "End Point", value: "Delhi." },
];

const itinerary = [
  {
    id: "day-1",
    title: "Day 1: Udaipur | Lake Pichola | Bahubali Hills",
    highlights: [
      "Arrive & check-in.",
      "City Palace & Jagdish Temple.",
      "Lake Pichola boat ride at sunset.",
      "Dinner by the lake.",
    ],
  },
  {
    id: "day-2",
    title: "Day 2: Saheliyon Ki Bari | Fateh Sagar Lake | Hathi Pol Bazaar",
  },
  {
    id: "day-3",
    title: "Day 3: Jaisalmer Fort | Patwon Ki Haveli | Gadisar Lake",
  },
  {
    id: "day-4",
    title: "Day 4: Nathmal Ki Haveli | Bada Bagh | Sam Sand Dunes",
  },
  {
    id: "day-4b",
    title: "Day 4: Nathmal Ki Haveli | Bada Bagh | Sam Sand Dunes",
  },
  {
    id: "day-5",
    title: "Day 5: Mehrangarh Fort | Jaswant Thada | Clock Tower & Sardar Market",
  },
  {
    id: "day-6",
    title: "Day 6: Umaid Bhawan Palace | Jaswant Thada | Clock Tower & Sardar Market",
  },
];

function TripDetails() {
  const [openItems, setOpenItems] = React.useState<string[]>(["about", "day-1"]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isOpen = (id: string) => openItems.includes(id);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12">
      <div className="space-y-4">
        <div
          className={`rounded-xl border border-neutral-200 bg-white transition-all`}
        >
          <button
            type="button"
            onClick={() => toggleItem("about")}
            className="flex w-full items-center justify-between rounded-3xl px-6 py-5 text-left"
          >
            <div>
              <p className="text-lg font-semibold text-slate-900">About</p>
            </div>
            <ChevronDown
              className={`h-5 w-5 text-neutral-500 transition-transform ${
                isOpen("about") ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {isOpen("about") && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="space-y-3 border-t border-neutral-200 px-6 py-5">
                  <ul className="space-y-3 text-sm text-slate-600">
                    {aboutDetails.map(({ label, value }) => (
                      <li key={label} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 rounded-full bg-neutral-500" />
                        <span>
                          <span className="font-semibold text-neutral-500">{label}:</span> {value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {itinerary.map(({ id, title, highlights }) => {
          const open = isOpen(id);
          const isPrimaryDay = id === "day-1";

          return (
            <div
              key={id}
              className={`rounded-lg bg-[#f7f7f7] transition-all`}
            >
              <button
                type="button"
                onClick={() => toggleItem(id)}
                className={`flex w-full items-center justify-between rounded-3xl px-6 py-5 text-left ${
                  isPrimaryDay ? "text-neutral-500" : "text-neutral-500"
                }`}
              >
                <span className="text-base font-semibold">{title}</span>
                <ChevronDown
                  className={`h-5 w-5 text-neutral-500 transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {open && highlights && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden border-t border-neutral-200"
                  >
                    <div className="px-6 pb-6">
                      <ul className="mt-4 space-y-2 text-sm text-slate-600">
                        {highlights.map((point) => (
                          <li key={point} className="flex gap-3">
                            <span className="mt-2 h-1 w-1 rounded-full bg-neutral-500" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TripDetails;