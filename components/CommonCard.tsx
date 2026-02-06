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
  containerClass,
  headingClass,
  dropDownDirection = "down"
}: any) => {
  const bgColors: any = {
    maroon: "bg-[#4a0404]",
    green: "bg-[#253d35]",
    blue: "bg-[#1e3a8a]",
    charcoal: "bg-[#1a1a1a]",
    sandal: "bg-[#f5d6ab]",
  };

  return (
    <div className={` ${containerClass}`}>
      <div
        className={`relative w-full flex flex-col justify-between p-6 sm:p-8 md:py-10 md:pr-10 md:pl-13
           text-white rounded-xl border h-full 
          ${bgColors[variant] || bgColors.maroon}`}
      >
        {/* 1. Logo Slot */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8">
          {showLogo && (
            <div className="flex flex-col items-end gap-1 scale-75 md:scale-100">
              <Logo active={true} solid={true} />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          {/* 2. Title Slot */}
          <div className={`${headingClass} max-w-xl text-3xl sm:text-4xl md:text-5xl font-medium  leading-tight`}>
            <PrismicRichText field={heading} />
          </div>

          {/* 3. Conditional Slot: Search Dropdown OR Standard Links */}
          {isSearchCard
            ? dropDownData &&
              dropDownData.length > 0 && (
                <div className="mt-8 md:mt-20 px-0 sm:px-5">
                  <DropDown dataz={dropDownData} direction={dropDownDirection} />
                </div>
              )
            : links &&
              links.length > 0 && (
                <div className="flex flex-col  xl:flex-row xl:flex-wrap gap-1 xl:gap-4 md:gap-8 text-sm font-medium mt-3">
                  {links.map((link: any, idx: number) => (
                    <div key={idx}>
                      <PrismicNextLink
                        field={link}
                        className=" text-[#fbefdd] text-sm md:text-2xl hover:underline"
                      />
                    </div>
                  ))}
                </div>
              )}
        </div>

        {/* 4. Standard Button Slot */}
        {!isSearchCard && buttonLink && (
          <div className="mt-8 mb-2 md:mb-8">
            <button className="w-full sm:w-auto">
              <PrismicNextLink
                field={buttonLink}
                className="block text-center border rounded border-white px-8 md:px-12 py-3 md:py-4 font-pop text-lg md:text-xl hover:bg-white hover:text-black transition-colors"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommonCard;
