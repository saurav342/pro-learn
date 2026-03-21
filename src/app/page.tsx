import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProgramTypesSection } from "@/components/sections/ProgramTypesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { FacultySection } from "@/components/sections/FacultySection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { CTASection } from "@/components/sections/CTASection";
import { ContactSection } from "@/components/sections/ContactSection";
import { WhatsAppFAB } from "@/components/ui/whatsapp-fab";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans" style={{ color: '#171717', backgroundColor: '#ffffff' }}>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ProgramTypesSection />
        <AboutSection />
        <CoursesSection />
        <WhyChooseUsSection />
        <FacultySection />
        <ResultsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
