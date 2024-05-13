"use client";
import React, { useState, useEffect } from "react";
import { LuCopy, LuCheck } from "react-icons/lu";
import { Button } from "@nextui-org/react";

const CopyUrlProfile: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isClicked) {
      timeoutId = setTimeout(() => {
        setIsClicked(false);
      }, 1000); 
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isClicked]);

  return (
    <Button
      onClick={() => {
        navigator.clipboard.writeText(window.location.href);
        setIsClicked(true);
      }}
      size="sm"
      isIconOnly
      className="bg-transparent"
    >
      {isClicked ? <LuCheck /> : <LuCopy />}
    </Button>
  );
};

export default CopyUrlProfile;
