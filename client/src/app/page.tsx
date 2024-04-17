import MainView from "@/components/ui/molecules/MainView";
import { Suspense } from "react";
import Loading from "./loading";
import VideoCard from "@/components/ui/molecules/VideoCard";
import api from "@/lib/apis";

export default async function Home() {
  const result: HTTPResponse = await api.getVideos();

  return (
    <MainView className="overflow-auto flex flex-col gap-2 p-2 scroll-snap-type main-view">
      <Suspense fallback={<Loading />}>
        {/* <VideoCard />
        <VideoCard /> */}
      </Suspense>
    </MainView>
  );
}
