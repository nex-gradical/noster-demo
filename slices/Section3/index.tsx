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
      className="mt-20 font-pop mb-100"
    >
      {/* Upper section */}
      <div className="flex justify-between px-20 mb-20">
        <div className="w-[50%]">
          <PrismicRichText field={slice.primary.main_heading} />
        </div>
        <div className="w-[50%]">
          <PrismicRichText field={slice.primary.main_description} />
        </div>
      </div>

      {/* Lower Section */}
      <div className="flex gap-5 px-20 w-full h-full">
        {/* Left Side */}
        <div className="w-[50%] h-full sticky top-10 ">
          <div className="relative">
            <PrismicNextImage
              field={slice.primary.main_image}
              className="w-full "
            />
            <div className="absolute bottom-20 left-10 text-5xl">
              <PrismicRichText field={slice.primary.heading} />
            </div>
            <div className="absolute bottom-10 left-10 text-2xl">
              <PrismicRichText field={slice.primary.description} />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-[50%] flex flex-col gap-10 h-full">
          {slice.primary.group.map((item, index) => (
            <div key={index} className=" w-full h-full">
              <div className="relative">
                <PrismicNextImage
                  field={item.image}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-15 left-10">
                  <PrismicRichText field={item.heading} />
                </div>
                <div className="absolute bottom-10 left-10">
                  <PrismicRichText field={item.description} />
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
