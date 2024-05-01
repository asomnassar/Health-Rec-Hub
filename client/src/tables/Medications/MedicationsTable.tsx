import { MedicationTypes } from "../../types/store.types";
import NoData from "../NoData";
import PrimaryTable from "../PrimaryTable";
import MedicationsTableBody from "./MedicationsTableBody";
import TableHeader from "./TableHeader";

const MedicationsTable = ({
  data,
  view,
}: {
  data: MedicationTypes[] | null;
  view?: boolean;
}) => {
  return (
    <>
      <PrimaryTable>
        <TableHeader view={view} />
        <MedicationsTableBody data={data} view={view} />
      </PrimaryTable>
      {data && data.length === 0 && <NoData />}
    </>
  );
};

export default MedicationsTable;
