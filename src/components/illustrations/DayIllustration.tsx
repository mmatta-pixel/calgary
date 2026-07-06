import CalgarySkyline from "@/components/illustrations/CalgarySkyline";
import BanffCanyon from "@/components/illustrations/BanffCanyon";
import KensingtonPark from "@/components/illustrations/KensingtonPark";
import CanmoreLake from "@/components/illustrations/CanmoreLake";

const scenesByDay = {
  1: CalgarySkyline,
  2: BanffCanyon,
  3: KensingtonPark,
  4: CanmoreLake,
} as const;

interface DayIllustrationProps {
  day: number;
}

export default function DayIllustration({ day }: DayIllustrationProps) {
  const Scene = scenesByDay[day as keyof typeof scenesByDay];
  if (!Scene) return null;
  return (
    <div className="rounded-xl overflow-hidden border border-border">
      <Scene />
    </div>
  );
}
