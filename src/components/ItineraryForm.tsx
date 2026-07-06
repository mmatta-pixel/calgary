"use client";

import { FormEvent, useState } from "react";
import type { GenerateItineraryRequest } from "@/types/itinerary";

interface ItineraryFormProps {
  onGenerate: (request: GenerateItineraryRequest) => void;
  isGenerating: boolean;
}

export default function ItineraryForm({ onGenerate, isGenerating }: ItineraryFormProps) {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [interests, setInterests] = useState("");
  const [budget, setBudget] = useState("moderate");
  const [notes, setNotes] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!destination.trim()) return;
    onGenerate({ destination, startDate, endDate, interests, budget, notes });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl w-full">
      <div className="flex flex-col gap-1">
        <label htmlFor="destination" className="text-sm font-medium">
          Destination
        </label>
        <input
          id="destination"
          required
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="e.g. Calgary, Canada"
          className="border rounded-md px-3 py-2"
        />
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col gap-1 flex-1">
          <label htmlFor="startDate" className="text-sm font-medium">
            Start date
          </label>
          <input
            id="startDate"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border rounded-md px-3 py-2"
          />
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <label htmlFor="endDate" className="text-sm font-medium">
            End date
          </label>
          <input
            id="endDate"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border rounded-md px-3 py-2"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="interests" className="text-sm font-medium">
          Interests
        </label>
        <input
          id="interests"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          placeholder="e.g. hiking, local food, museums"
          className="border rounded-md px-3 py-2"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="budget" className="text-sm font-medium">
          Budget
        </label>
        <select
          id="budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="border rounded-md px-3 py-2"
        >
          <option value="budget">Budget</option>
          <option value="moderate">Moderate</option>
          <option value="luxury">Luxury</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="notes" className="text-sm font-medium">
          Additional notes
        </label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Anything else the itinerary should account for"
          className="border rounded-md px-3 py-2"
          rows={3}
        />
      </div>

      <button
        type="submit"
        disabled={isGenerating}
        className="bg-black text-white rounded-md px-4 py-2 disabled:opacity-50"
      >
        {isGenerating ? "Generating…" : "Generate itinerary"}
      </button>
    </form>
  );
}
