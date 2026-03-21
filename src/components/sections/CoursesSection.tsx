"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { FlaskConical, Calculator, BookOpen, ShieldCheck } from "lucide-react";

const courses = [
  {
    id: "senior",
    label: "Class 11 & 12",
    icon: <FlaskConical className="w-5 h-5" />,
    tag: "Senior Science Batch",
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
    description:
      "In-depth preparation for CBSE Board Exams with a strong foundation for Medical (NEET) and Engineering (JEE) entrance examinations.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "high",
    label: "Class 9 & 10",
    icon: <Calculator className="w-5 h-5" />,
    tag: "High School Batch",
    subjects: ["Mathematics", "Science", "Social Science", "English"],
    description:
      "Strong structural foundation building for achieving excellent marks in Board Exams and laying groundwork for competitive prep.",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "junior",
    label: "Junior Batch",
    icon: <BookOpen className="w-5 h-5" />,
    tag: "Foundation Program",
    subjects: ["All Subjects (Foundation Level)", "Mental Ability", "Basic Science"],
    description:
      "Early start for young minds focusing on conceptual clarity and analytical thinking to build a lifelong love for learning.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
  },
  {
    id: "special",
    label: "Special Batch",
    icon: <ShieldCheck className="w-5 h-5" />,
    tag: "Commerce Stream",
    subjects: ["Applied Mathematics"],
    description:
      "Tailored specifically for Commerce stream students to master Applied Mathematics with focused practice and concept clarity.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
  },
];

export function CoursesSection() {
  const [active, setActive] = useState(0);
  const course = courses[active];

  return (
    <section id="courses" className="py-16 lg:py-28 bg-cream relative overflow-hidden">
      {/* Decorative crosshairs */}
      <span className="crosshair absolute top-10 right-16 !w-7 !h-7 text-gray-300 opacity-40 hidden md:block" />
      <span className="crosshair absolute bottom-12 left-12 !w-6 !h-6 text-gray-300 opacity-30 hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Header */}
        <FadeIn>
          <div className="mb-16">
            <p className="section-label flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary inline-block" />
              Programs
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary leading-tight max-w-lg">
              Academic Programs
              <span className="text-primary italic"> You Can</span>
              <br />
              Register Here
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 items-start">
          {/* ── Sidebar list ── */}
          <FadeIn direction="right" delay={0.1}>
            <nav className="flex overflow-x-auto lg:flex-col gap-3 lg:gap-1 pb-4 lg:pb-0 hide-scrollbar snap-x snap-mandatory">
              {courses.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => setActive(i)}
                  className={`flex-shrink-0 lg:w-full text-left flex items-center gap-3 lg:gap-4 px-4 py-3 lg:px-5 lg:py-4 rounded-xl transition-all duration-200 group snap-center min-w-[240px] lg:min-w-0 ${
                    active === i
                      ? "bg-secondary text-white shadow-lg shadow-secondary/20 border-2 border-secondary lg:border-none"
                      : "bg-white lg:bg-transparent border-2 border-white lg:border-none hover:bg-white hover:shadow-md text-foreground/70 hover:text-secondary"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      active === i
                        ? "bg-primary text-white"
                        : "bg-orange-100 text-primary group-hover:bg-primary/20"
                    }`}
                  >
                    {c.icon}
                  </div>
                  <span className="font-semibold text-[14px] lg:text-[15px] whitespace-nowrap lg:whitespace-normal">{c.label}</span>
                  {active === i && (
                    <span className="hidden lg:block ml-auto w-1.5 h-6 rounded-full bg-primary shrink-0" />
                  )}
                </button>
              ))}
            </nav>
          </FadeIn>

          {/* ── Detail Card ── */}
          <FadeIn direction="left" delay={0.15}>
            <div
              key={course.id}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-white bg-white flex flex-col h-full"
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-[320px] overflow-hidden shrink-0">
                <img
                  src={course.image}
                  alt={course.label}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/70 via-secondary/20 to-transparent" />
                <div className="absolute bottom-6 left-8">
                  <p className="section-label text-white/70 mb-1 flex items-center gap-2">
                    <span className="w-5 h-px bg-white/60 inline-block" />
                    {course.tag}
                  </p>
                  <h3 className="font-playfair text-2xl font-bold text-white drop-shadow">
                    {course.label}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {course.description}
                </p>
                <div>
                  <p className="section-label mb-4">Subjects Covered</p>
                  <ul className="grid grid-cols-2 gap-3">
                    {course.subjects.map((s) => (
                      <li
                        key={s}
                        className="flex items-center gap-2.5 text-sm font-medium text-secondary"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
