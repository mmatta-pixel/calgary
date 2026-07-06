import type { Audience, MealOption } from "@/data/itinerary";
import PlaceLink from "@/components/PlaceLink";

interface MealSectionProps {
  title: string;
  options: MealOption[];
  mapContext: string;
  audience?: Audience;
}

export default function MealSection({ title, options, mapContext, audience }: MealSectionProps) {
  const visible = audience
    ? options.filter((option) => !option.audience || option.audience === audience)
    : options;

  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-serif text-sm font-semibold uppercase tracking-wide text-forest">
        {title}
      </h3>
      <div className="flex flex-col gap-3">
        {visible.map((option, i) => (
          <div
            key={option.name ?? i}
            className="border border-border bg-card rounded-lg p-3 flex flex-col gap-1.5 border-l-4 border-l-terracotta shadow-sm"
          >
            {option.name && (
              <PlaceLink
                place={option.name}
                context={mapContext}
                label={option.name}
                className="font-medium text-terracotta-dark hover:underline w-fit"
              />
            )}
            <p className="text-sm text-ink/80 leading-relaxed">{option.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
