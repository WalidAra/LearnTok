import Loading from "@/app/loading";
import MainView from "@/components/atoms/MainView";
import TrendingCard from "@/components/features/trending/TrendingCard";
import { useFetch } from "@/hooks/useFetch";
import React, { Suspense } from "react";

const Trending = async () => {
  const res = await useFetch({ method: "GET", endPoint: "/videos/trending" });

  return (
    <MainView className="grid grid-cols-1  overflow-hidden md:grid-cols-1frauto gap-4 md:p-4 p-2">
      <section className="flex flex-col gap-4 overflow-auto h-full items-center">
        <Suspense fallback={<Loading />}>
          {res.data.map((v: VideoClip) => (
            <TrendingCard video={v} key={v.id} />
          ))}
        </Suspense>
      </section>

      <section className="hidden md:flex flex-col gap-4 w-96 h-full test">

      </section>
    </MainView>
  );
};

export default Trending;
