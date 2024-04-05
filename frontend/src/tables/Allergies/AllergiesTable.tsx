import NoData from "../NoData";
import PrimaryTable from "../PrimaryTable";
import AllergiesTableBody from "./AllergiesTableBody";
import TableHeader from "./TableHeader";

const AllergiesTable = ({
  data,
  view,
}: {
  data: string[] | null;
  view?: boolean;
}) => {
  return (
    <>
      <PrimaryTable>
        <TableHeader view={view} />
        <AllergiesTableBody data={data} view={view} />
      </PrimaryTable>
      {data && data.length === 0 && <NoData />}
    </>
  );
};

export default AllergiesTable;
