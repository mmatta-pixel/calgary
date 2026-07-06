import type { Stop } from "@/data/itinerary";
import type { TravelMode } from "@/lib/maps";
import OptionGroup from "@/components/OptionGroup";

interface StopsListProps {
  stops: Stop[];
  mapContext: string;
  directionsMode: TravelMode;
  day: number;
}

const letters = "BCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function StopsList({ stops, mapContext, directionsMode, day }: StopsListProps) {
  return (
    <div className="flex flex-col">
      {stops.map((stop, i) => (
        <div key={stop.id} className="flex gap-4">
          <div className="flex flex-col items-center w-10 shrink-0">
            <div className="w-8 h-8 rounded-full bg-forest text-cream flex items-center justify-center text-sm font-semibold font-serif">
              {letters[i] ?? i + 2}
            </div>
            {i < stops.length - 1 && <div className="w-px flex-1 bg-border mt-1" aria-hidden />}
          </div>
          <div className="flex flex-col gap-2 pb-6 flex-1">
            <span className="text-xs font-medium text-muted">
              {stop.travelFromPrevious === "drive" ? "🚗 Drive" : "🚶 Walk"}{" "}
              {i === 0 ? "from hotel" : "from previous stop"}
            </span>
            <OptionGroup
              options={stop.options}
              mapContext={mapContext}
              planKey={`${day}-stop-${stop.id}`}
              directionsMode={directionsMode}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
