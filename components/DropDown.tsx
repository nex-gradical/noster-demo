"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // To handle the button click navigation
import { asLink } from "@prismicio/client"; // To convert the Prismic object to a URL string

const DropDown = ({ dataz }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<any>(null);
  const router = useRouter();

  const handleSearch = () => {
    if (selectedLink) {
      const url = asLink(selectedLink);
      if (url) router.push(url);
    }
  };

  return (
    <div className="flex gap-5 justify-between w-full">
      {/* 1. Dropdown Container */}
      <div className="relative flex w-[90%] border border-white/30">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between px-10 py-3 text-sm  text-white tracking-wider"
        >
          <span>{selectedLink?.text || "Select Workspace"}</span>
          <span
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          >
            ▼
          </span>
        </button>

        {isOpen && (
          <div className="absolute left-0 top-full z-20 w-full bg-[#1a1a1a] border border-white/10 shadow-2xl">
            <ul className="flex flex-col">
              {dataz?.map((link: any, idx: number) => (
                <li
                  key={idx}
                  className="border-b border-white/5 last:border-none"
                >
                  <button
                    className="block w-full text-left p-3 text-xs text-white hover:bg-white/10 transition-colors"
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

      {/* 2. Action Button */}
      <button
        onClick={handleSearch}
        disabled={!selectedLink}
        className={`px-2 py-3 text-sm font-medium transition-all rounded-sm
          ${
            selectedLink
              ? "bg-[#f3d5b5] text-black hover:bg-[#e6c4a3] cursor-pointer"
              : "bg-gray-500 text-gray-300 cursor-not-allowed opacity-50"
          }`}
      >
        Start Search
      </button>
    </div>
  );
};

export default DropDown;
