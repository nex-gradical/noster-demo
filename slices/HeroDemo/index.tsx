"use client";
import { FC, useRef } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

// GSAP Imports
import gsap from "gsap";
import DropDown from "@/components/DropDown";

export type HeroDemoProps = SliceComponentProps<
  Content.HeroDemoSlice,
  SliceContext
>;
interface SliceContext {
  additionalData: Content.FooterDocument;
}

const HeroDemo: FC<HeroDemoProps> = ({ slice, context }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const extraPower = context.additionalData.data;
  const dropdownLinks = extraPower.main_links?.[0]?.links || [];
  // This function runs every time the slide changes
  const animateLayers = (swiper: any) => {
    // Get the current visible slide
    const activeSlide = swiper.slides[swiper.activeIndex];

    // Find our three layers
    const bg = activeSlide.querySelector(".hero-bg");
    const triangleContainer = activeSlide.querySelector(".triangle-container");
    const triangleImage = activeSlide.querySelector(".triangle-image");

    if (!bg || !triangleContainer || !triangleImage) return;

    // Reset any existing animations
    gsap.killTweensOf([bg, triangleContainer, triangleImage]);

    // Create the timeline
    const tl = gsap.timeline({
      defaults: { duration: 1.5, ease: "power1.out" },
    });

    // PARALLAX LOGIC:
    // All move to 0 (perfect alignment) but start at different offsets
    // to create different speeds in the same direction.
    tl.fromTo(bg, { x: 0 }, { x: 0 }, 0);
    tl.fromTo(triangleContainer, { x: 0 }, { x: 0 }, 0);
    tl.fromTo(triangleImage, { x: 55 }, { x: 0 }, 0);
  };

  return (
    <section
      ref={rootRef}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="  h-dvh xl:block xl:h-screen w-full overflow-hidden font-pop relative bg-black select-none rounded-b-xs "
    >
      {/* FIXED CONTENT OVERLAY */}
      <div className="absolute bottom-40 w-full pl-3 xl:pl-0 xl:bottom-20 xl:left-10 text-white z-20 xl:pointer-events-none ">
        <div className="text-lg xl:text-7xl mb-4 font-bold">
          <PrismicRichText field={slice.primary.heading} />
        </div>
        <div className=" text-xs xl:text-2xl opacity-80">
          <PrismicRichText field={slice.primary.description} />
        </div>
      </div>
      <div className="xl:hidden absolute w-full bottom-3 z-25 px-3">
        <DropDown dataz={dropdownLinks} direction="up" />
      </div>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={1200}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        onInit={animateLayers}
        onSlideChange={animateLayers}
        className="h-full w-full"
        allowTouchMove={false}
      >
        {slice.primary.carousal.map((item, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="h-screen w-full relative flex items-center justify-center">
              {/* LAYER 1: THE BACKGROUND */}
              <div className=" hero-bg absolute inset-0">
                <PrismicNextImage
                  field={item.images}
                  fill
                  className="w-full h-full object-cover xl:object-none"
                />
              </div>

              {/* LAYER 2: THE TRIANGLE WINDOW */}
              <div className="relative z-20 w-full h-full flex items-center justify-center">
                <svg width="0" height="0" className="absolute w-150 h-50">
                  <defs>
                    <clipPath
                      id={`triangle-clip-${index}`}
                      clipPathUnits="objectBoundingBox"
                    >
                      <path d="M 0.5, 0.1 L 0.9, 0.9 L 0.1, 0.9 Z" />
                    </clipPath>
                  </defs>
                </svg>

                <div
                  className="w-full h-full relative overflow-hidden"
                  style={{
                    clipPath: `url(#triangle-clip-${index})`,
                    WebkitClipPath: `url(#triangle-clip-${index})`,
                  }}
                >
                  {/* LAYER 3: THE IMAGE INSIDE THE TRIANGLE */}
                  <div className="triangle-image w-full border h-full">
                    <PrismicNextImage
                      field={item.images}
                      fill
                      className="triangle-container w-full h-full object-cover xl:object-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroDemo;
