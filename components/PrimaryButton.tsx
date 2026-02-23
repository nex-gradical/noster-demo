"use client";

import { PrismicNextLink } from "@prismicio/next";

interface PrimaryButtonProps {
  field: any;
}

export default function PrimaryButton({ field }: PrimaryButtonProps) {
  return (
    <button className="text-[#fbefdd] cursor-pointer border border-[#fbefdd] text-xs xl:text-sm px-14 py-4 xl:px-18 xl:py-5 rounded-md transition-all duration-300 hover:bg-[#fbefdd] hover:text-black">
      <PrismicNextLink field={field} />
    </button>
  );
}
