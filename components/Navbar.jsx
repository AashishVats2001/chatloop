'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 from-primary to-secondary ${scrolled ? 'bg-gradient-to-r shadow-xl' : 'bg-transparent'}`}>
      <nav className={`max-w-6xl mx-auto flex items-center justify-between text-text-primary transition-all duration-300  ${scrolled ? 'px-6 py-3' : 'px-6 py-6'}`}>
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Chatloop logo" width={232} height={43}/>
          {/* <span className="text-white font-bold text-xl">Chatloop</span> */}
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-6 text-center text-sm md:text-base opacity-90">
          <li><Link href="#">HOME</Link></li>
          <li><Link href="#">ABOUT</Link></li>
          <li><Link href="#">FEATURE</Link></li>
          <li><Link href="#">SCREENSHOT</Link></li>
          <li><Link href="#">TEAM</Link></li>
          <li><Link href="#">BLOG</Link></li>
          <li><Link href="#">CONTACT US</Link></li>
        </ul>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-main-gradient px-6 py-4 text-text-primary space-y-4 text-center">
          <Link href="#">HOME</Link>
          <Link href="#">ABOUT</Link>
          <Link href="#">FEATURE</Link>
          <Link href="#">SCREENSHOT</Link>
          <Link href="#">TEAM</Link>
          <Link href="#">BLOG</Link>
          <Link href="#">CONTACT US</Link>
        </div>
      )}
    </header>
  );
}