"use client";

import { Copy, Share2 } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Footer from "@/components/Footer";

const referralStats = [
  {
    label: "Total Referrals",
    value: 34,
    icon: "/refferal/users.svg",
  },
  {
    label: "Signed Up",
    value: 25,
    icon: "/refferal/user-checked.svg",
  },
  {
    label: "Rewards Used",
    value: 45,
    icon: "/refferal/gift.svg",
  },
];

const referrals = Array.from({ length: 4 }).map(() => ({
  date: "12 Sep 2025",
  name: "Rajesh S.",
  status: "Signed Up",
  reward: "₹200",
}));

const howItWorks = [
  {
    title: "1. Share your referral code",
    description:
      "Copy and send your unique code to friends via WhatsApp, email, or any platform you prefer.",
  },
  {
    title: "2.Friends sign up using your code",
    description:
      "When they create an account and complete their first booking, their signup is tracked.",
  },
  {
    title: "3.Earn rewards instantly",
    description:
      "As soon as your friends sign up and book, you'll receive exciting rewards credited to your account.",
  },
  {
    title: "4.Use your rewards easily",
    description:
      "Redeem your rewards while making bookings or use them anytime from your profile.",
  },
];

export default function ReferralPage() {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText("Hy1-twJh57u");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy", error);
    }
  };

  return (
    <main className="min-h-screen bg-[#F5F8F6] pb-20">
      <Navbar />

      <section className="mx-auto mt-4 flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-0">
        <h1 className="text-center text-2xl font-semibold text-[#1E1E1E]">
          My Referrals
        </h1>

        <div className="rounded-4xl bg-white shadow-[0_40px_80px_-50px_rgba(12,62,45,0.25)] p-6 sm:p-8">
          <div className="grid gap-6 max-w-4xl mx-auto rounded-4xl border border-[#E5EFEB] bg-white px-4 sm:px-6 py-6 sm:py-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:px-10 md:py-10">
            {referralStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col sm:flex-col items-center justify-center rounded-[28px] bg-[#F3F9F4] px-6 sm:px-10 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
              >
                <div className="mb-4 flex h-12 sm:h-14 w-12 sm:w-14 items-center justify-center rounded-full bg-white bg-gradient-to-r from-[#00A99D] to-[#009186] ">
                  <Image
                    src={stat.icon}
                    alt={stat.label}
                    width={28}
                    height={28}
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span
                    className="text-2xl sm:text-3xl font-semibold text-[#009186]
]"
                  >
                    {stat.value}
                  </span>
                  <span className="mt-2 text-xs sm:text-sm font-semibold text-black">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 max-w-4xl mx-auto py-6 sm:py-8 md:py-10">
            <p className="text-base sm:text-lg font-medium">Your referral link</p>
            
            {/* Mobile Layout */}
            <div className="sm:hidden flex flex-col gap-3 w-full">
              <div className="flex items-center gap-2 border border-dashed border-neutral-700 py-2 px-3 rounded-full w-full">
                <span className="rounded-full bg-white px-3 py-1.5 font-medium tracking-wide text-[#294640] text-xs whitespace-nowrap flex-1">
                  Hy1-twJh57u
                </span>
              </div>
              <button
                onClick={onCopy}
                className="inline-flex items-center justify-center cursor-pointer gap-1.5 rounded-full bg-neutral-200 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#2E4A45] transition hover:bg-neutral-300 whitespace-nowrap w-full"
              >
                <Copy className="h-3.5 w-3.5" />
                {copied ? "Copied" : "Copy"}
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00A99D] to-[#009186] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-white shadow-[0_20px_45px_-20px_rgba(0,143,130,0.7)] transition hover:opacity-90 w-full">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>

            {/* Desktop Layout */}
            <div className="hidden sm:flex gap-3 sm:gap-4 sm:justify-between sm:items-center w-full">
              <div className="flex items-center gap-2 border border-dashed border-neutral-700 py-2 px-3 rounded-full sm:w-[70%]">
                <span className="rounded-full bg-white px-3 py-1.5 font-medium tracking-wide text-[#294640] text-sm whitespace-nowrap flex-1">
                  Hy1-twJh57u
                </span>
                <button
                  onClick={onCopy}
                  className="inline-flex items-center justify-center cursor-pointer gap-1.5 rounded-full bg-neutral-200 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#2E4A45] transition hover:bg-neutral-300 whitespace-nowrap"
                >
                  <Copy className="h-3.5 w-3.5" />
                  {copied ? "Copied" : "Copy"}
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00A99D] to-[#009186] px-8 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white shadow-[0_20px_45px_-20px_rgba(0,143,130,0.7)] transition hover:opacity-90">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 flex w-full max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-0 mb-20">
        <div className="rounded-4xl bg-white px-6 py-8 shadow-[0_40px_80px_-50px_rgba(12,62,45,0.25)] md:px-10 md:py-10">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-semibold text-[#1E1E1E]">
              My Referrals
            </h2>
          </div>

          {/* Desktop Table - Hidden on mobile */}
          <div className="hidden sm:block overflow-hidden rounded-2xl">
            <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr] items-center px-6 py-4 text-sm font-semibold">
              <span>Date</span>
              <span>Name</span>
              <span>Status</span>
              <span className="text-right">Reward</span>
            </div>

            <div className="">
              {referrals.map((referral, index) => (
                <div
                  key={`${referral.date}-${index}`}
                  className="grid grid-cols-[1.2fr_1fr_1fr_1fr] rounded-2xl my-2 bg-[#eef7f7] items-center px-6 py-5 text-sm text-[#2E4A45] hover:bg-[#F8FBFA]"
                >
                  <span>{referral.date}</span>
                  <span>{referral.name}</span>
                  <span className="inline-flex items-center gap-2 text-black">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#DEF5EE]">
                      <svg
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.5938 3.09375L6.03125 10.6562L2.28125 6.8125"
                          stroke="#2C9C87"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {referral.status}
                  </span>
                  <span className="text-right font-semibold text-[#1E1E1E]">
                    {referral.reward}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Cards - Visible only on mobile */}
          <div className="sm:hidden space-y-3">
            {referrals.map((referral, index) => (
              <div
                key={`${referral.date}-${index}`}
                className="rounded-2xl bg-[#eef7f7] px-4 py-5 text-sm text-[#2E4A45] hover:bg-[#F8FBFA]"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-[#1E1E1E]">{referral.name}</span>
                    <span className="text-right font-semibold text-[#1E1E1E]">{referral.reward}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#4E6B65]">{referral.date}</span>
                    <span className="inline-flex items-center gap-2 text-black">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DEF5EE]">
                        <svg
                          width="12"
                          height="10"
                          viewBox="0 0 16 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.5938 3.09375L6.03125 10.6562L2.28125 6.8125"
                            stroke="#2C9C87"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {referral.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-4xl border border-transparent bg-white px-6 py-8 shadow-[0_40px_80px_-50px_rgba(12,62,45,0.25)] sm:px-10 md:px-16">
          <h2 className="text-lg sm:text-xl font-semibold text-[#1E1E1E]">How it works</h2>
          <ol className="mt-6 space-y-4 sm:space-y-6 text-sm text-[#2E4A45]">
            {howItWorks.map((step, index) => (
              <li key={step.title} className="flex items-start gap-3 sm:gap-4">
                <div className="space-y-1">
                  <p className="font-semibold text-neutral-600 mb-2 sm:mb-4 text-sm sm:text-base">{step.title}</p>
                  <p className="text-xs sm:text-sm text-[#4E6B65] ml-0 sm:ml-4">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <Footer />
    </main>
  );
}
