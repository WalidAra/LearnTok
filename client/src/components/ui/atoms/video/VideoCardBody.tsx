import { Box } from "@chakra-ui/react";
import React from "react";

export default function VideoCardBody() {
  return (
    <Box p={0} flex={1} w={"100%"} className="flex justify-center items-center ">
      <div className="bg-black relative overflow-hidden rounded-xl" >
        <video
          src="https://firebasestorage.googleapis.com/v0/b/learntok.appspot.com/o/videos%2FSnaptik.app_7264594679251946784.mp4?alt=media&token=238170a4-de13-4ff6-ad49-b27e71d928a3"
          controls
          className="object-cover w-full sm:w-60 lg:w-60 xl:w-80 2xl:w-96 aspect-[9/16]"
        ></video>
      </div>
    </Box>
  );
}
