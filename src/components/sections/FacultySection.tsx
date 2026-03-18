import { FadeIn } from "@/components/ui/fade-in";
import { Award, BookOpen, Star, Users } from "lucide-react";

export function FacultySection() {
  return (
    <section id="faculty" className="py-16 lg:py-28 bg-cream relative overflow-hidden">
      {/* Crosshair decorations */}
      <span className="crosshair absolute top-10 right-20 !w-8 !h-8 text-gray-300 opacity-40 hidden md:block" />
      <span className="crosshair absolute bottom-10 left-16 !w-6 !h-6 text-gray-300 opacity-30 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <FadeIn>
          <div className="mb-16">
            <p className="section-label flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary inline-block" />
              Faculty
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-secondary leading-tight">
              Meet Our <span className="text-primary italic">Expert</span> Faculty
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ── Photo ── */}
          <FadeIn direction="right">
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl max-w-sm mx-auto lg:mx-0">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                  alt="Puja Baranwal"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/10 to-transparent" />
                {/* Name overlay */}
                <div className="absolute bottom-8 left-8">
                  <p className="section-label text-white/70 mb-1">Lead Educator</p>
                  <h3 className="font-playfair text-2xl font-bold text-white">Puja Baranwal</h3>
                  <p className="text-primary font-semibold text-sm mt-1">M.Sc., B.Ed.</p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 lg:right-0 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <span className="font-bold text-secondary text-sm">Top Rated Educator</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ── Details ── */}
          <FadeIn direction="left" delay={0.1}>
            <div>
              <div className="space-y-8 mb-10">
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-1">10+ Years of Academic Experience</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Specialising in CBSE Board Preparation and conceptual foundation building for Sciences and Mathematics.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-1">Expert Guidance</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Focused on clear concept explanation, analytical problem solving, and individual student growth.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-1">500+ Students Mentored</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Hundreds of students have achieved their academic goals under her dedicated mentorship.
                    </p>
                  </div>
                </div>
              </div>

              {/* Visiting faculty callout */}
              <div className="relative rounded-2xl bg-secondary p-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_white_0%,_transparent_70%)]" />
                <div className="relative z-10">
                  <p className="section-label text-primary mb-2">Visiting Faculty Program</p>
                  <p className="text-white font-bold font-playfair text-xl mb-3">
                    Expert Visiting Faculty
                  </p>
                  <p className="text-white/75 text-sm leading-relaxed">
                    We host expert visiting faculty for Physics &amp; Mathematics providing specialised guidance for JEE/NEET Foundation preparation.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
