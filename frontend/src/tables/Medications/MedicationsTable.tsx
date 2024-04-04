import { MedicationTypes } from "../../types/store.types";
import NoData from "../NoData";
import PrimaryTable from "../PrimaryTable";
import MedicationsTableBody from "./MedicationsTableBody";
import TableHeader from "./TableHeader";

const MedicationsTable = ({ data }: { data: MedicationTypes[] | null }) => {
  return (
    <>
      <PrimaryTable>
        <TableHeader />
        <MedicationsTableBody data={data} />
      </PrimaryTable>
      {data && data.length === 0 && <NoData />}
    </>
  );
};

export default MedicationsTable;
