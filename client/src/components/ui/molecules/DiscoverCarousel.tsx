import { Button } from "@/components/cli/button";
import { Card, CardContent } from "@/components/cli/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/cli/carousel";
import api from "@/lib/apis";
import React from "react";

export default async function DiscoverCarousel() {
  const res: HTTPResponse = await api.getCategories();
  console.log("====================================");
  console.log(res);
  console.log("====================================");
  return (
    <div className="flex items-center gap-3 flex-wrap">
      {res.data.map((c: Category) => (
        <Button key={c.id}>{c.category}</Button>
      ))}
    </div>
  );
}
