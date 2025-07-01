"use client";

import { useRef, useState } from "react";
import TeamCard from "./TeamCard";
import ExpandedMember from "./ExpandedMember";
import { motion } from "motion/react";

const teamMembers = [
  {
    id: 1,
    name: "Mark Jecno",
    role: "Developer & Designer",
    skills: ["PHP", "Laravel", "Cake", "WordPress", "HTML5"],
    image: "/Team1.jpg",
    bio: "It is a long established fact that a reader will be distracted by the readable content...",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      google: "#",
    },
  },

  {
    id: 2,
    name: "Mark Jecno",
    role: "Developer & Designer",
    skills: ["PHP", "Laravel", "Cake", "WordPress", "HTML5"],
    image: "/Team2.jpg",
    bio: "It is a long established fact that a reader will be distracted by the readable content...",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      google: "#",
    },
  },

  {
    id: 3,
    name: "Mark Jecno",
    role: "Developer & Designer",
    skills: ["PHP", "Laravel", "Cake", "WordPress", "HTML5"],
    image: "/Team3.jpg",
    bio: "It is a long established fact that a reader will be distracted by the readable content...",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      google: "#",
    },
  },

  {
    id: 4,
    name: "Mark Jecno",
    role: "Developer & Designer",
    skills: ["PHP", "Laravel", "Cake", "WordPress", "HTML5"],
    image: "/Team2.jpg",
    bio: "It is a long established fact that a reader will be distracted by the readable content...",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      google: "#",
    },
  },

  {
    id: 5,
    name: "Mark Jecno",
    role: "Developer & Designer",
    skills: ["PHP", "Laravel", "Cake", "WordPress", "HTML5"],
    image: "/Team1.jpg",
    bio: "It is a long established fact that a reader will be distracted by the readable content...",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      google: "#",
    },
  },
];

export default function TeamCarousel() {
  const [expandedMember, setExpandedMember] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [visible, setVisible] = useState(false);
  const scrollRef = useRef();
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // 🖱️ Mouse drag
  const handleMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    scrollRef.current.style.cursor = "grab";
  };

  const handleMouseUp = () => {
    isDown.current = false;
    scrollRef.current.style.cursor = "grab";
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // speed factor
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const openMember = (member) => {
    setExpandedMember(member);
    setVisible(true);
    setTimeout(() => setIsExpanded(true), 10);
  };

  const closeMember = () => {
    setIsExpanded(false);
    setTimeout(() => {
      setVisible(false);
      setExpandedMember(null);
    }, 1000);
  };

  return (
    <section className="relative w-full min-h-[500px] overflow-hidden px-5">
      {/* Block 1: Team Cards */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex gap-6 px-4 py-8 overflow-x-auto scroll-smooth snap-x snap-mandatory cursor-grab"
        style={{
          height: isExpanded ? "0%" : "100%",
          width: isExpanded ? "0%" : "100%",
          opacity: isExpanded ? 0 : 1,
          overflowX: "auto",
          overflowY: "hidden",
          transition: "all 1.1s ease-in-out",
          scrollbarWidth: "none", // Firefox
        }}
      >
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="snap-start shrink-0 w-[103%] md:w-[50%] lg:w-[32.5%]"
          >
            <TeamCard member={member} onExpand={() => openMember(member)} />
          </div>
        ))}
      </div>

      {/* Block 2: Expanded View */}
      {visible && (
        <div
          className="px-5 "
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: isExpanded ? "100%" : "0%",
            height: isExpanded ? "100%" : "0%",
            opacity: isExpanded ? 1 : 0,
            // overflow: "scroll",
            pointerEvents: isExpanded ? "auto" : "none",
            transitionProperty: "width, height, opacity",
            transitionDuration: "1s, 1s, 0.9s",
            transitionDelay: "0s, 0s, 0.3s",
            transitionTimingFunction: "ease-out",
          }}
        >
          <ExpandedMember member={expandedMember} onClose={closeMember} />
        </div>
      )}
    </section>
  );
}
