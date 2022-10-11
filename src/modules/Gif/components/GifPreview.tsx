import React from "react";
import type { ButtonProps, ImageProps } from "react-native-magnus";
import { Button, Image } from "react-native-magnus";
import type { GifProps } from "@modules/Gif/types";
import { useNavigation } from "@react-navigation/native";

type Props = ImageProps &
  ButtonProps & {
    gif: GifProps;
  };

export const GifPreview = ({ rounded = 10, onPress, gif, ...props }: Props) => {
  const navigation = useNavigation();

  const handleItemPress = () => {
    navigation.navigate("Details", { gif });
  };

  return (
    <Button bg="transparent" p="none" onPress={handleItemPress}>
      <Image rounded={rounded} {...props} />
    </Button>
  );
};
