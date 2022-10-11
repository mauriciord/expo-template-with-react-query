import React from "react";
import {
  HeaderSearchForm,
  useSearchTerm,
  SearchResults,
  RandomGif,
} from "@modules/Search";

import { Layout } from "../components";

export function MainScreen() {
  const { focused } = useSearchTerm();

  return (
    <Layout>
      <HeaderSearchForm />
      {focused ? <SearchResults /> : <RandomGif />}
    </Layout>
  );
}
