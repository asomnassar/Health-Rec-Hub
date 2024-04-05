import { Box } from "@mui/material";
import { useContext } from "react";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { FormsContext } from "../../context/FormsContext";
import { FormTypes } from "../../types/forms.types";

const EditMedicalRecordForm = ({ register, errors }: FormTypes) => {
  const { loading } = useContext(FormsContext);
  return (
    <Box className={`grid justify-stretch items-center gap-6`}>
      <Box className={`grid grid-cols-2 justify-center items-center gap-4`}>
        <Input
          register={register}
          errors={errors}
          label="التشخيص"
          name="currentHealthIssuses"
          type={"text"}
        />
        <Input
          register={register}
          errors={errors}
          label="ضغط الدم"
          name="bloodPressure"
        />
        <Input
          register={register}
          errors={errors}
          label="معدل التنفس"
          name="respiratoryRate"
        />
        <Input
          register={register}
          errors={errors}
          label="الطول"
          name="height"
        />
        <Input
          register={register}
          errors={errors}
          label="الوزن"
          name="weigth"
        />
        <Input
          register={register}
          errors={errors}
          label="زمرة الدم"
          name="bloodType"
          select={true}
          data={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]}
        />
        <Input
          register={register}
          errors={errors}
          label="نسبة السكر بالدم"
          name="bloodSugarLevel"
        />
        <Input
          register={register}
          errors={errors}
          label="معدل نبضات القلب"
          name="heartRate"
        />
      </Box>
      <Box className={`grid justify-center items-center`}>
        <SubmitButton loading={loading}>تعديل</SubmitButton>
      </Box>
    </Box>
  );
};

export default EditMedicalRecordForm;
