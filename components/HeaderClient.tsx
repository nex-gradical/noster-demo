"use client";

import { useEffect, useState } from "react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Logo from "@/components/Logo";

export default function HeaderClient({ navigation }: { navigation: any }) {
  const menuItems = navigation.data.menu_items;
  const slices = navigation.data.slices;

  //  NAV STATES
  const [showNav, setShowNav] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [scrolledPast, setScrolledPast] = useState(false);
  const [navHovered, setNavHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [lastScroll, setLastScroll] = useState(0);

  const navSolid = navHovered;

  //  SCROLL SHOW / HIDE LOGIC
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      setAtTop(current === 0);
      setScrolledPast(current > 40);

      if (current < lastScroll) {
        setShowNav(true); // scrolling up
      } else if (current > lastScroll) {
        setShowNav(false); // scrolling down
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div className="w-full font-pop px-20">
      <div
        className={` fixed inset-0 z-51 backdrop-blur-[2px] bg-black/20 transition-opacity duration-300 pointer-events-none ${navHovered ? "opacity-100" : "opacity-0"}`}
      />
      <header
        className={`fixed top-7 left-1/2 -translate-x-1/2 h-20 z-100 w-[96%] transition-transform duration-300 
          ${showNav ? "translate-y-0" : "-translate-y-30"}
           ${navHovered || (showNav && !atTop) ? "bg-white shadow" : "bg-transparent"}  rounded-2xl`}
      >
        <nav
          onMouseLeave={() => {
            setNavHovered(false);
            setActiveIndex(null);
          }}
          className="flex h-20 w-full gap-10 items-center justify-between px-4"
        >
          {/* LOGO */}
          <div className="z-200">
            <Logo active={navHovered} solid={!atTop} />
          </div>
          {/*  NAV LINKS */}
          <div className="flex gap-8">
            {menuItems.map((item: any, index: number) => {
              const megaMenu = slices.find(
                (s: any) =>
                  s.slice_type === "mega_menu" &&
                  s.primary.menu_id === item.menu_id,
              );

              // COLOR LOGIC

              let color = "text-white";

              if (!atTop) {
                color = "text-black";
              }

              if (navHovered) {
                color = "text-gray-400";
              }

              // active tab (menu open) stays amber
              if (activeIndex === index) {
                color = "text-amber-500";
              }

              return (
                <div
                  key={item.menu_id}
                  className="group static"
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  {/*  NAV LINK */}
                  <div className="relative z-50">
                    <PrismicNextLink
                      field={item.link}
                      className={`font-medium text-[17px] transition-colors duration-300 ${color}`}
                      onMouseEnter={() => setNavHovered(true)}
                    >
                      {item.label}
                    </PrismicNextLink>
                  </div>

                  {/*  MEGA MENU  */}
                  {item.has_mega_menu && megaMenu && (
                    <>
                      {megaMenu.variation === "default" && (
                        <div className="absolute -right-2 -left-2 -top-5 h-[80vh] bg-white hidden group-hover:block z-40 rounded-2xl">
                          <div className="absolute top-20 w-full z-50">
                            <div className="flex mt-40 gap-10 w-full px-5">
                              {/* Column One */}
                              {megaMenu.primary.column_one.map(
                                (item: any, index: number) => (
                                  <div key={index}>
                                    <div>
                                      <PrismicRichText field={item.heading} />
                                    </div>
                                    <div>
                                      <PrismicRichText
                                        field={item.description}
                                      />
                                    </div>
                                    <div>
                                      {item.link.map(
                                        (link: any, index: number) => (
                                          <div key={index}>
                                            <PrismicNextLink
                                              key={link.key}
                                              field={link}
                                            />
                                          </div>
                                        ),
                                      )}
                                    </div>
                                  </div>
                                ),
                              )}
                              {/* Column Two */}
                              {megaMenu.primary.columns_two.map(
                                (item: any, index: number) => (
                                  <div
                                    key={index}
                                    className="flex-1 flex flex-col h-90"
                                  >
                                    <div className="text-2xl text-black h-20 border-5 border-red-500">
                                      <PrismicRichText field={item.heading} />
                                    </div>
                                    <ul className="space-y-4">
                                      {item.links.map(
                                        (link: any, i: number) => (
                                          <li key={i}>
                                            <PrismicNextLink
                                              field={link}
                                              className="block text-2xl font-medium text-gray-900 hover:translate-x-2 transition-transform duration-200"
                                            />
                                          </li>
                                        ),
                                      )}
                                    </ul>
                                  </div>
                                ),
                              )}
                              {/* Image Column */}
                              <div>
                                {megaMenu.primary.imagecolumn.map(
                                  (item: any, index: number) => (
                                    <div key={index} className="w-100 h-100">
                                      <div className="relative">
                                        <PrismicNextImage field={item.image} />
                                        <div className="absolute left-10 bottom-20">
                                          <PrismicRichText
                                            field={item.heading}
                                          />
                                        </div>
                                        <div className="absolute left-10 bottom-10">
                                          <PrismicRichText
                                            field={item.description}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  ),
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* aboutUsVariation Starts here */}

                      {megaMenu.variation === "aboutUsVariation" && (
                        <div className="absolute -right-2 -left-2 -top-5 h-[80vh] bg-white hidden group-hover:block z-40 rounded-2xl">
                          <div className="absolute top-20 w-full z-50">
                            <div className="flex mt-40 gap-10 w-full px-5">
                              {/* Column One */}
                              {megaMenu.primary.column_one.map(
                                (item: any, index: number) => (
                                  <div key={index}>
                                    <PrismicRichText field={item.heading} />
                                    {item.link.map((link: any, i: number) => (
                                      <PrismicNextLink key={i} field={link} />
                                    ))}
                                  </div>
                                ),
                              )}

                              {/* Image Column */}
                              {megaMenu.primary.imagecolumn.map(
                                (item: any, index: number) => (
                                  <div key={index}>
                                    <PrismicNextImage field={item.image} />
                                    <div>
                                      <PrismicRichText field={item.heading} />
                                    </div>
                                  </div>
                                ),
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
          <div className="z-200">
            <button className="px-9 py-3 bg-green-500 rounded">
              <PrismicNextLink field={navigation.data.primary_cta} />
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}
