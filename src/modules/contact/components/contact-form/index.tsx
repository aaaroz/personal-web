import * as React from "react";
import { useForm } from "react-hook-form";
import InputField from "@/components/elements/input-field";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/elements/section-heading";

interface IFormEmail {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = (): React.ReactElement => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormEmail>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [buttonText, setButtonText] = React.useState("Send Email");
  const [isSuccess, setIsSuccess] = React.useState(false);
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  async function handleFormSubmit(payload: IFormEmail) {
    setIsLoading(true);
    try {
      //   const response = await axios.post("/api/email", payload);
      //   if (response.status === 200) setIsSuccess(true);
      console.log(payload);
      reset();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    setButtonText(isLoading ? "Sending your message..." : "Send Email");
    if (!isLoading && isSuccess) setButtonText("Your email sent successfully");
    const timeout = setTimeout(() => {
      setButtonText("Send Email");
    }, 5000);
    return () => clearTimeout(timeout);
  }, [isLoading, isSuccess]);

  return (
    <div className="flex flex-col space-y-6">
      <SectionHeading title="Or send me a message" />
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col space-y-6 px-1 transition-all duration-300"
      >
        <div className="flex w-full flex-col space-y-6 md:flex-row md:space-x-2 md:space-y-0">
          <InputField
            name="name"
            rule={{ required: true }}
            register={register}
            error={errors}
          />
          <InputField
            name="email"
            rule={{
              required: true,
              pattern: {
                value: regexEmail,
                message: "please enter a valid email",
              },
            }}
            register={register}
            error={errors}
          />
        </div>
        <InputField
          name="message"
          rule={{ required: true }}
          register={register}
          error={errors}
          isTextArea
        />
        <Button disabled={isLoading} type="submit">
          {buttonText}
        </Button>
      </form>
    </div>
  );
};
