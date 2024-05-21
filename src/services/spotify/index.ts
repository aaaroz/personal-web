import type { SpotifyData } from "@/types/spotify";
import axios from "axios";
import { getAccessToken } from "./get-access-token";

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

export const getNowPlaying = async () => {
  try {
    const access_token = await getAccessToken();
    return axios.get<SpotifyData>(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
