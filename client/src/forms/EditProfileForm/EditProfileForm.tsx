import { Box } from "@mui/material";
import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import UploadImage from "../../components/UploadImage/UploadImage";
import { FormsContext } from "../../context/FormsContext";
import { RootState } from "../../store/store";
import { FormTypes } from "../../types/forms.types";

const EditProfileForm = ({ register, errors }: FormTypes) => {
  const { loading } = useContext(FormsContext);
  const { type } = useSelector((state: RootState) => state.auth);
  const { profile } = useSelector((state: RootState) => state.profile);
  const { setUploadImage } = useContext(FormsContext);

  useEffect(() => {
    if (profile) {
      setUploadImage(profile.avatar);
    }
  }, [profile, setUploadImage]);
  return (
    <Box className={`grid justify-stretch items-center gap-6`}>
      <UploadImage title={"الصورة"} />
      <Box
        className={`grid grid-cols-2 justify-center items-center gap-4 sm:grid-cols-1`}
      >
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
          data={["ذكر", "انثى"]}
        />
        <Input
          register={register}
          errors={errors}
          label="تاريخ الميلاد"
          name="dateOfBirth"
          type={"date"}
        />
        <Input register={register} errors={errors} label="العمر" name="age" />
        {type === "doctor" && (
          <Input
            register={register}
            errors={errors}
            label="التخصص"
            name="specialization"
          />
        )}
      </Box>
      <Box className={`grid justify-center items-center`}>
        <SubmitButton loading={loading}>تعديل</SubmitButton>
      </Box>
    </Box>
  );
};

export default EditProfileForm;
