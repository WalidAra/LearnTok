"use client";

import { createContext, useState } from "react";

type Props = {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  reset: () => void;
};

export const CurrentIndex = createContext<Props>({
  index: 0,
  setIndex: () => {},
  reset: () => {},
});

import React from "react";

export default function CurrentVideoProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [index, setIndex] = useState<number>(0);

  const reset = () => {
    setIndex(0);
  };

  return (
    <CurrentIndex.Provider value={{ index, setIndex, reset }}>
      {children}
    </CurrentIndex.Provider>
  );
}
