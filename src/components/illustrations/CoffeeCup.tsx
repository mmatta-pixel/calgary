export default function CoffeeCup() {
  return (
    <svg
      viewBox="0 0 400 160"
      className="w-full h-auto"
      role="img"
      aria-label="Illustration of a steaming coffee cup on a saucer"
    >
      <rect x="0" y="0" width="400" height="160" fill="var(--color-forest)" opacity="0.08" />

      <path
        d="M150 60 C150 100, 250 100, 250 60 L250 55 L150 55 Z"
        fill="var(--color-terracotta)"
      />
      <path
        d="M150 100 C150 112, 250 112, 250 100 L246 115 C 240 122, 160 122, 154 115 Z"
        fill="var(--color-terracotta-dark)"
      />
      <path
        d="M248 65 C270 65, 270 90, 248 90"
        fill="none"
        stroke="var(--color-terracotta)"
        strokeWidth="7"
      />

      <ellipse cx="200" cy="122" rx="70" ry="10" fill="var(--color-forest)" opacity="0.35" />

      <path
        d="M180 45 C176 35, 184 30, 180 20"
        fill="none"
        stroke="var(--color-forest)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M200 45 C196 33, 206 28, 200 15"
        fill="none"
        stroke="var(--color-forest)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M220 45 C216 35, 224 30, 220 20"
        fill="none"
        stroke="var(--color-forest)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
