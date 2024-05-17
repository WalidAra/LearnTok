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

  // URL encode the category name for safe inclusion in URLs
  const encodedCategory = encodeURIComponent(category);

  // Determine the href for the link
  const href =
    category === "all" ? "/discover" : `/discover/${encodedCategory}`;

  // Determine the button variant based on the current pathname
  const isActive =
    (category === "all" && pathname === "/discover") ||
    (category !== "all" && pathname === `/discover/${encodedCategory}`);

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
