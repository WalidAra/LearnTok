"use client";
import { useTheme } from "@/context/Theme";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { IoMdSearch } from "react-icons/io";

export default function InputSearch() {
  const searchRef = useRef<HTMLInputElement>(null);
  const theme = useTheme();

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      console.log("Search Value:", event.currentTarget.value);
    }
  };

  return (
    <div className="relative flex items-center">
      <div
        className={cn(
          "absolute duration-200 top-1/2 -translate-y-1/2 right-4 text-xl" , theme.isDark ? "":"text-smTextDarK"
        )  }
      >
        <IoMdSearch />
      </div>

      <input
        className={cn(
          "py-1.5 px-4  rounded-lg xl:w-500 md:w-450 sm:w-72 w-40",
          theme.isDark ? "" : " bg-inputLight"
        )}
        ref={searchRef}
        type="text"
        placeholder="search..."
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}
