import type { ScheduleBlock } from "@/data/itinerary";
import PlaceLink from "@/components/PlaceLink";

interface ScheduleTimelineProps {
  schedule: ScheduleBlock[];
  mapContext: string;
}

const timeIcons: Record<string, string> = {
  Morning: "☀️",
  Midday: "🌤️",
  Afternoon: "🌇",
  Evening: "🌆",
  "All day": "🗺️",
};

export default function ScheduleTimeline({ schedule, mapContext }: ScheduleTimelineProps) {
  return (
    <div className="flex flex-col">
      {schedule.map((block, i) => (
        <div key={block.time} className="flex gap-4">
          <div className="flex flex-col items-center w-24 shrink-0">
            <div className="flex items-center gap-1.5 text-sm font-semibold text-forest">
              <span>{timeIcons[block.time] ?? "📌"}</span>
              <span>{block.time}</span>
            </div>
            {i < schedule.length - 1 && (
              <div className="w-px flex-1 bg-border mt-2" aria-hidden />
            )}
          </div>
          <div className="flex flex-col gap-1.5 pb-6">
            <p className="text-sm leading-relaxed text-ink/90">{block.description}</p>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {block.places.map((place) => (
                <PlaceLink key={place} place={place} context={mapContext} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
