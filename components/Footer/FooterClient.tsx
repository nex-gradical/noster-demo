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
    <div className="h-screen w-full  bg-[#1a171a]">
      <div className="px-25 py-20  font-pop h-full text-white ">
        {/* Upper Section */}
        <div className="flex h-full justify-between">
          {/* Left Side */}
          <div className="w-[50%] flex flex-col justify-between h-full gap-43">
            <div>
              <div className="text-[#f5d6ab]">
                <PrismicRichText field={data.links_tab_title} />
              </div>
              <div>
                {/* Main Links */}
                {data.main_links.map((item: any, index: number) => (
                  <div key={index} className="inline-flex flex-col gap-4 my-5">
                    {item.links.map((link: any) => (
                      <div
                        key={link.key}
                        className="group flex items-baseline gap-2"
                      >
                        <PrismicNextLink
                          field={link}
                          className="text-4xl font-semibold "
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
                  <div key={i} className=" inline-flex flex-col gap-3 mb-3">
                    {item.links.map((link: any) => (
                      <div key={link.key} className="group flex flexcol gap-2">
                        <PrismicNextLink field={link} />
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
                  <div key={i} className="flex gap-20">
                    {item.links.map((link: any) => (
                      <PrismicNextLink key={link.key} field={link} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {/* Legal Links */}
            <div className="flex gap-5">
              <div>💕</div>
              <div className="flex gap-4">
                {data.footer_legal_links.map((link: any) => (
                  <div key={link.key}>
                    <PrismicNextLink field={link} className="text-xs" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-[50%] flex flex-col justify-between gap-39">
            <div className="flex flex-col gap-20">
              <div>
                <div className="text-[#f5d6ab] pb-5">
                  <PrismicRichText field={data.testimonals_heading} />
                </div>
                {/* Swiper div below */}
                <div className="select-none">
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
              <div className="flex flex-col gap-4">
                <div className="text-[#f5d6ab]">
                  <PrismicRichText field={data.contacts_heading} />
                </div>
                <div>
                  {data.contacts.map((item: any, i: number) => (
                    <div key={i} className="flex gap-15">
                      {item.methods.map((link: any, i: number) => (
                        <div key={i}>
                          <PrismicNextLink
                            key={link.key}
                            field={link}
                            className="hover:text-[#fb4920] hover:transition-colors duration-400"
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
                  className="flex justify-between text-xs gap-5 overflow-hidden"
                >
                  <div className="w-[20%]">
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
