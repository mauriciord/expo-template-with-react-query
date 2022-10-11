import React from "react";
import { Div, Text } from "react-native-magnus";
import { useQuery } from "@tanstack/react-query";
import { FULL_GIPHY_RANDOM_URL } from "@constants/services";
import { FetchingError } from "@components/FetchingError";
import { Layout } from "@components/Layout";

import { GifCard } from "./GifCard";

export const RandomGif = () => {
  const randomQuery = useQuery(
    ["search", "random"],
    () => fetch(`${FULL_GIPHY_RANDOM_URL}`).then((res) => res.json()),
    {
      refetchInterval: 10000,
    }
  );

  if (randomQuery.isError) {
    return <FetchingError message={randomQuery?.error?.message} />;
  }

  const randomGifData = randomQuery?.data?.data;

  return (
    <Layout safe={false} justifyContent="center" alignItems="center">
      <Div m="sm" row w="90%">
        <Text color="white" fontSize="lg" mt="md">
          Random selected GIF:
        </Text>
      </Div>
      <GifCard isLoading={randomQuery.isLoading} gif={randomGifData} />
    </Layout>
  );
};
