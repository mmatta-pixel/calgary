"use client";

import { trip, type DayPlan } from "@/data/itinerary";
import { useTripPlan } from "@/lib/tripPlan";

interface DayMapProps {
  day: DayPlan;
}

const letters = "BCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function DayMap({ day }: DayMapProps) {
  const { state } = useTripPlan();

  const stops = day.stops.map((stop, i) => {
    const pickedId = state.picks[`${day.day}-stop-${stop.id}`];
    const chosen = stop.options.find((o) => o.id === pickedId) ?? stop.options[0];
    return {
      label: letters[i] ?? String(i + 2),
      name: chosen.name ?? "Stop",
      travelFromPrevious: stop.travelFromPrevious,
    };
  });

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-sm font-medium text-forest-dark">
        <span>🏨</span>
        <span>
          Starting point: {trip.hotel} <span className="text-muted">(A)</span>
        </span>
      </div>
      <div className="rounded-xl border border-border bg-card p-4 overflow-x-auto">
        <div className="flex items-start gap-1 w-max">
          <div className="flex flex-col items-center gap-1 w-24 shrink-0">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-base bg-terracotta text-cream ring-2 ring-terracotta/40 shrink-0">
              🏨
            </div>
            <span className="text-[11px] text-center text-ink/80 leading-tight">Hotel (A)</span>
          </div>
          {stops.map((stop) => (
            <div key={stop.label} className="flex items-start">
              <div className="flex flex-col items-center px-1 pt-3 shrink-0">
                <span className="text-sm" title={stop.travelFromPrevious === "drive" ? "Drive" : "Walk"}>
                  {stop.travelFromPrevious === "drive" ? "🚗" : "🚶"}
                </span>
                <div className="w-8 h-px bg-border mt-1" aria-hidden />
              </div>
              <div className="flex flex-col items-center gap-1 w-24 shrink-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold font-serif bg-forest text-cream shrink-0">
                  {stop.label}
                </div>
                <span className="text-[11px] text-center text-ink/80 leading-tight">{stop.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
