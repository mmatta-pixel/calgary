"use client";

import type { ScheduleBlock } from "@/data/itinerary";
import type { TravelMode } from "@/lib/maps";
import { useTripPlan } from "@/lib/tripPlan";
import PlaceActions from "@/components/PlaceActions";
import TagList from "@/components/TagList";

interface ScheduleTimelineProps {
  schedule: ScheduleBlock[];
  mapContext: string;
  directionsMode: TravelMode;
}

const timeIcons: Record<string, string> = {
  Morning: "☀️",
  Midday: "🌤️",
  Afternoon: "🌇",
  Evening: "🌆",
  "All day": "🗺️",
};

export default function ScheduleTimeline({ schedule, mapContext, directionsMode }: ScheduleTimelineProps) {
  const { state, toggleChecked } = useTripPlan();

  return (
    <div className="flex flex-col">
      {schedule.map((block, i) => {
        const done = !!state.checked[block.id];
        return (
          <div key={block.id} className="flex gap-4">
            <div className="flex flex-col items-center w-24 shrink-0">
              <div className="flex items-center gap-1.5 text-sm font-semibold text-forest">
                <span>{timeIcons[block.time] ?? "📌"}</span>
                <span>{block.time}</span>
              </div>
              {i < schedule.length - 1 && <div className="w-px flex-1 bg-border mt-2" aria-hidden />}
            </div>
            <div className="flex flex-col gap-1.5 pb-6">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={done}
                  onChange={() => toggleChecked(block.id)}
                  className="mt-1 accent-forest"
                />
                <div className="flex flex-col gap-1.5">
                  <p className={`text-sm leading-relaxed ${done ? "line-through text-muted" : "text-ink/90"}`}>
                    {block.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <TagList tags={block.tags} />
                    {block.duration && (
                      <span className="text-[11px] text-muted">⏱ {block.duration}</span>
                    )}
                  </div>
                </div>
              </label>
              <div className="pl-6 flex flex-wrap gap-x-4 gap-y-1">
                {block.places.map((place) => (
                  <PlaceActions key={place} place={place} context={mapContext} directionsMode={directionsMode} />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
