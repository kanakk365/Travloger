"use client";
import NextImage from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileBottomDock() {
  const pathname = usePathname();
  const isHomeActive = pathname === "/";
  const isHighlightPage = pathname === "/highlight";

  // Hide dock on highlight page for full-screen experience
  if (isHighlightPage) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-black w-full flex items-center justify-around rounded-t-[12px] px-6 py-[15px]">
        {/* Home/Favorites Icon */}
        <Link
          href="/"
          className="flex items-center justify-center p-2 active:opacity-70 transition-opacity"
          aria-label="Home"
        >
          <NextImage
            src="/icons/bottom-dock/family_home.svg"
            alt="Home"
            width={24}
            height={24}
            className={`w-6 h-6 ${isHomeActive ? "opacity-100" : "opacity-60"}`}
          />
        </Link>

        {/* Search/Filter Icon */}
        <button
          className="flex items-center justify-center p-2 active:opacity-70 transition-opacity"
          onClick={() => {
            // Handle search/filter functionality
            window.scrollTo({ top: 0, behavior: "smooth" });
            const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
            if (searchInput) {
              searchInput.focus();
            }
          }}
          aria-label="Search"
        >
          <NextImage
            src="/icons/bottom-dock/search-text.svg"
            alt="Search"
            width={17}
            height={17}
            className="w-[17px] h-[17px]"
          />
        </button>

        {/* TOURS Text */}
        <Link
          href="/#community"
          className="flex items-center justify-center px-4 py-2 active:opacity-70 transition-opacity"
          aria-label="Tours"
        >
          <span className="text-white font-medium text-xs uppercase tracking-[0.05em] leading-[1.366]">
            TOURS
          </span>
        </Link>

        {/* Media/Events Icon (Calendar with Play) */}
        <Link
          href="/highlight"
          className="flex items-center justify-center p-2 active:opacity-70 transition-opacity"
          aria-label="Highlights"
        >
          <NextImage
            src="/icons/bottom-dock/calendar-media.svg"
            alt="Calendar"
            width={19}
            height={19}
            className="w-[19px] h-[19px]"
          />
        </Link>

        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/916281392007"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-2 active:opacity-70 transition-opacity"
          aria-label="Contact via WhatsApp"
        >
          <NextImage
            src="/icons/bottom-dock/whatsapp.svg"
            alt="WhatsApp"
            width={22}
            height={22}
            className="w-[22px] h-[22px]"
          />
        </a>
      </div>
    </div>
  );
}

