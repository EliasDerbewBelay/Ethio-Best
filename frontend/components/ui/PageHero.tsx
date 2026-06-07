import React from "react";

interface PageHeroProps {
  title: React.ReactNode;
  description?: string;
  className?: string;
}

export default function PageHero({
  title,
  description,
  className = "",
}: PageHeroProps) {
  return (
    <section
      className={`page-hero bg-purple-900 relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-16 -right-16 w-48 h-48 sm:w-80 sm:h-80 bg-yellow-400 rounded-full blur-[100px]" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 sm:w-80 sm:h-80 bg-purple-500 rounded-full blur-[100px]" />
      </div>
      <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="text-display text-white mb-3 sm:mb-4">{title}</h1>
        {description && (
          <p className="text-body-sm text-purple-100/90 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
