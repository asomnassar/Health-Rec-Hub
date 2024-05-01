import { z } from "zod";

export const addTestResultSchema = z.object({
  type: z.string().min(1, "اسم المستخدم مطلوب"),
});
