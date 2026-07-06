"use client";

import Image from "next/image";
import { trip } from "@/data/itinerary";
import type { TravelMode } from "@/lib/maps";
import { mapUrl, directionsUrl } from "@/lib/maps";
import { useTripPlan } from "@/lib/tripPlan";

interface CoffeeSectionProps {
  directionsMode: TravelMode;
}

export default function CoffeeSection({ directionsMode }: CoffeeSectionProps) {
  const { state, toggleChecked } = useTripPlan();

  return (
    <section id="coffee" className="scroll-mt-20 bg-forest-dark text-cream py-16">
      <div className="max-w-3xl mx-auto px-6 flex flex-col gap-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative w-full max-w-sm aspect-[4/3] rounded-xl overflow-hidden">
            <Image src={trip.coffeeImage} alt="Coffee cup" fill className="object-cover" />
          </div>
          <h2 className="font-serif text-3xl font-semibold">Coffee {trip.coffeeContext}</h2>
        </div>

        <div className="flex flex-col gap-3">
          {trip.coffeeShops.map((shop) => {
            const done = !!state.checked[shop.id];
            return (
              <div
                key={shop.id}
                className="border border-cream/15 bg-cream/5 rounded-lg p-4 flex flex-col gap-1.5"
              >
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={done}
                    onChange={() => toggleChecked(shop.id)}
                    className="mt-1 accent-terracotta"
                  />
                  <span className={`font-medium ${done ? "line-through text-cream/50" : "text-cream"}`}>
                    {shop.name}
                  </span>
                </label>
                <p className={`text-sm leading-relaxed ${done ? "text-cream/40" : "text-cream/75"}`}>
                  {shop.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={mapUrl(shop.name, trip.coffeeMapContext)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-terracotta hover:underline"
                  >
                    📍 View
                  </a>
                  <a
                    href={directionsUrl(
                      `${trip.hotel}, ${trip.hotelMapContext}`,
                      shop.name,
                      trip.coffeeMapContext,
                      directionsMode
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-cream/70 hover:underline"
                  >
                    🧭 Directions from hotel
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
