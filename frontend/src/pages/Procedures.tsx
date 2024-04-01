import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/PrimaryBox";
import { PrimaryContainer } from "../mui/PrimaryContiner";
import { getProcedures } from "../store/proceduresSlice";
import { AppDispatch, RootState } from "../store/store";
import ProceduresTable from "../tables/Procedures/ProceduresTable";

const Procedures = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { procedures, isLoading } = useSelector(
    (state: RootState) => state.procedures
  );

  useEffect(() => {
    dispatch(getProcedures({ page: 1 }));
  }, [dispatch]);
  return (
    <PrimaryBox>
      <PrimaryContainer className="!grid justify-stretch items-center gap-4">
        <Forms type={"searchForPrescriptions"} />
        <ProceduresTable data={procedures} isLoading={isLoading} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Procedures;
