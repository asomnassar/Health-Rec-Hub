import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, "اسم المستخدم مطلوب"),
  password: z
    .string()
    .min(1, "كلمة السر مطلوبة")
    .min(8, "كلمة السر لا تقل عن 8 احرف"),
});
