"use client";
import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useMemo,
  type ChangeEvent,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import {
  Search,
  Menu,
  X,
  User,
  LogOut,
  Gift,
  Ticket,
  Zap,
  Phone,
  ChevronDown,
} from "lucide-react";
import NextImage from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

type VanishSearchInputProps = {
  placeholders: string[];
};

type Pixel = { x: number; y: number; r: number; color: string };

function VanishSearchInput({ placeholders }: VanishSearchInputProps) {
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [value, setValue] = useState("");
  const [animating, setAnimating] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const newDataRef = useRef<Pixel[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const draw = useCallback(() => {
    const input = inputRef.current;
    const container = formRef.current;
    const canvas = canvasRef.current;
    if (!input || !canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = container.getBoundingClientRect();
    canvas.width = Math.max(1, Math.floor(width));
    canvas.height = Math.max(1, Math.floor(height));
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const computedStyles = getComputedStyle(input);
    const fontSize = parseFloat(computedStyles.fontSize || "14");
    const fontFamily = computedStyles.fontFamily || "sans-serif";
    const fontWeight = computedStyles.fontWeight || "500";
    ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;

    // For light mode, we want the particles to be dark
    ctx.fillStyle = "rgba(0,0,0,0.85)";
    ctx.textBaseline = "middle";

    const containerRect = container.getBoundingClientRect();
    const inputRect = input.getBoundingClientRect();
    const textStartX = Math.max(0, inputRect.left - containerRect.left);
    const textBaseline =
      inputRect.top - containerRect.top + inputRect.height / 2;

    ctx.fillText(value, textStartX, textBaseline);

    const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels: Pixel[] = [];

    for (let y = 0; y < canvas.height; y += 1) {
      for (let x = 0; x < canvas.width; x += 1) {
        const index = (y * canvas.width + x) * 4;
        const r = data[index];
        const g = data[index + 1];
        const b = data[index + 2];
        const a = data[index + 3];
        if (a > 0) {
          pixels.push({
            x,
            y,
            r: 1,
            color: `rgba(${r},${g},${b},${a / 255})`,
          });
        }
      }
    }

    newDataRef.current = pixels;
  }, [value]);

  const animateOut = useCallback((start: number) => {
    const step = (pos = start) => {
      requestAnimationFrame(() => {
        const remaining: Pixel[] = [];
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (ctx && canvas) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        newDataRef.current.forEach((pixel) => {
          if (pixel.x < pos) {
            remaining.push(pixel);
            return;
          }

          const updated: Pixel = {
            ...pixel,
            x: pixel.x + (Math.random() > 0.5 ? 1 : -1),
            y: pixel.y + (Math.random() > 0.5 ? 1 : -1),
            r: Math.max(0, pixel.r - 0.05 * Math.random()),
          };

          if (updated.r > 0) {
            remaining.push(updated);
          }
        });

        newDataRef.current = remaining;

        if (ctx && canvas) {
          remaining.forEach((pixel) => {
            if (pixel.r <= 0) return;
            ctx.fillStyle = pixel.color;
            ctx.fillRect(pixel.x, pixel.y, pixel.r, pixel.r);
          });
        }

        if (remaining.length > 0) {
          step(pos - 6);
        } else {
          setValue("");
          setAnimating(false);
        }
      });
    };

    step(start);
  }, []);

  const vanishAndSubmit = useCallback(() => {
    if (!value || animating) return;
    setAnimating(true);
    draw();

    const maxX = newDataRef.current.reduce(
      (prev, pixel) => (pixel.x > prev ? pixel.x : prev),
      0,
    );

    animateOut(maxX);
  }, [animateOut, animating, draw, value]);

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      vanishAndSubmit();
      // Optional: Add submit logic here
    },
    [vanishAndSubmit],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        event.preventDefault();
        vanishAndSubmit();
      }
    },
    [vanishAndSubmit],
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!animating) {
        setValue(event.target.value);
      }
    },
    [animating],
  );

  useEffect(() => {
    draw();
  }, [draw]);

  useEffect(() => {
    const startAnimation = () => {
      if (intervalRef.current) return;
      intervalRef.current = setInterval(() => {
        setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
      }, 3000);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        startAnimation();
      } else if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    startAnimation();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [placeholders.length]);

  return (
    <form
      ref={formRef}
      className="relative flex w-full items-center bg-[#f4f5f6] hover:bg-[#ebebeb] transition-colors rounded-[24px] px-1 py-1 sm:h-[42px] h-10"
      onSubmit={handleSubmit}
    >
      <canvas
        ref={canvasRef}
        className={cn(
          "pointer-events-none absolute inset-0 z-10 h-full w-full select-none",
          animating ? "opacity-100" : "opacity-0",
        )}
      />

      <div className="flex items-center flex-1 px-3 sm:px-[14px] relative z-20 w-full h-full">
        <Search className="text-gray-500 w-4 h-4 sm:w-[15px] sm:h-[15px] mr-2 shrink-0" />

        <div className="relative flex-1 h-full flex items-center">
          <input
            ref={inputRef}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            type="text"
            className={cn(
              "w-full bg-transparent border-none text-gray-800 placeholder:text-gray-500 focus:ring-0 focus:outline-none text-[13px] md:text-[13px] font-medium leading-none mt-[2px]",
              animating && "text-transparent",
            )}
          />

          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center max-w-full overflow-hidden">
            <AnimatePresence mode="wait">
              {!value && !animating && (
                <motion.span
                  key={`placeholder-${currentPlaceholder}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: "linear" }}
                  className="text-gray-500 text-[13px] md:text-[13px] font-medium truncate mt-[2px]"
                >
                  {placeholders[currentPlaceholder]}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <button type="submit" disabled={!value || animating} className="sr-only">
        Search
      </button>
    </form>
  );
}

export default function NewNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Can be changed based on auth state

  const vanishPlaceholders = useMemo(
    () => [
      "Search your destination",
      "Find your next adventure",
      "Discover hidden gems",
    ],
    [],
  );

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#0aa699] w-full py-[10px] flex items-center justify-center text-white text-[13px] sm:text-[14px] font-medium z-50">
        Ladhak Spiti Early Bird - Save up to ₹3,000 🎉
      </div>

      {/* Main White Navbar */}
      <div className="bg-white w-full z-40 relative shadow-sm">
        {/* Main Row */}
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-[60px] xl:px-[80px] py-4 md:py-[14px]">
          {/* Logo - Left */}
          <div className="flex items-center w-auto shrink-0">
            <NextImage
              src="/landing/logo.png"
              alt="logo"
              width={160}
              height={160}
              className="w-28 sm:w-32 md:w-36 lg:w-[130px] h-auto brightness-0"
              priority
            />
          </div>

          {/* Right actions (Search & Login & Mobile Icons) */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-[14px] shrink-0">
            <div className="hidden md:flex w-[240px] xl:w-[260px]">
              <VanishSearchInput placeholders={vanishPlaceholders} />
            </div>

            <div className="md:hidden flex items-center shrink-0">
              <button
                onClick={() => (window.location.href = "tel:+1234567890")}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5 text-gray-700" />
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 p-2 ml-1"
              >
                <div
                  className={`transition-all duration-300 ease-in-out ${isMenuOpen ? "scale-110" : "scale-100"}`}
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </div>
              </button>
            </div>

            <div className="hidden md:flex items-center shrink-0">
              {isLoggedIn ? (
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="p-[2px] rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#0aa699] rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isUserMenuOpen && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                          originX: 1,
                          originY: 0,
                        }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="absolute right-0 mt-2 w-56 bg-white border border-gray-100 rounded-lg shadow-xl z-[100]"
                        style={{ transformOrigin: "top right" }}
                      >
                        <div className="flex flex-col py-2">
                          <Link
                            href="/trips"
                            className="px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-3"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            <Ticket className="w-4 h-4" />
                            Upcoming Trips
                          </Link>
                          <button
                            className="px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-3 w-full text-left"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            <Zap className="w-4 h-4" />
                            Past Trips
                          </button>
                          <button
                            className="px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-3 w-full text-left"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            <Gift className="w-4 h-4" />
                            Reward Wheel
                          </button>
                          <Link
                            href="/referral"
                            className="px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-3"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            <Zap className="w-4 h-4" />
                            Referral Tracker
                          </Link>
                        </div>
                        <div className="p-2 border-t border-gray-100">
                          <button
                            className="w-full px-6 py-3 text-red-600 hover:bg-red-50 transition-colors flex items-center gap-3 rounded"
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
                <Link href={"/login"}>
                  <button className="bg-[#0aa699] hover:bg-[#0aa699]/90 cursor-pointer text-[14px] text-white px-[44px] py-[10px] sm:h-[42px] font-medium transition-colors flex items-center justify-center rounded-[24px]">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Categories Row (Desktops/Tablets) */}
        <div className="hidden lg:flex items-center justify-center lg:gap-[32px] xl:gap-[42px] pb-[20px] pt-1 text-[14.5px] font-[600] text-[#333333]">
          <div className="flex items-center gap-[6px] cursor-pointer hover:text-[#0aa699] transition-colors whitespace-nowrap">
            <span className="text-base leading-none">👫</span> Group Trips{" "}
            <ChevronDown
              className="w-3.5 h-3.5 text-gray-500 mt-[2px]"
              strokeWidth={2.5}
            />
          </div>
          <div className="flex items-center gap-[6px] cursor-pointer hover:text-[#0aa699] transition-colors whitespace-nowrap">
            <span className="text-base leading-none">🤝</span> Deals{" "}
            <ChevronDown
              className="w-3.5 h-3.5 text-gray-500 mt-[2px]"
              strokeWidth={2.5}
            />
          </div>
          <div className="flex items-center gap-[6px] cursor-pointer hover:text-[#0aa699] transition-colors whitespace-nowrap">
            <span className="text-base leading-none">✈️</span> Travel Styles{" "}
            <ChevronDown
              className="w-3.5 h-3.5 text-gray-500 mt-[2px]"
              strokeWidth={2.5}
            />
          </div>
          <div className="flex items-center gap-[6px] cursor-pointer hover:text-[#0aa699] transition-colors whitespace-nowrap">
            <span className="text-base leading-none">👥</span> Upcoming Group
            Trips{" "}
            <ChevronDown
              className="w-3.5 h-3.5 text-gray-500 mt-[2px]"
              strokeWidth={2.5}
            />
          </div>
          <div className="flex items-center gap-[6px] cursor-pointer hover:text-[#0aa699] transition-colors whitespace-nowrap">
            <span className="text-base leading-none">🚗</span> Weekend Trips{" "}
            <ChevronDown
              className="w-3.5 h-3.5 text-gray-500 mt-[2px]"
              strokeWidth={2.5}
            />
          </div>
          <div className="flex items-center gap-[6px] cursor-pointer hover:text-[#0aa699] transition-colors whitespace-nowrap">
            <span className="text-base leading-none">🌍</span> Customised Trips{" "}
            <ChevronDown
              className="w-3.5 h-3.5 text-gray-500 mt-[2px]"
              strokeWidth={2.5}
            />
          </div>
          <div className="flex items-center gap-[6px] cursor-pointer hover:text-[#0aa699] transition-colors whitespace-nowrap">
            <span className="text-base leading-none">💖</span> More about Us{" "}
            <ChevronDown
              className="w-3.5 h-3.5 text-gray-500 mt-[2px]"
              strokeWidth={2.5}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute top-[110px] left-4 right-4 bg-white rounded-xl shadow-2xl md:hidden z-[60] border border-gray-100"
            style={{ transformOrigin: "top" }}
          >
            <div className="flex flex-col py-2">
              <div className="px-4 py-3">
                <VanishSearchInput placeholders={vanishPlaceholders} />
              </div>
              <a
                href="#"
                className="flex items-center justify-between px-6 py-3 text-gray-800 hover:bg-gray-50 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#destinations"
                className="flex items-center justify-between px-6 py-3 text-gray-800 hover:bg-gray-50 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Destinations
              </a>
              <Link
                href="/group-details"
                className="flex items-center justify-between px-6 py-3 text-gray-800 hover:bg-gray-50 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Group Trips
              </Link>
              <Link
                href="/#travel-stories"
                className="flex items-center justify-between px-6 py-3 text-gray-800 hover:bg-gray-50 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <a
                href="#why"
                className="flex items-center justify-between px-6 py-3 text-gray-800 hover:bg-gray-50 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>

              {!isLoggedIn && (
                <div className="p-4 border-t border-gray-100">
                  <Link
                    href={"/login"}
                    className="block w-full text-center bg-[#0aa699] text-white py-2.5 rounded-full font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
