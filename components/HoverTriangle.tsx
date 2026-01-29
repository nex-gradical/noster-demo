type TriangleIconProps = {
  size?: number;
  className?: string;
};

export default function TriangleIcon({
  size = 10,
  className = "",
}: TriangleIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M2 1 L8 5 L2 9 Z"
        fill="gray"
        stroke="gray"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}
