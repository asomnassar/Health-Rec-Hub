import NoData from "../NoData";
import PrimaryTable from "../PrimaryTable";
import MedicinesTableBody from "./MedicinesTableBody";
import TableHeader from "./TableHeader";

const MedicinesTable = ({
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
        <MedicinesTableBody data={data} view={view} />
      </PrimaryTable>
      {data && data.length === 0 && <NoData />}
    </>
  );
};

export default MedicinesTable;
