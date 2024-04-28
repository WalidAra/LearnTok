"use client";

import React, { createContext, useContext, useState } from "react";

type Props = {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  len: number;
  setLen: React.Dispatch<React.SetStateAction<number>>;
};

const defaultValues: Props = {
  current: 1,
  setCurrent: () => {},
  len: 0,
  setLen: () => {},
};

const VideoContext = createContext<Props>(defaultValues);

export const HomeProvider = ({ children }: Kids) => {
  const [current, setCurrent] = useState<number>(1);
  const [len, setLen] = React.useState(0);

  return (
    <VideoContext.Provider value={{ current, setCurrent, len, setLen }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useCurrentHomeVid = () => useContext(VideoContext);
