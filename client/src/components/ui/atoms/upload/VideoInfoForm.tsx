"use client";
import { Input } from "@/components/cli/input";
import { Label } from "@/components/cli/label";
import { Textarea } from "@/components/cli/textarea";
import React from "react";
import CategoryMenuList from "./CategoryMenuList";
import { useUpload } from "@/context/Upload";
import { Flex } from "@chakra-ui/react";
import DiscardUpload from "./DiscardUpload";
import UploadButton from "./UploadButton";

const VideoInfoForm = () => {
  const {title , description} = useUpload();
  return (
    <div className=" flex flex-col gap-6 justify-center  md:w-96 xl:w-112 2xl:128 w-full">
      <div className="grid w-full items-center  gap-1.5">
        <Label htmlFor="title">Title</Label>
        <Input
          ref={title}
          type="title"
          id="title"
          placeholder="Title"
          className="w-full"
        />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Your message</Label>
        <Textarea
          ref={description}
          placeholder="Type your message here."
          id="message"
        />
      </div>

      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Choose the category</Label>
        <CategoryMenuList />
      </div>
      <Flex className="items-center gap-6 justify-between md:justify-normal">
        <DiscardUpload />
        <UploadButton />
      </Flex>
    </div>
  );
};

export default VideoInfoForm;
