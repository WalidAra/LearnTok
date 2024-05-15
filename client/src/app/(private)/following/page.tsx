/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import MainView from "@/components/atoms/MainView";
import { useFetch } from "@/hooks/useFetch";
import { Suspense } from "react";
import Loading from "@/app/loading";
import ClipKit from "@/components/features/home/ClipKit";
import VideoCard from "@/components/molecules/VideoCard";
import { auth } from "@/utils/auth";

const Following = async () => {
  const session = await auth();

  if (session?.user?.name && session) {
    const res = await useFetch({
      method: "GET",
      endPoint: "/video/following",
      token: session.user.name,
      TokenInclude: true,
    });

    return (
      <MainView className=" bg-background h-mainView p-2 md:p-4 center ">
        <Suspense fallback={<Loading />}>
          {res.status === true && res.data.length > 0 ? (
            <ClipKit>
              {res.data.map((video: VideoClip, index: number) => (
                <VideoCard
                  index={index}
                  key={video.id + "-" + "home"}
                  video={video}
                />
              ))}
            </ClipKit>
          ) : (
            <div>
              There are no videos currently be first content creator :D{" "}
            </div>
          )}
        </Suspense>
      </MainView>
    );
  }
};

export default Following;
