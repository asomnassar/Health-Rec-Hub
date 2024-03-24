import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/PrimaryBox";
import { PrimaryContainer } from "../mui/PrimaryContiner";
import { getPendingPatients } from "../store/pendingPatientsSlice";
import { AppDispatch, RootState } from "../store/store";
import PatientsTable from "../tables/Patients/PatientsTable";

const PendingPatients = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pendingPatients, isLoading } = useSelector(
    (state: RootState) => state.pendingPatients
  );

  useEffect(() => {
    dispatch(getPendingPatients({ page: 1 }));
  }, [dispatch]);

  return (
    <PrimaryBox>
      <PrimaryContainer className="!grid justify-stretch items-center gap-4">
        <Forms type={"searchForPendingPatients"} />
        <PatientsTable data={pendingPatients} isLoading={isLoading} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default PendingPatients;
