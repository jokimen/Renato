interface IconProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
}

// lucide-react has no barber-chair or hair-clipper icon — hand-drawn to
// match lucide's stroke style (24x24 viewBox, rounded strokes). Default
// strokeWidth of 0.6 matches the Scissors icon used alongside these in
// the Hero, so all three read as one consistent set.
export function BarberChairIcon({
  size = 24,
  strokeWidth = 0.6,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="9" y="2" width="6" height="4" rx="1" />
      <path d="M10 6v8" />
      <path d="M14 6v8" />
      <rect x="6" y="14" width="12" height="3" rx="1" />
      <path d="M6 15.5H4" />
      <path d="M18 15.5h2" />
      <path d="M12 17v3" />
      <path d="M7 22h10" />
      <path d="M9.5 20 7 22" />
      <path d="M14.5 20 17 22" />
    </svg>
  );
}

export function ClipperIcon({
  size = 24,
  strokeWidth = 0.6,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="8" y="6" width="8" height="14" rx="2" />
      <path d="M9 6V3.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V6" />
      <path d="M10 2.5v1.5" />
      <path d="M12 2v2" />
      <path d="M14 2.5v1.5" />
      <circle cx="12" cy="10.5" r="1.3" />
      <path d="M9.5 15h5" />
      <path d="M9.5 17h5" />
    </svg>
  );
}
