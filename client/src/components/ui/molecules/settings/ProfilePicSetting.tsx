"use client";
import { Button } from "@/components/cli/button";
import { Avatar, Box, Flex } from "@chakra-ui/react";
import React, { ChangeEvent, useRef, useState } from "react";
import { LuUploadCloud } from "react-icons/lu";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase/firebase";
import { Spinner } from "@nextui-org/react";
import { useUserUpdate } from "@/context/user-update";

type Props = {
  url: string;
};

export default function ProfilePicSetting({ url }: Props) {
  const {
    picture: { setPic },
  } = useUserUpdate();
  
  const picRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string>(url);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const HandleSelectPage = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    const fileTypes = ["image/jpeg", "image/png", "image/jpg"];

    if (selectedFile && fileTypes.includes(selectedFile.type)) {
      const fileRef = ref(storage, `images/${selectedFile.name}`);
      const uploadTask = uploadBytesResumable(fileRef, selectedFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          let progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.log("error :(");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImage(downloadURL);
            setPic(downloadURL);
            setUploadProgress(0);
          });
        }
      );
    }
  };

  return (
    <div className="p-6 border flex items-center gap-3 border-border rounded-md ">
      <Avatar
        src={
          image
            ? image
            : "https://i.pinimg.com/564x/18/b5/b5/18b5b599bb873285bd4def283c0d3c09.jpg"
        }
        size={"lg"}
      />
      <div>
        <Box className="flex flex-col gap-2 ">
          <input
            onChange={HandleSelectPage}
            ref={picRef}
            type="file"
            className="absolute w-0 h-0"
          />

          <Button
            onClick={() => {
              picRef.current?.click();
            }}
            className="flex items-center gap-2 w-40 relative overflow-hidden"
          >
            <Box
              height={"100%"}
              w={uploadProgress}
              className="bg-white/10 absolute left-0 h-full top-0 duration-200"
            ></Box>

            {uploadProgress > 0 && uploadProgress ? (
              <Flex className="items-center gap-2">
                <Spinner color="default" className="border-white" size="sm" />

                <p>Uploading...</p>
              </Flex>
            ) : (
              <>
                <LuUploadCloud className="size-5" /> upload a photo
              </>
            )}
          </Button>

          <p className="text-sm font-medium">
            At least 256 x 256px PNG or JPG file.
          </p>
        </Box>
      </div>
    </div>
  );
}
