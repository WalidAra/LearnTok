import Loading from "@/app/loading";
import MainView from "@/components/atoms/MainView";
import PopularSearches from "@/components/features/trending/PopularSearches";
import PopularUsers from "@/components/features/trending/PopularUsers";
import TrendingCard from "@/components/features/trending/TrendingCard";
import { useFetch } from "@/hooks/useFetch";
import React, { Suspense } from "react";

const Trending = async () => {
  const res = await useFetch({ method: "GET", endPoint: "/videos/trending" });

  return (
    <MainView className="grid grid-cols-1 text-foreground overflow-auto md:grid-cols-2 gap-4 md:p-4 p-2">
      <section className="flex flex-col gap-4 overflow-auto h-full items-end px-2">
        <Suspense fallback={<Loading />}>
          {res.data.map((v: VideoClip) => (
            <TrendingCard video={v} key={v.id} />
          ))}
        </Suspense>
      </section>

      <section className="hidden md:flex flex-col gap-4 w-[420px] h-full ">
        <PopularUsers />
        <PopularSearches />
      </section>
    </MainView>
  );
};

export default Trending;
