"use client";

import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import TriangleIcon from "../HoverTriangle";

export default function FooterClient({ data }: any) {
  return (
    <div className="h-full xl:h-screen w-full  bg-[#1a171a]">
      <div className="xl:px-25 xl:py-20 py-15 px-5 font-pop h-fit text-white ">
        {/* Upper Section */}
        <div className="flex flex-col xl:flex-row h-full xl:justify-between">
          {/* Left Side */}
          <div className="xl:w-[50%] flex flex-col justify-between h-full xl:gap-43">
            <div>
              <div className="text-[#f5d6ab] text-xs xl:text-xl">
                <PrismicRichText field={data.links_tab_title} />
              </div>
              <div>
                {/* Main Links */}
                {data.main_links.map((item: any, index: number) => (
                  <div key={index} className="inline-flex flex-col gap-2 xl:gap-4 my-5">
                    {item.links.map((link: any) => (
                      <div
                        key={link.key}
                        className="group flex items-baseline gap-2"
                      >
                        <PrismicNextLink
                          field={link}
                          className="text-4xl font-medium "
                        />
                        <TriangleIcon
                          size={23}
                          className="self-center mt-[7.5px]  transition-transform ease-out opacity-0 duration-500 rotate-0 group-hover:rotate-40 group-hover:opacity-100 "
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div>
                {/* Sub Links */}
                {data.sub_links.map((item: any, i: number) => (
                  <div key={i} className=" inline-flex flex-col gap-2 xl:gap-3 mb-3">
                    {item.links.map((link: any) => (
                      <div key={link.key} className="group flex flexcol gap-2">
                        <PrismicNextLink field={link} className="text-xs xl:text-sm" />
                        <TriangleIcon
                          size={15}
                          className="mt-[7.5px] transition-transform ease-out opacity-0 duration-400 rotate-0 group-hover:rotate-40 group-hover:opacity-100 "
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div>
                {/* Social Links */}
                {data.social_links.map((item: any, i: number) => (
                  <div key={i} className="flex xl:flex-row flex-col xl:gap-20">
                    {item.links.map((link: any) => (
                      <PrismicNextLink key={link.key} field={link} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {/* Legal Links */}
            <div className="flex xl:flex-row flex-col gap-5 my-15 xl:mt-0">
              <div>💕</div>
              <div className="flex gap-4">
                {data.footer_legal_links.map((link: any) => (
                  <div key={link.key}>
                    <PrismicNextLink field={link} className="text-[9px] xl:text-xs" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="xl:w-[50%] flex flex-col xl:justify-between xl:gap-39 ">
            <div className="flex flex-col xl:gap-20">
              <div>
                <div className="text-[#f5d6ab] pb-5 hidden xl:block">
                  <PrismicRichText field={data.testimonals_heading} />
                </div>
                {/* Swiper div below */}
                <div className="hidden xl:block select-none">
                  <Swiper
                    loop={true}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    allowTouchMove={false}
                  >
                    {data.testimonials.map((item: any, i: number) => (
                      <SwiperSlide key={i}>
                        <div className="flex flex-col gap-5">
                          <div className="text-[20px] font-light">
                            <PrismicRichText field={item.quote} />
                          </div>
                          <div className="text-xs">
                            <PrismicRichText field={item.details} />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              {/* Contacts */}
              <div className="flex flex-col xl:gap-4 pb-7 xl:pb-0 gap-5">
                <div className="text-[#f5d6ab] text-xs xl:text-sm">
                  <PrismicRichText field={data.contacts_heading} />
                </div>
                <div>
                  {data.contacts.map((item: any, i: number) => (
                    <div key={i} className="flex  flex-row gap-5 xl:gap-15">
                      {item.methods.map((link: any, i: number) => (
                        <div key={i}>
                          <PrismicNextLink
                            key={link.key}
                            field={link}
                            className="hover:text-[#fb4920] hover:transition-colors duration-400 text-xs xl:text-sm"
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Footer Credits */}
            <div>
              {data.footer_credits.map((item: any, i: number) => (
                <div
                  key={i}
                  className="flex xl:flex-row flex-col xl:justify-between text-xs gap-5 overflow-hidden"
                >
                  <div className="hidden xl:block w-[20%]">
                    <PrismicRichText field={item.text_one} />
                  </div>
                  <div>
                    <PrismicRichText field={item.text_two} />
                  </div>
                  <div className="w-[20%]">
                    <PrismicRichText field={item.text_three} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
