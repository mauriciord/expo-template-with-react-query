import React from "react";
import { Icon, Input } from "react-native-magnus";

import { useSearchTerm } from "../hooks/useSearchTerm";

export const InputSearch = () => {
  const { term, setTerm, setFocusStatus } = useSearchTerm();

  return (
    <Input
      bg="gray600"
      borderColor="gray700"
      flex={1}
      onChangeText={setTerm}
      placeholder="Search"
      prefix={<Icon name="search" color="gray900" fontFamily="Feather" />}
      value={term}
      onFocus={() => setFocusStatus(true)}
    />
  );
};
