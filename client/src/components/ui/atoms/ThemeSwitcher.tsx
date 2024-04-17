"use client"
import React from "react";
import { Switch } from "@chakra-ui/react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Switch
      isChecked={theme === "dark"}
      onChange={handleChangeTheme}
      aria-label="Theme switcher"
    />
  );
}
