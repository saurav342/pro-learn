import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export function SectionHeading({ title, subtitle, children, className }: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h2 className="text-3xl md:text-4xl font-bold font-playfair text-secondary mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
