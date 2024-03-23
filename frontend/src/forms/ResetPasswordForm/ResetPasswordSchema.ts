import { z } from "zod";

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, "كلمة السر مطلوبة")
      .min(8, "كلمة السر لا تقل عن 8 احرف"),
    confirmPassword: z
      .string()
      .min(1, "اعادة كلمة السر مطلوبة")
      .min(8, "كلمة السر لا تقل عن 8 احرف"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "كلمة السر ليس متطابقة",
    path: ["confirmPassword"],
  });
