"use client"
import clientLocalStorage from "@/lib/clientLocalStorage";
import { createContext, useContext, useEffect, useState } from "react";

type Props = {
  isDark: boolean;
  setTheme: (value: boolean | ((prev: boolean) => boolean)) => void;
};

const Theme = createContext<Props>({ isDark: false, setTheme: () => {} });

import React from "react";

export default function ThemeProvider({ children }: Children) {
  const [isDark, setTheme] = useState<boolean>(false);

  useEffect(() => {
    const currentTheme = clientLocalStorage.getItem("learntok-theme");
    if (currentTheme === "dark") {
      setTheme(true);
    } else {
      setTheme(false);
    }
  }, []);

  return (
    <Theme.Provider value={{ isDark, setTheme }}>{children}</Theme.Provider>
  );
}

export const useTheme = () => useContext(Theme);
