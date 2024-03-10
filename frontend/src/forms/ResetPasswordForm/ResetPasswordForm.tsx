import { Box } from "@mui/material"
import Input from "../../components/Input/Input"
import SubmitButton from "../../components/SubmitButton/SubmitButton"
import { FormTypes } from "../../types/forms.types"

const ResetPasswordForm = ({register,errors}:FormTypes) => {
  return (
    <Box className={`grid justify-stretch items-center gap-6`}>
      <Input
        register={register}
        errors={errors}
        label="كلمة السر"
        name="password"
        type="password"
      />
      <Input
        register={register}
        errors={errors}
        label="اعادة كلمة السر"
        name="confirmPassword"
        type="password"
      />
    <SubmitButton loading={false}>تغير كلمة السر</SubmitButton>
  </Box>
  )
}

export default ResetPasswordForm