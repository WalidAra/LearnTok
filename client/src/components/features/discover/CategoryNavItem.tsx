"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "@/components/cli/shadcn/button";
import Link from "next/link";

type Props = {
  category: Category;
};

export default function CategoryNavItem({ category: { category, id } }: Props) {
  const pathname = usePathname();

  const encodedCategory = encodeURIComponent(category);

  const href =
    pathname === "/discover" && category === "all"
      ? "/discover"
      : `/discover/${encodedCategory}`;

  const isActive =
    (pathname === "/discover" && category === "all") ||
    pathname === `/discover/${encodedCategory}`;

  return (
    <Link className="inline" href={href}>
      <Button
        className="inline-flex capitalize"
        variant={isActive ? "default" : "secondary"}
        aria-label={category}
      >
        {category}
      </Button>
    </Link>
  );
}
