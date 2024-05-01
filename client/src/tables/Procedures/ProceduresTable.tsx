import { ProcedureTypes } from "../../types/store.types";
import NoData from "../NoData";
import PrimaryTable from "../PrimaryTable";
import LoadingProceduresTableBody from "./LoadingProceduresTableBody";
import ProceduresTableBody from "./ProceduresTableBody";
import TableHeader from "./TableHeader";

const ProceduresTable = ({
  data,
  isLoading,
}: {
  data: ProcedureTypes[] | null;
  isLoading: boolean;
}) => {
  return (
    <>
      <PrimaryTable>
        <TableHeader />
        {isLoading ? (
          <LoadingProceduresTableBody />
        ) : (
          <ProceduresTableBody data={data} />
        )}
      </PrimaryTable>
      {data && data.length === 0 && <NoData />}
    </>
  );
};

export default ProceduresTable;
