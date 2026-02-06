"use client";
import { useState } from "react";
import { PrismicNextLink } from "@prismicio/next";
import Logo from "@/components/Logo";

export default function HeaderMobile({
  navigation,
  additionalData,
}: {
  navigation: any;
  additionalData: any;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="xl:hidden flex items-center justify-between w-full px-4 h-20 ">
      <div className="flex w-full  items-center justify-between z-150 text-black">
        <Logo active={isOpen} solid={true} />
        {/* Simple Hamburger Icon */}
        <div className="space-y-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-sm font-semibold uppercase tracking-widest py-3 px-5 text-black border rounded  transition-all  active:scale-97"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed -top-7 -left-5 -right-5 inset-0 bg-white h-screen z-140 flex flex-col p-10 pt-45 gap-5">
          {additionalData.data.main_links.map((item: any, i: number) => (
            <div key={i} className="flex flex-col gap-1">
              {item.links.map((link: any) => (
                <PrismicNextLink key={link.key} field={link} className="text-4xl font-medium" />
              ))}
            </div>
          ))}

          {additionalData.data.sub_links.map((item: any, i: number) => (
            <div key={i} className="flex flex-col gap-2">
              {item.links.map((link: any) => (
                <PrismicNextLink key={link.key} field={link}  className="text-xs font-medium"/>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
