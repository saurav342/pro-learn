"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { ChevronRight, PhoneCall, GraduationCap, MonitorPlay, Building2 } from "lucide-react";

function CrosshairIcon({ className = "" }: { className?: string }) {
  return (
    <span className={`crosshair text-gray-300 ${className}`} aria-hidden="true" />
  );
}

export function HeroSection() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Grid background */}
      <div className="absolute inset-0 plus-pattern opacity-40 -z-10" />

      {/* Soft gradient blobs */}
      <div className="absolute top-20 right-0 w-[55%] h-full bg-gradient-to-l from-orange-50/80 via-transparent to-transparent -z-10" />
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-primary/8 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -z-10" />

      {/* Decorative crosshairs */}
      <CrosshairIcon className="absolute top-[18%] left-[8%] !w-8 !h-8 opacity-30" />
      <CrosshairIcon className="absolute top-[72%] left-[44%] !w-6 !h-6 opacity-20" />
      <CrosshairIcon className="absolute top-[12%] right-[10%] !w-7 !h-7 opacity-25" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full pt-32 pb-16 md:pt-44 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
          
          {/* ── LEFT: Text Content ── */}
          <div className="flex flex-col lg:pr-8">
            <FadeIn direction="up" delay={0.05}>
              <span className="section-label flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-primary inline-block" />
                Admissions Open 2026
                <span className="relative flex h-2 w-2 ml-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
              </span>
            </FadeIn>

            <FadeIn direction="up" delay={0.15}>
              <h1 className="font-playfair text-[2.8rem] md:text-[3.6rem] lg:text-[4rem] xl:text-[4.8rem] leading-[1.1] font-bold text-secondary mb-6">
                Discover Your
                <br />
                <span className="text-primary italic">Academic</span>
                <br />
                Potential
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.25}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
                Premier Science &amp; Mathematics Coaching for Classes IX–XII.
                Board Exams, Foundation &amp; Competitions — all under one roof.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.35}>
              <div className="flex flex-wrap gap-4 mb-12">
                <button
                  onClick={() => scrollTo("#contact")}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-semibold text-[15px] shadow-xl shadow-primary/30 hover:bg-primary-dark hover:shadow-primary/40 transition-all duration-200 group w-full sm:w-auto"
                >
                  Enroll Now
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => window.location.href = "tel:+918851748983"}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-secondary text-secondary font-semibold text-[15px] hover:bg-secondary hover:text-white transition-all duration-200 group w-full sm:w-auto"
                >
                  <PhoneCall className="w-4 h-4" />
                  Call 8851748983
                </button>
              </div>
            </FadeIn>

            {/* Program Types & Class Badges */}
            <FadeIn direction="up" delay={0.45}>
              <div className="space-y-6">
                <div>
                  <p className="section-label mb-4">Available Programs</p>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-primary/5 text-primary border-2 border-primary/20 shadow-sm hover:bg-primary/10 transition-all cursor-default relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      <div className="relative flex items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-primary/60 opacity-75"></span>
                        <MonitorPlay className="w-4 h-4 relative z-10" />
                      </div>
                      <span className="font-bold text-sm tracking-wide">Live Online</span>
                    </div>
                    <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white text-secondary border-2 border-gray-100 shadow-sm hover:border-secondary/30 transition-all cursor-default">
                      <Building2 className="w-4 h-4 text-secondary/70" />
                      <span className="font-bold text-sm tracking-wide">Offline Center</span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="section-label mb-4">Coaching for Classes</p>
                  <div className="flex flex-wrap gap-3">
                    {["IX", "X", "XI", "XII"].map((cls) => (
                      <div
                        key={cls}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border-2 border-gray-100 shadow-sm hover:border-primary/30 hover:shadow-md transition-all cursor-default"
                      >
                        <GraduationCap className="w-4 h-4 text-primary" />
                        <span className="font-bold text-secondary text-sm">Class {cls}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ── RIGHT: Photo Collage ── */}
          <div className="relative mt-8 lg:mt-0">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative max-w-[400px] lg:max-w-none mx-auto">
                {/* Main large image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full aspect-[3/4] border-[6px] border-white">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                    alt="Students learning together"
                    className="object-cover w-full h-full"
                  />
                  {/* Gradient overlay bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
                </div>

                {/* Floating success card — bottom-left */}
                <div className="absolute -bottom-6 -left-4 lg:-left-8 bg-white rounded-2xl shadow-xl p-4 lg:p-5 border border-gray-100 animate-float z-10 w-32 lg:w-auto">
                  <p className="font-playfair text-3xl lg:text-4xl font-bold text-primary">95%</p>
                  <p className="text-[10px] lg:text-[11px] font-semibold text-secondary uppercase tracking-wider mt-0.5">Success Rate</p>
                </div>

                {/* Small inset image — top-right */}
                <div className="absolute -top-6 -right-4 lg:-right-6 w-28 h-28 lg:w-36 lg:h-36 rounded-2xl overflow-hidden border-4 border-white shadow-xl z-10">
                  <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop"
                    alt="Students studying"
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Expert faculty badge — inside main image bottom */}
                <div className="absolute bottom-6 left-6 right-6 lg:left-8 lg:right-8 bg-white/95 backdrop-blur-sm rounded-xl p-3 lg:p-4 flex items-center gap-3 lg:gap-4 border border-white/60 shadow-lg hidden sm:flex">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-secondary text-sm">Expert Faculty</p>
                    <p className="text-xs text-muted-foreground">10+ Years Experience &middot; 500+ Students</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
