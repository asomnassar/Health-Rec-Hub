import { z } from "zod";

export const editPrescriptionSchema = z.object({
  dosage: z.array(z.string().min(1)),
});
