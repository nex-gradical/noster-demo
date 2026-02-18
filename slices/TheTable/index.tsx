import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { TickIcon } from "@/components/TickIcon";
import React from "react";
import { RichText } from "@/components/richtext/RichText";

/**
 * Props for `TheTable`.
 */
export type TheTableProps = SliceComponentProps<Content.TheTableSlice>;

/**
 * Component for "TheTable" Slices.
 */
const TheTable: FC<TheTableProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#430003] font-pop px-5 xl:px-10 py-10"
    >
      <div>
        {/* Top */}
        <div className="grid grid-cols-1 xl:grid-cols-2">
          {/* Left */}
          <div className="flex flex-col  xl:mr-10  pb-5 xl:border-b xl:border-b-[#9B6B56]">
            <div className="text-center text-5xl xl:text-left xl:text-6xl text-[#f5d6ab]">
              <PrismicRichText field={slice.primary.heading} />
            </div>
            <div className="text-[#fbefdd] text-center xl:text-left  mt-5">
              <RichText
                field={slice.primary.sub_heading_and_description}
              />
            </div>
          </div>
          {/* Right */}
          <div className="flex gap-2 xl:gap-0 w-full">
            <div className="xl:mr-5  xl:border-b xl:border-b-[#9B6B56]">
              {slice.primary.traditional_office.map((item, i) => (
                <div key={i}>
                  <div >
                    <PrismicNextImage field={item.image} className="rounded-xl" />
                  </div>
                  <div className="mt-5 text-[#fbefdd] font-semibold text-center xl:text-left xl:text-2xl xl:pb-2 xl:border-b xl:border-b-[#480708]">{item.text}</div>
                </div>
              ))}
            </div>
            <div className="xl:ml-5  xl:border-b xl:border-b-[#9B6B56]">
              {slice.primary.our_office.map((item, i) => (
                <div key={i}>
                  <div>
                    <PrismicNextImage field={item.image} className="rounded-xl" />
                  </div>
                  <div className="mt-5 text-[#fbefdd] font-semibold text-center xl:text-left xl:text-2xl xl:pb-2 xl:border-b xl:border-b-[#480708]">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div>
          {slice.primary.the_table.map((item,i) => (
            <div key={i} className="grid grid-cols-1 xl:grid-cols-2 xl:border-t xl:border-t-[#480708] ">
              {/* Left */}
              <div className="flex gap-3 items-center justify-center xl:justify-start pt-5 pb-3 xl:py-4">
                <div className="text-[#fbefdd]">{item.heading}</div>
                <div className="text-[#fbefdd]">
                  {item.description?.length > 0 && (
                    <div className="relative group">
                      <button className="w-5 h-5 rounded-full border flex items-center justify-center text-xs">
                        i
                      </button>

                      <div className="absolute left-0 bottom-full hidden group-hover:block w-64 p-4 bg-white text-black">
                        <PrismicRichText field={item.description} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* Right */}
              <div className="flex gap-2 xl:gap-10 w-full h-full ">
                <div className=" flex items-center py-3 justify-center w-full h-full  bg-[#390002]">
                  {item.do_they && <TickIcon />}
                </div>
                <div className=" flex items-center py-3 justify-center w-full h-full bg-[#390002]">
                  {item.do_we && <TickIcon />}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Button below */}
        <div></div>
      </div>
    </section>
  );
};

export default TheTable;
