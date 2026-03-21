"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/918851748983?text=Hello%2C%20I%20am%20interested%20in%20enrolling%20at%20Pro%20Learning%20Center."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-[max(1.5rem,env(safe-area-inset-right))] z-50 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-200 group"
    >
      <MessageCircle className="w-7 h-7 fill-white" />
      {/* Tooltip */}
      <span className="absolute right-16 bottom-1/2 translate-y-1/2 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  );
}
