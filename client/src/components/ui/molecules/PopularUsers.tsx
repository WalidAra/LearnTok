import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/cli/carousel";
import React from "react";
import UserTrendCard from "./UserTrendCard";

const PopularUsers = () => {
  return (
    <div className="overflow-hidden flex flex-col  border border-border rounded-md p-4 gap-2">
      <h2 className="font-semibold text-xl">Popular search</h2>

      <div className="flex-1 overflow-auto grid grid-cols-3 gap-3 justify-between p-1">
        <UserTrendCard />
        <UserTrendCard />
        <UserTrendCard />
        <UserTrendCard />
        <UserTrendCard />
        <UserTrendCard />
        <UserTrendCard />
        <UserTrendCard />
        <UserTrendCard />
        <UserTrendCard />
        <UserTrendCard />
        <UserTrendCard />
        <UserTrendCard />
        <UserTrendCard />
        <UserTrendCard />
        <UserTrendCard />
      </div>
    </div>
  );
};

export default PopularUsers;
