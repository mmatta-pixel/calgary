"use client";

import { useState } from "react";
import { days, trip, type Audience } from "@/data/itinerary";
import DayView from "@/components/DayView";
import CoffeeAndNotes from "@/components/CoffeeAndNotes";
import AudienceToggle from "@/components/AudienceToggle";
import HeroScene from "@/components/illustrations/HeroScene";

type Tab = number | "coffee";

export default function Home() {
  const [tab, setTab] = useState<Tab>(days[0].day);
  const [audience, setAudience] = useState<Audience>("group");

  return (
    <main className="min-h-screen flex flex-col items-center gap-8 pb-16">
      <div className="w-full">
        <HeroScene />
      </div>

      <div className="flex flex-col items-center gap-1 text-center px-6 -mt-10">
        <h1 className="font-serif text-4xl font-semibold text-forest-dark">{trip.title}</h1>
        <p className="text-muted">{trip.subtitle}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 px-6">
        {days.map((day) => (
          <button
            key={day.day}
            onClick={() => setTab(day.day)}
            className={`px-4 py-2 rounded-full text-sm border transition-colors cursor-pointer ${
              tab === day.day
                ? "bg-forest text-cream border-forest"
                : "border-border text-muted hover:bg-forest/10"
            }`}
          >
            Day {day.day}
          </button>
        ))}
        <button
          onClick={() => setTab("coffee")}
          className={`px-4 py-2 rounded-full text-sm border transition-colors cursor-pointer ${
            tab === "coffee"
              ? "bg-forest text-cream border-forest"
              : "border-border text-muted hover:bg-forest/10"
          }`}
        >
          Coffee & Notes
        </button>
      </div>

      {tab !== "coffee" && (
        <div className="flex items-center gap-3 text-sm text-muted px-6">
          <span>Dinner picks for:</span>
          <AudienceToggle audience={audience} onChange={setAudience} />
        </div>
      )}

      <div className="w-full max-w-2xl px-6">
        {tab === "coffee" ? (
          <CoffeeAndNotes />
        ) : (
          <DayView day={days.find((d) => d.day === tab)!} audience={audience} />
        )}
      </div>
    </main>
  );
}
