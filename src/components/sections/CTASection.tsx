"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { ChevronRight, PhoneCall } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-16 lg:py-28 overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/85" />
        <div className="absolute inset-0 plus-pattern opacity-[0.05]" />
      </div>

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center relative z-10">
        <FadeIn>
          <p className="section-label text-primary flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-primary inline-block" />
            Limited Seats
            <span className="w-8 h-px bg-primary inline-block" />
          </p>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Enrol Now &mdash;
            <span className="text-primary italic block md:inline"> Before It's Too Late!</span>
          </h2>
          <p className="text-white/75 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Don&apos;t miss your chance to join the best Science &amp; Maths coaching in Greater Noida.
            Secure your spot today!
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-primary text-white font-bold text-[15px] shadow-2xl shadow-primary/40 hover:bg-primary-dark transition-all duration-200 group w-full sm:w-auto"
            >
              Enrol Now
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => (window.location.href = "tel:+918851748983")}
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full border-2 border-white/40 text-white font-bold text-[15px] hover:bg-white hover:text-secondary transition-all duration-200 backdrop-blur-sm w-full sm:w-auto"
            >
              <PhoneCall className="w-4 h-4" />
              Call 8851748983
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
