import React, { Suspense } from "react";
// import Loading from "@/app/loading";
import MainView from "@/components/ui/molecules/MainView";
import VideoCard from "@/components/ui/molecules/VideoCard";
import api from "@/lib/apis";
import { auth } from "@/auth";

const FollowingPage = async () => {
  const session = await auth();
  if (!session || !session.user?.name) return;
  const result: HTTPResponse = await api.getClientFollowingVideos({
    token: session.user.name,
  });

  console.log("====================================");
  console.log(result);
  console.log("====================================");

  return (
    <MainView className="overflow-auto flex flex-col gap-2 p-2 scroll-snap-type">
      {/* <Suspense fallback={<Loading />}> */}
      {/* <VideoCard />
        <VideoCard /> */}
      {/* </Suspense> */}
    </MainView>
  );
};

export default FollowingPage;
