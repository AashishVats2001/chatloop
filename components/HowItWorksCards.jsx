"use client";

import React from "react";
import { Download, PhoneCall, Wifi } from "lucide-react";

const features = [
  {
    title: "Download App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio",
    icon: Download,
  },
  {
    title: "Connect People",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio",
    icon: PhoneCall,
  },
  {
    title: "Enjoy App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio",
    icon: Wifi,
  },
];
const HowItWorksCards = () => {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-6 py-12 max-w-7xl mx-auto">
      {features.map((feature, idx) => {
        const Icon = feature.icon;
        return (
          <div
            key={idx}
            className="relative bg-white rounded-lg p-6 text-center shadow-sm group hover:shadow-lg transition duration-300 overflow-hidden"
          >
            {/* Foreground Icon */}
            <div className="flex justify-center mb-4 z-10 relative">
              <Icon size={64} strokeWidth={1.3} className="text-primary" />
            </div>

            {/* Background Icon */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <Icon
                size={120}
                strokeWidth={1}
                className="text-text-gray/10 absolute scale-125 transition-transform duration-500 rotate-0 group-hover:rotate-12"
              />
            </div>

            <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-text-gray z-10 relative">
              {feature.title}
            </h3>
            <p className="text-sm text-text-gray mt-2 z-10 relative">
              {feature.description}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default HowItWorksCards;
