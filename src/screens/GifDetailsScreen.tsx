import React from "react";
import { Button, Icon } from "react-native-magnus";
import type { GifProps } from "@modules/Gif/types";
import { useNavigation, useRoute } from "@react-navigation/native";
import { GifCard } from "@modules/Gif";

import { Header, Layout } from "../components";

type RouteParams = {
  gif: GifProps;
};

export function GifDetailsScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const { gif } = route.params as RouteParams;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Layout justifyContent="center" alignItems="center">
      <Header
        prefix={
          <Button bg="transparent" onPress={handleGoBack}>
            <Icon name="arrow-left" fontFamily="Feather" fontSize="2xl" />
          </Button>
        }
      >
        {gif?.title}
      </Header>
      <GifCard gif={gif} />
    </Layout>
  );
}
