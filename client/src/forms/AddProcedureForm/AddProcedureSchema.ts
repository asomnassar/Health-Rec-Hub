import { z } from "zod";

export const addProcedureSchema = z.object({
  details: z.string().min(1, "تفاصيل الاجراء مطلوبة"),
});
