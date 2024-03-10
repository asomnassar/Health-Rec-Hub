import { z } from "zod";

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password has 8 Character at least"),
    confirmPassword: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password has 8 Character at least"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
