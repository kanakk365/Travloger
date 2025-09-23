"use client"
import { useState } from "react";
import { ChevronRight, Clock, Calendar, IndianRupee, ArrowDown } from "lucide-react";

export default function TravelPlan() {
  const [budget, setBudget] = useState(10000);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">What’s your Travel Plan</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Filters Card */}
          <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 border border-black/5">
            <h3 className="text-xl font-semibold mb-6">Select your filters</h3>

            {/* Mood */}
            <div className="mb-6">
              <div className="text-sm text-gray-700 mb-3">Mood</div>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Adventure 🧗", key: "adventure" },
                  { label: "Chill 🏖️", key: "chill" },
                  { label: "Culture 🧑‍🎨", key: "culture" },
                ].map((item) => (
                  <button
                    key={item.key}
                    className="rounded-full border px-4 py-2 text-sm bg-white hover:bg-gray-50"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div className="mb-6">
              <div className="text-sm text-gray-700 mb-3">Budget</div>
              <div className="px-1">
                <input
                  type="range"
                  min={10000}
                  max={200000}
                  step={1000}
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full accent-black"
                />
                <div className="flex justify-between text-xs text-gray-600 mt-2">
                  <span>₹10k</span>
                  <span>₹2L</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="mb-6">
              <div className="text-sm text-gray-700 mb-3">Location</div>
              <div className="flex gap-3">
                <button className="rounded-full border px-4 py-2 text-sm bg-white hover:bg-gray-50">
                  🏡 Domestic
                </button>
                <button className="rounded-full border px-4 py-2 text-sm bg-white hover:bg-gray-50">
                  🌍 International
                </button>
              </div>
            </div>

            {/* Travel Style */}
            <div>
              <div className="text-sm text-gray-700 mb-3">Travel Style</div>
              <div className="flex gap-3">
                <button className="rounded-full border px-6 py-2 text-sm bg-white hover:bg-gray-50">Solo</button>
                <button className="rounded-full border px-6 py-2 text-sm bg-white hover:bg-gray-50">Group</button>
              </div>
            </div>
          </div>

          {/* Results List */}
          <div className="flex flex-col gap-6">
            {[1, 2, 3].map((card, index) => (
              <div
                key={card}
                className="relative overflow-hidden rounded-3xl h-40 md:h-44"
              >
                <img
                  src={`/landing/card-${index + 1}.jpg`}
                  alt="destination"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />

                {/* Badges */}
                <div className="absolute top-3 right-3 flex gap-2 text-[11px] text-white/90">
                  <span className="inline-flex items-center gap-1 bg-black/40 backdrop-blur rounded-full px-2 py-1">
                    <Clock className="w-3.5 h-3.5" /> 6 days
                  </span>
                  <span className="inline-flex items-center gap-1 bg-black/40 backdrop-blur rounded-full px-2 py-1">
                    <Calendar className="w-3.5 h-3.5" /> Sep 23
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="text-lg font-semibold mb-1">
                    {index === 0 ? "Valley of flowers Trek" : index === 1 ? "Kedarkantha Trek" : "Ladakh Expedition"}
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="line-through text-white/70 text-sm">₹11,600</span>
                    <span className="text-xl font-semibold inline-flex items-center gap-1">
                      <IndianRupee className="w-4 h-4" />10,000
                    </span>
                    <span className="text-xs text-white/80 mb-[2px]">per person</span>
                  </div>
                </div>

                {/* CTA */}
                <button className="absolute right-4 bottom-3 h-8 w-8 rounded-full bg-white/80 flex items-center justify-center">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}

            {/* Scroll indicator */}
            <div className="relative overflow-hidden rounded-3xl h-36">
              <img src="/landing/card-4.jpg" alt="more" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center">
                  <ArrowDown className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


