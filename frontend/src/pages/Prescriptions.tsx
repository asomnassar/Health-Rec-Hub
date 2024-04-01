import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/PrimaryBox";
import { PrimaryContainer } from "../mui/PrimaryContiner";
import { getPrescriptions } from "../store/prescriptionsSlice";
import { AppDispatch, RootState } from "../store/store";
import PrescriptionsTable from "../tables/Prescriptions/PrescriptionsTable";

const Prescriptions = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { prescriptions, isLoading } = useSelector(
    (state: RootState) => state.prescriptions
  );

  useEffect(() => {
    dispatch(getPrescriptions({ page: 1 }));
  }, [dispatch]);
  return (
    <PrimaryBox>
      <PrimaryContainer className="!grid justify-stretch items-center gap-4">
        <Forms type={"searchForPrescriptions"} />
        <PrescriptionsTable data={prescriptions} isLoading={isLoading} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Prescriptions;
