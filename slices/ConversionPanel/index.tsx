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
      <div className="flex">
        {/* Left Panel */}
        {slice.primary.left_panel.map((item, i) => (
          <div key={i}>
            <div>
              <PrismicRichText field={item.title} />
            </div>
            <div>
              {item.contact_bar.map((link) => (
                <PrismicNextLink key={link.key} field={link} />
              ))}
            </div>
            <div>
              <PrismicNextLink field={item.button_link} />
            </div>
          </div>
        ))}
        {/* Right Panel */}
        {slice.primary.right_pannel.map((item, i) => (
          <div key={i}>
            <div>
              <PrismicRichText field={item.heading} />
            </div>
            <div>
              <p>{SPACE_LABELS[item.options]}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConversionPanel;
