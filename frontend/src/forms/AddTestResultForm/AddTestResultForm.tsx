import { Box } from "@mui/material";
import { useContext } from "react";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import UploadFile from "../../components/UploadFile/UploadFile";
import { FormsContext } from "../../context/FormsContext";
import { FormTypes } from "../../types/forms.types";

const AddTestResultForm = ({ register, errors }: FormTypes) => {
  const { loading } = useContext(FormsContext);

  return (
    <Box className={`grid justify-stretch items-center gap-6`}>
      <Box className={`grid grid-cols-2 justify-center items-end gap-4`}>
        <UploadFile />
        <Input
          register={register}
          errors={errors}
          label="نوع الاختبار"
          name="type"
        />
      </Box>
      <Box className={`grid justify-center items-center`}>
        <SubmitButton loading={loading}>اضف</SubmitButton>
      </Box>
    </Box>
  );
};

export default AddTestResultForm;
