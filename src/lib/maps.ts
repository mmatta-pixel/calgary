export function mapUrl(place: string, context: string): string {
  const query = `${place}, ${context}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
