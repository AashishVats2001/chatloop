"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 from-primary to-secondary ${
        scrolled ? "bg-gradient-to-r shadow-xl" : "bg-transparent"
      }`}
    >
      <nav
        className={`max-w-6xl mx-auto px-6 flex items-center justify-between text-text-primary transition-all duration-300  ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Chatloop logo"
            width={257}
            height={257}
            className="max-w-[80px] w-3/5 brightness-0 invert"
          />
          <span className="text-white font-bold text-xl lg:text-2xl max-md:hidden">
            VerseSquare
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-6 text-center font-medium text-sm md:text-base opacity-90">
          <li>
            <Link href="#">HOME</Link>
          </li>
          <li>
            <Link href="#about">ABOUT</Link>
          </li>
          <li>
            <Link href="#features">FEATURE</Link>
          </li>
          <li>
            <Link href="#pricing">PRICING</Link>
          </li>
          <li>
            <Link href="#team">TEAM</Link>
          </li>
          <li>
            <Link href="#faq">FAQ</Link>
          </li>
          <li>
            <Link href="#contact">CONTACT US</Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setScrolled(true);
          }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex md:hidden flex-col bg-main-gradient px-6 py-4 text-text-primary space-y-4 text-center">
          <Link href="#home" className="focus:border-b-[1px] border-[#ffffff00] focus:border-[#ffffff] transition-all">HOME</Link>
          <Link href="#about" className="focus:border-b-[1px] border-[#ffffff00] focus:border-[#ffffff] transition-all">ABOUT</Link>
          <Link href="#features" className="focus:border-b-[1px] border-[#ffffff00] focus:border-[#ffffff] transition-all">FEATURE</Link>
          <Link href="#pricing" className="focus:border-b-[1px] border-[#ffffff00] focus:border-[#ffffff] transition-all">PRICING</Link>
          <Link href="#team" className="focus:border-b-[1px] border-[#ffffff00] focus:border-[#ffffff] transition-all">TEAM</Link>
          <Link href="#faq" className="focus:border-b-[1px] border-[#ffffff00] focus:border-[#ffffff] transition-all">FAQ</Link>
          <Link href="#contact" className="focus:border-b-[1px] border-[#ffffff00] focus:border-[#ffffff] transition-all">CONTACT US</Link>
        </div>
      )}
    </header>
  );
}
