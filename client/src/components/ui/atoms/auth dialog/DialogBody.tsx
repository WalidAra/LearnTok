/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import { AlertDialogBody } from "@chakra-ui/react";
import React from "react";
import SignIn from "../../molecules/SignIn";
import SignUp from "../../molecules/SignUp";
import ConfirmSignUp from "../../molecules/ConfirmSignUp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/cli/carousel";
import { useMyForm } from "@/context/MyForm";

const DialogBody = () => {
  const {
    carousel: { api, setApi },
    form: { current, setCurrent },
  } = useMyForm();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api, current]);
  return (
    <AlertDialogBody >
      <Carousel setApi={setApi}>
        <CarouselContent className="basis-full">
          <CarouselItem className="basis-full">
            {current === 1 && <SignIn />}
          </CarouselItem>
          <CarouselItem className="basis-full">
            {current === 2 && <SignUp />}
          </CarouselItem>
          <CarouselItem className="basis-full">
            {current === 3 && <ConfirmSignUp />}
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </AlertDialogBody>
  );
};

export default DialogBody;
