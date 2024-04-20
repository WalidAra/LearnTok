import VideoInfoForm from "@/components/ui/atoms/upload/VideoInfoForm";
import VideoUpload from "@/components/ui/atoms/upload/VideoUpload";
import MainView from "@/components/ui/molecules/MainView";
import { Box } from "@chakra-ui/react";
import React from "react";

export default function Upload() {
  return (
    <MainView className="p-2 flex justify-center items-center">
      <section className="flex flex-col border border-border rounded-md gap-5 p-8 ">
        <div>
          <p className="text-2xl font-bold">Upload Video</p>
          <p className="text-md text-gray-400 mt-1">
            Post a video to your account
          </p>
        </div>
        <Box className="flex-1 flex flex-wrap gap-4">
          <VideoUpload />
          <VideoInfoForm />
        </Box>
      </section>
    </MainView>
  );
}
