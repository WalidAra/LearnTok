import DiscoverCard from "@/components/ui/molecules/DiscoverCard";
import DiscoverCarousel from "@/components/ui/molecules/DiscoverCarousel";
import MainView from "@/components/ui/molecules/MainView";
import React from "react";

const Discover = () => {
  return (
    <MainView className="p-4 flex flex-col gap-8">
      <DiscoverCarousel />

      <section className=" flex flex-wrap gap-4">
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
      </section>
    </MainView>
  );
};

export default Discover;
