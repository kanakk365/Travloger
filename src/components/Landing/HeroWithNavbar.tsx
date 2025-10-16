"use client"
import { Search, Menu, X } from "lucide-react";
import NextImage from "next/image";
import Link from "next/link";
import type { ChangeEvent, FormEvent, KeyboardEvent } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, type MotionProps } from "motion/react";
import { cn } from "@/lib/utils";


export default function HeroWithNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const headingAnimation: MotionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
      };

  const searchAnimation: MotionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 32 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.25 },
      };

  const infoAnimation: MotionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 },
      };

  const vanishPlaceholders = useMemo(
    () => [
      "Search your destination",
      "Find your next adventure",
      "Discover hidden gems",
    ],
    []
  );
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
        <motion.h1
          className="text-white text-3xl md:text-6xl sm:font-bold font-semibold sm:mb-12 mb-8 max-w-4xl leading-tight"
          {...headingAnimation}
        >
          Your Next Memory Starts in
        </motion.h1>

        <motion.div
          className="flex items-center bg-white/20 backdrop-blur-sm rounded-full sm:p-2 p-1.5 w-full sm:max-w-2xl max-w-xs mb-8"
          {...searchAnimation}
        >
          <VanishSearchInput placeholders={vanishPlaceholders} />
        </motion.div>

        <motion.div
          className="flex items-center text-sm sm:text-base text-white text-semibold"
          {...infoAnimation}
        >
          <span>🌍 23 people exploring Europe this week</span>
        </motion.div>
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
    const fontSize = parseFloat(computedStyles.fontSize || "16");
    const fontFamily = computedStyles.fontFamily || "sans-serif";
    const fontWeight = computedStyles.fontWeight || "400";
    ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
    const color =
      computedStyles.color && computedStyles.color !== "transparent"
        ? computedStyles.color
        : "rgba(255,255,255,0.92)";
    ctx.fillStyle = color;
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
        if (a > 0 && (r > 0 || g > 0 || b > 0)) {
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
      0
    );

    animateOut(maxX);
  }, [animateOut, animating, draw, value]);

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      vanishAndSubmit();
    },
    [vanishAndSubmit]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        event.preventDefault();
        vanishAndSubmit();
      }
    },
    [vanishAndSubmit]
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!animating) {
        setValue(event.target.value);
      }
    },
    [animating]
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
      className="relative flex w-full items-center"
      onSubmit={handleSubmit}
    >
      <canvas
        ref={canvasRef}
        className={cn(
          "pointer-events-none absolute inset-0 z-10 h-full w-full select-none",
          animating ? "opacity-100" : "opacity-0"
        )}
      />
      <div className="flex items-center flex-1 sm:px-4 px-2 relative z-20">
        <Search className="text-white/70 sm:w-5 sm:h-5 w-4 h-4 mr-2 sm:mr-3" />
        <input
          ref={inputRef}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          type="text"
          className={cn(
            "flex-1 bg-transparent border-none text-white placeholder:text-white/70 focus:ring-0 focus:outline-none sm:text-lg text-sm",
            animating && "text-transparent"
          )}
        />
      </div>
      <button
        type="submit"
        disabled={!value || animating}
        className="relative z-20 bg-black hover:bg-gray-800 disabled:bg-black/40 disabled:text-neutral-400 text-neutral-300 sm:px-8 px-4 sm:py-2 py-1 text-sm sm:text-base rounded-full"
      >
        Search
      </button>
      <div className="pointer-events-none absolute inset-0 flex items-center">
        <AnimatePresence mode="wait">
          {!value && !animating && (
            <motion.span
              key={`placeholder-${currentPlaceholder}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "linear" }}
              className="text-white/70 sm:text-lg text-sm pl-11 sm:pl-[3.5rem]"
            >
              {placeholders[currentPlaceholder]}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
