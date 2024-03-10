import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { forgotPasswordSchema } from "../forms/ForgotPasswordForm/ForgotPasswordSchema";
import { loginSchema } from "../forms/LoginForm/LoginSchema";
import { resetPasswordSchema } from "../forms/ResetPasswordForm/ResetPasswordSchema";

const useForms = (type: string) => {
  const schema = useMemo(() => {
    switch (type) {
      case "login":
        return loginSchema;
      case "resetPassword":
        return resetPasswordSchema;
      default:
        return forgotPasswordSchema;
    }
  }, [type]);

  type FormData = z.infer<typeof schema>;
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return { handleSubmit, onSubmit, register, errors };
};

export default useForms;
