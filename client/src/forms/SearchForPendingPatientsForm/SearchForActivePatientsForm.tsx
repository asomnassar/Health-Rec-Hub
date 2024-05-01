import Input from "../../components/Input/Input"
import { FormTypes } from "../../types/forms.types"

const SearchForActivePatientsForm = ({register,errors}:FormTypes) => {
  return (
    <Input
      register={register}
      errors={errors}
      label="ابحث عن مريض"
      name="search"
      type="search"
    />
  )
}

export default SearchForActivePatientsForm