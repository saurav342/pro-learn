import { FadeIn } from "@/components/ui/fade-in";
import {
  BookOpen,
  Laptop,
  Users,
  Target,
  TrendingUp,
  CheckCircle2,
  Wifi,
} from "lucide-react";

const teachingApproach = [
  {
    icon: <BookOpen className="w-5 h-5 text-primary" />,
    title: "Step-by-step Concept Explanation",
    description:
      "Complex topics broken into clear, digestible steps to ensure every student truly understands — not just memorises.",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-primary" />,
    title: "Regular Tests & Performance Analysis",
    description:
      "Periodic assessments followed by detailed feedback help students identify gaps and stay on track.",
  },
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    title: "Doubt-Solving Sessions",
    description:
      "Dedicated time to resolve every student's queries — no question is too small or too complex.",
  },
  {
    icon: <Target className="w-5 h-5 text-primary" />,
    title: "Exam-Oriented Preparation Strategy",
    description:
      "Board exam patterns, marking schemes, and high-yield topics are central to our structured preparation plan.",
  },
];

const onlineFeatures = [
  "Interactive live concept teaching",
  "Weekly doubt-clearing sessions",
  "Structured syllabus coverage",
  "Board exam–focused preparation",
  "Flexible weekend scheduling",
];

const stats = [
  { value: "500+", label: "Students Mentored" },
  { value: "95%", label: "Board Exam Success Rate" },
  { value: "90%+", label: "Students Score Target" },
  { value: "6–12", label: "Classes Covered" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Pro Learning Center"
      className="py-16 lg:py-28 bg-cream relative overflow-hidden"
    >
      {/* Decorative crosshairs */}
      <span className="crosshair absolute top-12 left-10 !w-8 !h-8 text-gray-300 opacity-50 hidden md:block" />
      <span className="crosshair absolute bottom-16 right-10 !w-6 !h-6 text-gray-300 opacity-40 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-24">

        {/* ─── Section header ─── */}
        <FadeIn>
          <div className="max-w-3xl">
            <p className="section-label flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-primary inline-block" />
              About Us
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-secondary leading-tight mb-6">
              Best Science &amp; Maths{" "}
              <span className="text-primary italic">Coaching for CBSE</span>{" "}
              Students
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Pro Learning Center is a trusted coaching institute offering
              Science and Mathematics classes for CBSE students from Classes 6
              to 12. We specialise in board exam preparation, helping students
              achieve strong academic results through concept-based learning and
              structured guidance — whether offline or through our{" "}
              <strong className="text-secondary font-semibold">
                online weekend batches
              </strong>
              .
            </p>
          </div>
        </FadeIn>

        {/* ─── Stats row ─── */}
        <FadeIn delay={0.06}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <p className="font-playfair text-4xl font-bold text-primary leading-none mb-2">
                  {s.value}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ─── Teaching approach ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <FadeIn direction="right">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2064&auto=format&fit=crop"
                  alt="Puja Baranwal teaching students at Pro Learning Center"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
              </div>
              {/* Faculty badge */}
              <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl px-6 py-4 shadow-2xl border border-border max-w-[220px]">
                <p className="font-playfair text-base font-bold text-secondary leading-snug">
                  Puja Baranwal
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  M.Sc., B.Ed. — Lead Educator
                </p>
                <div className="flex items-center gap-1.5 mt-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  <p className="text-xs text-primary font-semibold">
                    CBSE Curriculum Expert
                  </p>
                </div>
              </div>
              {/* Decorative square */}
              <div className="absolute -top-5 -left-5 w-20 h-20 rounded-2xl border-4 border-primary/20 bg-cream-dark hidden md:block" />
            </div>
          </FadeIn>

          {/* Content */}
          <div>
            <FadeIn delay={0.05}>
              <p className="section-label flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-primary inline-block" />
                Our Teaching Approach
              </p>
              <h2 className="font-playfair text-4xl font-bold text-secondary leading-tight mb-4">
                Concept Clarity,{" "}
                <span className="text-primary italic">Not Rote Learning</span>
              </h2>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                At Pro Learning Center, we follow a concept clarity +
                practice-based methodology that ensures students understand
                topics deeply rather than memorising them — leading to confident
                performance in CBSE board exams.
              </p>
            </FadeIn>

            <div className="space-y-6">
              {teachingApproach.map((item, i) => (
                <FadeIn key={item.title} delay={0.07 * i} direction="up">
                  <div className="flex gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-secondary mb-1">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Online Weekend Program ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-1">
            <FadeIn delay={0.04}>
              <p className="section-label flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-primary inline-block" />
                Online Weekend Program
              </p>
              <h2 className="font-playfair text-4xl font-bold text-secondary leading-tight mb-4">
                Learn From Home —{" "}
                <span className="text-primary italic">Live &amp; Flexible</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Can't attend regular offline sessions? Our{" "}
                <strong className="text-secondary">
                  online weekend classes for CBSE students
                </strong>{" "}
                deliver the same quality of instruction through live interactive
                sessions — making learning accessible, flexible, and effective
                from home.
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <ul className="space-y-3">
                {onlineFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                    </span>
                    <span className="text-sm font-medium text-secondary">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Visual card — order 2 on mobile, 2 on desktop */}
          <div className="order-2">
            <FadeIn direction="left" delay={0.06}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?q=80&w=2070&auto=format&fit=crop"
                  alt="Student attending online weekend CBSE coaching class"
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/10 to-transparent" />
                {/* Live badge */}
                <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/95 backdrop-blur rounded-xl px-4 py-2.5 shadow-lg">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping-slow shrink-0" />
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                    Live Online Classes
                  </span>
                </div>
                {/* Bottom text */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end gap-4">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-4 flex gap-3 items-center w-full">
                    <Wifi className="w-6 h-6 text-white shrink-0" />
                    <div>
                      <p className="font-playfair text-lg font-bold text-white leading-tight">
                        Weekend Batches
                      </p>
                      <p className="text-white/70 text-xs">
                        Sat &amp; Sun · Flexible Timings
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* ─── Goal Banner ─── */}
        <FadeIn delay={0.05}>
          <div className="relative rounded-3xl overflow-hidden bg-secondary px-8 py-12 lg:px-16 lg:py-14 flex flex-col lg:flex-row items-center gap-8 text-center lg:text-left">
            {/* Decorative crosshairs inside banner */}
            <span className="crosshair absolute top-6 right-10 !w-7 !h-7 text-white opacity-10 hidden lg:block" />
            <span className="crosshair absolute bottom-6 left-20 !w-5 !h-5 text-white opacity-10 hidden lg:block" />

            <Laptop className="w-14 h-14 text-primary shrink-0" />
            <div className="flex-1">
              <p className="section-label text-primary mb-3 flex justify-center lg:justify-start items-center gap-3">
                <span className="w-8 h-px bg-primary inline-block" />
                Our Goal
              </p>
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
                Help Every Student Score{" "}
                <span className="text-primary italic">90% and Above</span>
              </h3>
              <p className="text-white/70 leading-relaxed max-w-2xl">
                Whether your child needs maths coaching, science tuition, or
                online weekend classes, Pro Learning Center helps them start
                early, stay consistent, and follow a structured plan — the
                proven path to high board exam scores.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="#contact"
                className="inline-block bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-primary/30 whitespace-nowrap"
              >
                📞 8851748983
              </a>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
