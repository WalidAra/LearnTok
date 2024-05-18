"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
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
import { LuInfo } from "react-icons/lu";
import { useFetch } from "@/hooks/useFetch";

type Props = {
  video_id: string;
  token: string;
  children: React.ReactNode;
};

export default function DeleteVideoDialog({
  token,
  video_id,
  children,
}: Props) {
  
  const DeleteVideoFc = async () => {
    const res = await useFetch({
      method: "DELETE",
      endPoint: "/video/delete",
      token: token,
      TokenInclude: true,
      body: { video_id },
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center justify-center">
            <div className="p-2.5 rounded-full bg-red-500/20 text-red-500">
              <LuInfo className="size-8" />
            </div>
          </div>
          <AlertDialogTitle className="w-full text-center">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            video data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={DeleteVideoFc}
            className="bg-red-500 hover:bg-red-700"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
