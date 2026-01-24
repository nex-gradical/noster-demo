import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import TriangleInner from "@/components/TriangleInner";
import TriangleOuter from "@/components/TriangleOuter";

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
      className="h-full w-full mt-40 font-pop mb-40 px-20"
    >
      <div className="flex object-fill h-full">
        <div className="w-[50%] h-full">
          <div className="w-[60%]">
            <PrismicRichText field={slice.primary.heading} />
          </div>
          <div className="w-[50%]">
            <PrismicRichText field={slice.primary.description} />
          </div>
        </div>
        <div className="  w-[50%] h-full flex items-center justify-center">
          <div className=" relative w-full h-[50%] flex justify-center items-center">
            <PrismicNextImage
              field={slice.primary.image}
              className="object-cover w-full z-2"
            />

            <TriangleInner className="absolute w-200 h-200 -top-45 " />
            <TriangleOuter className=" absolute w-200 h-200 -top-45  z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
