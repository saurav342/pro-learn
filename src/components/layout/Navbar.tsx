"use client";

import { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Programs", href: "#courses" },
  { name: "Why Us", href: "#why-us" },
  { name: "Faculty", href: "#faculty" },
  { name: "Results", href: "#results" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 88,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_24px_rgba(0,0,0,0.08)] py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="flex items-center group"
          >
            <img
              src="/logo.png"
              alt="Pro Learning Center"
              className="h-25 w-auto object-contain transition-opacity group-hover:opacity-90"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-7">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={cn(
                      "text-[13px] font-medium transition-colors relative group",
                      isScrolled ? "text-foreground/70 hover:text-secondary" : "text-foreground/80 hover:text-secondary"
                    )}
                  >
                    {link.name}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-[13px] font-semibold shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-primary/40 transition-all duration-200"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Enroll Now
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0 border-transparent shadow-none"
        )}
      >
        <ul className="flex flex-col py-5 px-6 gap-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[15px] font-medium text-foreground/80 hover:text-primary flex w-full py-3 border-b border-gray-50 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-primary text-white font-semibold text-[15px] shadow-md shadow-primary/20"
            >
              <PhoneCall className="w-4 h-4" />
              Enroll Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
