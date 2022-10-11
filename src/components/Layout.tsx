import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Div } from "react-native-magnus";
import type { DivProps } from "react-native-magnus";

interface Props extends DivProps {
  children: React.ReactNode;
  safe?: boolean;
}

export const Layout = ({ children, safe = true, ...divProps }: Props) => {
  if (safe) {
    return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
  }

  return (
    <Div flex={1} {...divProps}>
      {children}
    </Div>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2d3748",
  },
});
