import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `ConversionPanel`.
 */
export type ConversionPanelProps =
  SliceComponentProps<Content.ConversionPanelSlice>;

/**
 * Component for "ConversionPanel" Slices.
 */
const ConversionPanel: FC<ConversionPanelProps> = ({ slice }) => {
  const SPACE_LABELS: Record<string, string> = {
  workspace: "Workspace",
  meeting_space: "Meeting space",
  event_space: "Event space",
};

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      
    </section>
  );
};

export default ConversionPanel;
