import EmailTemplate from "@/components/emails/email-template";
import { resend } from "@/lib/instances";
import { render } from "@react-email/render";

export const sendEmail = async (
  name: string,
  email: string,
  message: string
) => {
  const finalHtml = render(
    EmailTemplate({
      name: name,
      email: email,
      message: message,
    }),
    {
      pretty: true,
    }
  );
  const finalText = render(
    EmailTemplate({
      name: name,
      email: email,
      message: message,
    }),
    {
      plainText: true,
    }
  );
  const result = await resend.emails.send({
    from: "Aaaroz Dev<onboarding@resend.dev>",
    to: "ram.ardiansyah18@gmail.com",
    subject: `New Message From ${name}`,
    html: finalHtml,
    text: finalText,
    reply_to: email,
  });

  return result;
};
