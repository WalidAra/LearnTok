import React, { Suspense } from 'react'
import Loading from "@/app/loading";
import MainView from "@/components/ui/molecules/MainView";
import VideoCard from "@/components/ui/molecules/VideoCard";

const FollowingPage = () => {
  return (
    <MainView className="overflow-auto flex flex-col gap-2 p-2 scroll-snap-type">
      <Suspense fallback={<Loading />}>
        {/* <VideoCard />
        <VideoCard /> */}
      </Suspense>
    </MainView>
  );
}

export default FollowingPage