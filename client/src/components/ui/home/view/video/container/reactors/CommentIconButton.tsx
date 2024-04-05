"use client";
import IconButton from "@/components/ui/global/IconButton";
import { useTheme } from "@/context/Theme";
import Link from "next/link";
import React  from "react";
import { FaComment } from "react-icons/fa6";
export default function CommentIconButton() {
  const theme = useTheme();

  return (
    <Link href={"/"}>
      <IconButton
        className={
          theme.isDark
            ? ""
            : "bg-slate-100 text-slate-300 active:text-foreground"
        }
      >
        <FaComment />
      </IconButton>
    </Link>
  );
}
