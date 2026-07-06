export default function HeroScene() {
  return (
    <svg
      viewBox="0 0 800 220"
      className="w-full h-auto"
      role="img"
      aria-label="Illustration of mountains, a river, and a city skyline at sunset"
    >
      <circle cx="400" cy="90" r="60" fill="var(--color-terracotta)" opacity="0.35" />

      <path
        d="M0 170 L110 60 L180 130 L260 40 L340 150 L420 70 L500 160 L580 55 L660 140 L740 90 L800 150 L800 220 L0 220 Z"
        fill="var(--color-forest)"
        opacity="0.25"
      />
      <path
        d="M0 190 L90 110 L170 165 L250 95 L330 180 L410 120 L500 190 L590 115 L680 175 L760 130 L800 170 L800 220 L0 220 Z"
        fill="var(--color-forest)"
        opacity="0.55"
      />
      <path
        d="M0 210 L70 160 L150 200 L230 145 L300 205 L390 155 L470 210 L560 150 L650 205 L730 165 L800 200 L800 220 L0 220 Z"
        fill="var(--color-forest-dark)"
      />

      <path
        d="M260 220 C 300 160, 340 200, 320 220 Z"
        fill="var(--color-cream)"
        opacity="0.5"
      />
      <path
        d="M0 220 C 120 205, 260 215, 340 200 C 440 185, 560 205, 700 195 L800 200 L800 220 Z"
        fill="var(--color-cream)"
        opacity="0.35"
      />
    </svg>
  );
}
