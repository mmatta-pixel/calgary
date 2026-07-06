"use client";

import type { Audience } from "@/data/itinerary";

interface AudienceToggleProps {
  audience: Audience;
  onChange: (audience: Audience) => void;
}

export default function AudienceToggle({ audience, onChange }: AudienceToggleProps) {
  return (
    <div className="inline-flex rounded-full border border-gray-300 p-1 text-sm">
      {(["solo", "group"] as const).map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`px-4 py-1 rounded-full capitalize transition-colors ${
            audience === option ? "bg-black text-white" : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
