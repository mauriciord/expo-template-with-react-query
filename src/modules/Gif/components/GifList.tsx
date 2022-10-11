import React, { useMemo } from "react";
import { Skeleton } from "react-native-magnus";
import { FlatList, useWindowDimensions, Keyboard } from "react-native";
import type {
  RefetchOptions,
  RefetchQueryFilters,
  QueryObserverResult,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";

import type { GifProps } from "../types";

import { GifPreview } from "./GifPreview";

interface Props {
  data: GifProps[] | undefined;
  isLoading?: boolean;
  numColumns?: number;
  onRefresh: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<InfiniteData<unknown>, unknown>>;
  refreshing: boolean;
  progressViewOffset: number;
  onEndReached: () => Promise<InfiniteQueryObserverResult<unknown, unknown>>;
}
interface LoadingItem {
  w: number;
  h: number;
  id: string;
}
type DataListProps = GifProps[] | LoadingItem[];

const setLoadingList = (boxSize: number) =>
  Array.from({ length: 9 }, (_, idx) => ({
    w: boxSize,
    h: boxSize,
    id: `Loading Gif Box ${idx}`,
  }));

export const GifList = ({
  data,
  isLoading,
  numColumns = 3,
  onRefresh,
  refreshing,
  progressViewOffset,
  onEndReached,
}: Props) => {
  const window = useWindowDimensions();
  const boxWidth = useMemo(() => (window.width * 0.9 - 10) / 3, [window.width]);
  const dataList: DataListProps = isLoading
    ? setLoadingList(boxWidth)
    : data?.flatMap((page) => page.data);

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      onScrollBeginDrag={() => Keyboard.dismiss()}
      data={dataList}
      renderItem={({ item }) => {
        const source = item?.images?.preview_gif?.url;

        if (isLoading || !source) {
          return <Skeleton.Box m={2} w={boxWidth} h={boxWidth} />;
        }

        return (
          <GifPreview
            m={2}
            w={boxWidth}
            h={boxWidth}
            source={{ uri: source }}
            gif={item}
            rounded={20}
          />
        );
      }}
      numColumns={numColumns}
      onRefresh={onRefresh}
      refreshing={refreshing}
      onEndReached={onEndReached}
      progressViewOffset={progressViewOffset}
      onEndReachedThreshold={0.3}
    />
  );
};
