import React from "react";

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
  centered = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-8 sm:mb-10 md:mb-12 max-w-3xl ${
        centered ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      <div className={`inline-block mb-3 sm:mb-4 ${centered ? "" : ""}`}>
        <span className="text-label">{label}</span>
        <div
          className={`h-0.5 w-10 bg-amber-500 mt-1.5 sm:mt-2 ${
            centered ? "mx-auto" : ""
          }`}
        />
      </div>
      <h2 className="text-h2 text-gray-900 mb-2 sm:mb-3">{title}</h2>
      {description && (
        <p className="text-body-sm text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
