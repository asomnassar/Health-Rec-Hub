import { z } from "zod";

export const editMedicalRecordSchema = z.object({
  currentHealthIssues: z.string().min(1, "التشخيص مطلوب"),
  bloodPressure: z.string().min(1, "ضغط الدم مطلوب"),
  respiratoryRate: z.string().min(1, "معدل التنفس مطلوب"),
  weight: z.string().min(1, "الوزن مطلوب"),
  height: z.string().min(1, "الطول مطلوب"),
  bloodType: z.string().min(1, "زمرة الدم مطلوب"),
  bloodSugarLevel: z.string().min(1, "نسبة السكر بالدم مطلوب"),
  heartRate: z.string().min(1, "معدل نبضات القلب مطلوب"),
});

export const editSurgerySchema = z.object({
  surgery: z.string().min(1, "الجراحة مطلوب"),
});

export const editAllergerySchema = z.object({
  allergery: z.string().min(1, "الحساسية مطلوب"),
});

export const editMedicineSchema = z.object({
  medicine: z.string().min(1, "الدواء مطلوب"),
});

export const editDiseaseSchema = z.object({
  disease: z.string().min(1, "المرض مطلوب"),
});
