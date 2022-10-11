import React from "react";
import { Div, Skeleton } from "react-native-magnus";

export const Loading = () => {
  return (
    <Div ml="md" flex={1}>
      <Skeleton.Box mt="sm" />
      <Skeleton.Box mt="sm" />
      <Skeleton.Box mt="sm" />
      <Skeleton.Box mt="sm" />
      <Skeleton.Box mt="sm" />
      <Skeleton.Box mt="sm" />
      <Skeleton.Box mt="sm" />
    </Div>
  );
};
