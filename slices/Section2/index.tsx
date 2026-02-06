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
      className="h-full w-full mt-20 px-5 xl:mt-40 font-pop mb-40 xl:px-20 "
    >
      <div className="flex flex-col xl:flex-row items-center gap-20 xl:gap-0 h-full">
        <div className="xl:w-[50%] h-fit">
          <div className="xl:w-[60%] text-2xl xl:text-5xl font-medium mb-15">
            <PrismicRichText field={slice.primary.heading} />
          </div>
          <div className="xl:w-[80%] text-sm xl:text-lg">
            <PrismicRichText field={slice.primary.description} />
          </div>
        </div>
        {/* Image */}
        <div className=" w-full xl:w-[50%] h-full ">
          <div className=" relative w-full h-full flex justify-center items-center ">
            <PrismicNextImage
              field={slice.primary.image}
              className="object-cover w-full h-full z-2 rounded-lg"
            />

            <TriangleInner className="absolute w-90 h-90 xl:w-200  xl:h-200 xl:-top-45  " />
            <TriangleOuter className=" absolute w-90 h-90 xl:w-200  xl:h-200 xl:-top-45  z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
