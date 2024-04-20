"use client"
import { Button } from '@/components/cli/button'
import React from 'react'
import { LuHeart } from "react-icons/lu";
export default function LikeButton() {
  return (
    <Button className="flex items-center justify-center gap-2">
      <LuHeart />
      <span>like</span>
    </Button>
  );
}
