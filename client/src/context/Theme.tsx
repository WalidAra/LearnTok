/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import clientLocalStorage from "@/lib/clientLocalStorage";
import { createContext, useContext, useEffect, useState } from "react";

type Props = {
  theme: "system" | "light" | "dark";
  setTheme: (value: React.SetStateAction<"light" | "system" | "dark">) => void;
  ToggleTheme: () => void;
};

const Theme = createContext<Props>({
  theme: "light",
  ToggleTheme: () => {},
  setTheme: (value: React.SetStateAction<"light" | "system" | "dark">) => {},
});

import React from "react";

export default function ThemeProvider({ children }: Children) {
  const [theme, setTheme] = useState<"system" | "light" | "dark">("system");

  const ToggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    }
  };

  useEffect(() => {
    const storedTheme = clientLocalStorage.getItem("learntok-theme");
    if (storedTheme === "dark") {
      setTheme("dark");
    } else if (theme === "light") {
      setTheme("light");
    }
  }, []);

  return (
    <Theme.Provider value={{ theme, setTheme, ToggleTheme }}>
      {children}
    </Theme.Provider>
  );
}

export const useTheme = () => useContext(Theme);
