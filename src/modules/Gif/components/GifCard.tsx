import React from "react";
import { Div, Text, Badge, Skeleton, Image } from "react-native-magnus";
import { useWindowDimensions } from "react-native";

import type { GifProps } from "../types";

interface Props {
  gif: GifProps;
  isLoading?: boolean;
}

export const GifCard = ({ gif, isLoading = false }: Props) => {
  const window = useWindowDimensions();
  const imgWidth = window.width * 0.9;

  const randomImage = gif?.images?.downsized_large;

  return (
    <Div m="sm">
      <Div justifyContent="center" alignItems="center">
        {isLoading ? (
          <Skeleton.Box w={imgWidth} h={imgWidth} />
        ) : (
          <Image
            rounded={20}
            source={{ uri: randomImage.url }}
            resizeMode="stretch"
            h={imgWidth}
            w={imgWidth}
          />
        )}
      </Div>
      <Div row alignItems="center">
        <Div flex={1}>
          {isLoading ? (
            <>
              <Skeleton.Box mt="sm" h={20} />
              <Skeleton.Box mt="sm" w="70%" />
              <Skeleton.Box mt="sm" w="70%" />
            </>
          ) : (
            <>
              <Text color="white" fontWeight="bold" fontSize="xl" mt="md">
                {gif.title || "No Title"}
              </Text>
              <Text color="white" fontSize="sm" mt="md">
                {gif.url}
              </Text>
            </>
          )}
        </Div>
        <Div row alignItems="center">
          {isLoading ? (
            <Skeleton.Circle h={40} w={40} />
          ) : (
            <Badge bg="red500">+16</Badge>
          )}
        </Div>
      </Div>
    </Div>
  );
};
