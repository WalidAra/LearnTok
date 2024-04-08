"use client"
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function GoBackButton() {
  return (
    <button className="size-8 rounded duration-200 hover:bg-black/10 center_div">
      <IoIosArrowBack />
    </button>
  );
}
