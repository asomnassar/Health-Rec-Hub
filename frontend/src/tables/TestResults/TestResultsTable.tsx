import { TestResultsTypes } from "../../types/store.types";
import NoData from "../NoData";
import PrimaryTable from "../PrimaryTable";
import LoadingTestResultsTableBody from "./LoadingTestResultsTableBody";
import TableHeader from "./TableHeader";
import TestResultsTableBody from "./TestResultsTableBody";

const TestResultsTable = ({
  data,
  isLoading,
}: {
  data: TestResultsTypes[] | null;
  isLoading: boolean;
}) => {
  return (
    <>
      <PrimaryTable>
        <TableHeader />
        {isLoading ? (
          <LoadingTestResultsTableBody />
        ) : (
          <TestResultsTableBody data={data} />
        )}
      </PrimaryTable>
      {data && data.length === 0 && <NoData />}
    </>
  );
};

export default TestResultsTable;
