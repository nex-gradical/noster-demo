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
    >
      <div>
        {slice.primary.spaces.map((item) => (
          <SpaceCards />
        ))}
      </div>
    </section>
  );
};

export default SpacesGrid;
