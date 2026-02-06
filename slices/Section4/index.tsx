import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import MovingArrowIcon from "@/components/MovingArrowButton";

/**
 * Props for `Section4`.
 */
export type Section4Props = SliceComponentProps<Content.Section4Slice>;

/**
 * Component for "Section4" Slices.
 */
const Section4: FC<Section4Props> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="xl:mb-50 py-15 font-pop bg-[#4a0404] xl:py-20"
    >
      <div className="px-5 xl:px-20">
        {/* Heading and Description */}
        <div className=" flex flex-col justify-center items-center text-center mb-20 xl:mb-40 xl:sticky font-pop text-[#fbefdd] xl:top-40">
          <div className="text-[50px] leading-13 xl:text-7xl font-light">
            <PrismicRichText field={slice.primary.heading} />
          </div>
          <div className="mt-8 text-sm text-left xl:text-lg">
            <PrismicRichText field={slice.primary.description} />
          </div>
        </div>
        {/* Cards */}
        <div className="hidden xl:flex flex-col gap-10 ">
          {slice.primary.cards.map((item, index) => (
            <div
              key={index}
              className="sticky rounded-xl overflow-hidden shadow-lg border-t border-[#4a0404] bg-[#F5D6AB]"
              style={{
                top: `${100 + index * 10}px`,
                zIndex: index + 1,
                marginBottom: `${(slice.primary.cards.length - index) * 10}px`,
              }}
            >
              <PrismicNextLink field={item.link}>
                <div className="flex flex-col xl:flex-row min-h-100">
                  {/* Left Image */}
                  <div className="xl:w-1/2 h-125">
                    <PrismicNextImage
                      field={item.image}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Right Info */}
                  <div className="flex flex-col  justify-between p-6">
                    <div className="flex flex-col gap-2">
                      <div className=" tracking-wide text-[11px]">
                        {item.category}
                      </div>
                      <div className="text-2xl xl:text-6xl text-[#4f0003] font-medium">
                        <PrismicRichText field={item.title} />
                      </div>
                      <div>
                        <PrismicRichText field={item.location} />
                      </div>
                    </div>

                    <div className="mt-auto">
                      <div className="mb-2 font-medium">
                        {item.availability_status}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {item.tags?.split(",").map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full  text-xs bg-[#EBCDA5]  text-stone-800"
                          >
                            {tag.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </PrismicNextLink>
            </div>
          ))}
        </div>
        {/* MObile Version */}
        <div className="xl:hidden flex flex-col gap-5">
          {slice.primary.cards.map((item, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg border-t border-[#4a0404] bg-[#F5D6AB]"
            >
              <PrismicNextLink field={item.link}>
                <div className="flex flex-col xl:flex-row min-h-50 ">
                  {/* Left Image */}
                  <div className="xl:w-1/2 xl:h-125 h-80">
                    <PrismicNextImage
                      field={item.image}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Right Info */}
                  <div className="flex flex-col  justify-between p-6">
                    <div className="flex flex-col gap-2 pb-12">
                      <div className="tracking-wide text-[10px]">
                        {item.category}
                      </div>
                      <div className="text-2xl font-medium">
                        <PrismicRichText field={item.title} />
                      </div>
                      <div className="">
                        <PrismicRichText field={item.location} />
                      </div>
                    </div>

                    <div className="pb-4">
                      <div className="flex flex-wrap gap-3">
                        {item.tags?.split(",").map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 rounded-full text-[10px] bg-[#ebcda5] text-stone-800"
                          >
                            {tag.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </PrismicNextLink>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between mt-20 ">
          <div className="flex flex-wrap xl:flex-nowrap gap-5 xl:gap-10 mb-10">
            {slice.primary.links_and_labels.map((item, index) => (
              <div key={index}>
                <MovingArrowIcon
                  field={item.link}
                  variant="sandle"
                  size="xs"
                  linkClasses="text-[#fbefdd] text-xs xl:text-sm "
                />
              </div>
            ))}
          </div>
          <div>
            <button className="text-[#fbefdd]  cursor-pointer border border-[#fbefdd] text-xs xl:text-sm px-14 py-4 xl:px-18 xl:py-5 rounded-md transition-all duration-300 hover:bg-[#fbefdd] hover:text-black">
              <PrismicNextLink field={slice.primary.link}>
                {slice.primary.label}
              </PrismicNextLink>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
