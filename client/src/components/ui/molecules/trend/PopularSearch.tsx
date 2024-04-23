"use client";
import { Button } from "@/components/cli/button";
import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import SearchProgress from "../../atoms/trend/SearchProgress";

const PopularSearch = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="w-full overflow-hidden flex-1 rounded-md border border-border flex flex-col justify-between p-4 gap-4">
      <h2 className="font-semibold text-xl">Popular search</h2>

      <Box flex={1} className=" flex overflow-auto flex-col gap-4 ">
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
        <SearchProgress />
        <SearchProgress />
        <SearchProgress />
        <SearchProgress />
      </Box>

      <Button
        onClick={() => {
          setIsVisible((prev) => !prev);
        }}
        className=""
        variant={"outline"}
      >
        See all popular searches
      </Button>
    </div>
  );
};

export default PopularSearch;
