"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useMemo, useState } from "react";
import Footer from "@/components/Footer";

const tripDetails = {
  title: "Rajasthan 2025",
  image: "/landing/rajasthanlong.png",
  duration: "6 nights 7 days",
  dates: "24 July 2024 - 01 August 2024",
};

const ReviewPage = () => {
  const [rating, setRating] = useState(4);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const collageImages = useMemo(
    () => [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    ],
    []
  );

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {!submitted ? (
        <>
          {/* Header Image Section */}
          <section className="relative max-w-7xl mx-auto rounded-3xl mt-10 isolate h-80 overflow-hidden  ">
            <div className="absolute inset-0">
              <Image
                src={tripDetails.image}
                alt={tripDetails.title}
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/30" />

            {/* Centered Title */}
            <div className="relative z-10 flex h-full items-center justify-center">
              <h1 className="text-5xl font-medium text-white">
                {tripDetails.title}
              </h1>
            </div>
          </section>

          {/* Spacing Section */}
          <div className="h-16" />

          {/* Review Form Section */}
          <section className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-0 mb-20">
            <div className=" ">
              <h2 className="text-2xl font-semibold text-slate-900">
                Write A Review
              </h2>

              <div className="mt-12 space-y-10">
                <div className="space-y-4">
                  <label className="block text-base font-medium text-slate-700">
                    Share Your Experience
                  </label>
                  <textarea
                    placeholder="Type your feedback here..."
                    className="min-h-[180px] w-full rounded-3xl bg-neutral-100 px-6 py-4 text-sm text-slate-600 focus:border-[#00A99D]"
                  />
                </div>

                <div className="space-y-4">
                  <label className="block text-base font-medium text-slate-700">
                    Rate Your Experience
                  </label>
                  <div className="flex items-center gap-3">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setRating(index + 1)}
                        onMouseEnter={() => setHoverRating(index + 1)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="transition-transform hover:scale-110"
                      >
                        <svg
                          width="36"
                          height="34"
                          viewBox="0 0 36 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`${
                            index < (hoverRating || rating)
                              ? "[&_path]:fill-amber-400"
                              : "[&_path]:fill-neutral-300"
                          }`}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.9521 1.23898C17.0897 0.949386 17.3066 0.704746 17.5776 0.533454C17.8487 0.362162 18.1627 0.27124 18.4833 0.27124C18.804 0.27124 19.118 0.362162 19.3891 0.533454C19.6601 0.704746 19.877 0.949386 20.0146 1.23898L24.3896 10.4374L34.4958 11.7718C34.8126 11.8146 35.1109 11.946 35.3562 12.151C35.6015 12.356 35.7838 12.6262 35.8821 12.9303C35.9805 13.2345 35.9908 13.5603 35.912 13.8701C35.8331 14.1799 35.6683 14.461 35.4365 14.6812L28.0646 21.703L29.924 31.7218C29.9806 32.0357 29.9475 32.3592 29.8285 32.6552C29.7095 32.9511 29.5094 33.2075 29.2513 33.3948C28.9931 33.5822 28.6873 33.6929 28.3691 33.7142C28.0508 33.7356 27.733 33.6667 27.4521 33.5155L18.4833 28.6593L9.52554 33.5155C9.24466 33.6667 8.92683 33.7356 8.60857 33.7142C8.29031 33.6929 7.98453 33.5822 7.72636 33.3948C7.46819 33.2075 7.26812 32.9511 7.14912 32.6552C7.03013 32.3592 6.99704 32.0357 7.05366 31.7218L8.91304 21.703L1.50835 14.6812C1.27655 14.461 1.11171 14.1799 1.03286 13.8701C0.954003 13.5603 0.964342 13.2345 1.06268 12.9303C1.16102 12.6262 1.34335 12.356 1.58864 12.151C1.83393 11.946 2.13218 11.8146 2.44897 11.7718L12.5662 10.4374L16.9412 1.23898H16.9521Z"
                          />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-base font-medium text-slate-700">
                    Add Photos
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        className="flex h-[72px] w-[72px] cursor-pointer items-center justify-center rounded-2xl bg-neutral-100 text-2xl text-slate-400 transition hover:scale-105"
                      >
                        +
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 flex justify-center">
                <button
                  onClick={() => setSubmitted(true)}
                  className="inline-flex items-center justify-center cursor-pointer rounded-full bg-gradient-to-r from-[#009186] to-[#00A99D] px-12 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
                >
                  Submit
                </button>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="mx-auto mb-20 mt-16 flex w-full max-w-3xl justify-center rounded-2xl bg-gradient-to-b from-[#08347F] to-[#018076]  text-center text-white shadow-[0_40px_80px_-50px_rgba(8,52,127,0.6)]">
          <div
            className="relative w-full rounded-2xl px-6 pb-10 pt-12"
            style={{
              backgroundImage: "url(/trips/reviewBg.png)",
              backgroundRepeat: "repeat",
            }}
          >
            <div className="" />
            <div className="relative z-10 space-y-12">
              <div className="space-y-3">
                <div className="mx-auto flex h-16 w-16 items-center justify-center  bg-white/10">
                  <Image
                    src="/trips/plane.svg"
                    alt="Thank you"
                    width={55}
                    height={55}
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl text-white/80">
                    Thank you for your feedback!
                  </h2>
                  <p className="text-sm text-white/70">
                    Your 2025 Adventure, Wrapped! ✈️
                  </p>
                </div>
              </div>

              <div className="relative flex justify-center gap-4 my-10">
                {collageImages.map((img, index) => (
                  <div
                    key={img}
                    className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-lg backdrop-blur"
                    style={{
                      transform: `rotate(${
                        index === 1 ? 0 : index === 0 ? -8 : 8
                      }deg)`,
                    }}
                  >
                    <Image
                      src={img}
                      alt={`Trip memory ${index + 1}`}
                      width={160}
                      height={120}
                      className="h-32 w-40 object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <div className="rounded-2xl bg-white/10 py-6 text-lg leading-10 font-thin text-white/90 backdrop-blur px-40">
                  RAJASTHAN 2025 WAS UNFORGETTABLE — FROM PALACES TO SUNSETS,
                  EVERY MOMENT WAS MAGICAL!
                  <p className="text-xs text-white/70 mt-4">
                    Rajasthan 2025 | {tripDetails.dates} |{" "}
                    {tripDetails.duration}
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black "
                  style={{ boxShadow: "0px 4px 113.2px 0px #FFFFFFC2" }}
                >
                  <Image
                    src="/landing/instagram.svg"
                    alt="Instagram"
                    width={25}
                    height={25}
                    className="h-6 w-6"
                  />
                  Share to Instagram Story
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </main>
  );
};

export default ReviewPage;
