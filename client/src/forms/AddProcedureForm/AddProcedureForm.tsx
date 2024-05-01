import { Box } from "@mui/material";
import { useContext } from "react";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { FormsContext } from "../../context/FormsContext";
import { FormTypes } from "../../types/forms.types";

const AddProcedureForm = ({ register, errors }: FormTypes) => {
  const { loading } = useContext(FormsContext);
  return (
    <Box className={`grid justify-stretch items-center gap-6`}>
      <Box className={`grid justify-stretch items-center gap-4`}>
        <Input
          register={register}
          errors={errors}
          label="تفاصيل الاجراء"
          name="details"
          rows={3}
          multiline={true}
        />
      </Box>
      <Box className={`grid justify-center items-center`}>
        <SubmitButton loading={loading}>اضف</SubmitButton>
      </Box>
    </Box>
  );
};

export default AddProcedureForm;
