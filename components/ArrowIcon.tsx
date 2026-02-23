
export function ArrowIcon({
  className,
  direction = "right",
}: {
  className?: string;
  direction?: "left" | "right";
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} ${
        direction === "left" ? "rotate-180" : ""
      }`}
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}
