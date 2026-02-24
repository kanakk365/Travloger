"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const leftFaqs: FAQItem[] = [
  {
    id: 1,
    question: "Can I join if I'm traveling solo?",
    answer:
      "Absolutely! Many of our travelers join solo. Our trips are designed to help you connect easily with like-minded people, so you'll never feel out of place.",
  },
  {
    id: 4,
    question: "Who usually joins these trips?",
    answer:
      "Our trips attract a diverse group of adventurous and curious individuals, typically ranging from young professionals to experienced travelers looking for a hassle-free group experience.",
  },
];

const rightFaqs: FAQItem[] = [
  {
    id: 2,
    question: "Are the trips safe?",
    answer:
      "Yes, safety is our top priority. We carefully vet all our destinations and local partners to ensure a secure and comfortable experience for all travelers.",
  },
  {
    id: 3,
    question: "What's included in the trip cost?",
    answer:
      "Most trips include accommodation, local transportation, guided tours, and some meals. Please check the specific trip details for a comprehensive list of inclusions.",
  },
  {
    id: 5,
    question: "How do I book a trip?",
    answer:
      "Simply browse our destinations, select your preferred trip and dates, and click the 'Book Now' button. Follow the prompts to complete your reservation and payment.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-24 bg-[linear-gradient(92.48deg,#000000_-22.48%,#323232_79.48%)]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-[0.1em] text-white uppercase mb-16 font-[family-name:var(--font-vollkorn-sc),_serif] font-medium text-center drop-shadow-sm">
          Frequently Ask Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 w-full items-start">
          <div className="flex flex-col gap-6">
            {leftFaqs.map((faq) => (
              <FAQCard
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onClick={() => toggleFAQ(faq.id)}
              />
            ))}
          </div>

          <div className="flex flex-col gap-6">
            {rightFaqs.map((faq) => (
              <FAQCard
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onClick={() => toggleFAQ(faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQCard({
  faq,
  isOpen,
  onClick,
}: {
  faq: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-2xl md:rounded-2xl p-6 md:px-8 md:py-7 transition-all duration-300 ${
        isOpen
          ? "bg-white text-black shadow-xl"
          : "bg-[#444444] text-white hover:bg-[#4a4a4a]"
      }`}
    >
      <div className="flex items-start gap-4 md:gap-6">
        <div className="mt-1 flex-shrink-0">
          {isOpen ? (
            <Minus className="w-5 h-5 text-[#0aa699] stroke-[3]" />
          ) : (
            <Plus className="w-5 h-5 text-white stroke-[2]" />
          )}
        </div>

        <div className="flex flex-col">
          <h3
            className={`text-lg md:text-xl font-medium leading-tight ${isOpen ? "text-[#111]" : "text-white/95"}`}
          >
            {faq.question}
          </h3>

          <div
            className={`grid transition-all duration-300 ease-in-out ${
              isOpen
                ? "grid-rows-[1fr] opacity-100 mt-4"
                : "grid-rows-[0fr] opacity-0 mt-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="text-gray-500 text-base md:text-lg leading-relaxed font-normal pr-4 pb-2">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
