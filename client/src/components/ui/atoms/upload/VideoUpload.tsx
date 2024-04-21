"use client";
import { Button } from "@/components/cli/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/cli/tooltip";
import { useUpload } from "@/context/Upload";
import { Box, Flex } from "@chakra-ui/react";
import React, { ChangeEvent, useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { LuTrash } from "react-icons/lu";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase/firebase";
import { Spinner } from "@nextui-org/react";

const VideoUpload = () => {
  const {url:{setUrl , url}} = useUpload();

  const uploadRef = useRef<HTMLInputElement>(null);
  const [videoAsset, setVideoAsset] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>("");
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    const fileTypes = ["video/mp4", "video/webm", "video/ogg"];

    if (selectedFile && fileTypes.includes(selectedFile.type)) {
      const fileRef = ref(storage, `videos/${selectedFile.name}`);
      const uploadTask = uploadBytesResumable(fileRef, selectedFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          let progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress);
          setUploadProgress(progress);
        },
        (error) => {
          console.log("error :(");
        },
        () => {
          console.log("success!!");
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL);
            setUrl(downloadURL);
            setFileName(selectedFile.name);
            setVideoAsset(true);
          });
        }
      );
    }
  };

  return (
    <Flex className="flex-col gap-2">
      {videoAsset ? (
        <video width={"260px"} height={"458px"} src="url" controls ></video>
      ) : (
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
                disabled={uploadProgress > 0}
                onClick={() => {
                  uploadRef.current?.click();
                }}
                className="w-full relative"
              >
                <Box
                  height={"100%"}
                  w={uploadProgress}
                  className="bg-white/10 absolute left-0 h-full top-0 duration-200"
                ></Box>
                {uploadProgress > 0 ? <Spinner size="sm" /> : "Select file"}
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
      )}
      {videoAsset && fileName && (
        <Box className="h-10 w-full flex justify-between items-center px-2">
          <p>file.mp4</p>

          <TooltipProvider delayDuration={1}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={"outline"} size={"icon"} className="shrink-0">
                  <LuTrash className="size-5 text-red-500  " />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Delete</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Box>
      )}
    </Flex>
  );
};

export default VideoUpload;
