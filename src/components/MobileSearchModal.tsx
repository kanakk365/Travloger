"use client";
import { Search, ChevronDown, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface MobileSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const trendingDestinations = [
  { name: "Bali", href: "/international/bali-tour-packages" },
  { name: "Georgia", href: "/international/georgia-tour-packages" },
  { name: "Spiti", href: "/domestic/group-trip" },
  { name: "Ladakh", href: "/domestic/leh-ladakh-tour-packages" },
  { name: "Meghalaya", href: "/domestic/meghalaya-tour-packages" },
  { name: "Vietnam", href: "/international/vietnam-tour-packages" },
];

export default function MobileSearchModal({
  isOpen,
  onClose,
}: MobileSearchModalProps) {
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isAccordionOpen = (id: string) => openAccordions.includes(id);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-[100] md:hidden"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-[101] md:hidden h-[calc(100vh-72px)] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with search */}
            <div className="mb-4 flex items-center justify-between gap-4 border-b px-5 pt-4 pb-2">
              <div className="relative w-full">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#4d4d4d]" />
                <input
                  className="flex h-9 bg-transparent px-3 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full rounded-full border border-[#aeaeae] py-5 pl-12 pr-4 text-sm text-[#5a5a5a] focus:outline-none"
                  placeholder="Search your destination..."
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  autoFocus
                />
              </div>
              <button
                onClick={onClose}
                className="flex items-center justify-center p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-[#4d4d4d]" />
              </button>
            </div>

            {/* Content */}
            <div className="relative flex-1 overflow-hidden">
              <div className="overflow-y-auto h-full">
                {/* Trending Destinations */}
                <div className="mt-0">
                  <h2 className="mb-4 px-5 font-manrope text-2xl md:px-20 md:text-3xl">
                    Trending Destinations
                  </h2>
                  <ul className="mt-4 flex flex-wrap gap-2 px-5">
                    {trendingDestinations.map((destination) => (
                      <li key={destination.name}>
                        <Link href={destination.href} onClick={onClose}>
                          <div className="inline-flex items-center transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-3xl border border-[#D8D8D8] px-4 py-2 font-manrope text-xs font-medium text-[#1F1F1F]">
                            {destination.name}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Explore all Trips */}
                <div className="mt-6 flex flex-col items-start font-manrope md:flex-row">
                  <h2 className="mb-4 px-5 font-manrope text-2xl md:px-20 md:text-3xl">
                    Explore all Trips
                  </h2>
                  <div className="w-full md:hidden">
                    {/* International Trips Accordion */}
                    <div className="w-full px-5 md:hidden md:px-20" data-orientation="vertical">
                      <div
                        data-state={isAccordionOpen("international") ? "open" : "closed"}
                        data-orientation="vertical"
                        className=""
                      >
                        <h3
                          data-orientation="vertical"
                          data-state={isAccordionOpen("international") ? "open" : "closed"}
                          className="flex"
                        >
                          <button
                            type="button"
                            aria-controls="international-content"
                            aria-expanded={isAccordionOpen("international")}
                            data-state={isAccordionOpen("international") ? "open" : "closed"}
                            data-orientation="vertical"
                            id="international-trigger"
                            className="flex flex-1 items-center justify-between py-4 text-left transition-all [&[data-state=open]>svg]:rotate-180 text-base font-medium"
                            onClick={() => toggleAccordion("international")}
                          >
                            <div className="flex items-center gap-1">
                              <span className="mr-1">✈️</span>
                              International Trips
                            </div>
                            <ChevronDown
                              className={`ml-2 h-6 w-6 shrink-0 text-muted-foreground transition-transform duration-200 ${
                                isAccordionOpen("international") ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </h3>
                        <AnimatePresence>
                          {isAccordionOpen("international") && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              id="international-content"
                              role="region"
                              aria-labelledby="international-trigger"
                              data-orientation="vertical"
                              className="overflow-hidden text-sm"
                            >
                              <div className="pb-4">
                                {/* Add international trip links here if needed */}
                                <Link
                                  href="/international/bali-tour-packages"
                                  className="block py-2 text-sm text-[#1F1F1F]"
                                  onClick={onClose}
                                >
                                  Bali
                                </Link>
                                <Link
                                  href="/international/georgia-tour-packages"
                                  className="block py-2 text-sm text-[#1F1F1F]"
                                  onClick={onClose}
                                >
                                  Georgia
                                </Link>
                                <Link
                                  href="/international/vietnam-tour-packages"
                                  className="block py-2 text-sm text-[#1F1F1F]"
                                  onClick={onClose}
                                >
                                  Vietnam
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Domestic Trips Accordion */}
                      <div
                        data-state={isAccordionOpen("domestic") ? "open" : "closed"}
                        data-orientation="vertical"
                        className=""
                      >
                        <h3
                          data-orientation="vertical"
                          data-state={isAccordionOpen("domestic") ? "open" : "closed"}
                          className="flex"
                        >
                          <button
                            type="button"
                            aria-controls="domestic-content"
                            aria-expanded={isAccordionOpen("domestic")}
                            data-state={isAccordionOpen("domestic") ? "open" : "closed"}
                            data-orientation="vertical"
                            id="domestic-trigger"
                            className="flex flex-1 items-center justify-between py-4 text-left transition-all [&[data-state=open]>svg]:rotate-180 text-base font-medium"
                            onClick={() => toggleAccordion("domestic")}
                          >
                            <div className="flex items-center gap-1">
                              <span className="mr-1">🇮🇳</span>
                              Domestic Trips
                            </div>
                            <ChevronDown
                              className={`ml-2 h-6 w-6 shrink-0 text-muted-foreground transition-transform duration-200 ${
                                isAccordionOpen("domestic") ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </h3>
                        <AnimatePresence>
                          {isAccordionOpen("domestic") && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              id="domestic-content"
                              role="region"
                              aria-labelledby="domestic-trigger"
                              data-orientation="vertical"
                              className="overflow-hidden text-sm"
                            >
                              <div className="pb-4">
                                {/* Add domestic trip links here if needed */}
                                <Link
                                  href="/domestic/group-trip"
                                  className="block py-2 text-sm text-[#1F1F1F]"
                                  onClick={onClose}
                                >
                                  Spiti
                                </Link>
                                <Link
                                  href="/domestic/leh-ladakh-tour-packages"
                                  className="block py-2 text-sm text-[#1F1F1F]"
                                  onClick={onClose}
                                >
                                  Ladakh
                                </Link>
                                <Link
                                  href="/domestic/meghalaya-tour-packages"
                                  className="block py-2 text-sm text-[#1F1F1F]"
                                  onClick={onClose}
                                >
                                  Meghalaya
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Other Links */}
                      <Link
                        className="flex justify-between py-3 text-base font-medium"
                        href="/weekend-trip-from-delhi"
                        onClick={onClose}
                      >
                        <div className="flex items-center gap-1">
                          <span className="mr-1">🚗</span>
                          Weekend Trips
                        </div>
                      </Link>
                      <Link
                        className="flex justify-between py-3 text-base font-medium"
                        href="/upcoming-trips"
                        onClick={onClose}
                      >
                        <div className="flex items-center gap-1">
                          <span className="mr-1">🧳</span>
                          Upcoming Trips
                        </div>
                      </Link>
                      <Link
                        className="flex justify-between py-3 text-base font-medium"
                        href="/corporate-tours"
                        onClick={onClose}
                      >
                        <div className="flex items-center gap-1">
                          <span className="mr-1">🏫</span>
                          Corporate Trips
                        </div>
                      </Link>
                      <Link
                        className="flex justify-between py-3 text-base font-medium"
                        href="/travel-blogs"
                        onClick={onClose}
                      >
                        <div className="flex items-center gap-1">
                          <span className="mr-1">📖</span>
                          Blogs
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

