"use client";

import { trip } from "@/data/itinerary";
import type { TravelMode } from "@/lib/maps";
import { useTripPlan } from "@/lib/tripPlan";
import PlaceActions from "@/components/PlaceActions";
import CoffeeCup from "@/components/illustrations/CoffeeCup";

interface CoffeeAndNotesProps {
  directionsMode: TravelMode;
}

export default function CoffeeAndNotes({ directionsMode }: CoffeeAndNotesProps) {
  const { state, toggleChecked } = useTripPlan();

  return (
    <div className="flex flex-col gap-8">
      <div className="rounded-xl overflow-hidden border border-border">
        <CoffeeCup />
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="font-serif text-2xl font-semibold text-forest-dark">
          Coffee {trip.coffeeContext}
        </h2>
        <div className="flex flex-col gap-3">
          {trip.coffeeShops.map((shop) => {
            const done = !!state.checked[shop.id];
            return (
              <div
                key={shop.id}
                className="border border-border bg-card rounded-lg p-3 flex flex-col gap-1.5 border-l-4 border-l-terracotta shadow-sm"
              >
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={done}
                    onChange={() => toggleChecked(shop.id)}
                    className="mt-1 accent-forest"
                  />
                  <span className={`font-medium ${done ? "line-through text-muted" : "text-ink"}`}>
                    {shop.name}
                  </span>
                </label>
                <p className={`text-sm leading-relaxed ${done ? "text-muted" : "text-ink/80"}`}>
                  {shop.description}
                </p>
                <PlaceActions
                  place={shop.name}
                  context={trip.coffeeMapContext}
                  directionsMode={directionsMode}
                />
              </div>
            );
          })}
        </div>
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
