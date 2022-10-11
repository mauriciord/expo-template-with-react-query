import React from "react";
import type { HeaderProps } from "react-native-magnus";
import { Header as HeaderBase } from "react-native-magnus";

export const Header = ({
  alignment = "left",
  bg = "gray700",
  borderBottomColor = "gray900",
  borderBottomWidth = 1,
  children,
  ...props
}: HeaderProps) => {
  return (
    <HeaderBase
      alignment={alignment}
      bg={bg}
      borderBottomColor={borderBottomColor}
      borderBottomWidth={borderBottomWidth}
      {...props}
    >
      {children}
    </HeaderBase>
  );
};
