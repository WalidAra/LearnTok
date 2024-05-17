"use client";
import { Button } from "@/components/cli/shadcn/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/cli/shadcn/tooltip";
import { Text } from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import { LuTrash } from "react-icons/lu";

type Props = {
  file: File;
  setFile: Dispatch<SetStateAction<File | null>>;
};

 function VideoHolder({ file, setFile }: Props) {
  const delVideo = () => {
    setFile(null);
  };

  return (
    <div className="flex flex-col gap-4">
      <video
        controls
        autoPlay
        src={URL.createObjectURL(file)}
        className="w-[260px] aspect-[9/16] object-cover rounded-md"
      ></video>

      <div className="grid grid-cols-1frauto gap-1">
        <Text fontSize={"12px"}> {file.name} </Text>

        <TooltipProvider delayDuration={1}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={delVideo}
                variant={"outline"}
                size={"icon"}
                className="shrink-0"
              >
                <LuTrash className="size-5 text-red-500  " />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Delete</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}


export default React.memo(VideoHolder);