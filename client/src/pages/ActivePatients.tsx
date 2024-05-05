import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/PrimaryBox";
import { PrimaryContainer } from "../mui/PrimaryContiner";
import { getActivePatients } from "../store/activePatientsSlice";
import { AppDispatch, RootState } from "../store/store";
import PatientsTable from "../tables/Patients/PatientsTable";

const ActivePatients = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { activePatients, isLoading } = useSelector(
    (state: RootState) => state.activePatients
  );

  useEffect(() => {
    dispatch(getActivePatients({ page: 1 }));
  }, [dispatch]);

  return (
    <PrimaryBox>
      <PrimaryContainer className="!grid justify-stretch items-center gap-4">
        <Forms type={"searchForActivePatients"} />
        <PatientsTable data={activePatients} isLoading={isLoading} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default ActivePatients;
