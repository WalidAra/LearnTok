"use client";
import React from "react";
import { Carousel, CarouselApi, CarouselContent } from "../cli/shadcn/carousel";

const House = ({ children }: { children?: React.ReactNode }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  //   const { setCurrent, setLen } = useCurrentHomeVid();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    // setLen(api.scrollSnapList().length);
    // setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      //   setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <Carousel
      className="w-full sm:w-112 m-auto h-full test xl:w-128 2xl:w-175 center "
      orientation="vertical"
      setApi={setApi}
    >
      <CarouselContent className="w-full h-clientVideo flex-1 ">
        {children}
      </CarouselContent>
    </Carousel>
  );
};

export default House;
