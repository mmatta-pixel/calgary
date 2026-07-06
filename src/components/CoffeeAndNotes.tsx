import { trip } from "@/data/itinerary";
import PlaceLink from "@/components/PlaceLink";
import CoffeeCup from "@/components/illustrations/CoffeeCup";

export default function CoffeeAndNotes() {
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
          {trip.coffeeShops.map((shop) => (
            <div
              key={shop.name}
              className="border border-border bg-card rounded-lg p-3 flex flex-col gap-1.5 border-l-4 border-l-terracotta shadow-sm"
            >
              <PlaceLink
                place={shop.name}
                context={trip.coffeeMapContext}
                label={shop.name}
                className="font-medium text-terracotta-dark hover:underline w-fit"
              />
              <p className="text-sm text-ink/80 leading-relaxed">{shop.description}</p>
            </div>
          ))}
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
