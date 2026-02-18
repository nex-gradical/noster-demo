"use client";

import React from "react";

interface FormButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export default function FormButton({
  children,
  type = "submit",
}: FormButtonProps) {
  return (
    <button
      type={type}
      className="cursor-pointer bg-black py-4 px-9 rounded text-[#fbefdd] hover:bg-[#274038] transition-colors duration-500"
    >
      {children}
    </button>
  );
}
