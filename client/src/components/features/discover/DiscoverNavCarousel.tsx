
import { getCategories } from "@/lib/api/public/category";
import { ScrollShadow } from "@nextui-org/react";
import React from "react";
import CategoryNavItem from "./CategoryNavItem";

export default async function DiscoverNavCarousel() {
  const res = await getCategories();

  if (res.status === true) {
    return (
      <ScrollShadow
        hideScrollBar={false}
        offset={100}
        orientation="horizontal"
        className="w-full p-2 flex flex-wrap gap-2 "
      >
        <CategoryNavItem
          key={"all-cats"}
          category={{ category: "all", id: "all", videoCount: 0 }}
        />
        {res.data.map((c: Category) => (
          <CategoryNavItem key={c.id} category={c} />
        ))}
      </ScrollShadow>
    );
  }
}
