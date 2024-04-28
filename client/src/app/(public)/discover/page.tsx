import DiscoverCard from "@/components/ui/molecules/DiscoverCard";
import DiscoverCarousel from "@/components/ui/molecules/DiscoverCarousel";
import MainView from "@/components/ui/molecules/MainView";
import api from "@/lib/apis";
import React from "react";

const Discover = async () => {
  const result: HTTPResponse = await api.getVideos();
  return (
    <MainView className="p-4 flex flex-col gap-8">
      <DiscoverCarousel />

      <section className=" flex flex-wrap gap-4">
        {result.data.map((video: VideoProps, index: number) => {
          return <DiscoverCard video={video} key={index + video.id} />;
        })}
      </section>
    </MainView>
  );
};

export default Discover;
