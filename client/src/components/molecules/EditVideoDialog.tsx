/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useRef } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/cli/shadcn/alert-dialog";
import { Label } from "../cli/shadcn/label";
import { Input } from "../cli/shadcn/input";
import { Textarea } from "../cli/shadcn/textarea";
import { useFetch } from "@/hooks/useFetch";

type Props = {
  video_id: string;
  token: string;
  children: React.ReactNode;
};

export default function EditVideoDialog({ token, video_id, children }: Props) {
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);

  const editVideo = async () => {
    const res = await useFetch({
      method: "PUT",
      endPoint: "/video/update",
      body: {
        video_id,
        title: titleRef.current?.value,
        description: descRef.current?.value,
      },
      token: token,
      TokenInclude: true,
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="">
            Edit video information
          </AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="title">Title</Label>
              <Input
                ref={titleRef}
                type="title"
                id="title"
                placeholder="title"
              />
            </div>

            <div className="grid w-full gap-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea
                ref={descRef}
                placeholder="Type your message here."
                id="description"
              />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={editVideo}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
