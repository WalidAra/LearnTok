import MainView from "@/components/ui/molecules/MainView";
import VideoDataDisplay from "@/components/ui/molecules/video page/VideoDataDisplay";
import VideoSection from "@/components/ui/molecules/video page/VideoSection";
import api from "@/lib/apis";
import React from "react";

type Props = {
  params: {
    video_id: string;
  };
};

const VideoPage = async ({ params: { video_id } }: Props) => {
  const res: HTTPResponse = await api.getVideoByID({ video_id });
  if (res.status) {
    const data = res.data as VideoProps;
    const { url, id } = data;
    return (
      <MainView className="center-div p-2 md:p-4 gap-4 h-full">
        <div className=" w-full md:w-[90%] xl:w-[95%] 2xl:w-[80%] flex flex-wrap h-full gap-4 ">
          <VideoSection url={url} video_id={id} />
          <VideoDataDisplay video={data} />
        </div>
      </MainView>
    );
  }
};

export default VideoPage;
