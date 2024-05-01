import { Box } from "@mui/material"
import { useContext } from "react"
import Input from "../../components/Input/Input"
import SubmitButton from "../../components/SubmitButton/SubmitButton"
import { FormsContext } from "../../context/FormsContext"
import { FormTypes } from "../../types/forms.types"

const ForgotPasswordForm = ({register,errors}:FormTypes) => {
  const {loading} = useContext(FormsContext)
  return (
    <Box className={`grid justify-stretch items-center gap-6`}>
        <Input
          register={register}
          errors={errors}
          label="البريد الالكترونى"
          name="email"
          type="email"
        />
      <SubmitButton loading={loading}>ارسل طلب</SubmitButton>
    </Box>
  )
}

export default ForgotPasswordForm