import React from "react";
import { Input } from "@/components/cli/input";
import { LuSearch } from "react-icons/lu";
export default function VideoFilter() {
  return (
    <div className="relative px-1">
      <div className="absolute top-1/2 -translate-y-1/2 left-3">
        <LuSearch />
      </div>

      <Input className="rounded-xl w-full sm:w-96 md:w-128 pl-9 font-medium" type="text" placeholder="Search..." />
    </div>
  );
}
