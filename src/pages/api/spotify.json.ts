import axios from "axios";
import type { SpotifyData } from "@/types/spotify";
import type { APIRoute } from "astro";
import { Buffer } from "buffer";
import querystring from "query-string";

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = import.meta.env;

const token = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  try {
    const response = await axios.post<{ access_token: string }>(
      TOKEN_ENDPOINT,
      querystring.stringify({
        grant_type: "refresh_token",
        refresh_token,
      }),
      {
        headers: {
          Authorization: `Basic ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.log(error);
  }
};

const getNowPlaying = async () => {
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

export const GET: APIRoute = async (context) => {
  try {
    const response = await getNowPlaying();
    if (response) {
      if (
        response.status === 204 ||
        response.status > 400 ||
        response.data.currently_playing_type !== "track"
      ) {
        return new Response(JSON.stringify({ isPlaying: false }), {
          status: 200,
          statusText: "OK!",
        });
      } else {
        const data = {
          isPlaying: response.data.is_playing,
          title: response.data.item.name,
          album: response.data.item.album.name,
          artist: response.data.item.album.artists
            .map((artist) => artist.name)
            .join(", "),
          albumImageUrl: response.data.item.album.images[0].url,
          songUrl: response.data.item.external_urls.spotify,
        };

        return new Response(JSON.stringify(data), {
          status: 200,
          statusText: "OK!",
        });
      }
    } else {
      return new Response(
        JSON.stringify({ message: "something went wrong!" }),
        {
          status: 500,
          statusText: "Internal Server Error!",
        }
      );
    }
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "something went wrong!", errorStack: error }),
      {
        status: 500,
        statusText: "Internal Server Error!",
      }
    );
  }
};
