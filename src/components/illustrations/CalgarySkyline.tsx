export default function CalgarySkyline() {
  return (
    <svg
      viewBox="0 0 400 160"
      className="w-full h-auto"
      role="img"
      aria-label="Illustration of the Calgary downtown skyline with the Calgary Tower"
    >
      <rect x="0" y="0" width="400" height="160" fill="var(--color-forest)" opacity="0.08" />

      <rect x="30" y="80" width="34" height="70" fill="var(--color-forest)" opacity="0.85" />
      <rect x="72" y="55" width="28" height="95" fill="var(--color-forest)" />
      <rect x="108" y="95" width="30" height="55" fill="var(--color-forest)" opacity="0.7" />
      <rect x="250" y="65" width="30" height="85" fill="var(--color-forest)" opacity="0.75" />
      <rect x="288" y="90" width="26" height="60" fill="var(--color-forest)" opacity="0.9" />
      <rect x="322" y="45" width="30" height="105" fill="var(--color-forest)" />
      <rect x="360" y="100" width="24" height="50" fill="var(--color-forest)" opacity="0.6" />

      <rect x="186" y="60" width="10" height="90" fill="var(--color-terracotta)" />
      <ellipse cx="191" cy="55" rx="22" ry="10" fill="var(--color-terracotta)" />
      <rect x="181" y="46" width="20" height="9" rx="3" fill="var(--color-terracotta-dark)" />

      <rect x="0" y="150" width="400" height="10" fill="var(--color-forest-dark)" />
    </svg>
  );
}
