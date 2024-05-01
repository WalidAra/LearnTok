import React, { Suspense } from "react";
// import Loading from "@/app/loading";
import MainView from "@/components/ui/molecules/MainView";
import VideoCard from "@/components/ui/molecules/VideoCard";
import api from "@/lib/apis";
import { auth } from "@/auth";
import { HomeProvider } from "@/context/Home";
import MainHome from "@/components/ui/organisms/MainHome";
import { CarouselItem } from "@/components/cli/carousel";

const FollowingPage = async () => {
  const session = await auth();
  if (!session || !session.user?.name) return;
  const result: HTTPResponse = await api.getClientFollowingVideos({
    token: session.user.name,
  });



  return (
    <MainView className="overflow-auto flex flex-col gap-2 p-2 scroll-snap-type">

      <HomeProvider>
        <MainHome>
          {result.data.map((video: VideoProps, index: number) => {
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
};

export default FollowingPage;
