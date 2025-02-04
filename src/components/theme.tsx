import React from "react";
import { Theme as RadixTheme } from "@radix-ui/themes";

export interface ThemeProps {
  children: React.ReactNode;
}

const Theme = ({ children }: ThemeProps) => {
  return (
    <RadixTheme
      hasBackground
      appearance="light"
      accentColor="indigo"
      grayColor="slate"
      panelBackground="solid"
      radius="small"
      scaling="100%"
    >
      {children}
    </RadixTheme>
  );
};

export default Theme;
