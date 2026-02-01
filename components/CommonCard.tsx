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
  isSearchCard, 
}: any) => {
 
  const bgColors: any = {
    maroon: "bg-[#4a0404]",
    green: "bg-[#253d35]",
    blue: "bg-[#1e3a8a]",
    charcoal: "bg-[#1a1a1a]",
  };

  return (
    <div className="w-full  h-full ">
      <div
        className={`relative w-full flex flex-col justify-between py-10 pr-10 pl-13 text-white rounded-xl min-h-90 max-h-100 h-full ${
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
          <div className="max-w-xl text-5xl">
            <PrismicRichText field={heading} />
          </div>

          {/* 3. Conditional Slot: Search Dropdown OR Standard Links */}
          {isSearchCard
            ? /* Mode A: Search Bar */
              dropDownData &&
              dropDownData.length > 0 && (
                <div className="mt-20 px-5">
                  <DropDown dataz={dropDownData} />
                </div>
              )
            : /* Mode B: Standard Links */
              links &&
              links.length > 0 && (
                <div className="flex gap-8 text-sm font-medium mt-3">
                  {links.map((link: any, idx: number) => (
                    <div key={idx}>
                      <PrismicNextLink field={link} className="text-2xl" />
                    </div>
                  ))}
                </div>
              )}
        </div>

        {/* 4. Standard Button Slot */}
        {/* Only shows if NOT a search card and a link exists */}
        {!isSearchCard && buttonLink && (
          <div className="mb-8">
            <button>
              <PrismicNextLink
                field={buttonLink}
                className="border rounded border-white px-12 py-4 font-pop text-xl hover:bg-white hover:text-black transition-colors"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonCard;
