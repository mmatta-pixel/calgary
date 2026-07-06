"use client";

import { useState, useSyncExternalStore } from "react";
import ItineraryForm from "@/components/ItineraryForm";
import ItineraryView from "@/components/ItineraryView";
import {
  getItinerarySnapshot,
  getServerItinerarySnapshot,
  setItinerary,
  subscribeToItinerary,
} from "@/lib/storage";
import type { GenerateItineraryRequest, Itinerary } from "@/types/itinerary";

export default function Home() {
  const itinerary = useSyncExternalStore(
    subscribeToItinerary,
    getItinerarySnapshot,
    getServerItinerarySnapshot
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleGenerate(request: GenerateItineraryRequest) {
    setIsGenerating(true);
    setError(null);
    try {
      const res = await fetch("/api/generate-itinerary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Failed to generate itinerary.");
      setItinerary(data as Itinerary);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate itinerary.");
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center gap-10 px-6 py-16">
      <h1 className="text-3xl font-bold">Custom Travel Itinerary</h1>

      {!itinerary && (
        <ItineraryForm onGenerate={handleGenerate} isGenerating={isGenerating} />
      )}

      {error && <p className="text-red-600 text-sm">{error}</p>}

      {itinerary && (
        <ItineraryView
          itinerary={itinerary}
          onChange={(updater) => setItinerary((prev) => (prev ? updater(prev) : prev))}
          onClear={() => setItinerary(null)}
        />
      )}
    </main>
  );
}
