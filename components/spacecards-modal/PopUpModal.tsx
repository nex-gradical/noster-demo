"use client";

import { useEffect } from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

const PopUpModal = ({
  image,
  type,
  availability,
  name,
  place,
  tags,
  description,
  moreInfoLink,
  buttonOne,
  buttonTwo,
  onClose,
}: any) => {
  //  Lenis & Native Scroll Lock Logic
  useEffect(() => {
    // 1. Lock native scroll
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    // 2. Stop Lenis (using the global data attribute method)
    // Most Lenis setups respect the data-lenis-prevent attribute on the element,
    // but manually stopping it is safer if you have a global instance.
    const html = document.documentElement;
    html.setAttribute("data-lenis-prevent", "true");

    return () => {
      // Cleanup: Unlock everything
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      html.removeAttribute("data-lenis-prevent");
    };
  }, []);

  return (
    <div
      //  data-lenis-prevent tells Lenis to ignore wheel events on this element
      data-lenis-prevent="true"
      className="fixed font-pop inset-0 z-500 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
    >
      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-8xl max-h-[90vh] overflow-hidden rounded-lg flex flex-col md:flex-row shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-4 z-20 text-2xl hover:scale-110 transition-transform bg-white/80 rounded-full w-10 h-10 flex items-center justify-center shadow-sm"
        >
          ✕
        </button>

        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 h-48 md:h-auto shrink-0">
          <PrismicNextImage
            field={image}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
          <p className="text-xs uppercase tracking-widest text-gray-500">
            {type}
          </p>
          <p className="text-gray-600 mt-1">{place}</p>

          <h2 className="text-3xl md:text-5xl font-bold mt-2 md:mt-4 mb-4 md:mb-6">
            {name}
          </h2>

          <div className="mb-4">
            <h3 className="font-bold text-sm mb-2">At a glance</h3>
            <div className="text-gray-600 leading-relaxed text-sm md:text-base line-clamp-4">
              <PrismicRichText field={description} />
            </div>
          </div>

          <div>
            <PrismicNextLink
              field={moreInfoLink}
              className="text-amber-600 hover:text-amber-800 text-sm"
            />
          </div>

          <div className="my-6 md:my-8">
            <p
              className={
                availability
                  ? "text-red-500 text-sm"
                  : "text-green-600 text-sm font-semibold"
              }
            >
              {availability ? "Not available" : "Available now"}
            </p>

            <div className="mt-4 md:mt-10 flex flex-wrap gap-2">
              {(typeof tags === "string" ? tags : "").split(",").map(
                (tag, i) =>
                  tag.trim() !== "" && (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-[10px] md:text-xs bg-stone-200 text-stone-800"
                    >
                      {tag.trim()}
                    </span>
                  ),
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-stone-900 text-white px-8 py-3 rounded hover:bg-black transition-colors text-sm">
              <PrismicNextLink field={buttonOne} className="text-white" />
            </button>
            <button className="border border-stone-300 px-8 py-3 rounded hover:bg-black hover:text-white transition-colors text-sm">
              <PrismicNextLink field={buttonTwo} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpModal;
