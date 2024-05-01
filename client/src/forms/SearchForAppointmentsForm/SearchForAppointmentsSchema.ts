import { z } from "zod";

export const searchForAppointmentsSchema = z.object({
  search: z.string(),
});
