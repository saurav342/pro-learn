import { FadeIn } from "@/components/ui/fade-in";
import { CheckCircle2, TrendingUp, Clock, Users, MessageSquare, Target } from "lucide-react";

const points = [
  {
    title: "Board-Exam Oriented Preparation",
    description: "Focused curriculum designed to maximise scores in CBSE board examinations.",
    icon: <Target className="w-5 h-5 text-white" />,
  },
  {
    title: "Regular Tests & Performance Analysis",
    description: "Weekly mock tests followed by in-depth performance reviews to track progress.",
    icon: <TrendingUp className="w-5 h-5 text-white" />,
  },
  {
    title: "Time-Bound Syllabus Completion",
    description: "Well-structured plan ensuring the entire syllabus is covered well before exams.",
    icon: <Clock className="w-5 h-5 text-white" />,
  },
  {
    title: "1:1 Doubt Clearing Sessions",
    description: "Personalised attention with dedicated doubt-clearing classes for all queries.",
    icon: <Users className="w-5 h-5 text-white" />,
  },
  {
    title: "Regular Parent Feedback",
    description: "Transparent communication through regular PTMs and progress reports.",
    icon: <MessageSquare className="w-5 h-5 text-white" />,
  },
  {
    title: "Strong Focus on Fundamental Concepts",
    description: "We build a strong foundation rather than rote learning, enabling long-term success.",
    icon: <CheckCircle2 className="w-5 h-5 text-white" />,
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-16 lg:py-28 bg-white relative overflow-hidden">
      {/* Crosshair accents */}
      <span className="crosshair absolute top-16 left-10 !w-8 !h-8 text-gray-200 opacity-60 hidden md:block" />
      <span className="crosshair absolute bottom-16 right-10 !w-6 !h-6 text-gray-200 opacity-50 hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Image side ── */}
          <div className="order-2 lg:order-1 relative">
            <FadeIn direction="right">
              <div className="relative">
                {/* Main photo */}
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                    alt="Students collaborating"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
                </div>

                {/* Floating success badge */}
                <div className="absolute -top-6 -right-6 bg-primary rounded-2xl px-6 py-5 shadow-2xl shadow-primary/30 animate-float text-center">
                  <p className="font-playfair text-4xl font-bold text-white leading-none">95%</p>
                  <p className="text-[11px] font-semibold text-white/80 uppercase tracking-wider mt-1">Success Rate</p>
                </div>

                {/* Small decorative square */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-2xl border-4 border-primary/20 bg-cream" />

                {/* 500+ students pill */}
                <div className="absolute bottom-8 left-6 bg-white rounded-xl px-5 py-3 shadow-xl border border-gray-100 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face",
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
                    ].map((src, i) => (
                      <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-secondary">500+ Students Mentored</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ── Content side ── */}
          <div className="order-1 lg:order-2">
            <FadeIn delay={0.05}>
              <p className="section-label flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-primary inline-block" />
                Why Choose Us
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary leading-tight mb-4">
                We Don&apos;t Just Teach,<br />
                <span className="text-primary italic">We Build Careers.</span>
              </h2>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                Here is what sets Pro Learning Center apart from the rest.
              </p>
            </FadeIn>

            <div className="space-y-6">
              {points.map((point, index) => (
                <FadeIn key={point.title} delay={0.08 * index} direction="up">
                  <div className="flex gap-5 group">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center shadow-md group-hover:shadow-primary/30 transition-shadow">
                      {point.icon}
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-secondary mb-1">{point.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
