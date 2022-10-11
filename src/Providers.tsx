import React from "react";
import { ThemeProvider } from "react-native-magnus";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchTermProvider } from "@modules/Search";

interface Props {
  children: React.ReactNode;
}

const client = new QueryClient();

export const Providers: React.FC<Props> = ({ children }) => {
  return (
    <>
      <QueryClientProvider client={client}>
        <ThemeProvider>
          <SearchTermProvider>{children}</SearchTermProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};
