import { createClient } from "@/prismicio";
import DropDown from "./DropDown";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import ConversionBarWrapper from "./ConversionBarWrapper";

export default async function ConversionBar() {
  const client = createClient();
  const conversionBar = await client.getSingle("conversionbar");
  const data = conversionBar.data;
  return (
    <ConversionBarWrapper>
      <div className="hidden xl:flex flex-row justify-between gap-5 h-28 z-20 px-2 ">
        {/* Left Panel */}
        <div className="flex flex-1 bg-[#274038] rounded items-center justify-between px-5">
          <div>
            <div className="text-white text-3xl font-medium">
              <PrismicRichText field={data.heading} />
            </div>
            <div className="text-white text-xl">
              <PrismicRichText field={data.description} />
            </div>
          </div>
          <div className="w-[45%]">
            <DropDown dataz={data.links} direction="up" />
          </div>
        </div>
        {/* Right Panel */}
        <div className="flex w-[30%] rounded bg-[#4a0404]">
          {data.promotion_tile.map((item, idx) => (
            <div key={idx} className="w-full h-full">
              <PrismicNextLink
                field={item.tile_link}
                className="h-full w-full flex justify-between items-center justbe"
              >
                <div className="pl-4">
                  <div className="text-white text-3xl font-medium">
                    <PrismicRichText field={item.heading} />
                  </div>
                  <div className="text-white text-xl">
                    <PrismicRichText field={item.description} />
                  </div>
                </div>
                <div className="w-40 h-full">
                  <PrismicNextImage
                    field={item.image}
                    className="w-full h-full object-cover rounded-r"
                  />
                </div>
              </PrismicNextLink>
            </div>
          ))}
        </div>
      </div>
   
    </ConversionBarWrapper>
  );
}
