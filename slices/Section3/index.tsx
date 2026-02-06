"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Section3`.
 */
export type Section3Props = SliceComponentProps<Content.Section3Slice>;

/**
 * Component for "Section3" Slices.
 */
const Section3: FC<Section3Props> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-20 font-pop mb-20 xl:mb-100 px-5 xl:px-20"
    >
      {/* Upper section */}
      <div className="flex xl:flex-row flex-col gap-10 justify-between mb-20">
        <div className="xl:w-[30%] text-xl xl:text-6xl font-medium">
          <PrismicRichText field={slice.primary.main_heading} />
        </div>
        <div className="xl:w-[50%]">
          <PrismicRichText field={slice.primary.main_description} />
        </div>
      </div>

      {/* Lower Section */}
      <div className="flex flex-col xl:flex-row gap-5  w-full h-full">
        {/* Left Side */}
        <div className="xl:w-[80%] h-full xl:sticky top-10 ">
          <div className="relative h-full">
            <PrismicNextImage
              field={slice.primary.main_image}
              className="w-full xl:h-full h-90 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/10 to-transparent" />

            <div className="absolute flex flex-col gap-2 bottom-4  xl:bottom-6 xl:left-6 px-4 xl:px-0 ">
              <div className="text-2xl xl:text-3xl font-medium text-white">
                <PrismicRichText field={slice.primary.heading} />
              </div>
              <div className="text-xs text-white">
                <PrismicRichText field={slice.primary.description} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="xl:w-[50%] flex flex-col gap-10 h-full">
          {slice.primary.group.map((item, index) => (
            <div key={index} className=" w-full h-full">
              <div className="relative">
                <PrismicNextImage
                  field={item.image}
                  className="w-full xl:h-full h-90 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/10 to-transparent" />
                <div className="absolute flex flex-col gap-2 bottom-4  xl:bottom-6 xl:left-6 px-4 xl:px-0 ">
                  <div className="text-2xl xl:text-3xl font-medium text-white">
                    <PrismicRichText field={item.heading} />
                  </div>
                  <div className="text-xs text-white">
                    <PrismicRichText field={item.description} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
