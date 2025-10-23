import React from "react";

function Package() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-2xl font-semibold mb-6">
          What&apos;s in the package?
        </h1>
        <div className="flex items-center gap-4">
          <button className="py-2 px-12 border border-neutral-700 rounded-full text-neutral-500">
            Exclusion
          </button>
          <button className="py-2 px-12 border rounded-full text-white bg-black">
            Inclusion
          </button>
        </div>
      </div>

      {/* Included Section */}
      <div className="mt-10">
        <h2 className="text-2xl text-neutral-500 font-semibold mb-6">
          Included
        </h2>
        <ul className="space-y-6 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
            <span>
              Transportation: Entire Travel By Tempo Traveler As Per The
              Itinerary.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
            <span>Accommodation: Total Of 5 Nights.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
            <span>Meals Included.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
            <span>
              Entry Fees To All Sightseeing Places Mentioned In The Itinerary.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
            <span>Guided Trek To Various Points Of Interest.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
            <span>
              Team Captain Provided Throughout The Trip For Assistance And
              Guidance.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
            <span>
              Medical Kit Available For Handling Emergency Conditions.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
            <span>
              Driver Night Charges, Toll Fees, And Parking Charges Covered.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
            <span>All Necessary Inner Line Permits For The Trip Included.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
            <span>
              Cliff Jumping, Kayaking And Snorkeling With Boating Experience At
              Shnongpdeng And Also Includes Travel Insurance.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
            <span>
              Bonfire Arranged At Shnongpdeng Campsite (Weather Permitting).
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Package;
