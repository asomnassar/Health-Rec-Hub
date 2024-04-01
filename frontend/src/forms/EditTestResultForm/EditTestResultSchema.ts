import { z } from "zod";

export const editTestResultSchema = z.object({
  file: z.instanceof(File),
  type: z.string().min(1, "اسم المستخدم مطلوب"),
});
