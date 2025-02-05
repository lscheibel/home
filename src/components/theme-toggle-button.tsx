"use client";

import React from "react";
import { IconButton, IconButtonProps } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useMounted } from "@/utils/use-mounted";

export interface ThemeToggleButtonProps extends IconButtonProps {}

const ThemeToggleButton = (props: ThemeToggleButtonProps) => {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  return (
    <IconButton
      variant="ghost"
      color="gray"
      {...props}
      onClick={() => {
        if (resolvedTheme === "light") {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      }}
    >
      {mounted ? (
        <>
          {resolvedTheme === "dark" && <MoonIcon />}
          {resolvedTheme === "light" && <SunIcon />}
        </>
      ) : null}
    </IconButton>
  );
};

export default ThemeToggleButton;
