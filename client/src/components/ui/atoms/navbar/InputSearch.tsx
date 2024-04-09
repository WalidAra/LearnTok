"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { IoMdSearch } from "react-icons/io";

export default function InputSearch() {
  const router = useRouter();
  const searchRef = useRef<HTMLInputElement>(null);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      router.push(`/search/${searchRef.current?.value}`);
    }
  };

  return (
    <div className="relative flex items-center">
      <div
        className={cn(
          "absolute duration-200 top-1/2 -translate-y-1/2 right-4 text-xl"
        )}
      >
        <IoMdSearch />
      </div>

      <input
        className={cn(
          "py-1.5 px-4 bg-input duration-200 rounded-lg xl:w-500 md:w-450 sm:w-72 w-40"
        )}
        ref={searchRef}
        type="text"
        placeholder="search..."
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}
