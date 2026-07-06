"use client";

import type { Audience, DayPlan } from "@/data/itinerary";
import type { TravelMode } from "@/lib/maps";
import { useTripPlan } from "@/lib/tripPlan";
import DayMap from "@/components/DayMap";
import StopsList from "@/components/StopsList";
import OptionGroup from "@/components/OptionGroup";
import DayIllustration from "@/components/illustrations/DayIllustration";

interface DayViewProps {
  day: DayPlan;
  audience: Audience;
  directionsMode: TravelMode;
}

export default function DayView({ day, audience, directionsMode }: DayViewProps) {
  const { state, setNote } = useTripPlan();

  const trackedIds = [
    ...day.stops.flatMap((stop) => stop.options.map((o) => o.id)),
    ...day.lunch.map((o) => o.id),
    ...day.dinner.map((o) => o.id),
  ];
  const doneCount = trackedIds.filter((id) => state.checked[id]).length;

  return (
    <div className="flex flex-col gap-6">
      <DayIllustration day={day.day} />

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-serif text-2xl font-semibold text-forest-dark">
            Day {day.day} — {day.title}
          </h2>
          <span className="text-xs text-muted whitespace-nowrap">
            {doneCount}/{trackedIds.length} done
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-border overflow-hidden">
          <div
            className="h-full bg-terracotta transition-all"
            style={{ width: `${(doneCount / trackedIds.length) * 100}%` }}
          />
        </div>
      </div>

      <DayMap day={day} />

      <StopsList
        stops={day.stops}
        mapContext={day.mapContext}
        directionsMode={directionsMode}
        day={day.day}
      />
      <OptionGroup
        title="Lunch"
        options={day.lunch}
        mapContext={day.mapContext}
        planKey={`${day.day}-lunch`}
        directionsMode={directionsMode}
      />
      <OptionGroup
        title="Dinner"
        options={day.dinner}
        mapContext={day.mapContext}
        audience={audience}
        planKey={`${day.day}-dinner`}
        directionsMode={directionsMode}
      />

      <div className="flex flex-col gap-2">
        <h3 className="font-serif text-sm font-semibold uppercase tracking-wide text-forest">
          Your notes
        </h3>
        <textarea
          value={state.notes[day.day] ?? ""}
          onChange={(e) => setNote(day.day, e.target.value)}
          placeholder="Reservation times, actual plans, reminders…"
          rows={3}
          className="text-sm border border-border bg-card rounded-lg p-3 outline-none focus:ring-2 focus:ring-terracotta/40"
        />
      </div>
    </div>
  );
}
