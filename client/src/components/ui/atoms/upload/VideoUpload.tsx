"use client";
import { Button } from "@/components/cli/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/cli/tooltip";
import { Box, Flex } from "@chakra-ui/react";
import React, { ChangeEvent, useRef } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { LuTrash } from "react-icons/lu";

const VideoUpload: React.FC = () => {
  const uploadRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      console.log("Selected File:", selectedFile);
    }
  };

  return (
    <Flex className="flex-col gap-2">
      <div className=" border-dashed rounded-xl border-2 border-gray-200 flex flex-col justify-center items-center w-[260px] h-[458px] cursor-pointer ">
        <label className="cursor-pointer">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-col justify-center items-center">
              <p className="font-bold text-xl">
                <FaCloudUploadAlt className="text-gray-300 text-6xl" />
              </p>
              <p className="text-xl font-semibold">Select video to upload</p>
            </div>

            <p className="text-gray-400 text-center mt-10 text-sm leading-10">
              MP4 or WebM or ogg <br />
              720x1280 resolution or higher <br />
              Up to 10 minutes <br />
              Less than 2 GB
            </p>
            <Button
              onClick={() => {
                uploadRef.current?.click();
              }}
              className="w-full"
            >
              Select file
            </Button>
          </div>
          <input
            ref={uploadRef}
            type="file"
            name="upload-video"
            className="w-0 h-0"
            onChange={handleFileChange}
          />
        </label>
      </div>
      <Box className="h-10 w-full flex justify-between items-center px-2">
        <p>file.mp4</p>

        <TooltipProvider delayDuration={1} >
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant={"outline"} size={"icon"} className="shrink-0">
                <LuTrash className="size-5 text-red-500  " />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" >
              <p>Delete</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Box>
    </Flex>
  );
};

export default VideoUpload;
