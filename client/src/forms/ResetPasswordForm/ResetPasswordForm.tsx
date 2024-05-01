import { Box } from "@mui/material"
import { useContext } from "react"
import Input from "../../components/Input/Input"
import SubmitButton from "../../components/SubmitButton/SubmitButton"
import { FormsContext } from "../../context/FormsContext"
import { FormTypes } from "../../types/forms.types"

const ResetPasswordForm = ({register,errors}:FormTypes) => {
  const {loading} = useContext(FormsContext)
  
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
    <SubmitButton loading={loading}>تغير كلمة السر</SubmitButton>
  </Box>
  )
}

export default ResetPasswordForm