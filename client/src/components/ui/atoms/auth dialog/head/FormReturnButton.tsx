"use client";
import { useMyForm } from "@/context/MyForm";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
export default function FormReturnButton() {
  const {
    carousel: { api },
    form:{current}
  } = useMyForm();

  const handleClick = () => {
    api.scrollPrev();
  };

  return (
    <div className="size-8">
      {current !== 1 && (
        <button
          onClick={handleClick}
          className="size-8 duration-200 hover:bg-black/5 rounded center-div "
        >
          <IoIosArrowBack />
        </button>
      )}
    </div>
  );
}
