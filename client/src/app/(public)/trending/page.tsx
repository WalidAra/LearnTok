import MainView from "@/components/ui/molecules/MainView";
import PopularSearch from "@/components/ui/molecules/trend/PopularSearch";
import PopularUsers from "@/components/ui/molecules/trend/PopularUsers";
import TrendCard from "@/components/ui/molecules/trend/TrendCard";
import api from "@/lib/apis";
import React from "react";

const Trending = async () => {
  const res: HTTPResponse = await api.getTrendingVideos();

  console.log("====================================");
  console.log("trending : ", res);
  console.log("====================================");

  return (
    <MainView className="md:p-4 p-2 flex justify-center items-center">
      <div className="w-full flex-1 h-full flex-col flex md:gap-3 gap-2">
        <h1 className="font-semibold text-2xl">Trending</h1>
        <div className="flex-1 flex gap-4 overflow-hidden">
          <section className="flex-1 overflow-auto flex flex-col gap-3 ">
            <TrendCard video={res.data[0]} />
          </section>
          <section className="2xl:w-96 bg-green-500 xl:w-80 md:w-72 gap-4 flex-col h-full hidden md:grid md:grid-rows-1fr2fr ">
            {/* <PopularUsers />
            <PopularSearch /> */}
          </section>
        </div>
      </div>
    </MainView>
  );
};

export default Trending;
