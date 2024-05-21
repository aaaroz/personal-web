import type { APIRoute } from "astro";
import { getNowPlaying } from "@/services";

export const GET: APIRoute = async (_) => {
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
