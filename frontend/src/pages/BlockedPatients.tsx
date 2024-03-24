import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/PrimaryBox";
import { PrimaryContainer } from "../mui/PrimaryContiner";
import { getBlockedPatients } from "../store/blockedPatientsSlice";
import { AppDispatch, RootState } from "../store/store";
import PatientsTable from "../tables/Patients/PatientsTable";

const BlockedPatients = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { blockedPatients, isLoading } = useSelector(
    (state: RootState) => state.blockedPatients
  );

  useEffect(() => {
    dispatch(getBlockedPatients({ page: 1 }));
  }, [dispatch]);

  return (
    <PrimaryBox>
      <PrimaryContainer className="!grid justify-stretch items-center gap-4">
        <Forms type={"searchForBlockedPatients"} />
        <PatientsTable data={blockedPatients} isLoading={isLoading} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default BlockedPatients;
