"use client"
import { Search, Menu, X } from "lucide-react";
import NextImage from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function HeroWithNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="relative sm:min-h-screen h-96 font-manrope ">
      <div className="absolute bg-black/30 sm:min-h-screen h-96 w-full z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/landing/herobg.png')",
        }}
      />

      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between sm:px-10 px-2 py-6 bg-transparent">
        <div className="flex items-center">
          <NextImage
            src="/landing/logo.png"
            alt="logo"
            width={150}
            height={150}
            className="w-16 sm:w-20 md:w-24 lg:w-32 xl:w-36 h-auto"
          />
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

        <div className="hidden md:flex items-center space-x-3">
          <Link href={"/login"} >
            <button className="bg-gradient-to-r cursor-pointer text-sm from-[#00A99D] to-[#009186] text-white px-8 py-1.5 flex items-center justify-center  rounded-full">
              Login
            </button>
          </Link>
          <button className="bg-black hover:bg-gray-800 cursor-pointer text-neutral-300 text-sm px-8 py-1.5 flex items-center justify-center rounded-full">
            Plan my trip
          </button>
        </div>

        {/* Mobile View: Login Button and Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <Link href={"/login"} >
            <button className="bg-gradient-to-r cursor-pointer text-sm from-[#00A99D] to-[#009186] text-white px-6 py-1.5 flex items-center justify-center rounded-full">
              Login
            </button>
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
          >
            <div className={`transition-all duration-300 ease-in-out ${isMenuOpen ? 'scale-110' : 'scale-100'}`}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0, originX: 1, originY: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed rounded-lg top-20 right-3 w-64 bg-white/20 backdrop-blur-lg shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-[60]"
            style={{ transformOrigin: "top right" }}
          >
            <div className="flex flex-col py-4">
              <a
                href="#"
                className="px-6 py-3 text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#"
                className="px-6 py-3 text-white  transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Destinations
              </a>
              <a
                href="#"
                className="px-6 py-3 text-white  transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Packages
              </a>
              <a
                href="#"
                className="px-6 py-3 text-white  transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              <a
                href="#"
                className="px-6 py-3 text-white  transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </div>

            <div className="p-4 space-y-3 border-t">
              <button
                className="w-full bg-black hover:bg-gray-800 cursor-pointer text-neutral-300 text-sm py-2.5 flex items-center justify-center rounded-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Plan my trip
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center justify-center sm:min-h-screen h-96 sm:px-6 px-2 text-center pt-20">
        <h1 className="text-white text-3xl md:text-6xl sm:font-bold font-semibold sm:mb-12 mb-8 max-w-4xl leading-tight">
          Your Next Memory Starts in
        </h1>

        <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full sm:p-2 p-1.5 w-full sm:max-w-2xl max-w-xs mb-8">
          <div className="flex items-center flex-1 sm:px-4 px-2">
            <Search className="text-white/70 sm:w-5 sm:h-5 w-4 h-4 mr-2 sm:mr-3" />
            <input
              type="text"
              placeholder="Search your destination"
              className="flex-1 bg-transparent border-none text-white placeholder:text-white/70 focus:ring-0 focus:outline-none sm:text-lg text-sm"
            />
          </div>
          <button className="bg-black hover:bg-gray-800 text-neutral-300 sm:px-8 px-4 sm:py-2 py-1 text-sm sm:text-base rounded-full">
            Search
          </button>
        </div>

        <div className="flex items-center text-sm sm:text-base text-white text-semibold">
          <span>🌍 23 people exploring Europe this week</span>
        </div>
      </div>

      <div className="relative z-10 bg-teal-500 py-6">
        <div className="max-w-7xl mx-auto sm:px-6 md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-8 text-white">
            <div className="flex items-center sm:space-x-2">
              <NextImage
                src="/landing/google.svg"
                alt="google"
                width={100}
                height={100}
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              />
              <span className="font-semibold text-xs sm:text-sm md:text-base">
                4.9 ⭐<span className="hidden sm:inline"> Rating</span>
              </span>
            </div>

            <div className="hidden md:block">
              <NextImage
                src="/landing/glyph.svg"
                alt="separator"
                width={24}
                height={24}
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              />
            </div>

            <div className="flex items-center space-x-1 sm:space-x-2">
              <NextImage
                src="/landing/instagram.svg"
                alt="instagram"
                width={100}
                height={100}
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              />
              <span className="font-semibold text-xs sm:text-sm md:text-base">240k+ Community</span>
            </div>

            <div className="hidden md:block">
              <NextImage
                src="/landing/glyph.svg"
                alt="separator"
                width={24}
                height={24}
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              />
            </div>

            <div className="flex items-center space-x-1 sm:space-x-2">
              <NextImage
                src="/landing/happy.svg"
                alt="happy"
                width={32}
                height={32}
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              />
              <span className="font-semibold text-xs sm:text-sm md:text-base">800k+ Happy</span>
            </div>

            <div className="hidden md:block">
                <NextImage
                src="/landing/glyph.svg"
                alt="separator"
                width={24}
                height={24}
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              />
            </div>

            <div className="flex items-center space-x-1 sm:space-x-2">
              <NextImage
                src="/landing/Flexible.svg"
                alt="flexible"
                width={32}
                height={32}
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              />
              <span className="font-semibold text-xs sm:text-sm md:text-base">Flexible Payment</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
