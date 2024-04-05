import NoData from "../NoData";
import PrimaryTable from "../PrimaryTable";
import SurgeriesTableBody from "./SurgeriesTableBody";
import TableHeader from "./TableHeader";

const SurgeriesTable = ({
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

export default SurgeriesTable;
