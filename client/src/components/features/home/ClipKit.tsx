/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/cli/shadcn/carousel";
import { useCurrentVideo } from "@/hooks/usePlay";
import React from "react";
import { type CarouselApi } from "@/components/cli/shadcn/carousel";

export default function ClipKit({ children }: { children?: React.ReactNode }) {
  const {setIndex } = useCurrentVideo();
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setIndex(api.selectedScrollSnap() + 1);

    api.on("select", () => {
       setIndex(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full m-auto sm:w-112 xl:w-128 2xl:w-175 ">
      <Carousel orientation="vertical" setApi={setApi}>
        <CarouselContent className="h-clientVideo w-full ">

          {children}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
