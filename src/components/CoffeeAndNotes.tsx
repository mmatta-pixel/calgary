"use client";

import { trip } from "@/data/itinerary";
import type { TravelMode } from "@/lib/maps";
import OptionGroup from "@/components/OptionGroup";
import CoffeeCup from "@/components/illustrations/CoffeeCup";

interface CoffeeAndNotesProps {
  directionsMode: TravelMode;
}

export default function CoffeeAndNotes({ directionsMode }: CoffeeAndNotesProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="rounded-xl overflow-hidden border border-border">
        <CoffeeCup />
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="font-serif text-2xl font-semibold text-forest-dark">
          Coffee {trip.coffeeContext}
        </h2>
        <OptionGroup
          options={[...trip.coffeeShops]}
          mapContext={trip.coffeeMapContext}
          planKey="coffee"
          directionsMode={directionsMode}
        />
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="font-serif text-2xl font-semibold text-forest-dark">Notes</h2>
        <ul className="list-disc list-inside flex flex-col gap-2 text-sm text-ink/80 leading-relaxed">
          {trip.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
