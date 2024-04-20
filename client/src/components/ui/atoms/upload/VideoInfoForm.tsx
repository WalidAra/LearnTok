"use client";
import { Input } from "@/components/cli/input";
import { Label } from "@/components/cli/label";
import { Textarea } from "@/components/cli/textarea";
import React from "react";
import CategoryMenuList from "./CategoryMenuList";

const VideoInfoForm = () => {
  return (
    <div className="h-full flex flex-col gap-6 justify-center  md:w-96 xl:w-112 2xl:128">
      <div className="grid w-full items-center  gap-1.5">
        <Label htmlFor="title">Title</Label>
        <Input type="title" id="title" placeholder="Title" className="w-full" />
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Your message</Label>
        <Textarea placeholder="Type your message here." id="message" />
      </div>

      <div className="grid w-full gap-1.5">
        <Label htmlFor="message">Choose the category</Label>
        <CategoryMenuList />
      </div>
    </div>
  );
};

export default VideoInfoForm;
