"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { ChevronRight, PhoneCall, Flame } from "lucide-react";

export function CTASection() {
  return (
    <section id="enrol" className="relative overflow-hidden bg-secondary">
      {/* Background photo with strong overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/90" />
        {/* Diagonal grain texture */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Ambient glow — orange */}
      <div className="absolute -top-40 left-1/3 w-[700px] h-[400px] bg-primary/25 rounded-full blur-[120px] -z-10" />
      <div className="absolute -bottom-20 right-0 w-[400px] h-[300px] bg-primary/15 rounded-full blur-[100px] -z-10" />

      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 lg:py-36 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT — Headline */}
        <FadeIn>
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8">
              <Flame className="w-3.5 h-3.5" />
              Limited Seats Available
            </div>

            <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
              Don't Miss<br />
              <span className="text-primary italic">Your Chance.</span>
            </h2>

            <p className="text-white/65 text-lg leading-relaxed max-w-md">
              Seats fill up fast every batch. Join Greater Noida's most trusted
              Science &amp; Maths coaching—and start your journey to a top rank today.
            </p>

            {/* Divider */}
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px flex-1 max-w-[80px] bg-primary/40" />
              <span className="text-primary/70 text-xs font-semibold tracking-widest uppercase">Act Now</span>
              <div className="h-px flex-1 max-w-[80px] bg-primary/40" />
            </div>
          </div>
        </FadeIn>

        {/* RIGHT — Card */}
        <FadeIn delay={0.15}>
          <div className="relative bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-2xl">
            {/* Glow ring */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/30 via-transparent to-transparent pointer-events-none" />

            <p className="text-white/50 text-sm font-semibold uppercase tracking-widest mb-3">
              New Batch Starting Soon
            </p>
            <p className="font-playfair text-3xl font-bold text-white mb-1">
              Before It's Too Late!
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Reserve your seat for the upcoming batch — call us or fill in the
              enquiry form and we'll get back to you within minutes.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-8 border-t border-b border-white/10 py-6">
              {[
                { value: "500+", label: "Students Enrolled" },
                { value: "95%", label: "Pass Rate" },
                { value: "10+", label: "Years of Trust" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-playfair text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-white/50 text-xs mt-0.5 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex-1 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-primary text-white font-bold text-[15px] shadow-xl shadow-primary/40 hover:bg-primary-dark hover:shadow-primary/60 transition-all duration-200 group"
              >
                Enrol Now
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => (window.location.href = "tel:+918851748983")}
                className="flex-1 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/25 text-white font-semibold text-[15px] hover:bg-white hover:text-secondary transition-all duration-200 backdrop-blur-sm"
              >
                <PhoneCall className="w-4 h-4" />
                Call Now
              </button>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
