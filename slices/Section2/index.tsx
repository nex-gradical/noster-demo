import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Section2`.
 */
export type Section2Props = SliceComponentProps<Content.Section2Slice>;

/**
 * Component for "Section2" Slices.
 */
const Section2: FC<Section2Props> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="h-screen"
    >
      <div className="flex object-fill">
        <div className="w-[50%]">
          <div>
            <PrismicRichText field={slice.primary.heading} />
          </div>
          <div>
            <PrismicRichText field={slice.primary.description} />
          </div>
        </div>
        <div className="w-[50%]">
          <PrismicNextImage field={slice.primary.image} className="object-cover"/>
        </div>
      </div>
    </section>
  );
};

export default Section2;
