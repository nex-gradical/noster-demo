import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import SpaceCards from "@/components/spacecards-modal/SpaceCards";

/**
 * Props for `SpacesGrid`.
 */
export type SpacesGridProps = SliceComponentProps<Content.SpacesGridSlice>;

/**
 * Component for "SpacesGrid" Slices.
 */
const SpacesGrid: FC<SpacesGridProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="my-20"
    >
      <div className=" px-5 gap-5 grid md:grid-cols-3">
        {slice.primary.spaces.map((item, idx) => (
          <SpaceCards
            key={idx}
            image={item.image}
            type={item.type}
            tags={item.tags}
            availability={item.availability}
            name={item.name}
            place={item.place}
            description={item.description}
            moreInfoLink={item.more_info_link}
            buttonOne={item.button_one}
            buttonTwo={item.button_two}
          />
        ))}
      </div>
    </section>
  );
};

export default SpacesGrid;
