import { useSyncExternalStore } from "react";
import type { TravelMode } from "@/lib/maps";

const STORAGE_KEY = "calgary.trip-plan";
const CHANGE_EVENT = "calgary-trip-plan-change";

export interface TripPlanState {
  picks: Record<string, string>;
  checked: Record<string, boolean>;
  notes: Record<string, string>;
  directionsMode: TravelMode;
}

const defaultState: TripPlanState = {
  picks: {},
  checked: {},
  notes: {},
  directionsMode: "driving",
};

let cachedRaw: string | null = null;
let cachedValue: TripPlanState = defaultState;

function read(): TripPlanState {
  if (typeof window === "undefined") return defaultState;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw === cachedRaw) return cachedValue;
  cachedRaw = raw;
  if (!raw) {
    cachedValue = defaultState;
    return cachedValue;
  }
  try {
    cachedValue = { ...defaultState, ...JSON.parse(raw) };
  } catch {
    cachedValue = defaultState;
  }
  return cachedValue;
}

function getServerSnapshot(): TripPlanState {
  return defaultState;
}

function write(next: TripPlanState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribe(callback: () => void): () => void {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

export function useTripPlan() {
  const state = useSyncExternalStore(subscribe, read, getServerSnapshot);

  function update(updater: (prev: TripPlanState) => TripPlanState) {
    write(updater(read()));
  }

  return {
    state,
    togglePick(planKey: string, optionId: string) {
      update((prev) => ({
        ...prev,
        picks: {
          ...prev.picks,
          [planKey]: prev.picks[planKey] === optionId ? "" : optionId,
        },
      }));
    },
    toggleChecked(itemId: string) {
      update((prev) => ({
        ...prev,
        checked: { ...prev.checked, [itemId]: !prev.checked[itemId] },
      }));
    },
    setNote(day: number, text: string) {
      update((prev) => ({ ...prev, notes: { ...prev.notes, [day]: text } }));
    },
    setDirectionsMode(mode: TravelMode) {
      update((prev) => ({ ...prev, directionsMode: mode }));
    },
  };
}
