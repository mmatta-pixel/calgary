import { trip } from "@/data/itinerary";
import PlaceLink from "@/components/PlaceLink";

export default function CoffeeAndNotes() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">Coffee {trip.coffeeContext}</h2>
        <div className="flex flex-col gap-3">
          {trip.coffeeShops.map((shop) => (
            <div key={shop.name} className="border rounded-lg p-3 flex flex-col gap-1.5">
              <PlaceLink
                place={shop.name}
                context={trip.coffeeMapContext}
                label={shop.name}
                className="font-medium text-blue-700 hover:underline w-fit"
              />
              <p className="text-sm text-gray-700 leading-relaxed">{shop.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">Notes</h2>
        <ul className="list-disc list-inside flex flex-col gap-2 text-sm text-gray-700 leading-relaxed">
          {trip.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
