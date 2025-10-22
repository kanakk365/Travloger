"use client"
import { Menu, X, User, LogOut, Gift, Ticket, Zap } from "lucide-react";
import NextImage from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Default to true to show avatar

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-transparent">
      <div className="flex items-center">
        <Link href="/">
          <NextImage
            src="/logoblack.png"
            alt="logo"
            width={150}
            height={150}
            className="w-16 sm:w-20 md:w-24 lg:w-32 xl:w-36 h-auto"
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-20">
        <Link
          href="/"
          className="text-black hover:text-teal-400 transition-colors border-b-2 border-black pb-1"
        >
          Home
        </Link>
        <Link
          href="#"
          className="text-black/80 hover:text-black transition-colors"
        >
          Destinations
        </Link>
        <Link
          href="#"
          className="text-black/80 hover:text-black transition-colors"
        >
          Packages
        </Link>
        <Link
          href="#"
          className="text-black/80 hover:text-black transition-colors"
        >
          Blog
        </Link>
        <Link
          href="#"
          className="text-black/80 hover:text-black transition-colors"
        >
          About
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-3">
        {isLoggedIn ? (
          <>
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="p-2 rounded-full hover:bg-black/10 transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-[#00A99D] to-[#009186] rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              </button>

              {/* User Menu Popover */}
              <AnimatePresence>
                {isUserMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, originX: 1, originY: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg z-[100]"
                    style={{ transformOrigin: "top right" }}
                  >
                    <div className="flex flex-col py-2">
                      <Link
                        href="/trips"
                        className="px-6 py-3 text-black hover:bg-black/5 transition-colors flex items-center gap-3"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <Ticket className="w-4 h-4" />
                        Upcoming Trips
                      </Link>
                      <button
                        className="px-6 py-3 text-black hover:bg-black/5 transition-colors flex items-center gap-3 w-full text-left"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <Zap className="w-4 h-4" />
                        Past Trips
                      </button>
                      <button
                        className="px-6 py-3 text-black hover:bg-black/5 transition-colors flex items-center gap-3 w-full text-left"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <Gift className="w-4 h-4" />
                        Reward Wheel
                      </button>
                      <Link
                        href="/referral"
                        className="px-6 py-3 text-black hover:bg-black/5 transition-colors flex items-center gap-3"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <Zap className="w-4 h-4" />
                        Referral Tracker
                      </Link>
                    </div>

                    <div className="p-2 border-t border-black/10">
                      <button
                        className="w-full px-6 py-3 text-black hover:bg-black/5 transition-colors flex items-center gap-3 rounded"
                        onClick={() => {
                          setIsLoggedIn(false);
                          setIsUserMenuOpen(false);
                        }}
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button className="bg-black hover:bg-gray-800 cursor-pointer text-neutral-300 text-sm px-8 py-1.5 flex items-center justify-center rounded-full">
              Plan my trip
            </button>
          </>
        ) : (
          <>
            <Link href={"/login"} >
              <button className="bg-gradient-to-r cursor-pointer text-sm from-[#00A99D] to-[#009186] text-white px-8 py-1.5 flex items-center justify-center  rounded-full">
                Login
              </button>
            </Link>
            <button className="bg-black hover:bg-gray-800 cursor-pointer text-neutral-300 text-sm px-8 py-1.5 flex items-center justify-center rounded-full">
              Plan my trip
            </button>
          </>
        )}
      </div>

      {/* Mobile View: Login Button and Menu Button */}
      <div className="md:hidden flex items-center space-x-2">
        {isLoggedIn ? (
          <div className="relative">
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="p-2 rounded-full hover:bg-black/10 transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-[#00A99D] to-[#009186] rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
            </button>

            {/* User Menu Popover - Mobile */}
            <AnimatePresence>
              {isUserMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, originX: 1, originY: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg z-[100]"
                  style={{ transformOrigin: "top right" }}
                >
                  <div className="flex flex-col py-2">
                    <Link
                      href="/trips"
                      className="px-6 py-3 text-black hover:bg-black/5 transition-colors flex items-center gap-3"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <Ticket className="w-4 h-4" />
                      Upcoming Trips
                    </Link>
                    <button
                      className="px-6 py-3 text-black hover:bg-black/5 transition-colors flex items-center gap-3 w-full text-left"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <Zap className="w-4 h-4" />
                      Past Trips
                    </button>
                    <button
                      className="px-6 py-3 text-black hover:bg-black/5 transition-colors flex items-center gap-3 w-full text-left"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <Gift className="w-4 h-4" />
                      Reward Wheel
                    </button>
                    <Link
                      href="/referral"
                      className="px-6 py-3 text-black hover:bg-black/5 transition-colors flex items-center gap-3"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <Zap className="w-4 h-4" />
                      Referral Tracker
                    </Link>
                  </div>

                  <div className="p-2 border-t border-black/10">
                    <button
                      className="w-full px-6 py-3 text-black hover:bg-black/5 transition-colors flex items-center gap-3 rounded"
                      onClick={() => {
                        setIsLoggedIn(false);
                        setIsUserMenuOpen(false);
                      }}
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <Link href={"/login"} >
            <button className="bg-gradient-to-r cursor-pointer text-sm from-[#00A99D] to-[#009186] text-white px-6 py-1.5 flex items-center justify-center rounded-full">
              Login
            </button>
          </Link>
        )}
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-black p-2"
        >
          <div className={`transition-all duration-300 ease-in-out ${isMenuOpen ? 'scale-110' : 'scale-100'}`}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </div>
        </button>
      </div>

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
              <Link
                href="/"
                className="px-6 py-3 text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#"
                className="px-6 py-3 text-black  transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Destinations
              </Link>
              <Link
                href="#"
                className="px-6 py-3 text-black  transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Packages
              </Link>
              <Link
                href="#"
                className="px-6 py-3 text-black  transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="#"
                className="px-6 py-3 text-black  transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
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
    </nav>
  );
}
