"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const faqData = [
  {
    question: "Do I need to download anything?",
    answer:
      "No, VerseSquare works directly in your browser—no installs or plugins required.",
  },
  {
    question: "Is VerseSquare free to use?",
    answer:
      "Yes! We offer a free plan with basic features. You can upgrade anytime for more space and tools.",
  },
  {
    question: "Can I use VerseSquare on mobile?",
    answer:
      "Absolutely. VerseSquare is optimized for phones, tablets, and desktops for seamless access anywhere.",
  },
  {
    question: "How many people can join a space?",
    answer:
      "Depending on your plan, you can host from 5 to unlimited participants in a single space.",
  },
  {
    question: "Is my data and activity private?",
    answer:
      "Yes. All spaces are encrypted, and you control access through invites or privacy settings.",
  },
];


const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full space-y-4">
      {faqData.map((faq, index) => {
        const isOpen = index === activeIndex;

        return (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
          >
            {/* Header */}
            <div
              className={`flex justify-between items-center p-4 cursor-pointer transition-colors duration-300 ${
                isOpen ? "bg-primary text-white" : "text-gray-800"
              }`}
              onClick={() => toggleIndex(index)}
            >
              <span className="font-medium">{faq.question}</span>
              <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} />
            </div>

            {/* Animated Body (Always in DOM) */}
            <div
              style={{ height: isOpen ? "185px" : "0px" }}
              className={`transition-all duration-500 ease-in-out  overflow-y-auto max-h-[185px] px-4`}
            >
              <div className="py-4 text-gray-700 text-sm pr-2">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQs;
