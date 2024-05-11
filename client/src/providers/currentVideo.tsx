"use client";

import { createContext, useState } from "react";

type Props = {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const Play = createContext<Props>({
  index: 0,
  setIndex: () => {},
});

import React from "react";

export default function CurrentVideoProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [index, setIndex] = useState<number>(0);
  return (
    <Play.Provider value={{ index, setIndex }}> {children} </Play.Provider>
  );
}
