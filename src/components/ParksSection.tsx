import Image from "next/image";
import { trip } from "@/data/itinerary";
import type { TravelMode } from "@/lib/maps";
import OptionGroup from "@/components/OptionGroup";

interface ParksSectionProps {
  directionsMode: TravelMode;
}

export default function ParksSection({ directionsMode }: ParksSectionProps) {
  return (
    <section id="parks" className="scroll-mt-20 bg-tint py-16">
      <div className="max-w-3xl mx-auto px-6 flex flex-col gap-6">
        <div className="relative w-full aspect-[16/6] rounded-xl overflow-hidden">
          <Image
            src={trip.parksImage}
            alt="A tree-lined park pathway"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-serif text-3xl font-semibold text-forest-dark">More Parks</h2>
          <p className="text-muted">{trip.parksIntro}</p>
        </div>
        <OptionGroup
          options={[...trip.parks]}
          mapContext={trip.parksMapContext}
          planKey="parks"
          directionsMode={directionsMode}
          layout="grid"
        />
      </div>
    </section>
  );
}
