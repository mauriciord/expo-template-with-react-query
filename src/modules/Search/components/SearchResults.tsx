import React from "react";
import { Text, Div } from "react-native-magnus";
import { useInfiniteQuery } from "@tanstack/react-query";
import { FULL_GIPHY_SEARCH_URL } from "@constants/services";
import { FetchingError } from "@components/FetchingError";
import { GifList } from "@modules/Gif";

import { useSearchTerm } from "../hooks/useSearchTerm";

export const SearchResults = () => {
  const { term } = useSearchTerm();
  const searchQuery = useInfiniteQuery(
    ["search", "random", term],
    ({ pageParam = 0 }) =>
      fetch(
        `${FULL_GIPHY_SEARCH_URL}&limit=45&q=${term}&offset=${pageParam}`
      ).then((res) => res.json()),
    {
      enabled: term.length > 2,
      getNextPageParam: (lastPage) => {
        const { pagination } = lastPage;
        return pagination.offset + pagination.count;
      },
    }
  );

  if (searchQuery.isError) {
    return <FetchingError message={searchQuery?.error?.message} />;
  }

  return (
    <Div flex={1} p={10}>
      <Text fontWeight="bold" color="white" fontSize="2xl" mt="md" mb="lg">
        Search results:
      </Text>
      <Div flex={1} alignItems="center">
        {!searchQuery.isFetching && searchQuery.isLoading ? null : (
          <GifList
            data={searchQuery?.data?.pages}
            isLoading={searchQuery.isLoading}
            onRefresh={searchQuery.refetch}
            refreshing={searchQuery.isLoading}
            progressViewOffset={100}
            onEndReached={() => searchQuery.fetchNextPage()}
          />
        )}
      </Div>
    </Div>
  );
};
