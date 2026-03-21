"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { MapPin, Laptop, CheckCircle2, ArrowRight } from "lucide-react";

export function ProgramTypesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label flex justify-center items-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary inline-block" />
              Learning Modes
              <span className="w-8 h-px bg-primary inline-block" />
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary leading-tight">
              Choose the Learning Mode That <span className="text-primary italic">Fits You Best</span>
            </h2>
          </div>
        </FadeIn>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Offline Center Card */}
          <FadeIn direction="up" delay={0.1}>
            <div className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-64 sm:h-72 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop" 
                  alt="Students studying in a classroom" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-white">Offline Center</h3>
                    <p className="text-white/80 text-sm font-medium">Traditional Classroom Learning</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {[
                    "Face-to-face interaction with expert faculty",
                    "Structured, distraction-free environment",
                    "Immediate doubt resolution",
                    "Regular in-person mock tests and assessments"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-secondary/80 text-[15px] leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors group/link">
                  Enroll in Offline Center
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Online Weekend Classes Card */}
          <FadeIn direction="up" delay={0.2}>
            <div className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-64 sm:h-72 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
                  alt="Student using a laptop at home" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute top-5 right-5 flex items-center gap-2 bg-white/95 backdrop-blur rounded-xl px-4 py-2 shadow-lg z-10">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-ping-slow shrink-0" />
                  <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">
                    Live Batches
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-secondary text-white flex items-center justify-center shadow-lg">
                    <Laptop className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-white">Online Weekend</h3>
                    <p className="text-white/80 text-sm font-medium">Learn From Anywhere</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {[
                    "Live interactive concept teaching",
                    "Flexible Saturday & Sunday schedule",
                    "Access to recorded sessions and digital notes",
                    "Weekly dedicated online doubt-clearing"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-secondary/80 text-[15px] leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="inline-flex items-center gap-2 text-secondary font-bold hover:text-secondary-dark transition-colors group/link">
                  Join Online Batches
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
