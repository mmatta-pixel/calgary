import Image from "next/image";
import { trip } from "@/data/itinerary";

export default function HeroBanner() {
  return (
    <div className="relative h-[70vh] min-h-[420px] w-full overflow-hidden">
      <Image
        src={trip.heroImage}
        alt="Mountains in the Canadian Rockies"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-3 px-6 text-center text-cream">
        <h1 className="font-serif text-6xl sm:text-7xl font-semibold tracking-wide uppercase">
          {trip.title}
        </h1>
        <p className="text-lg text-cream/90">{trip.subtitle}</p>
      </div>
    </div>
  );
}
