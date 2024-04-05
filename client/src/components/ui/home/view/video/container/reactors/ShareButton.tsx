"use client";
import IconButton from "@/components/ui/global/IconButton";
import React, { useCallback, useState } from "react";
import { BsFillShareFill } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/Theme";

export default function ShareButton() {
  const pathname = String(process.env.NEXT_URL) + usePathname();
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const theme = useTheme();
  const handleToggle = useCallback(() => {
    setIsToggled(true);

    setTimeout(() => {
      setIsToggled(false);
    }, 1000);
  }, []);

  return (
    <IconButton
      className={
        isToggled ? "" : theme.isDark ? "" : "bg-slate-100 text-slate-300"
      }
      onClick={handleToggle}
    >
      <BsFillShareFill />
    </IconButton>
  );
}
