import Input from "../../components/Input/Input";
import { FormTypes } from "../../types/forms.types";

const SearchForAppointmentsForm = ({ register, errors }: FormTypes) => {
  return (
    <Input
      register={register}
      errors={errors}
      label="ابحث عن موعد"
      name="search"
      type="search"
    />
  );
};

export default SearchForAppointmentsForm;
