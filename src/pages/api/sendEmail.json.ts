import { render } from "@react-email/render";
import { Resend } from "resend";
import type { APIRoute } from "astro";
import EmailTemplate from "@/components/emails/email-template";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ params, request }) => {
  const data = await request.json();
  const finalHtml = render(
    EmailTemplate({
      name: data.name,
      email: data.email,
      message: data.message,
    }),
    {
      pretty: true,
    }
  );
  const finalText = render(
    EmailTemplate({
      name: data.name,
      email: data.email,
      message: data.message,
    }),
    {
      plainText: true,
    }
  );

  const res = await resend.emails.send({
    from: "Aaaroz Dev<onboarding@resend.dev>",
    to: "ram.ardiansyah18@gmail.com",
    subject: `New Message From ${data.name}`,
    html: finalHtml,
    text: finalText,
    reply_to: data.email,
  });

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
