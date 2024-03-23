import { Box } from "@mui/material";
import { useContext } from "react";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { FormsContext } from "../../context/FormsContext";
import { FormTypes } from "../../types/forms.types";

const ChangePasswordForm = ({register,errors}:FormTypes) => {
  const {loading} = useContext(FormsContext)
  return (
    <Box className={`grid justify-stretch items-center gap-6`}>
      <Box className={`grid justify-stretch items-center gap-4`}>
        <Input
          register={register}
          errors={errors}
          label="كلمة السر القديمة"
          name="oldPassword"
          type="password"
        />
        <Input
          register={register}
          errors={errors}
          label="كلمة السر الجديدة"
          name="newPassword"
          type="password"
        />
        <Input
          register={register}
          errors={errors}
          label="اعادة كلمة السر الجديدة"
          name="confirmPassword"
          type="password"
        />
      </Box>
      <SubmitButton loading={loading}>تغيير كلمة السر</SubmitButton>
    </Box>
  )
}

export default ChangePasswordForm