import type { APIRoute } from "astro";
import axios from "axios";

// safe this for get refresh token
// https://accounts.spotify.com/authorize?response_type=code&client_id=39c046ef03e6412eb7a441c5c3538bb8&scope=user-read-currently-playing&redirect_uri=http%3A%2F%2Flocalhost%3A4321

const { SPOTIFY_CLIENT_ID: client_id, SPOTIFY_CLIENT_SECRET: client_secret } =
  import.meta.env;

const code =
  "AQCDTuPgHASX8FA4UdF0bqfWUxrv-6C7y8CI2HwmfmEyo0db-TN5uTSCfSeUUeaRhAeN85_9Mq7pbrv5fFoZYsliOKKYKg97JXjQwPISJBTw_okg7-KHwMVNKLt566I1Bm9-gd16xJfqCAt_UaVLwFr79vo7GLgZNrDZ3Vp6nw3o-MG5oYudjPEDuZ8fJ-JFGnGPbhop";
const token = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

export const GET: APIRoute = async (_) => {
  try {
    const res = await axios.post(
      "https://accounts.spotify.com/api/token",
      {
        code: code,
        redirect_uri: "http://localhost:4321",
        grant_type: "authorization_code",
      },
      {
        headers: {
          Authorization: `Basic ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return new Response(
      JSON.stringify({
        data: res.data,
      })
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        errorStack: error,
      }),
      { status: 500, statusText: "Internal Server Error!" }
    );
  }
};
