import { z } from "zod";

export const editProcedureSchema = z.object({
  details: z.string().min(1, "تفاصيل الاجراء مطلوبة"),
});
