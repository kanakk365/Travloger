import { Search, Star, Users, Heart, CreditCard } from "lucide-react";
import NextImage from "next/image";

export default function HeroWithNavbar() {
  return (
    <div className="relative min-h-screen font-manrope ">
      <div className="absolute bg-black/30 min-h-screen w-full z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/landing/herobg.png')",
        }}
      />

      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6 bg-transparent">
        <div className="flex items-center">
          <NextImage src="/landing/logo.png" alt="logo" width={150} height={150} />
          <div className="ml-2 w-2 h-2 bg-teal-400 rounded-full"></div>
        </div>

        <div className="hidden md:flex items-center gap-20">
          <a
            href="#"
            className="text-white hover:text-teal-400 transition-colors border-b-2 border-white pb-1"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white transition-colors"
          >
            Destinations
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white transition-colors"
          >
            Packages
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white transition-colors"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white transition-colors"
          >
            About
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <button
            className="bg-gradient-to-r cursor-pointer text-sm from-[#00A99D] to-[#009186] text-white px-8 py-1.5 flex items-center justify-center  rounded-full"
          >
            Login
          </button>
          <button className="bg-black hover:bg-gray-800 cursor-pointer text-neutral-300 text-sm px-8 py-1.5 flex items-center justify-center rounded-full">
            Plan my trip
          </button>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center pt-20">
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-12 max-w-4xl leading-tight">
          Your Next Memory Starts in
        </h1>

        <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full p-2 w-full max-w-2xl mb-8">
          <div className="flex items-center flex-1 px-4">
            <Search className="text-white/70 w-5 h-5 mr-3" />
            <input
              type="text"
              placeholder="Search your destination"
              className="flex-1 bg-transparent border-none text-white placeholder:text-white/70 focus:ring-0 focus:outline-none text-lg"
            />
          </div>
          <button className="bg-black hover:bg-gray-800 text-neutral-300 px-8 py-2 rounded-full">
            Search
          </button>
        </div>

        <div className="flex items-center text-white text-semibold">
          <span>🌍 23 people exploring Europe this week</span>
        </div>
      </div>

      <div className="relative z-10 bg-teal-500 py-6">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 text-white">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">4.9 ⭐ Rating</span>
            </div>

            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span className="font-semibold">240k+Community</span>
            </div>

            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5" />
              <span className="font-semibold">800k+ Happy Travelers</span>
            </div>

            <div className="flex items-center space-x-2">
              <CreditCard className="w-5 h-5" />
              <span className="font-semibold">Flexible Payment Options</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
