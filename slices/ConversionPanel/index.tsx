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
    >
      <div className="w-full flex">
        <div className="w-full flex">
          {slice.primary.panel.map((item, i) => (
            <CommonCard
              key={i}
              variant={i === 0 ? "maroon" : "green"}
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
