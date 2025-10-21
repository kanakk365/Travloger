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

        <div className="rounded-4xl bg-white shadow-[0_40px_80px_-50px_rgba(12,62,45,0.25)] p-8">
          <div className="grid gap-6 max-w-4xl mx-auto  rounded-4xl border border-[#E5EFEB] bg-white px-6 py-8 md:grid-cols-3 md:px-10 md:py-10">
            {referralStats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-between rounded-[28px] bg-[#F3F9F4] px-10 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white bg-gradient-to-r from-[#00A99D] to-[#009186] ">
                  <Image
                    src={stat.icon}
                    alt={stat.label}
                    width={28}
                    height={28}
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span
                    className="text-3xl font-semibold text-[#009186]
]"
                  >
                    {stat.value}
                  </span>
                  <span className="mt-2 text-sm font-semibold text-black">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 max-w-4xl mx-auto py-8 md:py-10 ">
            <p className="text-lg font-medium ">Your referral link</p>
            <div className=" py-4 text-sm text-[#2E4A45] flex justify-between items-center w-full">
              <div className="mt-2 flex flex-wrap w-[70%] items-center justify-between  border border-dashed border-neutral-700 py-1 px-2 rounded-full ">
                <span className="rounded-full bg-white px-4 py-2 font-medium tracking-wide text-[#294640]">
                  Hy1-twJh57u
                </span>
                <button
                  onClick={onCopy}
                  className="inline-flex items-center cursor-pointer gap-2 rounded-full bg-neutral-200 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#2E4A45] transition hover:border-[#009186] hover:text-[#009186]"
                >
                  <Copy className="h-4 w-4" />
                  {copied ? "Copied" : "Copy link"}
                </button>
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00A99D] to-[#009186] px-10 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_20px_45px_-20px_rgba(0,143,130,0.7)] transition hover:opacity-90">
                <Share2 className="h-4 w-4" />
                Share
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 flex w-full max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-0 mb-20">
        <div className="rounded-4xl bg-white px-6 py-8 shadow-[0_40px_80px_-50px_rgba(12,62,45,0.25)] md:px-10 md:py-10">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-[#1E1E1E]">
              My Referrals
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl ">
            <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr] items-center  px-6 py-4 text-sm font-semibold  ">
              <span>Date</span>
              <span>Name</span>
              <span>Status</span>
              <span className="text-right">Reward</span>
            </div>

            <div className="">
              {referrals.map((referral, index) => (
                <div
                  key={`${referral.date}-${index}`}
                  className="grid grid-cols-[1.2fr_1fr_1fr_1fr] rounded-2xl my-2 bg-[#eef7f7] items-center  px-6 py-5 text-sm text-[#2E4A45] hover:bg-[#F8FBFA]"
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
        </div>

        <div className="rounded-4xl border border-transparent bg-white px-6 py-10 shadow-[0_40px_80px_-50px_rgba(12,62,45,0.25)] md:px-16">
          <h2 className="text-xl font-semibold text-[#1E1E1E]">How it works</h2>
          <ol className="mt-6 space-y-6 text-sm text-[#2E4A45]">
            {howItWorks.map((step, index) => (
              <li key={step.title} className="flex items-start gap-4">
                <div className="space-y-1">
                  <p className="font-semibold text-neutral-600 mb-4">{step.title}</p>
                  <p className="text-[#4E6B65] ml-4">{step.description}</p>
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
