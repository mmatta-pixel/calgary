import type { Itinerary } from "@/types/itinerary";

const STORAGE_KEY = "calgary.itinerary";
const CHANGE_EVENT = "calgary-itinerary-change";

let cachedRaw: string | null = null;
let cachedValue: Itinerary | null = null;

function parse(raw: string | null): Itinerary | null {
  if (raw === cachedRaw) return cachedValue;
  cachedRaw = raw;
  if (!raw) {
    cachedValue = null;
    return cachedValue;
  }
  try {
    cachedValue = JSON.parse(raw) as Itinerary;
  } catch {
    cachedValue = null;
  }
  return cachedValue;
}

export function getItinerarySnapshot(): Itinerary | null {
  if (typeof window === "undefined") return null;
  return parse(window.localStorage.getItem(STORAGE_KEY));
}

export function getServerItinerarySnapshot(): Itinerary | null {
  return null;
}

type ItineraryUpdate = Itinerary | null | ((prev: Itinerary | null) => Itinerary | null);

export function setItinerary(update: ItineraryUpdate) {
  if (typeof window === "undefined") return;
  const next = typeof update === "function" ? update(getItinerarySnapshot()) : update;
  if (next) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } else {
    window.localStorage.removeItem(STORAGE_KEY);
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function subscribeToItinerary(callback: () => void): () => void {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}
