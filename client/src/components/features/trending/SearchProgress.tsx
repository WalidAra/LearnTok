"use client";
import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Progress } from "@nextui-org/react";

const SearchProgress = () => {
  const [progressValue, setProgressValue] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const simulateProgress = () => {
      interval = setInterval(() => {
        setProgressValue((prevValue) => {
          const newValue = prevValue + 1;
          if (newValue >= 50) {
            clearInterval(interval);
          }
          return newValue;
        });
      }, 10);
    };

    simulateProgress();

    return () => clearInterval(interval);
  }, []);

  return (
    <Box className="w-full flex flex-col gap-1">
      <div className="grid grid-cols-2">
        <p className="line-clamp-1">pointers</p>
        <p className="line-clamp-1 flex justify-end">21,346,235</p>
      </div>
      <Progress
        size="sm"
        color="danger"
        className="bg-red-500"
        aria-label="Loading..."
        value={progressValue}
      />
    </Box>
  );
};

export default SearchProgress;
