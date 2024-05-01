import NoData from "../NoData";
import PrimaryTable from "../PrimaryTable";
import SurgeriesTableBody from "./DiseasesTableBody";
import TableHeader from "./TableHeader";

const DiseasesTable = ({
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
        <SurgeriesTableBody data={data} view={view} />
      </PrimaryTable>
      {data && data.length === 0 && <NoData />}
    </>
  );
};

export default DiseasesTable;
