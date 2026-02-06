"use client";

import { useEffect, useState } from "react";

export default function ConversionBarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const target = document.getElementById("hide-conversion-bar");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false); 
        } else if (entry.boundingClientRect.top > 0) {
         
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      
      className={`sticky bottom-2 z-20 w-full transition-all duration-500 ease-in-out 
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
    >
      {children}
    </div>
  );
}
