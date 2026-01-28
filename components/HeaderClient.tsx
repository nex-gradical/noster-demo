"use client";
{
  /* Optimized HeaderClient one*/
}

import { useEffect, useState, useRef } from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Logo from "@/components/Logo";

// 🛠️ TYPES: Defining interfaces prevents Vercel build failures
interface NavProps {
  navigation: {
    data: {
      menu_items: any[];
      slices: any[];
      primary_cta: any;
    };
  };
}

/**
 * 🛠️ SUB-COMPONENT: Variation Default
 * ⚡ Added optional chaining (?.) to prevent crashes on empty Prismic fields
 */
const MegaMenuDefault = ({ megaMenu }: { megaMenu: any }) => (
  <div className="flex justify-between mt-20 gap-6 w-full px-7">
    {megaMenu?.primary?.column_one?.map((item: any, index: number) => (
      <div key={`col1-${index}`} className="flex flex-col gap-5 w-[25%]">
        <div className="text-3xl font-medium">
          <PrismicRichText field={item.heading} />
        </div>
        <div className="text-gray-600">
          <PrismicRichText field={item.description} />
        </div>
        <div className="flex gap-4">
          {item.link?.map((link: any, idx: number) => (
            <PrismicNextLink
              key={`link-${idx}`}
              field={link}
              className="text-[14px] text-[#fb4920] hover:text-[#b22403] "
            />
          ))}
        </div>
      </div>
    ))}

    {megaMenu?.primary?.columns_two?.map((item: any, index: number) => (
      <div key={`col2-${index}`} className="flex gap-6 flex-col">
        <div className="text-3xl text-black font-medium">
          <PrismicRichText field={item.heading} />
        </div>
        <ul className="space-y-7">
          {item.links?.map((link: any, i: number) => (
            <li key={`link2-${i}`}>
              <PrismicNextLink
                field={link}
                className="block text-[15px] font-light text-gray-900 hover:text-[#fb4920] transition-all hover:-translate-x-0.5 hover:translate-y-0.5"
              />
            </li>
          ))}
        </ul>
      </div>
    ))}

    <div className="flex flex-col gap-4">
      {megaMenu?.primary?.imagecolumn?.map((item: any, index: number) => (
        <PrismicNextLink key={`img-${index}`} field={item.page_link}>
          <div className="relative w-85 h-70 text-white overflow-hidden group/image rounded-2xl">
            <PrismicNextImage
              field={item.image}
              fallbackAlt=""
              className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/30 to-transparent" />
            <div className="absolute font-medium text-3xl left-5 top-5">
              <PrismicRichText field={item.heading} />
            </div>
          </div>
        </PrismicNextLink>
      ))}
    </div>
  </div>
);

/**
 * 🛠️ SUB-COMPONENT: Variation About Us
 */
const MegaMenuAbout = ({ megaMenu }: { megaMenu: any }) => (
  <div className="flex justify-between mt-20 w-full px-7">
    {megaMenu?.primary?.column_one?.map((item: any, index: number) => (
      <div key={`about-col-${index}`} className="flex flex-col gap-4 w-[28%]">
        <div className="text-3xl font-medium">
          <PrismicRichText field={item.heading} />
        </div>
        {item.link?.map((link: any, i: number) => (
          <PrismicNextLink
            key={`about-link-${i}`}
            field={link}
            className="hover:text-[#fb4920] transition-all hover:translate-x-1"
          />
        ))}
      </div>
    ))}
    {megaMenu?.primary?.imagecolumn?.map((item: any, index: number) => (
      <div key={`about-img-${index}`}>
        <PrismicNextLink field={item.page_link}>
          <div className="relative w-120 h-70 overflow-hidden group/image rounded-2xl">
            <PrismicNextImage
              field={item.image}
              fallbackAlt=""
              className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/30 to-transparent" />
            <div className="absolute top-10 left-5 text-3xl text-white">
              <PrismicRichText field={item.heading} />
            </div>
          </div>
        </PrismicNextLink>
      </div>
    ))}
  </div>
);

export default function HeaderClient({ navigation }: NavProps) {
  // 🛠️ Safety check for initial data
  if (!navigation?.data) return null;

  const { menu_items: menuItems, slices } = navigation.data;

  const [navState, setNavState] = useState({
    isVisible: true,
    isAtTop: true,
    isHovered: false,
  });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const lastScroll = useRef(0);

  useEffect(() => {
    // ⚡ Passive scroll listener is better for Vercel's performance scores (Lighthouse)
    const handleScroll = () => {
      const current = window.scrollY;
      const isScrollingUp = current < lastScroll.current;
      const isAtTop = current < 80;

      setNavState((prev) => {
        if (
          prev.isVisible === (isScrollingUp || isAtTop) &&
          prev.isAtTop === isAtTop
        )
          return prev;
        return { ...prev, isVisible: isScrollingUp || isAtTop, isAtTop };
      });
      lastScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full font-pop px-20">
      <div
        className={`fixed inset-0 z-50 backdrop-blur-[2px] bg-black/20 transition-opacity duration-300 pointer-events-none 
        ${navState.isHovered ? "opacity-100" : "opacity-0"}`}
      />

      <header
        className={`fixed top-7 left-1/2 -translate-x-1/2 h-20 z-100 w-[96%] transition-all duration-300 rounded-2xl 
          ${navState.isVisible ? "translate-y-0" : "-translate-y-40"}
          ${navState.isHovered || !navState.isAtTop ? "bg-white shadow-xl" : "bg-transparent"}`}
      >
        <nav
          onMouseLeave={() => {
            setNavState((prev) => ({ ...prev, isHovered: false }));
            setActiveIndex(null);
          }}
          className="flex h-20 w-full gap-10 items-center justify-between px-4"
        >
          <div className="z-110">
            <Logo active={navState.isHovered} solid={!navState.isAtTop} />
          </div>

          <div className="flex gap-8">
            {menuItems?.map((item: any, index: number) => {
              const megaMenu = slices?.find(
                (s: any) =>
                  s.slice_type === "mega_menu" &&
                  s.primary.menu_id === item.menu_id,
              );

              const isLinkActive = activeIndex === index;
              let color = navState.isAtTop ? "text-white" : "text-black";
              if (navState.isHovered) color = "text-gray-400";
              if (isLinkActive) color = "text-[#fb4920]";

              return (
                <div
                  key={item.menu_id || index}
                  className="group static"
                  onMouseEnter={() => {
                    setActiveIndex(index);
                    if (item.has_mega_menu)
                      setNavState((prev) => ({ ...prev, isHovered: true }));
                  }}
                >
                  <div className="relative z-110">
                    <PrismicNextLink
                      field={item.link}
                      className={`font-medium text-[15px] transition-colors duration-300 ${color}`}
                    >
                      {item.label}
                    </PrismicNextLink>
                  </div>

                  {item.has_mega_menu && megaMenu && (
                    <div className="absolute -right-2 -left-2 -top-5 h-[68vh] bg-white hidden group-hover:block z-40 rounded-2xl shadow-2xl">
                      <div className="absolute top-20 w-full">
                        {megaMenu.variation === "default" ? (
                          <MegaMenuDefault megaMenu={megaMenu} />
                        ) : (
                          <MegaMenuAbout megaMenu={megaMenu} />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="z-110">
            <PrismicNextLink
              field={navigation.data.primary_cta}
              className={`px-9 py-3 rounded-lg transition-all duration-300 border inline-block ${
                navState.isAtTop && !navState.isHovered
                  ? "bg-transparent border-white text-white"
                  : "bg-green-950 border-green-950 text-white hover:bg-black"
              }`}
            />
          </div>
        </nav>
      </header>
    </div>
  );
}
