import { Box } from "@mui/material"
import { useContext } from "react"
import Input from "../../components/Input/Input"
import SubmitButton from "../../components/SubmitButton/SubmitButton"
import UploadImage from "../../components/UploadImage/UploadImage"
import { FormsContext } from "../../context/FormsContext"
import { FormTypes } from "../../types/forms.types"

const EditPatientForm = ({register,errors}:FormTypes) => {
  const {loading} = useContext(FormsContext)
  return (
    <Box className={`grid justify-stretch items-center gap-6`}>
      <UploadImage/>
      <Box className={`grid grid-cols-2 justify-center items-center gap-4`}>
        <Input
          register={register}
          errors={errors}
          label="اسم المستخدم"
          name="username"
        />
        <Input
          register={register}
          errors={errors}
          label="الاسم الاول"
          name="firstName"
        />
        <Input
          register={register}
          errors={errors}
          label="الاسم الاخير"
          name="lastName"
        />
        <Input
          register={register}
          errors={errors}
          label="البريد الالكترونى"
          name="email"
          type={"email"}
        />
        <Input
          register={register}
          errors={errors}
          label="رقم الهاتف"
          name="phone"
          type={"tel"}
        />
        <Input
          register={register}
          errors={errors}
          label="العنوان"
          name="address"
        />
        <Input
          register={register}
          errors={errors}
          label="الجنس"
          name="gender"
          select={true}
          data={["ذكر","انثى"]}
        />
        <Input
          register={register}
          errors={errors}
          label="تاريخ الميلاد"
          name="dateOfBirth"
          type={"date"}
        />
        <Input
          register={register}
          errors={errors}
          label="العمر"
          name="age"
        />
        <Input
          register={register}
          errors={errors}
          label="كلمة السر"
          name="password"
          type="password"
        />
      </Box>
      <Box className={`grid justify-center items-center`}>
        <SubmitButton loading={loading}>اضف</SubmitButton>
      </Box>
    </Box>
  )
}

export default EditPatientForm