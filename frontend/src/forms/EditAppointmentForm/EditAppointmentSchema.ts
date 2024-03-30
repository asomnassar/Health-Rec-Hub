import { z } from "zod";

export const editAppointmentSchema = z.object({
  date: z.string().min(1, "تاريخ مطلوب"),
  time: z.string().min(1, "الوقت مطلوب"),
  notes: z.string(),
});
