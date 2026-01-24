export default function Logo({ active, solid }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 100 100"
      className="cursor-pointer"
    >
      {/* Triangle */}
      <polygon
        points="50,10 90,90 10,90"
        fill="none"
        stroke={
          active
            ? "#111" // when hovered (active)
            : solid
              ? "#111" // scrolled, inactive but black
              : "#fff" // at top, inactive white
        }
        strokeWidth="6"
        className={`
    transition-all duration-700 ease-out
    origin-center
    ${active ? "scale-110" : "scale-100"}`}
      />

      {/* Circle */}
      <circle
        cx="50"
        cy="65"
        r={active ? "25" : "14"}
        fill={
          active
            ? "#f59e0b" // hovered = amber
            : solid
              ? "#111" // scrolled = black
              : "#fff" // at top = white
        }
        className="transition-all duration-700 ease-out"
      />
    </svg>
  );
}
