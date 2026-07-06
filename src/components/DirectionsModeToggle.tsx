"use client";

import type { TravelMode } from "@/lib/maps";

interface DirectionsModeToggleProps {
  mode: TravelMode;
  onChange: (mode: TravelMode) => void;
}

const labels: Record<TravelMode, string> = {
  driving: "🚗 Driving",
  walking: "🚶 Walking",
};

export default function DirectionsModeToggle({ mode, onChange }: DirectionsModeToggleProps) {
  return (
    <div className="inline-flex rounded-full border border-border p-1 text-sm bg-card">
      {(["driving", "walking"] as const).map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
            mode === option ? "bg-forest text-cream" : "text-muted hover:bg-forest/10"
          }`}
        >
          {labels[option]}
        </button>
      ))}
    </div>
  );
}
