"use client";

import { PrismicNextLink } from "@prismicio/next";

interface HeaderCTAButtonProps {
  field: any;
  isAtTop: boolean;
  isHovered: boolean;
}

export default function HeaderCTAButton({
  field,
  isAtTop,
  isHovered,
}: HeaderCTAButtonProps) {
  const className = `px-9 py-3 rounded-lg transition-all duration-300 border inline-block ${
    isAtTop && !isHovered
      ? "bg-transparent border-white text-white"
      : "bg-green-950 border-green-950 text-white hover:bg-black"
  }`;

  return <PrismicNextLink field={field} className={className} />;
}
