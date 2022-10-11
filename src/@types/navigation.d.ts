import type { GifProps } from "@modules/Gif/types";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Details: {
        gif: GifProps;
      };
    }
  }
}
