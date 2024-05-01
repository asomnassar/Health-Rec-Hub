import { z } from "zod";

export const changePasswordSchema = z
  .object({
    oldPassword: z
      .string()
      .min(1, "كلمة السر القديمة مطلوبة")
      .min(8, "كلمة السر القديمة لا تقل عن 8 احرف"),
    newPassword: z
      .string()
      .min(1, "كلمة السر الجديدة مطلوبة")
      .min(8, "كلمة السر الجديدة لا تقل عن 8 احرف"),
    confirmPassword: z
      .string()
      .min(1, "اعادة كلمة السر مطلوبة")
      .min(8, "كلمة السر لا تقل عن 8 احرف"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "كلمة السر ليس متطابقة",
    path: ["confirmPassword"],
  });
