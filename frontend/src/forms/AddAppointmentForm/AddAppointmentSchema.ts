import { z } from "zod";

export const addAppointmentSchema = z.object({
  date: z.string().min(1, "تاريخ مطلوب"),
  time: z.string().min(1, "الوقت مطلوب"),
  notes: z.string(),
});
