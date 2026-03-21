import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pro Learning Center | Best Science & Maths CBSE Coaching",
  description:
    "Pro Learning Center offers CBSE Science and Mathematics coaching for Classes 6–12 in Greater Noida, with offline batches and online weekend classes. Expert faculty, small batches, board exam preparation.",
  keywords: [
    "CBSE coaching classes",
    "online coaching for CBSE students",
    "weekend online classes",
    "best tuition near me",
    "Class 10 coaching",
    "Class 12 coaching",
    "science classes near me",
    "maths coaching",
    "board exam preparation",
    "coaching institute near me",
    "online maths tuition",
    "online science tuition",
    "Greater Noida coaching",
    "CBSE class 9 10 coaching",
    "CBSE class 11 12 coaching",
    "Applied Mathematics coaching",
  ],
  openGraph: {
    title: "Pro Learning Center | Best Science & Maths CBSE Coaching",
    description:
      "Trusted CBSE coaching for Classes 6–12. Offline + Online Weekend Batches. Expert faculty, small group sizes, 95% success rate.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
