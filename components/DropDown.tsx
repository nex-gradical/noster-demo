"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { asLink } from "@prismicio/client";

const DropDown = ({
  dataz,
  direction = "down",
}: {
  dataz: any;
  direction?: "up" | "down" | string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<any>(dataz?.[0] || null);
  const [finalDirection, setFinalDirection] = useState<string>("down");

  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const calculateDirection = useCallback(() => { 
    if (!dropdownRef.current) return;

    const rect = dropdownRef.current.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const isMobile = window.innerWidth < 1280; 

    if (direction === "up" || (isMobile && direction === "up") || spaceBelow < 300) { 
      setFinalDirection("up");
    } else {
      setFinalDirection("down");
    }
  }, [direction]); 

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = useCallback(() => {
    if (selectedLink) {
      const url = asLink(selectedLink);
      if (url) router.push(url);
    }
  }, [selectedLink, router]);

  return (
    <div className="flex flex-col xl:flex-row gap-5 justify-between items-center xl:h-15 w-full">
      <div
        ref={dropdownRef}
        className="relative w-full flex flex-1 border rounded border-[#f5d6ab]"
      >
        <button
          onClick={() => { 
            if (!isOpen) calculateDirection();
            setIsOpen(!isOpen);
          }} 
          className="flex xl:flex-1 w-full items-center justify-between px-4 py-3 text-sm text-white tracking-wider"
        >
          <span className="text-xs xl:text-lg">
            {selectedLink?.text || "Select Workspace"}
          </span>
          <span
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          >
            ▼
          </span>
        </button>

        {isOpen && (
          <div
            className={`absolute left-0 z-20 w-full bg-[#f5d6ab] border border-[#f5d6ab] rounded xl:rounded-none shadow-2xl 
              ${finalDirection === "up" ? "bottom-full mb-1" : "top-full mt-1"}`}  
          >
            <ul className="flex flex-col max-h-64 "> 
              {dataz?.map((link: any, idx: number) => (
                <li
                  key={idx}
                  className="border-b border-white/5 last:border-none"
                >
                  <button
                    className="block w-full  text-left p-3 text-xs text-black hover:bg-white/10 transition-colors"
                    onClick={() => {
                      setSelectedLink(link);
                      setIsOpen(false);
                    }}
                  >
                    {link.text || `Workspace ${idx + 1}`}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <button
        onClick={handleSearch}
        disabled={!selectedLink}
        className={`xl:px-5 xl:py-3.5  px-4 py-4 w-full xl:w-fit text-xs xl:text-lg font-pop transition-all rounded-sm
          ${
            selectedLink
              ? "bg-[#f3d5b5] text-black cursor-pointer"
              : "bg-gray-500 text-gray-300 cursor-not-allowed opacity-50"
          }`}
      >
        Start Search
      </button>
    </div>
  );
};

export default DropDown;