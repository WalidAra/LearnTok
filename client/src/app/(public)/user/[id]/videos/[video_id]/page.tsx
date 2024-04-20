import CommentContainer from "@/components/ui/atoms/video/CommentContainer";
import FullFeaturedVideoPlayer from "@/components/ui/atoms/video/FullFeaturedVideoPlayer";
import Poster from "@/components/ui/atoms/video/Poster";
import VideoInfo from "@/components/ui/atoms/VideoInfo";
import MainView from "@/components/ui/molecules/MainView";
import { Divider } from "@nextui-org/react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import React from "react";

type Props = {
  params: {
    video_id: string;
  };
};

const VideoPage = ({ params: { video_id } }: Props) => {
  return (
    <MainView className="center-div p-2 md:p-4 gap-4 h-full">
      <div className=" w-full md:w-[80%] flex flex-wrap h-full gap-4 ">
        <section className="2xl:w-112 md:w-96 w-full h-full border-border rounded-md border center-div p-2">
          <video controls className="w-full h-[92%] bg-black rounded-xl" src="https://firebasestorage.googleapis.com/v0/b/learntok.appspot.com/o/videos%2FSnaptik.app_7264594679251946784.mp4?alt=media&token=238170a4-de13-4ff6-ad49-b27e71d928a3" />
        </section>
        <section className="flex-1 w-full h-full flex flex-col border border-border gap-4 p-2 md:p-4 rounded-md ">
          <VideoInfo /> 
          <Divider />
          <CommentContainer />
        </section>
      </div>
    </MainView>
  );
};

export default VideoPage;
