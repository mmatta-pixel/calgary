export default function CanmoreLake() {
  return (
    <svg
      viewBox="0 0 400 160"
      className="w-full h-auto"
      role="img"
      aria-label="Illustration of alpine mountains reflected in a turquoise lake"
    >
      <rect x="0" y="0" width="400" height="160" fill="var(--color-forest)" opacity="0.08" />

      <path
        d="M0 95 L70 30 L120 68 L180 15 L240 70 L290 35 L340 75 L400 45 L400 95 L0 95 Z"
        fill="var(--color-forest)"
      />
      <path d="M180 15 L192 38 L168 38 Z" fill="var(--color-cream)" opacity="0.65" />
      <path d="M70 30 L80 48 L60 48 Z" fill="var(--color-cream)" opacity="0.5" />

      <rect x="0" y="95" width="400" height="65" fill="#8fb9b3" opacity="0.45" />
      <path
        d="M0 95 L70 130 L120 108 L180 140 L240 110 L290 128 L340 105 L400 122 L400 95 Z"
        fill="var(--color-forest)"
        opacity="0.35"
      />

      <path d="M40 150 L52 122 L64 150 Z" fill="var(--color-forest-dark)" />
      <path d="M340 150 L352 122 L364 150 Z" fill="var(--color-forest-dark)" />
      <path d="M360 152 L372 128 L384 152 Z" fill="var(--color-forest-dark)" />
    </svg>
  );
}
