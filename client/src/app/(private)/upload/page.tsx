import DiscardUpload from "@/components/ui/atoms/upload/DiscardUpload";
import UploadButton from "@/components/ui/atoms/upload/UploadButton";
import VideoInfoForm from "@/components/ui/atoms/upload/VideoInfoForm";
import VideoUpload from "@/components/ui/atoms/upload/VideoUpload";
import MainView from "@/components/ui/molecules/MainView";
import UploadProvider from "@/context/Upload";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export default function Upload() {
  return (
    <MainView className="p-2 flex justify-center items-center">
      <section className="flex flex-col border border-border rounded-md gap-5 p-2 w-full md:w-auto h-full md:h-auto overflow-auto md:p-8 ">
        <div>
          <p className="text-2xl font-bold">Upload Video</p>
          <p className="text-md text-gray-400 mt-1">
            Post a video to your account
          </p>
        </div>
        <UploadProvider>
          <Box className="flex-1 justify-center flex flex-wrap gap-4">
            <VideoUpload />
            <VideoInfoForm />
          </Box>

        </UploadProvider>
      </section>
    </MainView>
  );
}
