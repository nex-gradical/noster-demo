"use client";
import PopUpModal from "./PopUpModal";
import { PrismicNextImage } from "@prismicio/next";
import { useState } from "react";

const SpaceCards = ({
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
}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    if (window.innerWidth >= 768) {
      setIsOpen(true);
    }
  };
  return (
    // Main COntainer
    <div
      onClick={handleOpenModal}
      className="border font-pop select-none group border-gray-200 w-full xl:min-h-140 rounded transition-colors duration-300 hover:border-gray-400 hover:shadow-md"
    >
      <div className="flex flex-col">
        {/* Image Container */}

        <div className="h-65 overflow-hidden rounded-t">
          <PrismicNextImage
            field={image}
            className=" rounded-t w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-102"
          />
        </div>
        <div className="xl:flex flex-col space-y-3 pb-5 pt-15 px-5 xl:gap-0  xl:pl-7 xl:pt-7">
          {/* Space and Availability */}
          <div className="flex text-xs gap-3">
            {/* Space */}
            <div>{type}</div>
            {/* Availability */}
            <div className={availability ? "text-red-500" : "text-green-500"}>
              {availability ? "Not available" : "Available now"}
            </div>
          </div>

          {/* Name */}
          <div className="text-4xl xl:mt-5">{name}</div>

          {/* Place */}
          <div className="xl:mt-5">{place}</div>

          {/* Tags */}

          <div className="xl:mt-20 flex flex-wrap gap-2">
            {(typeof tags === "string" ? tags : "").split(",").map(
              (tag, i) =>
                tag.trim() !== "" && (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-[10px] xl:text-xs bg-stone-200 text-stone-800"
                  >
                    {tag.trim()}
                  </span>
                ),
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div onClick={(e) => e.stopPropagation()}>
          <PopUpModal
            image={image}
            type={type}
            availability={availability}
            name={name}
            place={place}
            tags={tags}
            onClose={() => setIsOpen(false)}
            description={description}
            moreInfoLink={moreInfoLink}
            buttonOne={buttonOne}
            buttonTwo={buttonTwo}
          />
        </div>
      )}
    </div>
  );
};
export default SpaceCards;
