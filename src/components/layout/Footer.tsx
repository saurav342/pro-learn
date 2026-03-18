"use client";

import { MapPin, Phone, MessageCircle, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Programs", href: "#courses" },
  { name: "Why Us", href: "#why-us" },
  { name: "Faculty", href: "#faculty" },
  { name: "Results", href: "#results" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      {/* Top: main grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="text-white font-bold text-sm leading-none">PL</span>
              </div>
              <div className="leading-tight">
                <p className="font-bold text-[15px] tracking-tight">PRO LEARNING</p>
                <p className="text-[9px] font-semibold text-primary uppercase tracking-[0.2em]">Center</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              Premier Science &amp; Mathematics Coaching for Classes IX–XII. Strong fundamentals,
              board exam excellence, and lifelong academic success.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => (window.location.href = "tel:+918851748983")}
                aria-label="Phone"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
              </button>
              <button
                onClick={() => window.open("https://wa.me/918851748983", "_blank")}
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-green-400 hover:text-white" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-white/65 hover:text-white text-sm transition-colors group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">
              Contact Us
            </h3>
            <ul className="space-y-5 text-sm text-white/65">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  J-202, Eldeco Green Meadows,<br />
                  Greater Noida, Uttar Pradesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+918851748983" className="hover:text-white transition-colors">
                  +91-8851748983
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Pro Learning Center. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
