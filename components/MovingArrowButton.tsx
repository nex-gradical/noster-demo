import { PrismicNextLink } from "@prismicio/next";
import { ArrowIcon } from "./ArrowIcon";

type MovingArrowIconProps = {
  field: React.ComponentProps<typeof PrismicNextLink>["field"];
  direction?: "left" | "right";
  variant?: "dark" | "light" | "sandle";
  size?: "sm" | "md" | "lg" | "xs"| "xxs";
  linkClasses?: any;
};

const SIZE_MAP = {
  xxs:{button:"w-4 h-4", arrow:"w-3 h-3"},
  xs: { button: "w-5 h-5", arrow: "w-4 h-4" },
  sm: { button: "w-6 h-6", arrow: "w-4 h-4" },
  md: { button: "w-7 h-7", arrow: "w-5 h-5" },
  lg: { button: "w-9 h-9", arrow: "w-6 h-6" },
};

const VARIANT_MAP = {
  dark: { button: "border border-black text-black", link: "text-black" },
  light: { button: "border border-white text-white", link: "text-white" },
  sandle: {
    button: "border border-[#fbefdd] text-[#fbefdd]",
    link: "text-[#fbefdd]",
  },
};

export default function MovingArrowIcon({
  field,
  direction = "right",
  variant = "dark",
  size = "md",
  linkClasses = "",
}: MovingArrowIconProps) {
  const outgoingTranslate =
    direction === "right"
      ? "group-hover:translate-x-4"
      : "group-hover:-translate-x-4";

  const incomingInitialTranslate =
    direction === "right" ? "-translate-x-4" : "translate-x-4";

  const sizeStyles = SIZE_MAP[size];
  const variantStyles = VARIANT_MAP[variant];

  return (
    <div className="group flex gap-2 items-center">
      <button
        aria-label="Next"
        className={`
          relative
          rounded-full
          overflow-hidden
          flex items-center justify-center
          ${sizeStyles.button}
          ${variantStyles.button}
        `}
      >
        {/* OUTGOING */}
        <span
          className={`
            absolute
            transition-transform duration-300 ease-out
            ${outgoingTranslate}
            group-hover:scale-0
          `}
        >
          <ArrowIcon className={sizeStyles.arrow} direction={direction} />
        </span>

        {/* INCOMING */}
        <span
          className={`
            absolute
            ${incomingInitialTranslate}
            scale-0
            transition-transform duration-300 ease-out
            group-hover:translate-x-0
            group-hover:scale-100
          `}
        >
          <ArrowIcon className={sizeStyles.arrow} direction={direction} />
        </span>
      </button>

      <PrismicNextLink field={field} className={`${linkClasses} `} />
    </div>
  );
}
