"use client";

import { FC, useCallback, useEffect, useState } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import useEmblaCarousel from "embla-carousel-react";
import DropDown from "@/components/DropDown";

export type WeWorkHeroProps = SliceComponentProps<Content.WeWorkHeroSlice>;

const WeWorkHero: FC<WeWorkHeroProps> = ({ slice }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeType, setActiveType] = useState<number | null>(null);

  // Update the index whenever the carousel settles on a new slide
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const activeItem = slice.primary.hero_slider[selectedIndex];

  return (
    <section className="md:relative w-full xl:h-screen overflow-hidden mt-10">
      <div
        className=" hidden md:block absolute inset-0 h-full w-full"
        ref={emblaRef}
      >
        <div className="flex h-full">
          {slice.primary.hero_slider.map((item, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] min-w-0 h-full"
            >
              <PrismicNextImage
                field={item.hero_image}
                className="object-cover w-full h-full"
                fallbackAlt=""
              />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:block pointer-events-none absolute inset-0 z-20">
        <div className="relative h-full w-full">
          <div className=" pointer-events-auto flex gap-2 items-center absolute bottom-15 right-6 xl:bottom-5 xl:right-10 bg-transparent  transition-all duration-500">
            <div className=" w-full  text-white h-fit font-pop ">
              {activeItem.text}
            </div>
            <div className="flex items-center gap-4 font-pop">
              <button
                onClick={scrollPrev}
                className="h-6 w-6 flex rounded-full items-center justify-center border text-xl border-white  text-white"
              >
                {"<"}
              </button>
              <button
                onClick={scrollNext}
                className="h-6 w-6 flex rounded-full items-center justify-center border text-xl border-white  text-white"
              >
                {">"}
              </button>
            </div>
          </div>

          {/* Floating Hero Card (Left Side) */}
          <div className="pointer-events-auto absolute top-1/2 left-4 xl:left-10 -translate-y-1/2 bg-white p-8 shadow-xl rounded-2xl md:max-w-110 xl:max-w-xl font-pop">
            <div  >
              <div className=" text-5xl xl:text-6xl mb-7">
                <PrismicRichText field={slice.primary.heading} />
              </div>
              <div className=" text-sm xl:text-base mb-10">
                <PrismicRichText field={slice.primary.description} />
              </div>
              <div className="flex w-full justify-between mb-4">
                {slice.primary.types.map((item, i) => {
                  const isActive = i === activeType;

                  return (
                    <button
                      key={i}
                      onClick={() => setActiveType(i)}
                      className={`flex flex-col rounded-2xl min-w-30 xl:min-w-40 cursor-pointer xl:max-w-50 p-1 border transition-colors duration-300 ${
                        isActive
                          ? "border-blue-600 bg-blue-50"
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      <div className="self-center">
                        <PrismicNextImage field={item.icon} />
                      </div>
                      <div className="text-center text-sm">{item.text}</div>
                    </button>
                  );
                })}
              </div>
              <div className="">
                <DropDown dataz={slice.primary.drop_down} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile only hero/card */}
      <div className="md:hidden">
        <div className="pointer-events-auto  bg-white p-7 shadow-xl rounded-2xl  font-pop">
          <div>
            <div className="text-4xl mb-3">
              <PrismicRichText field={slice.primary.heading} />
            </div>
            <div className="text-xs mb-4">
              <PrismicRichText field={slice.primary.description} />
            </div>
            <div className="flex w-full justify-between mb-4">
              {slice.primary.types.map((item, i) => {
                const isActive = i === activeType;

                return (
                  <button
                    key={i}
                    onClick={() => setActiveType(i)}
                    className={`flex flex-col rounded-2xl min-w-26 max-w-30  sm:min-w-45 sm:max-w-55 cursor-pointer  p-1 border transition-colors duration-300 ${
                      isActive
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    <div className="self-center">
                      <PrismicNextImage field={item.icon} />
                    </div>
                    <div className="text-center text-xs">{item.text}</div>
                  </button>
                );
              })}
            </div>
            <div className="">
              <DropDown dataz={slice.primary.drop_down} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeWorkHero;
