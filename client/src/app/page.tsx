import { CarouselItem } from "@/components/cli/carousel";
import MainView from "@/components/ui/molecules/MainView";
import VideoCard from "@/components/ui/molecules/VideoCard";
import MainHome from "@/components/ui/organisms/MainHome";
import { HomeProvider } from "@/context/Home";
import api from "@/lib/apis";

export default async function Home() {
  const result: HTTPResponse = await api.getVideos();

  return (
    <MainView>
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
}
