import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

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
      className="mb-100 font-pop"
    >
      <div>
        {/* Heading and Description */}
        <div className=" flex flex-col justify-center items-center text-center mb-40 sticky top-40">
          <div>
            <PrismicRichText field={slice.primary.heading} />
          </div>
          <div>
            <PrismicRichText field={slice.primary.description} />
          </div>
        </div>
        {/* Cards */}
        <div className="flex flex-col gap-10 mb-20">
          {" "}
          {slice.primary.cards.map((item, index) => (
            <div
              key={index}
              className="sticky rounded-xl overflow-hidden shadow-lg bg-red-400"
              style={{
                top: `${100 + index * 10}px`,

                zIndex: index + 1,

                marginBottom: `${(slice.primary.cards.length - index) * 10}px`,
              }}
            >
              <PrismicNextLink field={item.link}>
                <div className="flex px-20 min-h-100">
                  {" "}
                  {/* Left Image */}
                  <div className="w-1/2 h-125">
                    <PrismicNextImage
                      field={item.image}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Right Info */}
                  <div className="flex flex-col justify-between p-6">
                    <div>
                      <div className="uppercase tracking-wide text-sm">
                        {item.category}
                      </div>
                      <PrismicRichText field={item.title} />
                      <PrismicRichText field={item.location} />
                    </div>

                    <div className="mt-auto">
                      <div className="mb-2 font-medium">
                        {item.availability_status}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {item.tags?.split(",").map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-xs bg-stone-200 text-stone-800"
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
        <div className="flex justify-around">
          <div className="flex gap-10">
            {slice.primary.links_and_labels.map((item, index) => (
              <div key={index}>
                <PrismicNextLink field={item.link}>
                  {item.label}
                </PrismicNextLink>
              </div>
            ))}
          </div>
          <div>
            <button>
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
