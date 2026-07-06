"use client";

import type { Audience } from "@/data/itinerary";

interface AudienceToggleProps {
  audience: Audience;
  onChange: (audience: Audience) => void;
}

export default function AudienceToggle({ audience, onChange }: AudienceToggleProps) {
  return (
    <div className="inline-flex rounded-full border border-border p-1 text-sm bg-card">
      {(["solo", "group"] as const).map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`px-4 py-1 rounded-full capitalize transition-colors cursor-pointer ${
            audience === option ? "bg-terracotta text-cream" : "text-muted hover:bg-terracotta/10"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
