"use client";
import React, { useEffect, useState } from "react";
import IconButton from "./IconButton";
import { IoMdShare } from "react-icons/io";

const ShareIconButton = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    if (isChecked) {
      const timer = setTimeout(() => {
        setIsChecked(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isChecked]);

  return (
    <IconButton
      isChecked={isChecked}
      activeStyle="text-white"
      onClick={() => {
        setIsChecked((prev) => !prev);
        navigator.clipboard.writeText(window.location.href);
      }}
    >
      <IoMdShare />
    </IconButton>
  );
};

export default ShareIconButton;
