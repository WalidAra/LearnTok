"use client";
import React, { useEffect, useState } from "react";
import IconButton from "../atoms/IconButton";
import { LuCheckCheck, LuShare2 } from "react-icons/lu";

const ShareIconButton = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    if (isChecked) {
      const timer = setTimeout(() => {
        setIsChecked(false);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [isChecked]);

  return (
    <IconButton
      onClick={() => {
        setIsChecked(true);
        navigator.clipboard.writeText(window.location.href);
      }}
    >
      {isChecked ? <LuCheckCheck /> : <LuShare2 />}
    </IconButton>
  );
};

export default ShareIconButton;
