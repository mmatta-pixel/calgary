export type TravelMode = "driving" | "walking";

export function mapUrl(place: string, context: string): string {
  const query = `${place}, ${context}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function directionsUrl(
  origin: string,
  destination: string,
  destinationContext: string,
  mode: TravelMode
): string {
  const params = new URLSearchParams({
    api: "1",
    origin,
    destination: `${destination}, ${destinationContext}`,
    travelmode: mode,
  });
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}
