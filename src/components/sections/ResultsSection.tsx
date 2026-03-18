"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Award, BookOpen, Users, Trophy } from "lucide-react";

const stats = [
  {
    label: "Years of Experience",
    value: "10+",
    icon: <Award className="w-8 h-8 text-primary" />,
  },
  {
    label: "Students Mentored",
    value: "500+",
    icon: <Users className="w-8 h-8 text-primary" />,
  },
  {
    label: "Success Rate",
    value: "95%",
    icon: <Trophy className="w-8 h-8 text-primary" />,
  },
  {
    label: "Study Materials",
    value: "100+",
    icon: <BookOpen className="w-8 h-8 text-primary" />,
  },
];

export function ResultsSection() {
  return (
    <section id="results" className="py-16 lg:py-24 bg-secondary relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 plus-pattern opacity-[0.04]" />
      {/* Glowing blobs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="section-label text-primary flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary inline-block" />
              Our Results
              <span className="w-8 h-px bg-primary inline-block" />
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">
              Numbers That <span className="text-primary italic">Speak</span> For Themselves
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/10">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <div className="text-center group px-8 py-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-6 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-300">
                  {stat.icon}
                </div>
                <p className="font-playfair text-5xl md:text-6xl font-bold text-white mb-2 leading-none">
                  {stat.value}
                </p>
                <p className="text-white/60 text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
