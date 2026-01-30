import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import Logo from "./Logo";
import DropDown from "./DropDown";

const CommonCard = ({
  variant,
  heading,
  links,
  buttonLink,
  showLogo,
  dropDownData,
  isSearchCard, // This is your item.search_bar boolean
}: any) => {
  // Map the variant string to the actual hex colors
  const bgColors: any = {
    maroon: "bg-[#4a0404]",
    green: "bg-[#253d35]",
    blue: "bg-[#1e3a8a]",
    charcoal: "bg-[#1a1a1a]",
  };

  return (
    <div className="w-full">
      <div
        className={`relative w-full flex flex-col justify-between p-10 text-white rounded-sm min-h-70 ${
          bgColors[variant] || bgColors.maroon
        }`}
      >
        {/* 1. Logo Slot */}
        <div className="absolute top-8 right-8">
          {showLogo && (
            <div className="flex flex-col items-end gap-1">
              <Logo active={true} solid={true} />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6">
          {/* 2. Title Slot */}
          <div className="max-w-md">
            <PrismicRichText field={heading} />
          </div>

          {/* 3. Conditional Slot: Search Dropdown OR Standard Links */}
          {isSearchCard ? (
            /* Mode A: Search Bar */
            dropDownData && dropDownData.length > 0 && (
              <div className="mt-10">
                <DropDown dataz={dropDownData} />
              </div>
            )
          ) : (
            /* Mode B: Standard Links */
            links && links.length > 0 && (
              <div className="flex gap-8 text-sm font-medium">
                {links.map((link: any, idx: number) => (
                  <div key={idx}>
                    <PrismicNextLink field={link} />
                  </div>
                ))}
              </div>
            )
          )}
        </div>

        {/* 4. Standard Button Slot */}
        {/* Only shows if NOT a search card and a link exists */}
        {!isSearchCard && buttonLink && (
          <div className="mt-8">
            <PrismicNextLink
              field={buttonLink}
              className="inline-block border border-white px-8 py-3 text-sm hover:bg-white hover:text-black transition-colors"/>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonCard;