"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Dropdown from "@/components/ui/Dropdown";

const businessRetreats = [
  {
    title: "Day trip to Bidar",
    price: "Start from ₹4,499/head",
    priceValue: 4499,
    location: "Bidar",
    image: "/all/1.png",
  },
  {
    title: "Day trip to Warangal",
    price: "Start from ₹1,499/head",
    priceValue: 1499,
    location: "Warangal",
    image: "/all/2.png",
  },
  {
    title: "Group Stay Leonia",
    price: "Start from ₹8,499/head",
    priceValue: 8499,
    location: "Hyderabad",
    image: "/all/3.png",
  },
  {
    title: "The Park Hyderabad",
    price: "Start from ₹4,499/head",
    priceValue: 4499,
    location: "Hyderabad",
    image: "/all/4.png",
  },
  {
    title: "Lahari Resort, Hyderabad",
    price: "Start from ₹1,499/head",
    priceValue: 1499,
    location: "Hyderabad",
    image: "/all/5.png",
  },
  {
    title: "Ramoji Film City,",
    price: "Start from ₹8,499/head",
    priceValue: 8499,
    location: "Hyderabad",
    image: "/all/6.png",
  },
  {
    title: "Aalankrita Resort",
    price: "Start from ₹4,499/head",
    priceValue: 4499,
    location: "Hyderabad",
    image: "/all/7.png",
  },
  {
    title: "Button Eyes Resort",
    price: "Start from ₹1,499/head",
    priceValue: 1499,
    location: "Hyderabad",
    image: "/all/8.png",
  },
  {
    title: "Summer Green Resort",
    price: "Start from ₹8,499/head",
    priceValue: 8499,
    location: "Hyderabad",
    image: "/all/9.png",
  },
  {
    title: "Taj Falaknuma Palace",
    price: "Start from ₹4,499/head",
    priceValue: 4499,
    location: "Hyderabad",
    image: "/all/10.png",
  },
  {
    title: "Golkonda Resort and Spa",
    price: "Start from ₹1,499/head",
    priceValue: 1499,
    location: "Hyderabad",
    image: "/all/11.png",
  },
  {
    title: "Palm Exotica",
    price: "Start from ₹8,499/head",
    priceValue: 8499,
    location: "Hyderabad",
    image: "/all/12.png",
  },
];

const locationOptions = [
  { value: "All", label: "All Locations" },
  { value: "Hyderabad", label: "Hyderabad" },
  { value: "Bidar", label: "Bidar" },
  { value: "Warangal", label: "Warangal" },
];

const budgetRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "Under ₹2,000", min: 0, max: 2000 },
  { label: "₹2,000 - ₹5,000", min: 2000, max: 5000 },
  { label: "₹5,000 - ₹10,000", min: 5000, max: 10000 },
  { label: "Above ₹10,000", min: 10000, max: Infinity },
];

const budgetOptions = budgetRanges.map((budget) => ({
  value: budget.label,
  label: budget.label === "All" ? "All Budgets" : budget.label,
}));

export default function AllTripsPage() {
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedBudget, setSelectedBudget] = useState("All");

  const filteredRetreats = useMemo(() => {
    return businessRetreats.filter((retreat) => {
      // Location filter
      const locationMatch =
        selectedLocation === "All" || retreat.location === selectedLocation;

      // Budget filter
      const budgetRange = budgetRanges.find((b) => b.label === selectedBudget);
      const budgetMatch =
        !budgetRange || budgetRange.min === 0
          ? true
          : retreat.priceValue >= budgetRange.min &&
            retreat.priceValue <= budgetRange.max;

      return locationMatch && budgetMatch;
    });
  }, [selectedLocation, selectedBudget]);
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 md:px-[100px] py-20">
        {/* Title */}
        <h1 className="text-[40px] font-bold leading-[54.64px] tracking-[0.05em] text-center mb-12 text-black font-manrope">
          Business Retreats in Hyderabad.
        </h1>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center items-center">
          {/* Location Filter */}
          <Dropdown
            options={locationOptions}
            value={selectedLocation}
            onChange={setSelectedLocation}
            className="w-full md:w-[250px]"
          />

          {/* Budget Filter */}
          <Dropdown
            options={budgetOptions}
            value={selectedBudget}
            onChange={setSelectedBudget}
            className="w-full md:w-[250px]"
          />
        </div>

        {/* Results Count */}
        {filteredRetreats.length !== businessRetreats.length && (
          <div className="text-center mb-8 text-gray-600">
            Showing {filteredRetreats.length} of {businessRetreats.length} retreats
          </div>
        )}

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[36px] mb-20">
          {filteredRetreats.length > 0 ? (
            filteredRetreats.map((retreat, index) => (
            <Link
              key={index}
              href="/group-details"
              className="group relative h-[400px] overflow-hidden rounded-[32px]  p-4 cursor-pointer"
            >
              <Image
                src={retreat.image}
                alt={retreat.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority={index < 3}
              />
              
              {/* Card Overlay */}
              <div className="absolute  bottom-4 left-2 right-2 bg-black/60 backdrop-blur-sm p-4 rounded-lg">
                <div className="flex flex-col gap-[8px] h-full justify-end">
                  <h3 className="text-xl font-semibold text-white">
                    {retreat.title}
                  </h3>
                  <p className="text-base  text-[#2DD4BF]">
                    {retreat.price}
                  </p>
                </div>
              </div>
            </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-500 text-lg">No retreats found matching your filters.</p>
              <button
                onClick={() => {
                  setSelectedLocation("All");
                  setSelectedBudget("All");
                }}
                className="mt-4 text-[#009186] hover:underline font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

