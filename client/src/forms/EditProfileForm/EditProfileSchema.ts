import { z } from "zod";

export const editProfileSchema = z.object({
  username: z.string().min(1, "اسم المستخدم مطلوب"),
  firstName: z.string().min(1, "الاسم الاول مطلوب"),
  lastName: z.string().min(1, "الاسم الاخير مطلوب"),
  email: z.string().min(1, "البريد الالكترونى مطلوب"),
  phone: z.string().min(1, "رقم الهاتف مطلوب"),
  gender: z.string().min(1, "الجنس مطلوب"),
  dateOfBirth: z.string().min(1, "تاريخ الميلاد مطلوب"),
  age: z.string().min(1, "العمر مطلوب"),
  address: z.string().min(1, "العنوان مطلوب"),
});
