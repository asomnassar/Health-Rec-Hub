import { PatientTypes } from "../../types/store.types";
import NoData from "../NoData";
import PrimaryTable from "../PrimaryTable";
import LoadingPatientsTableBody from "./LoadingPatientsTableBody";
import PatientsTableBody from "./PatientsTableBody";
import TableHeader from "./TableHeader";

const PatientsTable = ({
  data,
  isLoading,
}: {
  data: PatientTypes[] | null;
  isLoading: boolean;
}) => {
  return (
    <>
      <PrimaryTable>
        <TableHeader />
        {isLoading ? (
          <LoadingPatientsTableBody />
        ) : (
          <PatientsTableBody data={data} />
        )}
      </PrimaryTable>
      {data && data.length === 0 && <NoData />}
    </>
  );
};

export default PatientsTable;
