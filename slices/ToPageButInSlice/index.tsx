"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import CommonCard from "@/components/CommonCard";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import MovingArrowButton from "@/components/MovingArrowButton";
import ContactForm from "@/components/ContactForm";
import { RichText } from "@/components/richtext/RichText";
/**
 * Props for `ToPageButInSlice`.
 */
export type ToPageButInSliceProps =
  SliceComponentProps<Content.ToPageButInSliceSlice>;

/**
 * Component for "ToPageButInSlice" Slices.
 */
const ToPageButInSlice: FC<ToPageButInSliceProps> = ({ slice }) => {
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel();

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  // Function to handle thumb click
  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi],
  );

  // Function to sync thumb selection when main carousel moves
  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);
  1;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-5 py-10 xl:px-15"
    >
      <div className="flex font-pop flex-col xl:flex-row h-full  gap-15 xl:gap-20 ">
        {/* Left Side */}
        <div className="xl:w-[35%] self-start xl:sticky top-20">
          {slice.primary.left_contents.map((item, i) => (
            <div key={i} className="flex flex-col gap-7">
              <div className="flex">
                <MovingArrowButton
                  field={item.return_button}
                  direction="left"
                  variant="dark"
                  size="xs"
                  linkClasses={"text-xs xl:text-lg"}
                />
              </div>
              <div>
                <RichText field={item.heading} />
              </div>

              <div className="inline-flex rounded-2xl px-4 py-2 border text-[10px] xl:text-xs self-start items-center gap-3">
                <span>{item.availability_status}</span>
                <span className="rounded-full bg-red-500 h-2 w-2"></span>
              </div>
              {/* Global box */}
              <div className="hidden xl:flex bg-[#f5d6ab]  flex-col gap-5 w-full h-40 pt-7 px-10 rounded-2xl">
                <div className=" text-3xl">
                  <PrismicRichText field={item.card_title} />
                </div>

                <div className="w-full">
                  <button className=" w-full  flex">
                    <PrismicNextLink
                      field={item.card_button_link}
                      className="w-full text-xl border py-3  rounded-2xl"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex-1 min-w-0">
          {/* flex-1 ensures it takes remaining space */}
          <div>
            <div className="text-4xl font-medium mb-5">
              <PrismicRichText field={slice.primary.right_heading} />
            </div>
            <div>
              <PrismicRichText field={slice.primary.right_description} />
            </div>
          </div>
          {/* GALLERY WRAPPER */}
          <div className="mt-6">
            {/* 1. MAIN VIEWPORT */}
            <div
              className="overflow-hidden rounded-2xl mb-4"
              ref={emblaMainRef}
            >
              <div className="flex">
                {slice.primary.slider_pictures.map((item: any, i: number) => (
                  <div className="flex-[0_0_100%] min-w-0" key={i}>
                    <PrismicNextImage
                      field={item.image}
                      className="w-full aspect-16/10 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 2. THUMBS VIEWPORT (Moved outside Main Viewport) */}
            <div className="overflow-hidden" ref={emblaThumbsRef}>
              <div className="flex gap-3">
                {slice.primary.slider_pictures.map((item: any, i: number) => (
                  <div
                    key={i}
                    onClick={() => onThumbClick(i)}
                    className={`flex-[0_0_18%] sm:flex-[0_0_15%] min-w-0 cursor-pointer transition-opacity ${
                      i === selectedIndex
                        ? "opacity-100"
                        : "opacity-40 hover:opacity-70"
                    }`}
                  >
                    <PrismicNextImage
                      field={item.image}
                      // aspect-video is a standard tailwind class
                      className="w-full aspect-video object-cover rounded-lg border-2 border-transparent"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10">
            {slice.primary.sub_heading_and_counts.map((item, i) => (
              <div key={i}>
                <div className="text-2xl font-medium xl:text-4xl mb-2">
                  <PrismicRichText field={item.heading} />
                </div>
                <div className="flex flex-col gap-4 xl:gap-0 xl:flex-row xl:justify-between">
                  <div className="text-3xl xl:text-5xl">
                    <PrismicRichText field={item.sub_heading} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p id="incro" className="text-3xl xl:text-5xl text-[#f5d6ab] font-bold">
                      {item.unit_number}
                    </p>
                    <p className="text-xs font-light xl:text-sm xl:self-end">{item.sq_feet}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5">
            {slice.primary.environment.map((item, i) => (
              <div
                key={i}
                className="border-t border-t-amber-600 py-5 space-y-2 "
              >
                <div className="text-4xl font-normal ">
                  <PrismicRichText field={item.title} />
                </div>
                <div className="text-sm">
                  <PrismicRichText field={item.description} />
                </div>
              </div>
            ))}
          </div>
          <div className="py-20">
            <ContactForm />
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-2xl xl:text-2xl font-bold">
              <PrismicRichText field={slice.primary.heading_2} />
            </div>
            <div className="text-sm xl:text-xl">
              <PrismicRichText field={slice.primary.description_2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToPageButInSlice;
