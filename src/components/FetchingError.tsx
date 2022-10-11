import React from "react";
import { Div, Text, Icon } from "react-native-magnus";

interface Props {
  message: string;
}

export const FetchingError = ({ message }: Props) => {
  return (
    <Div flex={1} justifyContent="center" alignItems="center">
      <Icon name="error" fontFamily="MaterialIcons" color="red700" />
      <Text color="red700" fontSize="xl">
        {message}
      </Text>
    </Div>
  );
};
