import MainView from "@/components/atoms/MainView";
import { useFetch } from "@/hooks/useFetch";
import { Suspense } from "react";
import Loading from "./loading";
import ClipKit from "@/components/features/home/ClipKit";
import CurrentVideoProvider from "@/providers/currentVideo";
import VideoCard from "@/components/molecules/VideoCard";

export default async function Home() {
  const res = await useFetch({ method: "GET", endPoint: "/videos/" });

  return (
    <MainView className=" bg-background h-mainView p-2 md:p-4 center ">
      <CurrentVideoProvider>
        <Suspense fallback={<Loading />}>
          {res.status === true ? (
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
            <div>There are no videos currently be first content creator :D</div>
          )}
        </Suspense>
      </CurrentVideoProvider>
    </MainView>
  );
}
