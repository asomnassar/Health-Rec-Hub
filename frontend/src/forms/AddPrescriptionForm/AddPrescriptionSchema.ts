import { z } from "zod";

export const addPrescriptionSchema = z.object({
  dosage: z.array(z.string().min(1)),
});
