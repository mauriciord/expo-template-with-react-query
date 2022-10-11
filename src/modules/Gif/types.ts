export type User = {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  is_verified: boolean;
  website_url: string;
  instagram_url: string;
};

export type Images = {
  hd: {
    height: string | number;
    mp4: string | number;
    mp4_size: string | number;
    width: string | number;
  };
  fixed_width_still: {
    height: string | number;
    size: string | number;
    url: string | number;
    width: string | number;
  };
  fixed_height_downsampled: {
    height: string | number;
    size: string | number;
    url: string | number;
    webp: string | number;
    webp_size: string | number;
    width: string | number;
  };
  preview_gif: {
    height: string | number;
    size: string | number;
    url: string | number;
    width: string | number;
  };
  preview: {
    height: string | number;
    mp4: string | number;
    mp4_size: string | number;
    width: string | number;
  };
  fixed_height_small: {
    height: string | number;
    mp4: string | number;
    mp4_size: string | number;
    size: string | number;
    url: string | number;
    webp: string | number;
    webp_size: string | number;
    width: string | number;
  };
  downsized: {
    height: string | number;
    size: string | number;
    url: string | number;
    width: string | number;
  };
  fixed_width_downsampled: {
    height: string | number;
    size: string | number;
    url: string | number;
    webp: string | number;
    webp_size: string | number;
    width: string | number;
  };
  fixed_width: {
    height: string | number;
    mp4: string | number;
    mp4_size: string | number;
    size: string | number;
    url: string | number;
    webp: string | number;
    webp_size: string | number;
    width: string | number;
  };
  downsized_still: {
    height: string | number;
    size: string | number;
    url: string | number;
    width: string | number;
  };
  downsized_medium: {
    height: string | number;
    size: string | number;
    url: string | number;
    width: string | number;
  };
  original_mp4: {
    height: string | number;
    mp4: string | number;
    mp4_size: string | number;
    width: string | number;
  };
  downsized_large: {
    height: string | number;
    size: string | number;
    url: string | number;
    width: string | number;
  };
  preview_webp: {
    height: string | number;
    size: string | number;
    url: string | number;
    width: string | number;
  };
  original: {
    frames: string | number;
    hash: string | number;
    height: string | number;
    mp4: string | number;
    mp4_size: string | number;
    size: string | number;
    url: string | number;
    webp: string | number;
    webp_size: string | number;
    width: string | number;
  };
  original_still: {
    height: string | number;
    size: string | number;
    url: string | number;
    width: string | number;
  };
  fixed_height_small_still: {
    height: string | number;
    size: string | number;
    url: string | number;
    width: string | number;
  };
  fixed_width_small: {
    height: string | number;
    mp4: string | number;
    mp4_size: string | number;
    size: string | number;
    url: string | number;
    webp: string | number;
    webp_size: string | number;
    width: string | number;
  };
  looping: {
    mp4: string | number;
    mp4_size: string | number;
  };
  downsized_small: {
    height: string | number;
    mp4: string | number;
    mp4_size: string | number;
    width: string | number;
  };
  fixed_width_small_still: {
    height: string | number;
    size: string | number;
    url: string | number;
    width: string | number;
  };
  fixed_height_still: {
    height: string | number;
    size: string | number;
    url: string | number;
    width: string | number;
  };
  fixed_height: {
    height: string | number;
    mp4: string | number;
    mp4_size: string | number;
    size: string | number;
    url: string | number;
    webp: string | number;
    webp_size: string | number;
    width: string | number;
  };
  "480w_still": {
    url: string | number;
    width: string | number;
    height: string | number;
  };
};

export type GifProps = {
  type: string;
  id: string;
  slug: string;
  url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  rating: string;
  content_url: string;
  user: User;
  source_tld: string;
  source_post_url: string;
  is_sticker: number | string;
  import_datetime: string;
  trending_datetime: string;
  images: Images;
  title: string;
};

export type ApiSearchResponse = {
  data: GifProps[];
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
  meta: {
    status: number;
    msg: string;
    response_id: string | number;
  };
};

export type ApiRandomResponse = {
  data: GifProps;
  meta: {
    status: number;
    msg: string;
    response_id: string | number;
  };
};
