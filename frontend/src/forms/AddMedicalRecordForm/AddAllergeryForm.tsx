import { Box } from "@mui/material";
import { useContext } from "react";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { FormsContext } from "../../context/FormsContext";
import { FormTypes } from "../../types/forms.types";

const AddAllergeryForm = ({ register, errors }: FormTypes) => {
  const { loading } = useContext(FormsContext);
  return (
    <Box className={`grid justify-stretch items-center gap-6`}>
      <Box className={`grid grid-cols-1 justify-center items-center gap-4`}>
        <Input
          register={register}
          errors={errors}
          label="الحساسية"
          name="allergery"
        />
      </Box>
      <Box className={`grid justify-center items-center`}>
        <SubmitButton loading={loading}>اضف</SubmitButton>
      </Box>
    </Box>
  );
};

export default AddAllergeryForm;
