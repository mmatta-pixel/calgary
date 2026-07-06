"use client";

import { useState } from "react";
import { days, type Audience } from "@/data/itinerary";
import { useTripPlan } from "@/lib/tripPlan";
import HeroBanner from "@/components/HeroBanner";
import StickyNav from "@/components/StickyNav";
import DaySection from "@/components/DaySection";
import ParksSection from "@/components/ParksSection";
import CoffeeSection from "@/components/CoffeeSection";
import NotesSection from "@/components/NotesSection";

export default function Home() {
  const [audience, setAudience] = useState<Audience>("group");
  const { state } = useTripPlan();

  return (
    <main className="flex flex-col">
      <HeroBanner />
      <StickyNav audience={audience} onAudienceChange={setAudience} />

      {days.map((day, i) => (
        <DaySection
          key={day.day}
          day={day}
          audience={audience}
          directionsMode={state.directionsMode}
          tinted={i % 2 === 1}
        />
      ))}

      <ParksSection directionsMode={state.directionsMode} />
      <CoffeeSection directionsMode={state.directionsMode} />
      <NotesSection />
    </main>
  );
}
