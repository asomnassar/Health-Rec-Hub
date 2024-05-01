import { Box } from "@mui/material";
import { useContext } from "react";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { FormsContext } from "../../context/FormsContext";
import { FormTypes } from "../../types/forms.types";

const EditAppointmentForm = ({ register, errors }: FormTypes) => {
  const { loading } = useContext(FormsContext);
  return (
    <Box className={`grid justify-stretch items-center gap-6`}>
      <Box className={`grid grid-cols-2 justify-center items-center gap-4`}>
        <Input
          register={register}
          errors={errors}
          label="الوقت"
          name="time"
          type={"time"}
        />
        <Input
          register={register}
          errors={errors}
          label="التاريخ"
          name="date"
          type={"date"}
        />
        <Input
          register={register}
          errors={errors}
          label="ملاحظة"
          name="notes"
        />
      </Box>
      <Box className={`grid justify-center items-center`}>
        <SubmitButton loading={loading}>تعديل</SubmitButton>
      </Box>
    </Box>
  );
};

export default EditAppointmentForm;
