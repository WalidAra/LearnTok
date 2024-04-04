"use client";
import React from "react";
import PausePlay from "./interactions/PausePlay";

export default function Interactions() {
  return (
    <div className="absolute z-20 w-full h-full flex flex-col center_div">
      <PausePlay />
    </div>
  );
}
