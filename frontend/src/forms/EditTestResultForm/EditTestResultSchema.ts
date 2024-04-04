import { z } from "zod";

export const editTestResultSchema = z.object({
  type: z.string().min(1, "اسم المستخدم مطلوب"),
});
