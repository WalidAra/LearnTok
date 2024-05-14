import MainView from "@/components/atoms/MainView";
import VideoInfoSide from "@/components/features/video/VideoInfoSide";
import { useFetch } from "@/hooks/useFetch";
import React from "react";

type Props = {
  params: {
    video_id: string;
  };
};

const VideoPage = async ({ params: { video_id } }: Props) => {
  const res = await useFetch({
    method: "GET",
    endPoint: `/videos/${video_id}`,
  });

  if (res.status === true) {
    const { url } = res.data as VideoClip;

    return (
      <MainView className=" md:overflow-hidden md:p-4 p-2 ">
        <div className=" md:w-[70%] xl:w[60%] p-2 md:p-4 gap-4 h-full m-auto w-full flex flex-col md:grid rounded border border-border items-center justify-center md:grid-cols-auto1fr">
          <section className=" md:w-96 shrink-0 w-full h-full rounded-md center">
            <video
              controls
              className="w-full h-[92%] bg-black rounded-xl object-cover"
              src={url}
            />
          </section>

          <VideoInfoSide video={res.data} />
        </div>
      </MainView>
    );
  }
};

export default VideoPage;
