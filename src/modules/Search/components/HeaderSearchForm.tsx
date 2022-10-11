import React from "react";
import { Header } from "@components/index";
import { Button, Text } from "react-native-magnus";
import { Keyboard } from "react-native";
import { useSearchTerm } from "@modules/Search/hooks/useSearchTerm";

import { InputSearch } from "./InputSearch";

export const HeaderSearchForm = () => {
  const { setTerm, focused, setFocusStatus } = useSearchTerm();

  const handleOnCancel = () => {
    setTerm("");
    setFocusStatus(false);
    Keyboard.dismiss();
  };

  return (
    <Header
      suffix={
        focused ? (
          <Button w={80} bg="transparent" onPress={handleOnCancel}>
            <Text color="white">Cancel</Text>
          </Button>
        ) : null
      }
    >
      <InputSearch />
    </Header>
  );
};
