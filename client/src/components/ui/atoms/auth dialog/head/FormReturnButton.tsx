"use client";
import { useMyForm } from "@/context/MyForm";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
export default function FormReturnButton() {
  const {
    slide:{page , setPage}
  } = useMyForm();

  const handleClick = () => {
    setPage((prev)=> prev - 1);
  };

  return (
    <div className="size-8">
      {page !== 0 && (
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
