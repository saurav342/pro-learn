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
  title: "Pro Learning Center | Science & Mathematics Coaching",
  description:
    "Premier Science & Mathematics Coaching in Greater Noida for Classes IX–XII. Board Exam orientation, experienced faculty, and strong fundamentals.",
  keywords: [
    "coaching",
    "science",
    "mathematics",
    "CBSE",
    "Greater Noida",
    "class 10",
    "class 12",
  ],
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
