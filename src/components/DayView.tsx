import type { Audience, DayPlan } from "@/data/itinerary";
import ScheduleTimeline from "@/components/ScheduleTimeline";
import MealSection from "@/components/MealSection";
import DayIllustration from "@/components/illustrations/DayIllustration";

interface DayViewProps {
  day: DayPlan;
  audience: Audience;
}

export default function DayView({ day, audience }: DayViewProps) {
  return (
    <div className="flex flex-col gap-6">
      <DayIllustration day={day.day} />
      <h2 className="font-serif text-2xl font-semibold text-forest-dark">
        Day {day.day} — {day.title}
      </h2>
      <ScheduleTimeline schedule={day.schedule} mapContext={day.mapContext} />
      <MealSection title="Lunch" options={day.lunch} mapContext={day.mapContext} />
      <MealSection
        title="Dinner"
        options={day.dinner}
        mapContext={day.mapContext}
        audience={audience}
      />
    </div>
  );
}
