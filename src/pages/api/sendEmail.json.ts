import { sendEmail } from "@/services";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  const { name, email, message } = data;

  const res = await sendEmail(name, email, message);

  if (res.data) {
    return new Response(
      JSON.stringify({
        message: res.data,
      }),
      {
        status: 200,
        statusText: "OK",
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: res.error,
      }),
      {
        status: 500,
        statusText: "Internal Server Error",
      }
    );
  }
};
