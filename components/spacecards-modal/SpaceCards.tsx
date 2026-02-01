import { createClient } from "@/prismicio";
import PopUpModal from "./PopUpModal";

const SpaceCards = ({ image, type, availability, name, place, tags, containerClassName }: any) => {
  return (
    // Main COntainer
    <div className={`flex flex-col ${containerClassName}`} >
      <div>
        {/* Image Container */}
        <div></div>

        {/* Space and Availability */}
        <div>
          {/* Space */}
          <div></div>
          {/* Availability */}
          <div></div>
        </div>

        {/* Name */}
        <div></div>

        {/* Place */}
        <div></div>

        {/* Tags */}
        <div>
          <div></div>
        </div>
      </div>
      <div>
        <PopUpModal />
      </div>
    </div>
  );
};
export default SpaceCards;
