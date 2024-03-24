import { PrescriptionsTypes } from "../../types/store.types";
import NoData from "../NoData";
import PrimaryTable from "../PrimaryTable";
import LoadingPrescriptionsTableBody from "./LoadingPrescriptionsTableBody";
import PrescriptionsTableBody from "./PrescriptionsTableBody";
import TableHeader from "./TableHeader";

const PrescriptionsTable = ({
  data,
  isLoading,
}: {
  data: PrescriptionsTypes[] | null;
  isLoading: boolean;
}) => {
  return (
    <>
      <PrimaryTable>
        <TableHeader />
        {isLoading ? (
          <LoadingPrescriptionsTableBody />
        ) : (
          <PrescriptionsTableBody data={data} />
        )}
      </PrimaryTable>
      {data && data.length === 0 && <NoData />}
    </>
  );
};

export default PrescriptionsTable;
