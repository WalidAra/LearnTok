import MainView from "@/components/ui/molecules/MainView";
import PopularSearch from "@/components/ui/molecules/PopularSearch";
import PopularUsers from "@/components/ui/molecules/PopularUsers";
import TrendCard from "@/components/ui/molecules/TrendCard";
import React from "react";

const Trending = () => {
  return (
    <MainView className="p-4 flex justify-center items-center">
      <div className="md:container w-full flex-1 h-full flex-col flex gap-3">
        <h1 className="font-semibold text-2xl">Trending</h1>
        <div className="flex-1 flex gap-4 overflow-hidden">
          <section className="flex-1 overflow-auto flex flex-col gap-3 ">
            <TrendCard />
            <TrendCard />
            <TrendCard />
            <TrendCard />
            <TrendCard />
          </section>
          <section className="2xl:w-96 xl:w-80 md:w-72 gap-4 flex-col h-full hidden md:grid md:grid-rows-1fr2fr ">
            <PopularUsers />
            <PopularSearch />

          </section>
        </div>
      </div>
    </MainView>
  );
};

export default Trending;
