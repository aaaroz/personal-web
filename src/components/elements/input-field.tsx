import type {
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

type InputFieldProps<TFormValue extends FieldValues> = {
  register: UseFormRegister<TFormValue>;
  name: Path<TFormValue>;
  error: FieldErrors;
  rule?: RegisterOptions;
  isTextArea?: boolean;
  placeholder?: string;
  rows?: number;
};

export default function InputField<TFormValue extends FieldValues>({
  name,
  rule,
  error,
  isTextArea = false,
  placeholder = "",
  rows = 2,
  register,
}: InputFieldProps<TFormValue>) {
  const renderPlaceholder =
    placeholder || name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div className=" w-full space-y-2">
      {isTextArea ? (
        <Textarea
          rows={rows}
          placeholder={renderPlaceholder}
          {...register(name, rule)}
        />
      ) : (
        <Input placeholder={renderPlaceholder} {...register(name, rule)} />
      )}
      {error[name]?.type === "required" && (
        <p role="alert" className="text-[10px] text-red-500">
          *{name} is required
        </p>
      )}
      {error[name]?.type === "pattern" && (
        <p role="alert" className="text-[10px] text-red-500">
          *{String(error[name]?.message)}
        </p>
      )}
    </div>
  );
}
