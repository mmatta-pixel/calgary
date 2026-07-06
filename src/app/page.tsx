"use client";

import { useState } from "react";
import { days, trip, type Audience } from "@/data/itinerary";
import DayView from "@/components/DayView";
import CoffeeAndNotes from "@/components/CoffeeAndNotes";
import AudienceToggle from "@/components/AudienceToggle";

type Tab = number | "coffee";

export default function Home() {
  const [tab, setTab] = useState<Tab>(days[0].day);
  const [audience, setAudience] = useState<Audience>("group");

  return (
    <main className="min-h-screen flex flex-col items-center gap-8 px-6 py-16">
      <div className="flex flex-col items-center gap-1 text-center">
        <h1 className="text-3xl font-bold">{trip.title}</h1>
        <p className="text-gray-500">{trip.subtitle}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {days.map((day) => (
          <button
            key={day.day}
            onClick={() => setTab(day.day)}
            className={`px-4 py-2 rounded-full text-sm border transition-colors ${
              tab === day.day
                ? "bg-black text-white border-black"
                : "border-gray-300 text-gray-600 hover:bg-gray-100"
            }`}
          >
            Day {day.day}
          </button>
        ))}
        <button
          onClick={() => setTab("coffee")}
          className={`px-4 py-2 rounded-full text-sm border transition-colors ${
            tab === "coffee"
              ? "bg-black text-white border-black"
              : "border-gray-300 text-gray-600 hover:bg-gray-100"
          }`}
        >
          Coffee & Notes
        </button>
      </div>

      {tab !== "coffee" && (
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <span>Dinner picks for:</span>
          <AudienceToggle audience={audience} onChange={setAudience} />
        </div>
      )}

      <div className="w-full max-w-2xl">
        {tab === "coffee" ? (
          <CoffeeAndNotes />
        ) : (
          <DayView day={days.find((d) => d.day === tab)!} audience={audience} />
        )}
      </div>
    </main>
  );
}
