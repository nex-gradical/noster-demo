import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import CommonCard from "@/components/CommonCard";

/**
 * Props for `ConversionPanel`.
 */
export type ConversionPanelProps =
  SliceComponentProps<Content.ConversionPanelSlice>;

/**
 * Component for "ConversionPanel" Slices.
 */
const ConversionPanel: FC<ConversionPanelProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="hide-conversion-bar"
      className="xl:py-20 my-15"
    >
      <div className="w-full flex px-3 xl:px-10">
        <div className="w-full flex flex-col lg:flex-row gap-4">
          {slice.primary.panel.map((item, i) => (
            <CommonCard
              key={i}
              containerClass={"w-full"}
              variant={i === 0 ? "maroon" : "green"}
              headingClass={i === 0 ? "text-[#fbefdd]" : "white"}
              dropDownDirection="bottom-full mb-1 md:top-full md:mt-1 md:bottom-auto"
              heading={item.heading}
              links={item.link}
              buttonLink={item.button_link}
              showLogo={item.logo}
              dropDownData={item.dropdown_links}
              isSearchCard={item.search_bar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConversionPanel;
