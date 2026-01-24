import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

export default async function Headertwo() {
  const client = createClient();
  const navigation = await client.getSingle("navigation");

  const menuItems = navigation.data.menu_items;
  const slices = navigation.data.slices;

  return (
    <div>
      <div>
        <header>
          <nav className="flex justify-between">
            <div className="flex gap-20">
              <div className="group">WorkSpace
                <div className="hidden group-hover:block">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                </div>
              </div>
              <div>Meeting Rooms</div>
              <div>Event Spaces</div>
              <div> About</div>
            </div>
            <div className="flex">
              <div>icon</div>
              <div>icon</div>
              <div>
                <button>Button</button>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <div>

      </div>
    </div>
  );
}
