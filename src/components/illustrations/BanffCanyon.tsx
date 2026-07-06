export default function BanffCanyon() {
  return (
    <svg
      viewBox="0 0 400 160"
      className="w-full h-auto"
      role="img"
      aria-label="Illustration of jagged mountain peaks with a waterfall and pine trees"
    >
      <rect x="0" y="0" width="400" height="160" fill="var(--color-forest)" opacity="0.08" />

      <path
        d="M0 130 L60 45 L100 90 L150 20 L210 95 L260 40 L310 100 L360 55 L400 110 L400 160 L0 160 Z"
        fill="var(--color-forest)"
        opacity="0.85"
      />
      <path d="M150 20 L165 45 L135 45 Z" fill="var(--color-cream)" opacity="0.6" />
      <path d="M60 45 L72 65 L48 65 Z" fill="var(--color-cream)" opacity="0.5" />
      <path d="M260 40 L272 60 L248 60 Z" fill="var(--color-cream)" opacity="0.5" />

      <path
        d="M188 30 C 182 70, 196 90, 186 160 L206 160 C 214 90, 200 70, 206 30 Z"
        fill="var(--color-cream)"
        opacity="0.75"
      />

      <path
        d="M0 140 C 60 132, 120 138, 400 128 L400 160 L0 160 Z"
        fill="var(--color-forest-dark)"
      />

      <path d="M40 150 L52 122 L64 150 Z" fill="var(--color-forest-dark)" />
      <path d="M60 152 L74 118 L88 152 Z" fill="var(--color-forest-dark)" />
      <path d="M320 150 L332 122 L344 150 Z" fill="var(--color-forest-dark)" />
      <path d="M340 152 L354 118 L368 152 Z" fill="var(--color-forest-dark)" />
    </svg>
  );
}
