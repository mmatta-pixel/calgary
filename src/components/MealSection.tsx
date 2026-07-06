"use client";

import type { Audience, MealOption } from "@/data/itinerary";
import type { TravelMode } from "@/lib/maps";
import { useTripPlan } from "@/lib/tripPlan";
import PlaceActions from "@/components/PlaceActions";
import TagList from "@/components/TagList";

interface MealSectionProps {
  title: string;
  options: MealOption[];
  mapContext: string;
  audience?: Audience;
  planKey: string;
  directionsMode: TravelMode;
}

export default function MealSection({
  title,
  options,
  mapContext,
  audience,
  planKey,
  directionsMode,
}: MealSectionProps) {
  const { state, togglePick, toggleChecked } = useTripPlan();

  const visible = audience
    ? options.filter((option) => !option.audience || option.audience === audience)
    : options;

  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-serif text-sm font-semibold uppercase tracking-wide text-forest">
        {title}
      </h3>
      <div className="flex flex-col gap-3">
        {visible.map((option) => {
          const picked = state.picks[planKey] === option.id;
          const done = !!state.checked[option.id];
          return (
            <div
              key={option.id}
              className={`border bg-card rounded-lg p-3 flex flex-col gap-1.5 border-l-4 shadow-sm transition-colors ${
                picked ? "border-l-terracotta ring-2 ring-terracotta/50" : "border-l-border"
              } border-border`}
            >
              <div className="flex items-start justify-between gap-2">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={done}
                    onChange={() => toggleChecked(option.id)}
                    className="mt-1 accent-forest"
                  />
                  <span className="flex flex-col gap-1">
                    {option.name && (
                      <span
                        className={`font-medium ${done ? "line-through text-muted" : "text-ink"}`}
                      >
                        {option.name}
                      </span>
                    )}
                    <TagList tags={option.tags} />
                  </span>
                </label>
                {option.name && (
                  <button
                    onClick={() => togglePick(planKey, option.id)}
                    className={`text-lg leading-none shrink-0 cursor-pointer ${
                      picked ? "text-terracotta" : "text-border hover:text-terracotta"
                    }`}
                    aria-label={picked ? "Unpick this option" : "Pick this option"}
                    title={picked ? "Your pick" : "Pick this"}
                  >
                    {picked ? "★" : "☆"}
                  </button>
                )}
              </div>
              <p className={`text-sm leading-relaxed ${done ? "text-muted" : "text-ink/80"}`}>
                {option.description}
              </p>
              {option.name && (
                <PlaceActions place={option.name} context={mapContext} directionsMode={directionsMode} />
              )}
              {picked && (
                <span className="text-xs font-medium text-terracotta-dark">✓ Your pick</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
