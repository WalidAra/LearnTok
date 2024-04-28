/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {
  Carousel,
  CarouselContent,
  type CarouselApi,
} from "@/components/cli/carousel";
import { useCurrentHomeVid } from "@/context/Home";
import React from "react";

export default function MainHome({ children }: Kids) {
  const [api, setApi] = React.useState<CarouselApi>();
  const { setCurrent, setLen , current , len } = useCurrentHomeVid();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setLen(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <Carousel
      className="w-full flex-1 p-2 center-div"
      orientation="vertical"
      setApi={setApi}
    >
      <CarouselContent className="w-full h-clientVideo flex-1">
        {children}
      </CarouselContent>
    </Carousel>
  );
}
