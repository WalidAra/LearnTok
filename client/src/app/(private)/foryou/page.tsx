// import Loading from '@/app/loading';
import { auth } from "@/auth";
import { CarouselItem } from "@/components/cli/carousel";
import MainView from "@/components/ui/molecules/MainView";
import VideoCard from "@/components/ui/molecules/VideoCard";
import MainHome from "@/components/ui/organisms/MainHome";
import { HomeProvider } from "@/context/Home";
import api from "@/lib/apis";
import React from "react";

const ForYou = async () => {
  const session = await auth();

  if (session?.user?.name) {
    const res: HTTPResponse = await api.getForYouVideos({
      token: session.user.name,
    });


    return (
      <MainView className="overflow-auto flex flex-col gap-2 p-2 scroll-snap-type">
        <HomeProvider>
          <MainHome>
            {res.data.map((video: VideoProps, index: number) => {
              return (
                <CarouselItem
                  key={video.id}
                  className="m-auto w-full sm:w-112 h-full xl:w-128 2xl:w-175"
                >
                  <VideoCard index={index} video={video} />
                </CarouselItem>
              );
            })}
          </MainHome>
        </HomeProvider>
      </MainView>
    );
  }
};

export default ForYou;
