import { mapUrl, directionsUrl, type TravelMode } from "@/lib/maps";
import { trip } from "@/data/itinerary";

interface PlaceActionsProps {
  place: string;
  context: string;
  directionsMode: TravelMode;
  className?: string;
}

export default function PlaceActions({ place, context, directionsMode, className }: PlaceActionsProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className ?? ""}`}>
      <a
        href={mapUrl(place, context)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-xs text-terracotta-dark hover:underline"
      >
        📍 View
      </a>
      <a
        href={directionsUrl(`${trip.hotel}, ${trip.hotelMapContext}`, place, context, directionsMode)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-xs text-forest hover:underline"
      >
        🧭 Directions from hotel
      </a>
    </div>
  );
}
