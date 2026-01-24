import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

export default async function Header() {
  const client = createClient();
  const navigation = await client.getSingle("navigation");
  const menuItems = navigation.data.menu_items;
  const slices = navigation.data.slices;

  return (
    <header className="absolute w-full h-20 flex items-center top-10  px-20 z-20">
      <nav className="flex bg-teal-500 h-20 w-full gap-8  items-center">
        
        {menuItems.map((item) => {
          const megaMenu = slices.find(
            (s) =>
              s.slice_type === "mega_menu" &&
              s.primary.menu_id === item.menu_id,
          );

          return (
            <div key={item.menu_id} className="group static">
              <div className="pointer-events-none fixed inset-0 z-70  backdrop-blur-[5px] bg-black/20 opacity-0 group-hover:opacity-100 " />
              {/* 2. THE NAV LINK */}
              <div className="relative w-full text-white z-1100">
                <PrismicNextLink
                  field={item.link}
                  className="font-medium  group-hover:text-amber-500 transition-colors duration-300"
                >
                  {item.label}
                </PrismicNextLink>
              </div>

              {/* 3. THE MEGA MENU */}
              {item.has_mega_menu && megaMenu && (
                <div className="absolute right-10 left-10 -top-5 h-[80vh] bg-white hidden group-hover:block z-105">
                  <div className=" absolute top-20  w-full z-200">
                    <div className="flex mt-20 gap-10 z-200 w-full px-5">
                      {megaMenu.primary.columnone.map((item, index) => (
                        <div key={index}>
                          <div>
                            <PrismicRichText field={item.heading} />
                          </div>
                          <div>
                            <PrismicRichText field={item.description} />
                          </div>
                          <div>
                            {item.link_one.map((link) => (
                              <PrismicNextLink key={link.key} field={link} />
                            ))}
                          </div>
                        </div>
                      ))}

                      {megaMenu.primary.columns.map((column, index) => (
                        <div
                          key={index}
                          className=" flex-1 h-90 bg-red-200 border-2 border-red-500"
                        >
                          <h4 className="mb-6 text-[10px] font-black uppercase tracking-widest text-gray-400">
                            {column.label}
                          </h4>
                          <ul className="space-y-4">
                            {column.links.map((link, i) => (
                              <li key={i}>
                                <PrismicNextLink
                                  field={link}
                                  className="block text-2xl font-medium text-gray-900 hover:translate-x-2 transition-transform duration-200"
                                />
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div>
                        {megaMenu.primary.imagecolumn.map((item, index) => (
                          <div key={index} className="w-100 h-100">
                            <div className="relative">
                              <PrismicNextImage field={item.image} />
                              <div className="absolute left-10 bottom-20">
                                <PrismicRichText field={item.heading} />
                              </div>
                              <div className=" left-10 absolute bottom-10">
                                <PrismicRichText field={item.description} />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </header>
  );
}
