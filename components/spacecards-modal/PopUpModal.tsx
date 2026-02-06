import { createClient } from "@/prismicio";
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
  return (
    <div className="fixed font-pop inset-0 z-500 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-8xl max-h-[90vh] overflow-hidden rounded-lg flex flex-col md:flex-row shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-4 z-10 text-2xl hover:scale-110 transition-transform"
        >
          ✕
        </button>

        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <PrismicNextImage
            field={image}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 p-8 md:p-12 ">
          <p className="text-xs uppercase tracking-widest text-gray-500">
            {type}
          </p>
          <p className="text-gray-600 mt-1">{place}</p>

          <h2 className="text-5xl font-bold mt-4 mb-6">{name}</h2>

          <div className="mb-1">
            <h3 className="font-bold text-sm mb-2">At a glance</h3>
            <div className="text-gray-600 leading-relaxed">
              <PrismicRichText field={description} />
            </div>
          </div>
          <div>
            <PrismicNextLink field={moreInfoLink} className="text-amber-600 hover:text-amber-800"/>
          </div>

          <div className="my-8">
            <div>
              <p
                className={
                  availability
                    ? "text-red-500 text-sm"
                    : "text-green-600 text-sm font-semibold"
                }
              >
                {availability ? "Not available" : "Available now"}
              </p>
            </div>
            <div className="mt-20 flex flex-wrap gap-2">
              {(typeof tags === "string" ? tags : "").split(",").map(
                (tag, i) =>
                  tag.trim() !== "" && (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs bg-stone-200 text-stone-800"
                    >
                      {tag.trim()}
                    </span>
                  ),
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-stone-900 text-white px-8 py-3 rounded hover:bg-black transition-colors">
              <PrismicNextLink field={buttonOne} className="text-white" />
            </button>
            <button className="border border-stone-300 px-8 py-3 rounded hover:bg-black hover:text-white transition-colors">
              <PrismicNextLink field={buttonTwo}  />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopUpModal;
