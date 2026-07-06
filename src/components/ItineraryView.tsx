"use client";

import type { Activity, Itinerary, ItineraryDay } from "@/types/itinerary";

function newActivity(): Activity {
  return {
    id: window.crypto.randomUUID(),
    time: "",
    title: "New activity",
    description: "",
    location: "",
  };
}

function newDay(dayNumber: number): ItineraryDay {
  return {
    id: window.crypto.randomUUID(),
    day: dayNumber,
    date: "",
    summary: "",
    activities: [],
  };
}

interface ItineraryViewProps {
  itinerary: Itinerary;
  onChange: (updater: (prev: Itinerary) => Itinerary) => void;
  onClear: () => void;
}

export default function ItineraryView({ itinerary, onChange, onClear }: ItineraryViewProps) {
  function updateDay(dayId: string, update: Partial<ItineraryDay>) {
    onChange((prev) => ({
      ...prev,
      days: prev.days.map((d) => (d.id === dayId ? { ...d, ...update } : d)),
    }));
  }

  function updateActivity(dayId: string, activityId: string, update: Partial<Activity>) {
    onChange((prev) => ({
      ...prev,
      days: prev.days.map((d) =>
        d.id !== dayId
          ? d
          : {
              ...d,
              activities: d.activities.map((a) =>
                a.id === activityId ? { ...a, ...update } : a
              ),
            }
      ),
    }));
  }

  function addActivity(dayId: string) {
    const activity = newActivity();
    onChange((prev) => ({
      ...prev,
      days: prev.days.map((d) =>
        d.id === dayId ? { ...d, activities: [...d.activities, activity] } : d
      ),
    }));
  }

  function removeActivity(dayId: string, activityId: string) {
    onChange((prev) => ({
      ...prev,
      days: prev.days.map((d) =>
        d.id === dayId
          ? { ...d, activities: d.activities.filter((a) => a.id !== activityId) }
          : d
      ),
    }));
  }

  function moveActivity(dayId: string, activityId: string, direction: -1 | 1) {
    onChange((prev) => ({
      ...prev,
      days: prev.days.map((d) => {
        if (d.id !== dayId) return d;
        const index = d.activities.findIndex((a) => a.id === activityId);
        const newIndex = index + direction;
        if (index < 0 || newIndex < 0 || newIndex >= d.activities.length) return d;
        const activities = [...d.activities];
        [activities[index], activities[newIndex]] = [activities[newIndex], activities[index]];
        return { ...d, activities };
      }),
    }));
  }

  function addDay() {
    onChange((prev) => ({ ...prev, days: [...prev.days, newDay(prev.days.length + 1)] }));
  }

  function removeDay(dayId: string) {
    onChange((prev) => ({
      ...prev,
      days: prev.days.filter((d) => d.id !== dayId).map((d, i) => ({ ...d, day: i + 1 })),
    }));
  }

  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl">
      <div className="flex items-center justify-between">
        <input
          value={itinerary.destination}
          onChange={(e) => {
            const destination = e.target.value;
            onChange((prev) => ({ ...prev, destination }));
          }}
          className="text-2xl font-semibold border-b border-transparent hover:border-gray-300 focus:border-gray-500 outline-none bg-transparent"
        />
        <button onClick={onClear} className="text-sm text-red-600 hover:underline">
          Clear itinerary
        </button>
      </div>

      {itinerary.days.map((day) => (
        <div key={day.id} className="border rounded-lg p-4 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Day {day.day}</span>
              <input
                value={day.date}
                onChange={(e) => updateDay(day.id, { date: e.target.value })}
                placeholder="date"
                className="text-sm text-gray-500 border-b border-transparent hover:border-gray-300 focus:border-gray-500 outline-none bg-transparent"
              />
            </div>
            <button
              onClick={() => removeDay(day.id)}
              className="text-xs text-red-600 hover:underline"
            >
              Remove day
            </button>
          </div>

          <input
            value={day.summary}
            onChange={(e) => updateDay(day.id, { summary: e.target.value })}
            placeholder="Day summary"
            className="text-sm italic border-b border-transparent hover:border-gray-300 focus:border-gray-500 outline-none bg-transparent"
          />

          <div className="flex flex-col gap-2">
            {day.activities.map((activity, i) => (
              <div key={activity.id} className="border rounded-md p-3 flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <input
                    value={activity.time}
                    onChange={(e) =>
                      updateActivity(day.id, activity.id, { time: e.target.value })
                    }
                    placeholder="time"
                    className="w-20 text-sm border rounded px-2 py-1"
                  />
                  <input
                    value={activity.title}
                    onChange={(e) =>
                      updateActivity(day.id, activity.id, { title: e.target.value })
                    }
                    placeholder="title"
                    className="flex-1 font-medium border rounded px-2 py-1"
                  />
                  <button
                    onClick={() => moveActivity(day.id, activity.id, -1)}
                    disabled={i === 0}
                    className="text-xs disabled:opacity-30"
                    aria-label="Move up"
                  >
                    ↑
                  </button>
                  <button
                    onClick={() => moveActivity(day.id, activity.id, 1)}
                    disabled={i === day.activities.length - 1}
                    className="text-xs disabled:opacity-30"
                    aria-label="Move down"
                  >
                    ↓
                  </button>
                  <button
                    onClick={() => removeActivity(day.id, activity.id)}
                    className="text-xs text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
                <input
                  value={activity.location}
                  onChange={(e) =>
                    updateActivity(day.id, activity.id, { location: e.target.value })
                  }
                  placeholder="location"
                  className="text-sm border rounded px-2 py-1"
                />
                <textarea
                  value={activity.description}
                  onChange={(e) =>
                    updateActivity(day.id, activity.id, { description: e.target.value })
                  }
                  placeholder="description"
                  className="text-sm border rounded px-2 py-1"
                  rows={2}
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => addActivity(day.id)}
            className="text-sm text-blue-600 hover:underline self-start"
          >
            + Add activity
          </button>
        </div>
      ))}

      <button
        onClick={addDay}
        className="border border-dashed rounded-lg py-3 text-sm text-gray-600 hover:bg-gray-50"
      >
        + Add day
      </button>
    </div>
  );
}
