"use client";

import { useState, useEffect, useRef, useCallback } from "react"; 
import { useRouter } from "next/navigation";
import { asLink } from "@prismicio/client";

const DropDown = ({ dataz, direction = "down" }: { dataz: any, direction?: "up" | "down" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<any>(dataz?.[0] || null);
  const router = useRouter();
  
  // 2. Ref for the click-outside logic 
  const dropdownRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 3. useCallback to memoize the search function 
  const handleSearch = useCallback(() => {
    if (selectedLink) {
      const url = asLink(selectedLink);
      if (url) router.push(url);
    }
  }, [selectedLink, router]); 

  const menuPlacement = direction === "up" ? "bottom-full mb-1" : "top-full mt-1";

  return (
    <div className="flex gap-5 justify-between items-center h-15 w-full">
      <div ref={dropdownRef} className="relative flex flex-1 border rounded border-[#f5d6ab]"> 
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between px-4 py-3 text-sm text-white tracking-wider"
        >
          <span className="text-lg">{selectedLink?.text || "Select Workspace"}</span>
          <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
            ▼
          </span>
        </button>

        {isOpen && (
          <div className={`absolute left-0 z-20 w-full bg-[#f5d6ab] border border-[#f5d6ab] shadow-2xl ${menuPlacement}`}>
            <ul className="flex flex-col">
              {dataz?.map((link: any, idx: number) => (
                <li key={idx} className="border-b border-white/5 last:border-none">
                  <button
                    className="block w-full text-left p-3 text-xs text-black hover:bg-white/10 transition-colors"
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
        className={`px-17 py-5 text-xl font-pop transition-all rounded-sm
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