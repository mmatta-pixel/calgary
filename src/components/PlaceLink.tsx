import { mapUrl } from "@/lib/maps";

interface PlaceLinkProps {
  place: string;
  context: string;
  label?: string;
  className?: string;
}

export default function PlaceLink({ place, context, label, className }: PlaceLinkProps) {
  return (
    <a
      href={mapUrl(place, context)}
      target="_blank"
      rel="noopener noreferrer"
      className={className ?? "inline-flex items-center gap-1 text-xs text-terracotta-dark hover:underline"}
    >
      📍 {label ?? place}
    </a>
  );
}
