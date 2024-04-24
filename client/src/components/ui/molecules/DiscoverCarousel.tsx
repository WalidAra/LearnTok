import { Button } from "@/components/cli/button";
import api from "@/lib/apis";
import React from "react";

export default async function DiscoverCarousel() {
  const res: HTTPResponse = await api.getCategories();
  return (
    <div className="flex items-center gap-3 flex-wrap">
      {res.data.map((c: Category) => (
        <Button key={c.id}>{c.category}</Button>
      ))}
    </div>
  );
}
