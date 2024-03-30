import { TableContainer } from "@mui/material";
import { AppointmentTypes } from "../../types/store.types";
import NoData from "../NoData";
import PrimaryTable from "../PrimaryTable";
import AppointmentsTableBody from "./AppointmentsTableBody";
import LoadingPatientsTableBody from "./LoadingPatientsTableBody";
import TableHeader from "./TableHeader";

const AppointmentsTable = ({
  data,
  isLoading,
}: {
  data: AppointmentTypes[] | null;
  isLoading: boolean;
}) => {
  return (
    <TableContainer className={`grid justify-stretch items-center gap-2`}>
      <PrimaryTable>
        <TableHeader />
        {isLoading ? (
          <LoadingPatientsTableBody />
        ) : (
          <AppointmentsTableBody data={data} />
        )}
      </PrimaryTable>
      {data && data.length === 0 && <NoData />}
    </TableContainer>
  );
};

export default AppointmentsTable;
