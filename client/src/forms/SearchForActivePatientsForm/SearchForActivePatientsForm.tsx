import { useDispatch } from "react-redux";
import Input from "../../components/Input/Input";
import { getActivePatients } from "../../store/activePatientsSlice";
import { AppDispatch } from "../../store/store";
import { FormTypes } from "../../types/forms.types";

const SearchForActivePatientsForm = ({ register, errors }: FormTypes) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleSearch = (val: string) => {
    dispatch(getActivePatients({ search: val }));
  };
  return (
    <Input
      register={register}
      errors={errors}
      label="ابحث عن مريض"
      name="search"
      type="search"
      handling={handleSearch}
    />
  );
};

export default SearchForActivePatientsForm;
