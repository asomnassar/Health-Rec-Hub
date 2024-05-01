import { z } from "zod";

export const searchForActivePatientsSchema = z.object({
  search: z.string(),
});
