import { Box } from "@mui/material"
import Input from "../../components/Input/Input"
import SubmitButton from "../../components/SubmitButton/SubmitButton"
import { FormTypes } from "../../types/forms.types"

const ForgotPasswordForm = ({register,errors}:FormTypes) => {
  return (
    <Box className={`grid justify-stretch items-center gap-6`}>
        <Input
          register={register}
          errors={errors}
          label="البريد الالكترونى"
          name="email"
          type="email"
        />
      <SubmitButton loading={false}>ارسل طلب</SubmitButton>
    </Box>
  )
}

export default ForgotPasswordForm