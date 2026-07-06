export default function KensingtonPark() {
  return (
    <svg
      viewBox="0 0 400 160"
      className="w-full h-auto"
      role="img"
      aria-label="Illustration of a riverside park with trees and a winding path"
    >
      <rect x="0" y="0" width="400" height="160" fill="var(--color-forest)" opacity="0.08" />

      <path
        d="M0 120 C 100 100, 150 140, 240 110 C 300 92, 350 115, 400 100 L400 160 L0 160 Z"
        fill="var(--color-terracotta)"
        opacity="0.18"
      />

      <g opacity="0.9">
        <circle cx="55" cy="70" r="30" fill="var(--color-forest)" />
        <rect x="51" y="95" width="8" height="30" fill="var(--color-forest-dark)" />
      </g>
      <g opacity="0.8">
        <circle cx="120" cy="55" r="24" fill="var(--color-forest)" />
        <rect x="116" y="75" width="8" height="35" fill="var(--color-forest-dark)" />
      </g>
      <g opacity="0.75">
        <circle cx="330" cy="65" r="28" fill="var(--color-forest)" />
        <rect x="326" y="88" width="8" height="32" fill="var(--color-forest-dark)" />
      </g>
      <g opacity="0.85">
        <circle cx="365" cy="45" r="20" fill="var(--color-forest)" />
        <rect x="361" y="62" width="8" height="30" fill="var(--color-forest-dark)" />
      </g>

      <path
        d="M0 140 C 90 120, 160 155, 230 128 C 290 105, 340 135, 400 120 L400 160 L0 160 Z"
        fill="var(--color-forest)"
        opacity="0.35"
      />
    </svg>
  );
}
