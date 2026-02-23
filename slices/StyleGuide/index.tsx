"use client";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import HeaderCTAButton from "@/components/HeaderCTAButton";
import MovingArrowIcon from "@/components/MovingArrowButton";
import PrimaryButton from "@/components/PrimaryButton";
import FormButton from "@/components/FormButton";
import { RichText } from "@/components/richtext/RichText";
import ContactForm from "@/components/ContactForm";

/**
 * Props for `StyleGuide`.
 */
export type StyleGuideProps = SliceComponentProps<Content.StyleGuideSlice>;

/**
 * Component for "StyleGuide" Slices.
 */
const StyleGuide: FC<StyleGuideProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-5 py-100 "
    >
      <div className="space-y-30">
        {/* Colors */}
        <div>
          <div className="text-6xl mb-15">Colors</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5">
            <div>
              <div>#FFFFFF</div>
              <div className="bg-[#FFFFFF] h-40 border"></div>
            </div>

            <div>
              <div>#292524</div>
              <div className="bg-[#292524] h-40 border"></div>
            </div>

            <div>
              <div>#062E16</div>
              <div className="bg-[#062E16] h-40 border"></div>
            </div>

            <div>
              <div>#475565</div>
              <div className="bg-[#475565] h-40 border"></div>
            </div>

            <div>
              <div>#687282</div>
              <div className="bg-[#687282] h-40 border"></div>
            </div>

            <div>
              <div>#FF2D35</div>
              <div className="bg-[#FF2D35] h-40 border"></div>
            </div>

            <div>
              <div>#000000</div>
              <div className="bg-[#000000] h-40 border"></div>
            </div>

            <div>
              <div>#00C753</div>
              <div className="bg-[#00C753] h-40 border"></div>
            </div>

            <div>
              <div>#0D1828</div>
              <div className="bg-[#0D1828] h-40 border"></div>
            </div>

            <div>
              <div>#D0D5DB</div>
              <div className="bg-[#D0D5DB] h-40 border"></div>
            </div>

            <div>
              <div>#E7E5E4</div>
              <div className="bg-[#E7E5E4] h-40 border"></div>
            </div>

            <div>
              <div>#E5E7EB</div>
              <div className="bg-[#E5E7EB] h-40 border"></div>
            </div>

            <div>
              <div>#9B6B56</div>
              <div className="bg-[#9B6B56] h-40 border"></div>
            </div>

            <div>
              <div>#007AFF</div>
              <div className="bg-[#007AFF] h-40 border"></div>
            </div>

            <div>
              <div>#EBCDA5</div>
              <div className="bg-[#EBCDA5] h-40 border"></div>
            </div>

            <div>
              <div>#F3D5B5</div>
              <div className="bg-[#F3D5B5] h-40 border"></div>
            </div>

            <div>
              <div>#F5D6AB</div>
              <div className="bg-[#F5D6AB] h-40 border"></div>
            </div>

            <div>
              <div>#FBEFDD</div>
              <div className="bg-[#FBEFDD] h-40 border"></div>
            </div>

            <div>
              <div>#480708</div>
              <div className="bg-[#480708] h-40 border"></div>
            </div>

            <div>
              <div>#FB4920</div>
              <div className="bg-[#FB4920] h-40 border"></div>
            </div>

            <div>
              <div>#253D35</div>
              <div className="bg-[#253D35] h-40 border"></div>
            </div>

            <div>
              <div>#4A0404</div>
              <div className="bg-[#4A0404] h-40 border"></div>
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="space-y-15">
          <div className="text-6xl my-15">Buttons</div>
          <div className="space-y-4">
            <div>Header CTA Button</div>
            <div>
              <HeaderCTAButton
                field={slice.primary.demo_link}
                isAtTop={false}
                isHovered={false}
              />
            </div>
          </div>
          <div className="space-y-4 inline-block">
            <div>Arrow Button</div>
            <div>
              <MovingArrowIcon field={slice.primary.demo_link} />
            </div>
          </div>
          <div className="space-y-4">
            <div>Primary Button</div>
            <div className="bg-black w-fit p-10">
              <PrimaryButton field={slice.primary.demo_link} />
            </div>
          </div>
          <div className="space-y-4">
            <div>Form Button</div>
            <div>
              <FormButton type="submit">Form Button</FormButton>
            </div>
          </div>
        </div>
        {/* Typography */}
        <div>
          <div>
            <RichText field={slice.primary.typography} />
          </div>
        </div>
        {/* Form */}
        <div className="space-y-4">
          <div>Form</div>
          <div>
            <ContactForm />
          </div>
        </div>
        {/* Rich Text */}
        <div>
          <RichText field={slice.primary.rich_text} />
        </div>
      </div>
    </section>
  );
};

export default StyleGuide;
