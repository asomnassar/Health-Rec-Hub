import { Box, Button } from "@mui/material";
import { useContext } from "react";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { AppContext } from "../../context/AppContext";
import { FormTypes } from "../../types/forms.types";

const LoginForm = ({register,errors}:FormTypes) => {
  const {handleOpenForgotPasswordModal} = useContext(AppContext)
  
  return (
    <Box className={`grid justify-stretch items-center gap-6`}>
      <Input
        register={register}
        errors={errors}
        label="اسم المستخدم"
        name="username"
      />
      <Input
        register={register}
        errors={errors}
        label="كلمة السر"
        name="password"
        type="password"
      />
      <Box className={`grid justify-stretch items-center gap-2`}>
        <Box>
          <Button onClick={handleOpenForgotPasswordModal}>هل نيست كلمة المرور ؟</Button>
        </Box>
        <SubmitButton loading={false}>تسجيل دخول</SubmitButton>
      </Box>
    </Box>
  )
}

export default LoginForm