"use client";

import React from "react";
import { Home, Users, Settings, Monitor } from "lucide-react";

const features = [
  {
    title: "Create Your Own Space",
    description: "Design a virtual room that fits your vibe.",
    icon: Home,
  },
  {
    title: "Invite and Meet Instantly",
    description: "Share a link and start talking in seconds.",
    icon: Users,
  },
  {
    title: "Cross-Device Compatibility",
    description: "Join from mobile, tablet, or desktop easily.",
    icon: Monitor,
  },
  {
    title: "Customize Everything",
    description: "Personalize avatars, layout, and environment.",
    icon: Settings,
  },
];

const HowItWorksCards = () => {
  return (
    <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 py-12 max-w-7xl mx-auto">
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
            <p className="text-sm text-text-gray mt-2 z-10 relative font-medium">
              {feature.description}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default HowItWorksCards;
