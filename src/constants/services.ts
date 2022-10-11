/* eslint-disable prefer-destructuring */
export const GIPHY_API_URL = process.env.GIPHY_API_URL;
export const GIPHY_API_TOKEN = process.env.GIPHY_API_TOKEN;
export const FULL_GIPHY_SEARCH_URL = `${GIPHY_API_URL}/search?api_key=${GIPHY_API_TOKEN}`;
export const FULL_GIPHY_RANDOM_URL = `${GIPHY_API_URL}/random?api_key=${GIPHY_API_TOKEN}`;
