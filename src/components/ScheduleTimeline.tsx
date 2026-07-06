import type { ScheduleBlock } from "@/data/itinerary";
import PlaceLink from "@/components/PlaceLink";

interface ScheduleTimelineProps {
  schedule: ScheduleBlock[];
  mapContext: string;
}

export default function ScheduleTimeline({ schedule, mapContext }: ScheduleTimelineProps) {
  return (
    <div className="flex flex-col gap-4">
      {schedule.map((block) => (
        <div key={block.time} className="flex gap-4">
          <div className="w-24 shrink-0 text-sm font-semibold text-gray-500">{block.time}</div>
          <div className="flex flex-col gap-1.5">
            <p className="text-sm leading-relaxed">{block.description}</p>
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
