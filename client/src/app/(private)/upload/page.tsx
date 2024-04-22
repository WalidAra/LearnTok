import UploadContainer from "@/components/ui/atoms/upload/UploadContainer";
import MainView from "@/components/ui/molecules/MainView";
import React from "react";

export default function Upload() {
  return (
    <MainView className="p-2 flex justify-center items-center">
      <section className="flex flex-col border border-border rounded-md gap-5 p-2 w-full md:w-auto h-full md:h-auto overflow-auto xl:p-8 md:p-4 ">
        <div>
          <p className="text-2xl font-bold">Upload Video</p>
          <p className="text-md text-gray-400 mt-1">
            Post a video to your account
          </p>
        </div>

        <UploadContainer />
      </section>
    </MainView>
  );
}
