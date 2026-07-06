"use client";

import { useEffect, useState } from "react";
import { days, type Audience } from "@/data/itinerary";
import { useTripPlan } from "@/lib/tripPlan";
import AudienceToggle from "@/components/AudienceToggle";
import DirectionsModeToggle from "@/components/DirectionsModeToggle";

interface StickyNavProps {
  audience: Audience;
  onAudienceChange: (audience: Audience) => void;
}

const sectionIds = [...days.map((d) => `day-${d.day}`), "coffee"];

export default function StickyNav({ audience, onAudienceChange }: StickyNavProps) {
  const { state, setDirectionsMode } = useTripPlan();
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        );
        setActive(topMost.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-0 z-20 bg-cream/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <nav className="flex flex-wrap gap-2">
          {days.map((day) => (
            <a
              key={day.day}
              href={`#day-${day.day}`}
              className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                active === `day-${day.day}`
                  ? "bg-forest text-cream border-forest"
                  : "border-border text-muted hover:bg-forest/10"
              }`}
            >
              Day {day.day}
            </a>
          ))}
          <a
            href="#coffee"
            className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
              active === "coffee"
                ? "bg-forest text-cream border-forest"
                : "border-border text-muted hover:bg-forest/10"
            }`}
          >
            Coffee & Notes
          </a>
        </nav>
        <div className="flex flex-wrap items-center gap-4 text-xs text-muted">
          <div className="flex items-center gap-2">
            <span>Dinner:</span>
            <AudienceToggle audience={audience} onChange={onAudienceChange} />
          </div>
          <div className="flex items-center gap-2">
            <span>Directions:</span>
            <DirectionsModeToggle mode={state.directionsMode} onChange={setDirectionsMode} />
          </div>
        </div>
      </div>
    </div>
  );
}
