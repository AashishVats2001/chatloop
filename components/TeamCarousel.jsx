"use client";

import { useRef, useState } from "react";
import TeamCard from "./TeamCard";
import ExpandedMember from "./ExpandedMember";
import { motion } from "motion/react";

const teamMembers = [
  {
    id: 1,
    name: "Ava Mitchell",
    role: "Lead Product Designer",
    skills: ["Figma", "UI/UX", "Illustrator", "CSS", "Prototyping"],
    image: "/Team1.jpg",
    bio: "Ava leads the design vision at VerseSquare, crafting immersive and intuitive virtual spaces that users love to explore. Her focus is on user-centered design and accessibility.",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      google: "#",
    },
  },
  {
    id: 2,
    name: "Liam Chen",
    role: "Full Stack Developer",
    skills: ["React", "Node.js", "TypeScript", "MongoDB", "WebRTC"],
    image: "/Team2.jpg",
    bio: "Liam architects the core of VerseSquare’s real-time engine and ensures seamless cross-device performance. He specializes in scalable infrastructure and smooth interactions.",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      google: "#",
    },
  },
  {
    id: 3,
    name: "Nina Patel",
    role: "Community & Growth Manager",
    skills: ["Marketing", "Community Building", "SEO", "Content", "CRM"],
    image: "/Team3.jpg",
    bio: "Nina helps creators, educators, and teams find success on VerseSquare. She’s passionate about building authentic communities and driving meaningful engagement.",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      google: "#",
    },
  },
  {
    id: 4,
    name: "Carlos Rivera",
    role: "3D Space Engineer",
    skills: ["Three.js", "Blender", "Unity", "VR", "3D Animation"],
    image: "/Team2.jpg",
    bio: "Carlos brings our virtual spaces to life with stunning visuals and interactive elements. He specializes in spatial design and immersive environments.",
    socials: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      google: "#",
    },
  },
  {
    id: 5,
    name: "Sophia Lee",
    role: "Frontend Developer",
    skills: ["Next.js", "Tailwind", "React", "GraphQL", "Framer Motion"],
    image: "/Team1.jpg",
    bio: "Sophia turns ideas into interactive realities. She focuses on building beautiful, fast, and accessible interfaces that elevate the VerseSquare experience.",
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
