import { Button } from "@/components/cli/shadcn/button";
import { Text } from "@chakra-ui/react";
import React from "react";
import SearchProgress from "./SearchProgress";

const PopularSearches = () => {
  return (
    <div className="border border-border rounded-md p-4 flex-1 gap-2 overflow-hidden flex flex-col">
      <Text className="font-medium"> Popular searches </Text>

      <div className="w-full flex-1 overflow-auto border border-border p-2 rounded-md flex flex-col gap-2">
        <SearchProgress />
        <SearchProgress />
        <SearchProgress />
        <SearchProgress />
        <SearchProgress />
        <SearchProgress />
        <SearchProgress />
        <SearchProgress />
        <SearchProgress />
        <SearchProgress />
        <SearchProgress />
        <SearchProgress />
      </div>

      <Button variant={"outline"}>See All The Searches</Button>
    </div>
  );
};

export default PopularSearches;
