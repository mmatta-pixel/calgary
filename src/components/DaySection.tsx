"use client";

import Image from "next/image";
import type { Audience, DayPlan } from "@/data/itinerary";
import type { TravelMode } from "@/lib/maps";
import { useTripPlan } from "@/lib/tripPlan";
import DayMap from "@/components/DayMap";
import StopsList from "@/components/StopsList";
import OptionGroup from "@/components/OptionGroup";

interface DaySectionProps {
  day: DayPlan;
  audience: Audience;
  directionsMode: TravelMode;
  tinted: boolean;
}

export default function DaySection({ day, audience, directionsMode, tinted }: DaySectionProps) {
  const { state, setNote } = useTripPlan();

  const trackedIds = [
    ...day.stops.flatMap((stop) => stop.options.map((o) => o.id)),
    ...day.lunch.map((o) => o.id),
    ...day.dinner.map((o) => o.id),
  ];
  const doneCount = trackedIds.filter((id) => state.checked[id]).length;

  return (
    <section
      id={`day-${day.day}`}
      className={`scroll-mt-20 py-16 ${tinted ? "bg-tint" : "bg-cream"}`}
    >
      <div className="max-w-3xl mx-auto px-6 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">
            Day {day.day}
          </span>
          <div className="flex items-center justify-between gap-2">
            <h2 className="font-serif text-4xl font-semibold text-forest-dark">{day.title}</h2>
            <span className="text-xs text-muted whitespace-nowrap">
              {doneCount}/{trackedIds.length} done
            </span>
          </div>
          <p className="text-muted">{day.blurb}</p>
          <div className="h-1.5 rounded-full bg-border overflow-hidden mt-1">
            <div
              className="h-full bg-terracotta transition-all"
              style={{ width: `${(doneCount / trackedIds.length) * 100}%` }}
            />
          </div>
        </div>

        <div className={`grid gap-3 ${day.images.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
          {day.images.map((src) => (
            <div key={src} className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={src}
                alt={day.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
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
          layout="grid"
        />
        <OptionGroup
          title="Dinner"
          options={day.dinner}
          mapContext={day.mapContext}
          audience={audience}
          planKey={`${day.day}-dinner`}
          directionsMode={directionsMode}
          layout="grid"
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
    </section>
  );
}
