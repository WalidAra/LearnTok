"use client"
/* eslint-disable react/no-unescaped-entities */
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

const DialogBody = () => {
  return (
    <AlertDialogBody>
      <Carousel>
        <CarouselContent className="basis-full">
          <CarouselItem className="basis-full">
            <SignIn />
          </CarouselItem>
          <CarouselItem className="basis-full">
            <SignUp />
          </CarouselItem>
          <CarouselItem className="basis-full">
            <ConfirmSignUp />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </AlertDialogBody>
  );
};

export default DialogBody;
